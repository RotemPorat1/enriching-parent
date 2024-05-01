import { Component } from '@angular/core';

@Component({
  selector: 'app-context',
  standalone: true,
  imports: [],
  templateUrl: './context.component.html',
  styleUrl: './context.component.scss',
})
export class ContextComponent {
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
}
