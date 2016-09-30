import { Component } from '@angular/core';
@Component({
    selector: 'about',
    template: `<h2>About page</h2>

<p-dialog header="Title" [(visible)]="display">
    Content
</p-dialog>

<button type="text" (click)="showDialog()" pButton icon="fa-external-link-square" label="Show"></button>
`
})
export class AboutComponent {

    display: boolean = false;

    showDialog() {
        this.display = true;
    }
}
