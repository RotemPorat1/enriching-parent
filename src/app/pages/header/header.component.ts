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
    {
      class: 'image-header kids1',
      url: '/assets/images/KIDS.png',
      alt: 'KIDS 1',
    },
    {
      class: 'image-header big-title',
      url: '/assets/images/BIG TITLE.png',
      alt: 'TITLE',
    },
    {
      class: 'image-header kids2',
      url: '/assets/images/KIDS2.png',
      alt: 'KIDS 2',
    },
  ];
  subHeaderImg: HeaderImg = {
    class: 'sub-Header',
    url: '/assets/images/MAIN TEXT.png',
    alt: 'MAIN HEADER TEXT',
  };
}
