import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
<a routerLink="/about">About</a>
<a routerLink="/dashboard">Dashboard</a>
   <router-outlet></router-outlet>
`
})
export class AppComponent {
    title = 'PrimeNG Test application';
}
