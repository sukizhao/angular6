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
    // 这里有个大坑：就是必须点击商品执行shop.ts才能service.suki.name 才是炒肥肠，如果只是首页会从service获取值，也就是能传值，但是改变不了最初始服务器定义的值
  }

  ngOnInit() {
    console.log(this.service.suki);
  }

}
