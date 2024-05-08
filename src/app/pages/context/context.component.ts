import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ButtonContext } from './../../interfaces/button-context.interface';

@Component({
  selector: 'app-context',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './context.component.html',
  styleUrl: './context.component.scss',
})
export class ContextComponent {
  contextArr: ButtonContext[] = [
    { id: 'div1', text: 'הפעלת מצגת', action: () => this.openPresentation() },
    {
      id: 'div2',
      text: 'הדפסת דף עבודה',
      action: () => this.downloadPDF('work_page_a-c'),
    },
    {
      id: 'div3',
      text: 'חוברת הסבר להורה',
      action: () => this.placeHolderfunc(),
    },
    { id: 'div4', text: 'הפעלת מצגת', action: () => this.openPresentation() },
    {
      id: 'div5',
      text: 'הדפסת דף עבודה',
      action: () => this.downloadPDF('work_page_d - f'),
    },
    {
      id: 'div6',
      text: 'חוברת הסבר להורה',
      action: () => this.placeHolderfunc(),
    },
    { id: 'div7', text: 'טריוויה רפאל', action: () => this.placeHolderfunc() },
    {
      id: 'div8',
      text: 'הזמנת וואטס אפ',
      action: () => this.sendWhatsAppInvitation(),
    },
  ];
  openPresentation() {
    window.location.href = '/assets/presentation/index.html';
  }
  downloadPDF(fileName: string) {
    const link = document.createElement('a');
    link.href = `/assets/${fileName}.pdf`;
    link.download = `${fileName}.pdf`; // specify a filename for the download
    link.click();
    link.remove();
  }
  sendWhatsAppInvitation() {
    let message = encodeURIComponent('ברוכים הבאים להורה מעשיר');
    let url = `https://wa.me/?text=${message}`;
    window.open(url, '_blank'); // Open WhatsApp URL in new window/tab
  }
  placeHolderfunc() {
    console.log('clicked');
  }
}
