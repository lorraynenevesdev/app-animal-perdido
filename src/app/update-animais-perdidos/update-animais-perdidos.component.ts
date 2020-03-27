import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { CadstroAnimaisPerdidoService } from '../cadastro-animais-perdidos/cadstro-animais-perdido.service';
import { ResponseAnimalPerdidoUpdate, RequestAnimalPerdidoUpdate, AnimalPerdido } from '../lista-animais-perdidos/animal-perdido.model';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';  
import { UploadService } from  '../upload.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-update-animais-perdidos',
  templateUrl: './update-animais-perdidos.component.html',
  styleUrls: ['./update-animais-perdidos.component.css']
})
export class UpdateAnimaisPerdidosComponent implements OnInit {

  id: string; 

  constructor( private service: CadstroAnimaisPerdidoService, private route: ActivatedRoute, private uploadService: UploadService) { }

  request: AnimalPerdido = {
    idanimal_perdido: null,
    especie: '',
    caracteristicas_fisicas: '',
    foto: '',
    quando: null,
    onde: ''
  }

  response: ResponseAnimalPerdidoUpdate; 

  requestUpdate: RequestAnimalPerdidoUpdate; 

  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef; files  = [];  

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getAnimaisPerdidosPorId(this.id)
      .subscribe( res => { 
        this.request = res.data; 
      } ); 
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

  update() {
    this.requestUpdate = {
      idanimal_perdido: this.request.idanimal_perdido,
      especie: this.request.especie,
      caracteristicas_fisicas: this.request.caracteristicas_fisicas,
      foto: this.request.foto,
      quando: this.request.quando,
      onde: this.request.onde
    }
    this.service.updateAnimaisPerdidos(this.id, this.request).subscribe(res => {
      this.response = res;
    }); 

  }

}
