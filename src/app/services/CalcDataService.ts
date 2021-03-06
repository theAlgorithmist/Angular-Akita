/**
 * This software is derived from that bearing the following copyright notice
 *
 * -----
 *
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

// platform imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



/**
 * A (very) simple http service to request and return data from back-end services
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.90
 */

@Injectable()
export class CalcDataService
{
 /**
  * Construct a new basic service
  *
  * @param {HttpClient} _http: Http Injected HttpClient instance
  */
  constructor(protected _http: HttpClient)
  {
    // empty
  }


 /**
  * Retrieve data from from the requested URL
  *
  * @param url: string URL of external service
  *
  * @return Observable<any>
  */
  public getData(url: string): Observable<Object>
  {
    if (url != "")
    {
      return this._http.get(url)
                 .catch( (err: any, caught:Observable<any>) => this.__errHandler(err, caught));
    }
  }

  private __errHandler( error: Response | any, caught: Observable<any> ): any
  {
    let errMsg: string = "DATA REQUEST FAILED: ";

    if (error instanceof Response)
    {
      const body: any = error.json() || '';
      const err: any  = body.error || JSON.stringify(body);

      errMsg += `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else
    {
      errMsg += error.message ? error.message : error.toString();
    }

    // for demo purposes - modify as you see fit
    console.log( errMsg );
  }
}
