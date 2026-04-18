import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Demo } from './demo/demo';
import { Ecommerce } from './ecommerce/ecommerce';
import { Practice } from './practice/practice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,Demo,Ecommerce,Practice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp');
}
