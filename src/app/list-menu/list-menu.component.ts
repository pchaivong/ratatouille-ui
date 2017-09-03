import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {

  private menuList = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.listMenu()
    .subscribe(data => {
      console.log(data);
      this.menuList = data;
    })
  }

}
