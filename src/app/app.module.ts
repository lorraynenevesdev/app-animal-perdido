import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAnimaisPerdidosComponent } from './lista-animais-perdidos/lista-animais-perdidos.component';
import { CadastroAnimaisPerdidosComponent } from './cadastro-animais-perdidos/cadastro-animais-perdidos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { UpdateAnimaisPerdidosComponent } from './update-animais-perdidos/update-animais-perdidos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAnimaisPerdidosComponent,
    CadastroAnimaisPerdidosComponent,
    UpdateAnimaisPerdidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule, 
    MatToolbarModule,
    MatMenuModule,
    MatIconModule, 
    MatButtonModule, 
    MatProgressSpinnerModule,
    MatInputModule, 
    MatFormFieldModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatProgressBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
