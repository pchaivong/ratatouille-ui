import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

  private apiUrl = 'http://localhost:8080/api/menus'

  constructor(private http: Http) { }


  addMenu(name, description, price){
    return this.http.post(this.apiUrl,
    { name: name, description: description, price: price})
    .map((res: Response) => res.json())    
  }

  listMenu() {
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json())
  }
}
