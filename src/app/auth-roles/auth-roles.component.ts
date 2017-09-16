import { Component, OnInit } from '@angular/core';
import { AuthRolesService } from '../auth-roles.service';



@Component({
  selector: 'app-auth-roles',
  templateUrl: './auth-roles.component.html',
  styleUrls: ['./auth-roles.component.css']
})
export class AuthRolesComponent implements OnInit {

  private roles = [];
  constructor(private authService:AuthRolesService) { }

  ngOnInit() {
    this.refreshRoles();
  }

  private refreshRoles() {
    this.authService.listRoles()
    .subscribe(data => {
      this.roles = data;
    });
  }

  getRoles() {
    return this.roles;
  }

  deleteRole(id) {
    this.authService.deleteRole(id)
    .subscribe(() => this.refreshRoles());
  }

  addRole(roleName){
    console.log("Add role name: " + roleName);
    let req = {name: roleName};
    this.authService.createRole(req)
    .subscribe(res => {
      console.log(res.json());
      this.refreshRoles();
    }
    );
  }

}
