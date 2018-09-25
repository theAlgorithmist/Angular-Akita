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
 * Material modules used in the calculator
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material
import { MatButtonModule
       , MatInputModule
       , MatFormFieldModule
       , MatIconModule
} from '@angular/material';

const PLATFORM_IMPORTS: Array<any> = [BrowserAnimationsModule];

const MATERIAL_IMPORTS: Array<any> = [MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule];

@NgModule({
  imports: [PLATFORM_IMPORTS, MATERIAL_IMPORTS],

  exports: MATERIAL_IMPORTS
})
export class MaterialModule { }
