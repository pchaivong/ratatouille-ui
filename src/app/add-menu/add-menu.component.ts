import { Component, OnInit} from '@angular/core';

import { MenuService } from '../menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  menuName = '';
  menuDescription = '';
  menuSalePrice = 0.0;

  data: any = {};

  constructor(private menuService:MenuService) { }

  ngOnInit() {
  }

  submit() {

    this.menuService.addMenu(this.menuName, this.menuDescription, this.menuSalePrice)
    .subscribe(data => {
      console.log(data);
    })

  }

}
