---
title: "Angular Simple Routing Spinner"
description: "Angular’s routing is an obserable, it subscribes to and publishes events whenever the routing changes. You can therefore use this event however you like."
publishDate: "Jan 22, 2023"
tags: ["angular", "javascript", "typescript", "frontend"]
---

## Angular Simple Routing Spinner

Angular’s routing is an obserable, it subscribes to and publishes events whenever the routing changes. You can therefore use this event however you like.

![routing-spinner](src/assets/routing-spinner.gif)

There are 4 distinct steps in the life cycle of a routing event;

- NavigationStart
- RoutesRecognized
- GuardsCheckStart
- GuardsCheckEnd
- ResolveStart
- ResolveEnd
- NavigationEnd

Here, I’ll use NavigationEnd.

In order for the app component to subscribe to the router, you must first inject the ROUTER class under the angular common router. Additionally, we’ll use some HMTL and CSS.

there are only 3 short steps;

This is possible in the app module as well.

## Step 1

```
export class AppComponent{
    isLoading: boolean=false;
    constructor(private _router: Router){
        _router.events.subscribe((res)=>{
            if(res instanceof NavigationEnd){
                this.isLoading = true;
                setTimeout(()=>{
                    this.isLoading = false;
                },1000)
            }
        })

    }
}
```

## Step 2

```
<div class="loading-div" *ngIf="isLoading">
<!--Show Spinner Animation in Here-->

</div>

<div *ngIf="!isLoading">
<ul>
    <li>
        <a routerLinkActive="active-link" routerLink="/home">
        HOME
        </a>
    </li>
    <li>
        <a routerLinkActive="active-link" routerLink="/news">
        NEWS
        </a>
    </li>
</ul>

<br>

<router-outlet></router-outlet>

</div>
```

## Step 3

```
.loading-div{
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: row;
}

.loading-spinner{
    display: flex;
}
```

Best regards,

Ferhat Aslan

aslanferhat16@gmail.com

https://www.linkedin.com/in/aslanferhat/

https://feslan.github.io
