import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthRolesService {

  private apiUrl = 'http://localhost:8080/api/roles'

  constructor(private http: Http) { }

  listRoles() {
    return this.http.get(this.apiUrl)
    .map((resp:Response) => resp.json());
  }

  deleteRole(id) {
    console.log("Delete roles id: " + id);
    console.log(this.apiUrl + '/' + id);
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createRole(role) {
    return this.http.post(this.apiUrl, role);
  }
}
