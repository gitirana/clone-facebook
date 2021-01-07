import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'

import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class HomeModule { }
