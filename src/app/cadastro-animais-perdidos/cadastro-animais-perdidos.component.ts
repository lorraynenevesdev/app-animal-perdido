import { Component, OnInit, ElementRef } from '@angular/core';
import { RequestAnimalPerdidoCreate, ResponseAnimalPerdidoCreate } from '../lista-animais-perdidos/animal-perdido.model';
import { CadstroAnimaisPerdidoService } from './cadstro-animais-perdido.service';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';  
import { UploadService } from  '../upload.service';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-cadastro-animais-perdidos',
  templateUrl: './cadastro-animais-perdidos.component.html',
  styleUrls: ['./cadastro-animais-perdidos.component.css']
})
export class CadastroAnimaisPerdidosComponent implements OnInit {

  request: RequestAnimalPerdidoCreate = {
    especie: '',
    caracteristicas_fisicas: '',
    foto: '',
    quando: new Date(),
    onde: ''
  }

  response: ResponseAnimalPerdidoCreate; 

  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef; files  = [];  

  constructor(private  service: CadstroAnimaisPerdidoService, private uploadService: UploadService) { }

  ngOnInit(): void {

  } 

  uploadFile(file) {  
    const formData = new FormData();  
    formData.append('file', file.data);  
    file.inProgress = true;  
    this.uploadService.upload(formData).pipe(  
      map(event => {  
        switch (event.type) {  
          case HttpEventType.UploadProgress:  
            file.progress = Math.round(event.loaded * 100 / event.total);  
            break;  
          case HttpEventType.Response:  
            return event;  
        }  
      }),  
      catchError((error: HttpErrorResponse) => {  
        file.inProgress = false;  
        return of(`${file.data.name} upload failed.`);  
      })).subscribe((event: any) => {  
        if (typeof (event) === 'object') {  
          console.log(event.body); 
          // colocando o caminho da foto que foi feito o upload
          this.request.foto = event.body.data.arquivo;  
        }  
      });  
  }

  onClick() {  
    const fileUpload = this.fileUpload.nativeElement;fileUpload.onchange = () => {  
    for (let index = 0; index < fileUpload.files.length; index++)  
    {  
     const file = fileUpload.files[index];  
     this.files.push({ data: file, inProgress: false, progress: 0});  
    }  
      this.uploadFiles();  
    };  
    fileUpload.click();  
}

  private uploadFiles() {  
    this.fileUpload.nativeElement.value = '';  
    // this.files.forEach(file => {  
    //   this.uploadFile(file);  
    // });  
    this.uploadFile(this.files[ this.files.length - 1]);  
}

  save() {
    this.service.createCadastroAnimaisPerdidos(this.request).subscribe(res => {
      this.response = res;
    });
  }



}
