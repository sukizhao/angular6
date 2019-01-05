import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../myService/storage.service';//引入服务
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    private router: Router,
    private service: StorageService
  ) {
    service.suki.name = '炒肥肠';
  }

  ngOnInit() {
    console.log(this.service.suki);
  }

}
