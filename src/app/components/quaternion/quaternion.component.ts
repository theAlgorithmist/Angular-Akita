/**
 * Copyright 2016 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A single quaternion that may be used interactively or for display only
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { Component
       , OnInit
       , OnDestroy
       , Input
} from '@angular/core';


import { Subscription } from "rxjs/Subscription";

import { NumberValidator } from '../../libs/NumberValidator';

import { Q } from '../../libs/Q';

import { CalculatorQuery } from '../../services/calculator.query';

@Component({
  selector: 'app-quaternion',

  templateUrl: './quaternion.component.html',

  styleUrls: ['./quaternion.component.scss']
})
export class QuaternionComponent implements OnInit, OnDestroy
{
  /**
   * ID for this quaternion component
   *
   * @type {number} 1 for first calculator component, 2 for second
   */
  @Input()
  public id: number = 0;

  protected _onStoreChanged$: Subscription;

  // quaternion values
  public w: number = 0;             // real component
  public i: number = 0;             // i-component
  public j: number = 0;             // j-component
  public k: number = 0;             // k-component

  /**
   * Construct a {QuaternionComponent}
   *
   * @param {CalculatorQuery} _calcQuery Reference to Akita {Calculator} query
   */
  constructor(protected _calcQuery: CalculatorQuery)
  {
    // empty
  }

  /**
   * Angular lifecycle handler - on init
   *
   * @returns {nothing}
   */
  public ngOnInit(): void
  {
    // id should be set here (note there is no check for proper values - add one as an exercise)
    this._onStoreChanged$ = this.id == 1 ?
      this._calcQuery.getQ1().subscribe( (q: Q) => { [this.w, this.i, this.j, this.k] = [q.w, q.i, q.j, q.k] } ) :
      this._calcQuery.getQ2().subscribe( (q: Q) => { [this.w, this.i, this.j, this.k] = [q.w, q.i, q.j, q.k] } );
  }

  /**
   * Angular lifecycle handler - on destroy
   *
   * @returns {nothing}
   */
  public ngOnDestroy(): void
  {
    if (this._onStoreChanged$) {
      this._onStoreChanged$.unsubscribe();
    }
  }

  /** @internal */
  public __checkNumber(evt: any): boolean
  {
    return NumberValidator.validate(evt);
  }
}
