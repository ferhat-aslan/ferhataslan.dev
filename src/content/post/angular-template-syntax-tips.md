---
title: "Angular Template-Syntax Tips"
description: "Hi everyone, in this article I will share with you a summary of what I learned about angular html template-sytax."
publishDate: "Aug 6, 2022"
tags: ["angular", "typescript", "javascript", "frontend"]
---

Hi everyone, in this article I will share with you a summary of what I learned about angular html template-sytax.

# INTERPOLATION

It is one of the Angular One-Way Data Binding methods. It is commonly used to show the value returned by a variable or method in a component or service in an HTML template. A variable or method is written inside curly braces.
We can use values of variables, values of objects, elements of arrays, mathematical operations, ternary operators, pipes in interpolation brackets.

`{{ variableName }}` or `{{ getVariableName() }}`

```
personName:string="Johanthan Deft";

clientData:any={
salesCount:345,
country:"England",
clientId:3452763
};

getStringValue():string
{
return "just do it";
};

getNumberValue():number
{
return 55;
};
```

---

```
<span>{{personName}}<span>   //Johanthan Deft

<span>{{personName | uppercase }}<span>  //JOHANTHAN DEFT

<span>Mr: {{personName | uppercase }}<span>   //Mr: JOHANTHAN DEFT

<span>{{'Hello ' + personName | uppercase }}<span>     //HELLO JOHANTHAN DEFT

<h1>{{cliendData.country}}<h1>    //England

<div>{{cliendData.salesCount + 7}}<div>      //352

<div>{{cliendData.country=='England' ? 'Welcome England' : 'Welcome'}}<div>      //Welcome England

<h2>{{getStringValue()}}<h2>        //just do it

<p>{{getStringValue() + ',value'}}<p>       //just do it,value

<div>{{getNumberValue() + 15}}<div>       //70
```

---

**Sometimes variables can initially be null or undefined. To avoid the error in angular, We use the “?" operator.**

`<p> {{ clientData?.salesCount }} </p>`

## PROPERTY BINDING

In fact, the string interpolation we described above eventually turns into a property bind. It is written in square brackets within the html tag.

`[innerhtml]="personName". or [src]="client.profilePhotoUrl"`

```
<p>{{  personName  }}</p>
<p [innerHtml]="personName" ></p>

<h1>{{ getNumberValue()+ 27 }}</h1>
<div [innerHtml]="getNumberValue()+ 27" ></div>

<h1>{{ getStringValue()+ 'Next' }}</h1>
<div [innerHtml]="getStringValue()+ 'Next'" ></div>

<img [src]="clientData.url" />
img [src]="{{clientData.url}}" />

<a [RouterLink] = "clientData.WebsiteUrl"> Our Website</a>
<a [href]="clientData.WebsiteUrl">Our Website</a>
<input [placeHolder]="clientData.Country"  [name]="clientData.Name"/>
```

## EVENT BINDING

Event Binding allows us to listen to keyboard key clicks, mouse movements, taps. In Angular, we can create an event binding ourselves.

`(event)="myHandler($event)"`

```
<div (click)="method($event)">Call</div>
<div (click)="isActive=!isActive">{{isActive ? 'Active' : 'Deactive'}}</div>

<input (change)="onChange($event)" />

<div (dblclick)="method($event)">Call</div>

<input (focus)="onFocus($event)" />
<input (focus)="focus=true". />

<input (blur)="onBlur($event)"  />

<input (keydown)="method($event)" />

<input (keyup)="method($event)" />

<input (keyup.enter)="callThis($event)" />

<div (mouseover)="method($event)">Call</div>
<div (mouseleave)="method($event)">Call</div>
<div (mouseenter)="method($event)">Call</div>
<div (select)="method($event)">Call</div>
<div (copy)="method($event)">Call</div>
<div (paste)="method($event)">Call</div>
<form (submit)="method($event)" >
```

## TWO WAY DATA BINDING (BANANA IN A BOX)

One of my favorite features of Angular is Two Way Data Binding. It allows us to change a variable in both Html(`<input/>`) side and component.ts side. To use this feature, you must import FormsModule to the relevant module.

`[(NgModel)]=”person.name” or [(NgModel)]=”person.age”`

```
<input [(Ngmodel)]="variable"  [placeHolder]="person.Name"  name="person-name"  />
```

## ANGULAR PIPES

In Angular, we may want the variables on the HTML side to appear more meaningful to the end user. For example, we may want to add currency in front of numbers.

```
<p [innerHtml]="3434 | currency:'EUR'  "></p>     //   €3434


<p>{{3434.55656 | number:'4.0-3' }}</p>      //   3434,557

<p>Today is {{today | date}}</p>     //    Aug 6 2022
<h1>{{ today | date: 'dd/MM/yyyy'}}</h1>    //    06/092022
<p>{{ today | date: 'fulldate' }}</p>       //   saturday, August 6, 2022

<p>{{ 'hello' | uppercase }}</p>    // HELLO

<p>{{ 'hello' | lowercase }}</p>    // hello

<p>{{ 0.65 | percent }}</p>    //    65%
```

## DIRECTIVES

Directives are used to create or change the appearance or behavior of an HTML element. Components are directives. It also has Attribute and structural directives.

## STRUCTURAL DIRECTIVES

1. \*ngFor Structural Directive
2. \*ngIf Structural Directive
3. ngSwitch Directive

```
<ul>
<li *ngFor="let book of books">{{ book.name | uppercase }} - {{book.author}}</li>
</ul>

<ul>
  <li *ngFor="let book of books; let i = index">
    {{ i + 1 }} - {{ book.name }}
  </li>
</ul>

<ul>
<li *ngFor="let book of books; index as i">
    {{ i + 1 }}. {{ book.name }}
  </li>
</ul>

<h1 *ngFor="let book of (books | slice:0:5)"> {{ book.name }}
</h1>

<li *ngFor="let book of books; last as L" *nfIf="!L">
    {{ i + 1 }}. {{ book.name }}
  </li>
</ul>
```

```
<div *ngIf="true">then show is</div>
<div *ngIf="isActive==true">then show is</div>
<div *ngIf="clientData.salesCount>85">Congralations</div>

<div *ngIf="isActive; then notactive">then show is</div>
// if you want to use else expression  then you  should use ng-template tag.
<ng-template #notactive>  then show this. </ng-template>

<div [ngSwitch]="book.years">
<span *ngSwitchCase="2022">New</span>
<span *ngSwitchCase="2021">Last year </span>
</div>
```

## ATTRIBUTE DIRECTIVES

- [ngClass]
- [ngStyle]
- [class.MyClass]
- [style.width]

```
<div [ngStyle]="{'background-color':'red'}"> going</div>

<div [ngStyle]="{'width.%':50}"> now</div>

<p [ngStyle]="{'width.%':20,'background-color':getColor()}"></p>

<div [ngClass]="'myClass'">no one</div>

<div [ngClass]="{'myNewClass':2<3, 'myOtherClass':isActive==null }" > no one</div>

<div [ngClass]="{'text-white justify-center bg-gray-500':isDark }" > no one</div>

<div [class.myClass]="isDark">dark mode</div>

<div  [style.color]="'black'">whatsup</div>
```

## ELEMENT REFERENCE ID

In a template, we can name HTML elements individually and use those names elsewhere to access the element. Such element references are indicated by a hash symbol #.

```
<input #myId type="text" value="type">

<div>{{ myId.value }}</div>
```

best regards,

Ferhat Aslan
