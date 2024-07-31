import { Component } from '@angular/core';
import JsBarcode from 'jsbarcode';


@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.component.html',
  styleUrl: './etiqueta.component.css'
})
export class EtiquetaComponent {

  showLabel = false;

  generateLabel(event: Event) {
    event.preventDefault();

    const numeroUnicoInput = document.getElementById('numeroUnico') as HTMLInputElement;
    const equipmentTypeSelect = document.getElementById('equipmentType') as HTMLSelectElement;
    const nombreEquipoInput = document.getElementById('nombreEquipo') as HTMLInputElement;
    const numeroSerieInput = document.getElementById('numeroSerie') as HTMLInputElement;
    const purchaseDateInput = document.getElementById('purchaseDate') as HTMLInputElement;

    if (!numeroUnicoInput || !equipmentTypeSelect || !nombreEquipoInput || !numeroSerieInput || !purchaseDateInput) {
      console.error('Uno o más elementos del formulario no se encontraron.');
      return;
    }

    const numeroUnico = numeroUnicoInput.value;
    const equipmentType = equipmentTypeSelect.value;
    const nombreEquipo = nombreEquipoInput.value;
    const numeroSerie = numeroSerieInput.value;
    const purchaseDate = purchaseDateInput.value;

    const labelContent = `Número Único: ${numeroUnico}\nTipo: ${equipmentType}\nNombre: ${nombreEquipo}\nSerie: ${numeroSerie}\nFecha: ${purchaseDate}`;

  
    // Generar código de barras
    const barcodeCanvas = document.getElementById('barcode') as HTMLCanvasElement;
    if (barcodeCanvas) {
      JsBarcode(barcodeCanvas, numeroUnico, {
        format: 'CODE128',
        displayValue: true,
        fontSize: 18
      });
    } else {
      console.error('Elemento barcode no encontrado.');
    }

  
  }


  printBarcode() {
    const barcodeCanvas = document.getElementById('barcode') as HTMLCanvasElement;
    if (barcodeCanvas) {
      const printWindow = window.open('', '', 'height=600,width=800');
      if (printWindow) {
        printWindow.document.write('<html><head><title>Imprimir Código de Barras</title>');
        printWindow.document.write('<style>');
        printWindow.document.write('@page { size: A4 landscape; margin: 0; }');
        printWindow.document.write('body { margin: 0; padding: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; }');
        printWindow.document.write('h1 { text-align: center; margin: 20px 0; }');
        printWindow.document.write('img { display: block; width: 80%; max-width: 100%; margin: 0 auto; }');
        printWindow.document.write('</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<h1>Código de Barras</h1>');
        printWindow.document.write('<img src="' + barcodeCanvas.toDataURL() + '" />');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
      } else {
        console.error('No se pudo abrir la ventana de impresión.');
      }
    } else {
      console.error('Elemento barcode no encontrado para impresión.');
    }
  }


}
