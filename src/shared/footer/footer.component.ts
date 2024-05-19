import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  footerTxt =
    ':לשאלות, הערות, הארות הנכם מוזמנים לפנות למשרד משאבי האנוש החטיבתי או לתיבה';
  linkTxt = '> תקשורת רפאל <';
}
