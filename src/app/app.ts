import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Shared } from './shared/shared';
import { Home } from './Component/home/home';
import { About } from './Component/about/about';
import { Contact } from './Component/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Shared,Home,About,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Router');
}
