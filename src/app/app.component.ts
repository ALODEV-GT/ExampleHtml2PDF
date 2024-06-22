import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as html2pdf from 'html2pdf.js'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  unitSizePage: "px" | "in" | "mm" | "cm" = 'mm'

  sale = {
    nameEstablishment: "Tienda 1",
    idSale: '01903ba7-576a-7a91-99e6-01903ba7-576a',
    codeCust: '11223344',
    name: 'Jose Perez',
    date: '20/06/2024  14:05'
  }

  download() {
    var element = document.getElementById('ticket')
    const heightPage = Number(element?.offsetHeight || 150) * 0.2645833333
    var opt = {
      margin: 0,
      filename: 'output.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: [80, heightPage], orientation: 'portrait' }
    }
    html2pdf.Worker().from(element).set(opt).save()
  }
}
