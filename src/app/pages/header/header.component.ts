import { Component } from '@angular/core';

import { HeaderImg } from '../../interfaces/header.interface';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerImgArr: HeaderImg[] = [
    { url: '/assets/images/KIDS.png', alt: 'KIDS 1' },
    {
      url: '/assets/images/BIG TITLE.png',
      alt: 'TITLE',
    },
    { url: '/assets/images/KIDS2.png', alt: 'KIDS 2' },
  ];
  subHeaderImg: HeaderImg = {
    url: '/assets/images/MAIN TEXT.png',
    alt: 'MAIN HEADER TEXT',
  };
}
