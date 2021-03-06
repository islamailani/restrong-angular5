import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'alert',
	template: `<div *ngIf="message" class="alert alert-{{ type }}">
                <a class="close" aria-label="close" (click)="close()">&times;</a>
                <strong>{{ title }}</strong> {{ message }}
            </div>`,
	
})
export class AlertComponent {

	@Input() title: string;
	@Input() message: string;
	@Input() type: string;

	constructor() {

	}

	close = () => {
		this.message = '';
	}

}