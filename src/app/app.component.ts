import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, Observable, Subscription, timer} from 'rxjs';
import {isFib, makeFibonacciList} from './functions/fibonacci';
import {calcResults} from './functions/output';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ftr';
  form: FormGroup;
  output: BehaviorSubject<string>;
  instructions: string;
  state: 'init' | 'running' | 'quit';
  fibNumbers: number[];
  isFib: boolean;
  entries: number[];
  timer$!: Observable<number>;
  timerSubscription!: Subscription;
  outputFreq!: number;
  paused: boolean;

  constructor() {
    this.state = 'init';
    this.paused = false;
    this.instructions = 'In seconds, enter how often would you like the results to update:';
    this.entries = [];
    this.isFib = false;
    this.output = new BehaviorSubject<string>('');
    this.fibNumbers = makeFibonacciList(1000);
    this.form = new FormGroup({
      number: new FormControl(null, [Validators.required])
    });
  }

  onSubmitButton(): void {
    const numberEntered = this.form.value.number;
    this.state === 'init' ? this.initOutput(numberEntered) : this.processInput(numberEntered);
    this.form.reset();
  }

  onPauseButton(): void {
    this.paused = !this.paused;
    if (this.paused) {
      this.form.disable();
      this.pauseTimer();
    } else {
      this.form.enable();
      this.startTimer();
    }
  }

  onQuitButton(): void {
    this.state = 'quit';
    this.instructions = `Thanks for playing.  You can close the browser window to exit, or refresh it to play again.`;
  }

  startTimer(): void {
    const outputFreqMS = this.outputFreq * 1000;
    this.timer$ = timer(0, outputFreqMS);
    this.subscribeToTimer();
  }

  subscribeToTimer(): void {
    this.timerSubscription = this.timer$.subscribe(() => {
      this.output.next(calcResults(this.entries));
    });
  }

  pauseTimer(): void {
    this.timerSubscription.unsubscribe();
  }

  initOutput(numberEntered: number): void {
    this.outputFreq = numberEntered;
    this.state = 'running';
    this.instructions = `The results will update every ${this.outputFreq} seconds. Now, please enter the first number:`;
    this.startTimer();
  }

  processInput(numberEntered: number): void {
    this.entries.push(numberEntered);
    this.isFib = isFib(numberEntered, this.fibNumbers);
    this.instructions = 'Please enter the next number:';
  }

}
