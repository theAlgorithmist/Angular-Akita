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
 * Akita quaternion service to interface with the calculator store
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { Injectable      } from '@angular/core';
import { CalculatorStore } from '../state/calculator.store';

import { Calculator
       , OpEnum
       } from '../state/quaternion.model';

import { Q } from '../libs/Q';

import { QCalculatorOperations } from '../libs/QCalculatorOperations';

@Injectable()
export class CalculatorService
{
  constructor(protected _calculatorStore: CalculatorStore)
  {
    // empty
  }

  /**
   * Place a quaternion into calculator memory
   *
   * @param {Q} memory
   *
   * @returns {nothing}
   */
  public toMemory(memory: Q): void
  {
    this._calculatorStore.setState( state => {
      return {
        ...state,
        memory: memory
      }
    });
  }

  /**
   * Update the calculator by replacing one of the two input quaternions with the current one in memory
   *
   * @param {string} id {'Q_1} to replace first quaternion from memory and {'Q_2'} for the second
   *
   * @returns {nothing}
   */
  public fromMemory(id: string): void
  {
    this._calculatorStore.setState( state => {
      const q1: Q     = id == "Q_1" ? state.memory : state.q1;
      const q2: Q     = id == "Q_2" ? state.memory : state.q2;
      const result: Q = this.__calc(q1, q2, state.op);

      return {
        ...state,
        q1: q1,
        q2: q2,
        result: result
      }
    });
  }

  /**
   * Clear the quaternion calculator
   *
   * @returns {nothing} Both quaternions are result are a zero-quaternion; memory is nulled out and there is no active operation
   */
  public clear(): void
  {
    this._calculatorStore.update( {q1: new Q(0,0,0,0), q2: new Q(0,0,0,0), result: new Q(0,0,0,0), memory: null, op: OpEnum.NONE} );
  }

  /**
   * Set the Calculator to a new state
   *
   * @param {Q} q1 First input quaternion
   *
   * @param {Q} q2 Second input quaternion
   *
   * @param {string} op Operation
   *
   * @returns {nothing} Performs the quaternion math and updates the store
   */
  public setCalculator( {q1, q2, op = OpEnum.NONE}: Partial<Calculator>): void
  {
    // update the entire calculator
    let result = this.__calc(q1, q2, op);

    this._calculatorStore.update( {q1: q1, q2: q2, result: result, op: op} );
  }

  /**
   * Calculate a new result
   *
   * @param {Q} q1 First input quaternion
   *
   * @param {Q} q2 Second input quaternion
   *
   * @param {string} op Operation
   *
   * @returns {Q} Q = q1 op q2
   * @private
   */
  protected __calc(q1: Q, q2: Q, op: string): Q
  {
    let result: Q = null;

    if (op != OpEnum.NONE)
    {
      switch (op)
      {
        case OpEnum.ADD:
          result = QCalculatorOperations.add(q1, q2);
          break;

        case OpEnum.SUB:
          result = QCalculatorOperations.subtract(q1, q2);
          break;

        case OpEnum.MUL:
          result = QCalculatorOperations.multiply(q1, q2);
          break;

        case OpEnum.DIV:
          result = QCalculatorOperations.divide(q1, q2);
          break;
      }
    }

    return result;
  }
}
