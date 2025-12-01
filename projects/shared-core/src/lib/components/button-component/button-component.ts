import { Component, inject, signal, WritableSignal } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'lib-button-component',
  imports: [],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css',
})
export class ButtonComponent {
  message: WritableSignal<string> = signal("")
  dataService = inject(DataService);
  showMessage(event: Event): void {
    this.dataService.getNextMessage();
    this.message.set(this.dataService.message());
    console.log('Button clicked!', event);
  }
}
