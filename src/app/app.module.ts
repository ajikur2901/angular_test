import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardTitleComponent } from './card-title/card-title.component';

import { CardTitleService } from './card-title/card-title.service';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardTitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [ToolbarComponent,CardTitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
