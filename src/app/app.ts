import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesModule } from './pages/pages-module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PagesModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jelpy-landing');
}
