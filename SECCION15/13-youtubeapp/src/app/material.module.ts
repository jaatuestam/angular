import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports:[
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
