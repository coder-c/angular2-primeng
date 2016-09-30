import { Component } from '@angular/core';
@Component({
    selector: 'dashboard',
    template: `

<h2>Dashboard </h2>

<p-dialog header="Title" visible="true" appendTo="body" closable="false" closeOnEscape="false" resizable="false" >
    Dashboard dialog
</p-dialog>


`
})
export class DashboardComponent {
    title = 'dashboard'
}
