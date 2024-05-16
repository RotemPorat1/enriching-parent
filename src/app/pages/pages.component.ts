import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContextComponent } from './context/context.component';
@Component({
  selector: 'app-pages',
  standalone: true,
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ContextComponent,
  ],
})
export class PagesComponent {}
