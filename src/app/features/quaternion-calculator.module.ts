import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from "@angular/forms";

import { MaterialModule } from './material.module';

import { MemoryComponent     } from '../components/memory/memory.component';
import { QuaternionComponent } from '../components/quaternion/quaternion.component';
import { ResultComponent     } from '../components/result/result.component';

export const PLATFORM_INPUTS: Array<any> = [ FormsModule ];

export const CALCULATOR_COMPONENTS: Array<any> = [
  MemoryComponent, QuaternionComponent, ResultComponent
];

@NgModule({
  imports: [MaterialModule, PLATFORM_INPUTS],

  declarations: CALCULATOR_COMPONENTS,

  exports: CALCULATOR_COMPONENTS
})
export class QuaternionCalculatorModule { }
