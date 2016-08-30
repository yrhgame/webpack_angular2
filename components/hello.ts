import {Component} from 'angular2/core';

@Component({
	selector: 'angular2-demo',
    template: '<h1>Hello {{ name }}</h1>'
})

export class AppComponent {
    constructor() {
        this.name = 'World';
    }
}