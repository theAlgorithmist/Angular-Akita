/**
 * Copyright 2017 Jim Armstrong (www.algorithmist.net)
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
 * Akita quaternion calculator query
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

import { Injectable } from '@angular/core';

import { Query } from '@datorama/akita';

import { Q               } from '../libs/Q';
import { Calculator      } from '../state/quaternion.model';
import { CalculatorStore } from '../state/calculator.store';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CalculatorQuery extends Query<Calculator>
{
  /**
   * Construct a new {CalculatorQuery}
   *
   * @param {CalculatorStore} _calculatorStore Reference to the Akita {Calculator} store
   *
   * @returns {nothing}
   */
  constructor(protected _calculatorStore: CalculatorStore)
  {
    super(_calculatorStore);
  }

  /**
   * Access the first input quaternion values
   *
   * @returns {Observable<Q>}
   */
  public getQ1(): Observable<Q>
  {
    return this.select( (calculator: Calculator) => calculator.q1 );
  }

  /**
   * Access the second input quaternion values
   *
   * @returns {Observable<Q>}
   */
  public getQ2(): Observable<Q>
  {
    return this.select( (calculator: Calculator) => calculator.q2 );
  }

  /**
   * Access the current result value
   *
   * @returns {Observable<Q>}
   */
  public getResult(): Observable<Q>
  {
    return this.select( (calculator: Calculator) => calculator.result );
  }
}
