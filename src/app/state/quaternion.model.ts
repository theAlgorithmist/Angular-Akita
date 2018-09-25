/**
 * Copyright 2018 Jim Armstrong (www.algorithmist.net)
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
 * Akita quaternion model
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

import { ID } from '@datorama/akita';
import { Q​  } from '../libs/Q';

/**
 * Calculator operations
 */
export enum OpEnum
{
  NONE = 'none',
  ADD  = 'add',
  SUB  = 'subtract',
  MUL  = 'multiply',
  DIV  = 'divide'
}

/**
 * Calculator type for the store
 */
export type Calculator =
{
  id: ID,
  q1: Q;
  q2: Q;
  result: Q;
  memory: Q | null;
  op: string
}

/**
 * Create a new {Calculator} with default state
 *
 * @param {id = null} Partial<Calculator> Calculator id
 *
 * @returns {Calculator}
 */
export function createCalculator( {id = null}: Partial<Calculator> ): Calculator
{
  // initial state of the calculator is two unit quaternions, no operation, and no result
  return {
    id:     id,
    q1:     new Q(1, 0, 0, 0),
    q2:     new Q(1, 0, 0, 0),
    result: new Q(0, 0, 0, 0),
    memory: null,
    op:     OpEnum.NONE
  }
};

