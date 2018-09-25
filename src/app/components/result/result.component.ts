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
 * Display the result quaternion
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { Component
       , OnInit
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Q } from '../../libs/Q';

import { CalculatorQuery } from '../../services/calculator.query';

@Component({
  selector: 'app-result',

  templateUrl: './result.component.html',

  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit
{
  // quaternion values
  protected _w: number;   // real component
  protected _i: number;   // i-component
  protected _j: number;   // j-component
  protected _k: number;   // k-component

  protected _onStoreChanged$: Subscription;

  /**
   * Construct a {ResultComponent}
   *
   * @param {CalculatorQuery} _calcQuery Reference to Akita {Calculator} query
   */
  constructor(protected _calcQuery: CalculatorQuery)
  {
    // result values are computed and obtained only from the store, so there are no mutators in this demo, only accessors
    this._onStoreChanged$ = this._calcQuery.getResult().subscribe( (q: Q) => {
      if (q != null) {
        [this._w, this._i, this._j, this._k] = [q.w, q.i, q.j, q.k]
      }
    });
  }

  /**
   * Angular lifecycle method - on init
   *
   * @returns {nothing}
   */
  public ngOnInit(): void
  {
    // reserved for future use
  }

  /**
   * Access the real component of the result quaternion
   *
   * @returns {number}
   */
  public get w(): number
  {
    return this._w;
  }

  /**
   * Access the i-component of the result quaternion
   *
   * @returns {number}
   */
  public get i(): number
  {
    return this._i;
  }

  /**
   * Access the j-component of the current quaternion
   *
   * @returns {number}
   */
  public get j(): number
  {
    return this._j;
  }

  /**
   * Access the k-component of the current quaternion
   *
   * @returns {number}
   */
  public get k(): number
  {
    return this._k;
  }
}
