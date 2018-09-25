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
 * A Quaternion value holder, named after an infamous Star Trek TNG character
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

export class Q
{
  protected _w: number;
  protected _i: number;
  protected _j: number;
  protected _k: number;

  /**
   * Construct a new Q
   *
   * @param {number} wValue Real part of the quaternion
   * @default 1
   *
   * @param {number} iValue i-component of the quaternion
   * @default 0
   *
   * @param {number} jValue j-component of the quaternion
   * @default 0
   *
   * @param {number} kValue k-component of the quaternion
   * @default 0
   *
   * @param {string} _id (optional) id associated with these values
   */
  constructor (wValue: number = 1, iValue: number = 0, jValue: number = 0, kValue: number = 0)
  {
    this.w = wValue;
    this.i = iValue;
    this.j = jValue;
    this.k = kValue;
  }

  /**
   * Access the real part of the quaternion
   *
   * @returns {number}
   */
  public get w(): number
  {
    return this._w;
  }

  /**
   * Access the i-component of the quaternion
   *
   * @returns {number}
   */
  public get i(): number
  {
    return this._i;
  }

  /**
   * Access the j-component of the quaternion
   *
   * @returns {number}
   */
  public get j(): number
  {
    return this._j;
  }

  /**
   * Access the k-component of the quaternion
   *
   * @returns {number}
   */
  public get k(): number
  {
    return this._k;
  }

  /**
   * Assign the real component of the quaternion
   *
   * @param {number} value
   *
   * @returns {nothing}
   */
  public set w(value: number)
  {
    if (!isNaN(value) && isFinite(value)) {
      this._w = value;
    }
  }

  /**
   * Assign the i-value of the quaternion
   *
   * @param {number} value
   *
   * @returns {nothing}
   */
  public set i(value: number)
  {
    if (!isNaN(value) && isFinite(value)) {
      this._i = value;
    }
  }

  /**
   * Assign the j-value of the quaternion
   *
   * @param {number} value
   *
   * @returns {nothing}
   */
  public set j(value: number)
  {
    if (!isNaN(value) && isFinite(value)) {
      this._j = value;
    }
  }

  /**
   * Assign the k-value of the quaternion
   *
   * @param {number} value
   *
   * @returns {nothing}
   */
  public set k(value: number)
  {
    if (!isNaN(value) && isFinite(value)) {
      this._k = value;
    }
  }

  /**
   * Clone this quaternion
   *
   * @returns {Q} Copy of current quaternion values holder
   */
  public clone(): Q
  {
    return new Q(this._w, this._i, this._j, this._k);
  }
}
