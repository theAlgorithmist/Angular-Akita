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
 * This serves as a simple interface between 4-tuples representing raw Quaternion values and the Typescript Math
 * Toolkit class that performs operations on those Quaternions.
 *
 * A unit Quaternion is defined on initialization.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

import {TSMT$Quaternion} from "./Quaternion";
import { Q             } from "./Q";

export class QCalculatorOperations
{
  protected static Q1: TSMT$Quaternion = new TSMT$Quaternion();
  protected static Q2: TSMT$Quaternion = new TSMT$Quaternion();

  constructor()
  {
    // empty
  }

  /**
   * Add two quaternions
   *
   * @param {Q} q1 4-tuple representing first input quaternion
   *
   * @param {Q} q2 4=tuple representing second input quaternion
   *
   * @returns {Q} q1 + q2
   */
  public static add(q1: Q, q2: Q): Q
  {
    QCalculatorOperations.Q1.fromArray(q1.w, q1.i, q1.j, q1.k);
    QCalculatorOperations.Q2.fromArray(q2.w, q2.i, q2.j, q2.k);

    QCalculatorOperations.Q1.add(QCalculatorOperations.Q2);

    const values: Array<number> = QCalculatorOperations.Q1.toArray();

    return new Q(values[0], values[1], values[2], values[3]);
  }

  /**
   * Subtract two quaternions
   *
   * @param {Q} q1 4-tuple representing first input quaternion
   *
   * @param {Q} q2 4=tuple representing second input quaternion
   *
   * @returns {Q} q1 - q2
   */
  public static subtract(q1: Q, q2: Q): Q
  {
    QCalculatorOperations.Q1.fromArray(q1.w, q1.i, q1.j, q1.k);
    QCalculatorOperations.Q2.fromArray(q2.w, q2.i, q2.j, q2.k);

    QCalculatorOperations.Q1.subtract(QCalculatorOperations.Q2);

    const values: Array<number> = QCalculatorOperations.Q1.toArray();

    return new Q(values[0], values[1], values[2], values[3]);
  }

  /**
   * Mutiply two quaternions
   *
   * @param {Q} q1 4-tuple representing first input quaternion
   *
   * @param {Q} q2 4=tuple representing second input quaternion
   *
   * @returns {Q} q1 * q2
   */
  public static multiply(q1: Q, q2: Q): Q
  {
    QCalculatorOperations.Q1.fromArray(q1.w, q1.i, q1.j, q1.k);
    QCalculatorOperations.Q2.fromArray(q2.w, q2.i, q2.j, q2.k);

    QCalculatorOperations.Q1.multiply(QCalculatorOperations.Q2);

    const values: Array<number> = QCalculatorOperations.Q1.toArray();

    return new Q(values[0], values[1], values[2], values[3]);
  }

  /**
   * Divide two quaternions
   *
   * @param {Q} q1 4-tuple representing first input quaternion
   *
   * @param {Q} q2 4=tuple representing second input quaternion
   *
   * @returns {Q} q1 / q2
   */
  public static divide(q1: Q, q2: Q): Q
  {
    QCalculatorOperations.Q1.fromArray(q1.w, q1.i, q1.j, q1.k);
    QCalculatorOperations.Q2.fromArray(q2.w, q2.i, q2.j, q2.k);

    QCalculatorOperations.Q1.divide(QCalculatorOperations.Q2);

    const values: Array<number> = QCalculatorOperations.Q1.toArray();

    return new Q(values[0], values[1], values[2], values[3]);
  }
}
