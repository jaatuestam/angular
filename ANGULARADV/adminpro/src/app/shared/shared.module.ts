import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  imports: [],
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
