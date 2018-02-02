import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule} from '@angular/router';
import { CommonModule} from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    NopagefoundComponent
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    NopagefoundComponent
  ],
  providers: []
})
export class SharedModule { }
