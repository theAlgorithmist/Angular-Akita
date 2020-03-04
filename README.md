# Angular-Akita aka The Quaternion Calculator with the Akita State Management System

Yes, it's worse than _Sharknado_ - the Quaternion Calculator is back for another sequel!  This time, the calculator is used to illustrate the Akita state management system in tandem with Angular.

And, just in case you're new to my Github, this demo functions as a regular calculator with the exception that operations (+, -, *, /) are preformed on [Quaternions](https://en.wikipedia.org/wiki/Quaternion).  What do you expect from a math geek :)

 
Author:  Jim Armstrong - [The Algorithmist](https://www.linkedin.com/in/jimarmstrong)

@algorithmist

theAlgorithmist [at] gmail [dot] com

Angular: 5.2.0

Material: 5.2.0

Typescript: 2.5.3

Angular CLI: 1.7.3

Akita: 1.8.0

Version: 1.0

## Overview

The calculator has been simplified from prior versions in that it no longer updates the current result as new operands are typed in.  This proved to be confusing to some people and it make the demo more difficult to deconstruct.  The demo still loads prior calculator state as an initialization step.  You are welcome to modify this to use local storage and wire up the _Save_ button to correspond to your choice of where to store calculator state.  No specific implementation for _Save_ is provided (other than a placeholder).  _Clear_ functions as before.

The other significant modification from prior implementations is in project layout.  I previously focused almost exclusively on the state management system and left the remainder of the demo in a very basic state.  The current implementation uses separate modules for _Material_ and _Core_ services.  A single feature module for the calculator is provided.  So, the layout and module structure is more in line with what I use in production.  

```
-- src
---- app
------ components
-------- memory (calculator memory)
-------- quaternion (quaternion input and display)
-------- result (readonly quaternion display)
------- core (core module)
------- features
--------- material.module
--------- quaternion-calculator.module
------- libs
------- services (includes data service, and Akita service/query)
------- state (Akita model and store)
```

Here is an image of the calculator layout

![Quaternion Calculator](http://algorithmist.net/image/qc.png "Quaternion Calculator")


Before discussing the calculator implementation, I should mention that this is not a tutorial on _Akita_.  It will be helpful to have some introduction to the library, at least to the point of having written or deconstructed a _counter_ or _to-do list_ application.  Refer to the [Akita docs](https://netbasal.gitbook.io/akita/) for more information.  I tried to conform to the principles represented in this documentation throughout the demo.

I will also state that this is not a comparison of _Akita_ vs. _@ngrx/store_.  


## The Store

The calculator is well represented by a basic store, so this serves as a good introduction to _Akita_ without having to delve immediately into entity stores.  Refer to _/src/app/state/quaternion.model.ts)_ to find the _Calculator_ type that represents the store,

```
import { Q​ } from '../libs/Q';

export type Calculator =
{
  id: ID,
  q1: Q;
  q2: Q;
  result: Q;
  memory: Q | null;
  op: string
}
```

The initial state is two unit quaternion inputs, no result, no quaternion in memory, and no defined operation.


## Service and Query

In keeping with the _Akita_ docs, a service is used by the main app component to send data to the store.  See _/src/app/services/calculator.service.ts_.  This services handles calculator operations such as to- and from-memory, setting the calculator inputs/operation, and clearing the calculator.  A query is used by the low-level components to obtain information from the store to update the component.  See _/src/app/services/calculator.query_.

Controlling logic is placed in the service, so the calculator result is computed whenever the calculator's state is assigned or a memory retrieval operation causes a state mutation.
 

## Running The Application

The calculator is initialized from data contained in the _assets/model.json_ file.  The result is updated upon pressing the _equal_ button, changing the calculator operation, or restoring a quaternion input from memory.

Suggestions for improvement include,

- Add support for _OnPush_ change detection. 

- Add specs and e2e testing.

- Wire up the _Save_ operation

I hope you find something of value here and have gained some additional insight into _Akita_.


## Further help

For more information on _Akita_, refer to [akita](https://github.com/datorama/akita) .

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

