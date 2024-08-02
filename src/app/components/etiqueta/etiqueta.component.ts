import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import JsBarcode from 'jsbarcode';
import QRCode from 'qrcode';


@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.component.html',
  styleUrl: './etiqueta.component.css'
})
export class EtiquetaComponent {

  formulario: FormGroup;
  barcodeData: string = '';

  qrCodeDataUrl: string = '';


  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      NoUnico: [''],
      equimentType: [''],
      nombreEquipo: [''],
      NoSerie: [''],
      Date: ['']
    });
  }

  generarCodigoDeBarras() {

    const NoUnico = this.formulario.get('NoUnico')?.value;
    const equimentType = this.formulario.get('equimentType')?.value;
    const nombreEquipo = this.formulario.get('nombreEquipo')?.value;
    const NoSerie = this.formulario.get('NoSerie')?.value;
    const Date = this.formulario.get('Date')?.value;


    const datosConcatenados = `
    {
      ${NoUnico},
      ${equimentType},
      ${nombreEquipo},
      ${NoSerie},
      ${Date}
    }`

    QRCode.toDataURL(datosConcatenados, { width: 200, margin: 2 }, (err, url) => {
      
      if(err) {
        console.error(err);
        return;
      }

      this.qrCodeDataUrl = url;

    });

  }



  //Metodo para imprimir el codigo de barras
  printQRCode() {
    const printWindow = window.open('', '', 'width=600,height=600');
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>Print QR Code</title>
          </head>
          <body>
            <img src="${this.qrCodeDataUrl}" />
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  }
  


}
