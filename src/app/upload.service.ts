import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { map } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url: string = "http://localhost:3000/upload-file";  

  constructor(private httpClient: HttpClient) { }
  
  public upload(formData) {

    return this.httpClient.post<any>(this.url, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  
  }
}
