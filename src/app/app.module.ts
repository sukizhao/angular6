import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageService } from './myService/storage.service';//引入服务
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


//引入了路由的配置模块
import { AppRoutingModule } from './app-routing.module';

import { ShopComponent } from './components/shop/shop.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ShoplistComponent } from './components/shoplist/shoplist.component';
import { ShopcateComponent } from './components/shopcate/shopcate.component';
import { Ellipsis } from './myPipe/ellipsisPipe';//导入自定义管道

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    WelcomeComponent,
    ShoplistComponent,
    ShopcateComponent,
    Ellipsis,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
