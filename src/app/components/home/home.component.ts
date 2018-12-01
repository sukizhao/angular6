import { Component, OnInit } from '@angular/core';

//引入 Router     NavigationExtras  get传参
import { Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }  /*声明*/

  ngOnInit() {
    
  }

  goNews(){

    alert('goNews');

    //js跳转路由

    // this.router.navigate(['/news']);
     this.router.navigate(['/newscontent','123']);

  }

  goShop(aid,id){

    //跳转路由get传值

    let navigationExtras: NavigationExtras = {
      queryParams: { 'aid':aid,"id":id }
    // fragment: 'anchor'   //锚点    参考官方文档
  };
  
  //配置参数
     this.router.navigate(['/shoplist'],navigationExtras);
  }

}
