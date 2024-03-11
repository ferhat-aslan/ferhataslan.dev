---
title: "Angular Signals and Signal-Based Components"
description: "I want to tell you something about new Angular Features. Angular started 2023 very fast, Even some Angular developers call it Angular Renaissance content."
publishDate: "Apr 6 2023"
tags: ["angular", "javascript", "typescript", "frontend", "signal"]
---

# Angular Signals and Signal-Based Components

Hi Everyone,

I want to tell you something about new Angular Features. Angular started 2023 very fast, Even some Angular developers call it Angular Renaissance 😂 Angular team is announcing new features every day. I would like to give some examples about new features coming to Angular.

_Signals, Signal-Based Components, hydaration, NgCC compiler removal, Zonejs dependency reduction, ViteJs support, Functional guards and resolvers etc…_

## Signals For Angular

You must have seen the **ExpressionChangedAfterItHasBeenChecked** error in Angular. This error is caused by the ZoneJS Change detection strategy in Angular. The Angular Team has been trying to reduce the ZoneJS dependency for a long time. We understand this from the pull requests that appear on the Angular GitHub account. Signal offers a pretty good feature to reduce dependency on ZoneJS.
Signals are the cornerstone of reactivity. They contain values that change over time (like RxJS Subject); when you change a signal’s value, it automatically updates anything that uses it.

```
export class App{

    //creating a signal, you can create signal outside of class because of signals are primitive
    count = signal(0);

    //creating signal from another signal
    double = computed(()=>{this.count()*2});

    countType = computed(()=>{this.count()*2 === 0 ? 'even' : 'odd'});

    constructor(){
        //effect is triggered when any signal changes.
        effect(()=>{

            console.log('Count changed', this.count());
            console.log(this.count(), 'is', this.countType());
        });

    }

    increase(){
        //updating a signal
        this.count.update((c) => c+1);
    }

    reset(){
        //another way to updating signal
        this.count.set(0);
    }
}
```

Signals can be used anywhere, not just in components, which plays well with Angular’s dependency injection system.

```
@Injectable(providedIn: 'root')

export class SignalService{

    counter = signal(0);
}

@Component({
    template:'<div [class]="backgroundColor()" >{{isEven()}}</div>'
})

export class MyAppComponent{

    mySignalService = inject(SignalService);

    isEven = computed( () => {this.mySignalService.counter() % 2 === 0});

    backgroundColor = computed( () => { this.isEven() ? 'bg-green-500' : 'bg-red-500' } );


}
```

> You can also convert an observable to a signal. Or you can convert a signal to observable.

```
@Injectable(providedIn: 'root')

export class SignalService{

    counter = signal<number[]>(0);

    subject$ = new BehaviourSubject<number[]>([]);

}

@Component({

    template: `...`

})

export class MyAppComponent {

    mySignalService = inject(SignalService);

    //create a signal from an observale
    counterObs: Signal<number[]> = fromObservable(mySignalService.subject$);

    //create a observable from a signal
    count: Observable<number[]> = fromSignal(counterObs)

}

```

## Signal-Based Components

> To create signal-based components, first of all, it is necessary to change the signal property in the Component decorator to true.

```
 @Component({
    signals: true

    ...
 })
```

If we set the **signals to false**, we will have created a **zone-based component**.

```

item = input<string>(); // Signal<string | undefined>

myFromField = viewChild<ElementRef>('field'); // Signal<ElementRef>

saved = output<number>(); //EventEmitter<number>

saved() {
    this.saved.emit(123);
}

```

Signal is bringing **fine-grain reactivity**. The view knows exactly where the change has occured and can only refresh its view and not the entire component tree.

> so no need of onpush anymore

## Component Lifecycle and Effects

Zone-based components support eight [different Class-Based lifecycle methods](https://angular.io/guide/lifecycle-hooks#lifecycle-event-sequence) that let you hook into different stages of Angular’s change detection. Because these methods are tightly coupled to Angular current change detection model, they don’t make sense for signal-based components.

```
@Component({
    signals: true,
    selector: 'user-profile',
    template: `
        <p>Name: {{ firstName() }}  {{ lastName() }}</p>
    `,
})

export class UserProfile {

    firstName = input('');
    lastName = input('');

    init = afterInit();

    constructor() {

        afterInit(() => {
            //All inputs have their initial values.

        });

        effect(() => {
            //Effects run when any read signals change.
            //In this example, log only when firtsName changes.

            console.log(`${ this.firstName() }`);

        });

        afterRender(() => {
            //After the DOM of  *all* components has been fully rendered.

         })

         afterNextRender(() => {
            //Same as afterRender, but only runs once.


         });

         afterRenderEffect(() => {

            // Same as afterRender in terms of timing, but also behaves
            // like an `effect()` and only runs whenever the signals
            // which it reads have changed.

            console.log(`DOM was updated due to ${this.firstName()}`);

         });

         beforeDestroy(() => {
            // This. component instance is about to be destroyed.
         });



    }
}
```

## Vite For Angular

Minko Gechev announced that Angular will be using Vite for the development server of `ng serve`!

## Functional guards and resolvers

Angular now supports functional guards and resolvers.

```
import { inject } from "@angular/core";
import { LoginService } from "./login.service";

const routes: Route[] = [
    {path:"", canActivate:[() => inject(LoginService).isAdmin()]}
]
```

```
const routes: Routes[] = [
    {
        path: "test",
        component: TestComponent,
        resolver: {value: () => 'My Data'}
                    //👆 value will be bound to component @input() value.
    }
]

@Component({

    template: `{{value}}` //this will render 'My Data'

})

export class MyApp{

    @Input() value: string;

}
```

## Hydration

Angular ngIf and ngFor will be hydratable soon.

## NgCC Compiler

Angular Compatibility Compiler (ngcc) has been removed and as a result Angular View Engine libraries will no longer work.

Resources;

- Taner Saydam
- Github/Angular
- Twitter/mGechev
- Twitter/Enea_Jahollari

Best Regards,

Ferhat Aslan
