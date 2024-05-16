import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ButtonContext } from './../../interfaces/button-context.interface';

import { environment } from '../../../environments/environment';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-context',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './context.component.html',
  styleUrl: './context.component.scss',
})
export class ContextComponent {
  http = inject(HttpClient);

  apiUrl = environment.apiUrl;
  contextArr: ButtonContext[] = [
    {
      id: 'div1',
      url: `/assets/images/1_1.png`,
      action: () => this.openPresentation(),
    },
    {
      id: 'div2',
      url: '/assets/images/1_2.png',
      action: () => this.placeHolderfunc(),
    },
    {
      id: 'div3',
      url: '/assets/images/1_3.png',

      action: () => this.downloadPDF('assets/a-d/work_page'),
    },
    {
      id: 'div4',
      url: '/assets/images/1_4.png',
      action: () => this.downloadPDF(`assets/a-d/parent_guide`),
    },
    {
      id: 'div5',
      url: '/assets/images/2_1.png',
      action: () => this.openPresentation(),
    },
    {
      id: 'div6',
      url: '/assets/images/2_2.png',
      action: () => this.placeHolderfunc(),
    },
    {
      id: 'div7',
      url: '/assets/images/2_3.png',
      action: () => this.downloadPDF('assets/e-f/work_page'),
    },
    {
      id: 'div8',
      url: '/assets/images/2_4.png',
      action: () => this.downloadPDF('assets/e-f/parent_guide'),
    },
    {
      id: 'div9',
      url: '/assets/images/3_1.png',
      action: () => this.downloadPDF('assets/launcher_instructions'),
    },
    {
      id: 'div10',
      url: '/assets/images/3_2.png',
      action: () => this.downloadImage(`assets/banner.png`),
    },
    {
      id: 'div11',
      url: '/assets/images/3_3.png',
      action: () => this.downloadImage(`assets/banner_usage_instructions.jpg`),
    },
    {
      id: 'div12',
      url: '/assets/images/3_4.png',
      action: () => 'hello',
    },
    {
      id: 'div13',
      url: '/assets/images/3_5.png',
      action: () => this.sendWhatsAppInvitation(),
    },
  ];
  openPresentation() {
    window.location.href = '/assets/presentation/index.html';
  }

  downloadPDF(pdfUrl: string) {
    this.http
      .get(`${this.apiUrl}/${pdfUrl}.pdf`, { responseType: 'blob' })
      .subscribe((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = pdfUrl.split('/').pop() + '.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
  }

  downloadImage(imageUrl: string) {
    const url = `${this.apiUrl}/${imageUrl}`; // Construct the URL
    this.http.get(url, { responseType: 'blob' }).subscribe((blob) => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = imageUrl.split('/').pop(); // Extract the filename from the URL
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);
    });
  }

  // openPdf(pdfUrl: string) {
  //   const url = `${this.apiUrl}/${pdfUrl}.pdf`; // Construct the URL
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.target = '_blank';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // }
  // openImg(imgUrl: string) {
  //   const url = `${this.apiUrl}/${imgUrl}`; // Construct the URL
  //   console.log(url);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.target = '_blank';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // }

  sendWhatsAppInvitation() {
    let message = encodeURIComponent('ברוכים הבאים להורה מעשיר');
    let url = `https://wa.me/?text=${message}`;
    window.open(url, '_blank'); // Open WhatsApp URL in new window/tab
  }
  placeHolderfunc() {
    console.log('clicked');
  }
}
