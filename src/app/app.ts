import { Component, signal } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
=======
import { RouterLink, RouterOutlet } from '@angular/router';
import { Shared } from './shared/shared';
import { Home } from './Component/home/home';
import { About } from './Component/about/about';
import { Contact } from './Component/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Shared,Home,About,Contact],
>>>>>>> 853e98f66ab6ac429553eef369a6efb92fcf08ad
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
<<<<<<< HEAD
  protected readonly title = signal('Demo3');
=======
  protected readonly title = signal('Router');
>>>>>>> 853e98f66ab6ac429553eef369a6efb92fcf08ad
}
