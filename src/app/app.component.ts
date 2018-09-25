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
 * Root calculator component with Akita for state management
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { Component
       , OnInit
       , ViewChild
} from '@angular/core';

import { environment         } from '../environments/environment';
import { enableAkitaProdMode } from '@datorama/akita';

import { CalcDataService } from './services/CalcDataService';

import { CalculatorService } from './services/calculator.service';

import { Q } from "./libs/Q";

import { OpEnum } from './state/quaternion.model';

import { QuaternionComponent } from './components/quaternion/quaternion.component';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  @ViewChild('q1')
  protected _q1: QuaternionComponent;      // first input (display) quaternion

  @ViewChild('q2')
  protected _q2: QuaternionComponent;      // second input (display) quaternion

  protected _op: string = OpEnum.NONE;     // current operation

  protected _save: boolean = false;        // true if save is requested (for experimentation)

  /**
   * Construct a new {AppComponent}
   *
   * @param {CalcDataService} _service Reference to {CalcDataService} for loading initial calculator state
   *
   * @param {CalculatorService} _calcService Reference to Akita {CalculatorService}, which is a bridge to the {Calculator} store
   */
  constructor( protected _service: CalcDataService,
               protected _calcService: CalculatorService )
  {
    if (environment.production) {
      enableAkitaProdMode();
    }
  }

  /**
   * Access the current operation
   *
   * @returns {string} Indication of add/subtract/multiply/divide
   */
  public get operation(): string
  {
    return this._op;
  }

  /**
   * Angular lifecycle method - on init
   *
   * @returns {nothing}
   */
  public ngOnInit(): void
  {
    // simulate the process of loading previous calculator state from a server
    this._service.getData('./assets/model.json').subscribe( (data: Object) => this.__onModelLoaded(data) );
  }

  /**
   * User clicks on 'add' operation in the calculator
   *
   * @returns {nothing}
   */
  public onAdd(): void
  {
    this._op = OpEnum.ADD;

    this._calcService.setCalculator( {q1: new Q(this._q1.w, this._q1.i, this._q1.j, this._q1.k),
                                      q2: new Q(this._q2.w, this._q2.i, this._q2.j, this._q2.k),
                                      op: this._op} );
  }

  /**
   * User clicks on 'subtract' operation in the calculator
   *
   * @returns {nothing}
   */
  public onSubtract(): void
  {
    this._op = OpEnum.SUB;

    this._calcService.setCalculator( {q1: new Q(this._q1.w, this._q1.i, this._q1.j, this._q1.k),
                                      q2: new Q(this._q2.w, this._q2.i, this._q2.j, this._q2.k),
                                      op: this._op}  );
  }

  /**
   * User clicks on 'multiply' operation in the calculator
   *
   * @returns {nothing}
   */
  public onMultiply(): void
  {
    this._op = OpEnum.MUL;

    this._calcService.setCalculator( {q1: new Q(this._q1.w, this._q1.i, this._q1.j, this._q1.k),
                                      q2: new Q(this._q2.w, this._q2.i, this._q2.j, this._q2.k),
                                      op: this._op}  );
  }

  /**
   * User clicks on 'divide' operation in the calculator
   *
   * @returns {nothing}
   */
  public onDivide(): void
  {
    this._op = OpEnum.DIV;

    this._calcService.setCalculator( {q1: new Q(this._q1.w, this._q1.i, this._q1.j, this._q1.k),
                                      q2: new Q(this._q2.w, this._q2.i, this._q2.j, this._q2.k),
                                      op: this._op} );
  }

  /**
   * User clicks on 'clear' button in calculator
   *
   * @returns {nothing}
   */
  public onClear(): void
  {
    this._calcService.clear();
  }

  /**
   * User clicks on 'save' button in the calculator
   *
   * @returns {nothing}
   */
  public onSave(): void
  {
    this._save = true;

    // you could store the entire calculator state in local storage or send the current state to a server
  }

  /**
   * User clicks on one of the 'to memory' buttons to place either Q1 or Q2 into memory
   *
   * @param {string} id Id of the quaternion to be placed into memory
   *
   * @returns {nothing}
   */
  public onToMemory(id: string): void
  {
    // grab the appropriate quaternion from local cache
    const q: Q = id == "Q_1" ? new Q(this._q1.w, this._q1.i, this._q1.j, this._q1.k) :
                               new Q(this._q2.w, this._q2.i, this._q2.j, this._q2.k);

    this._calcService.toMemory(q);
  }

  /**
   * User clicks on one of the 'from memory' buttons to return a quaternion from memory
   *
   * @param {string} id Id of the quaternion to fill from memory
   *
   * @returns {nothing}
   */
  public onFromMemory(id: string): void
  {
    this._calcService.fromMemory(id);
  }

  /**
   * User clicks on the 'equal' button to perform a calculator operation on the two current inputs
   *
   * @returns {nothing}
   */
  public onEqual(): void
  {
    // do anything else you want when the user clicks the 'equal' button here

    // update the calculator state
    this._calcService.setCalculator( {q1: new Q(this._q1.w, this._q1.i, this._q1.j, this._q1.k),
                                      q2: new Q(this._q2.w, this._q2.i, this._q2.j, this._q2.k),
                                      op: this._op} );
  }

  /**
   * Execute when the external model is located; use this if you want to simulate restoring the calculator from some prior state
   *
   * @returns {nothing}
   *
   * @private
   */
  protected __onModelLoaded(data: Object): void
  {
    const q1Arr: Array<number> = data['q1'];
    const q2Arr: Array<number> = data['q2'];
    const mem: Array<number>   = data['memory'];

    // result can be computed from inputs, so there is no need to store it
    const q1: Q = new Q(q1Arr[0], q1Arr[1], q1Arr[2], q1Arr[3]);
    const q2: Q = new Q(q2Arr[0], q2Arr[1], q2Arr[3], q2Arr[4]);
    this._op    = data['op'];

    // there may not be anything placed in memory
    this._calcService.toMemory( mem.length > 0 ? new Q(mem[0], mem[1], mem[2], mem[3]) : null );

    // subscribers are triggered twice, but this only happens once, on model load
    this._calcService.setCalculator( {q1: q1, q2: q2, op: this._op} );
  }
}
