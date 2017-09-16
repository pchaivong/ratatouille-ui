import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpModule, JsonpModule, Jsonp } from '@angular/http';

import { AppComponent } from './app.component';
import { AddMenuComponent } from './add-menu/add-menu.component';

import { MenuService } from './menu.service';
import { AuthRolesService } from './auth-roles.service';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { AuthRolesComponent } from './auth-roles/auth-roles.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMenuComponent,
    ListMenuComponent,
    AuthRolesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [MenuService, Jsonp, AuthRolesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
