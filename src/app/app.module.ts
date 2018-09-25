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
 * Angular/Akita quaternion calculator
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
// platform inputs
import { BrowserModule    } from '@angular/platform-browser';
import { NgModule         } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Material modules used at the root component level
import { MatIconModule   } from '@angular/material';
import { MatButtonModule } from '@angular/material';

// App components and modules
import { CoreModule                 } from './core/core.module';
import { QuaternionCalculatorModule } from './features/quaternion-calculator.module';

import { AppComponent } from './app.component';

const PLATFORM_IMPORTS: Array<any> = [BrowserModule, HttpClientModule];

const APP_DECLARATIONS: Array<any> = [AppComponent];

@NgModule({
  declarations: APP_DECLARATIONS,
  imports: [
    PLATFORM_IMPORTS,
    MatIconModule,
    MatButtonModule,
    CoreModule,
    QuaternionCalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
