import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-documentacao-page',
    templateUrl: './documentacao-page.component.html',
    styleUrls: ['./documentacao-page.component.css']
})
export class DocumentacaoPageComponent implements OnInit {
    pdfSrc: string | ArrayBuffer | null = null;
    pdfFileName: string | null = null;
    truncatedFileName: string | null = null;

    ngOnInit(): void {
        const storedPdfSrc = localStorage.getItem('pdfSrc');
        const storedPdfFileName = localStorage.getItem('pdfFileName');

        if (storedPdfSrc && storedPdfFileName) {
            this.pdfSrc = storedPdfSrc;
            this.pdfFileName = storedPdfFileName;
            this.truncatedFileName = this.pdfFileName.length > 20 ? this.pdfFileName.substring(0, 20) + '...' : this.pdfFileName;
        }
    }

    onFileSelected(event: any): void {
        const file: File = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            this.pdfFileName = file.name;
            this.truncatedFileName = this.pdfFileName.length > 20 ? this.pdfFileName.substring(0, 20) + '...' : this.pdfFileName;

            const reader = new FileReader();
            reader.onload = (e) => {
                this.pdfSrc = e.target?.result as string | ArrayBuffer;

                // Armazenar o PDF e o nome do arquivo no localStorage
                localStorage.setItem('pdfSrc', this.pdfSrc as string);
                localStorage.setItem('pdfFileName', this.pdfFileName as string);
            };
            reader.readAsDataURL(file);
        } else {
            console.error('Invalid file format. Please select a PDF file.');
        }
    }
}
