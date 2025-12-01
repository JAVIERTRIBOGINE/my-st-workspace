import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  message!: Signal<string>;
  position = 0;

  messagesContainer: string[] = [
    'Hello from DataService!',
    'This is a shared message.',
    'Angular signals are powerful!',
  ];

  getNextMessage(): void {
    this.position++;
    this.message = computed(() => this.messagesContainer[this.position % this.messagesContainer.length]);
  }
}
