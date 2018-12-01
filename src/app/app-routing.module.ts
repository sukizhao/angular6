// ng new 项目名称  --routing  

//路由配置文件

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//引入组件

import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';


import { WelcomeComponent } from './components/welcome/welcome.component';
import { ShoplistComponent } from './components/shoplist/shoplist.component';
import { ShopcateComponent } from './components/shopcate/shopcate.component';



//配置路由
const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent,
    children:[   /*配置子路由*/

      {
        path: 'welcome',
        component:WelcomeComponent,
      },
      {   /*匹配不到路由的时候加载的组件*/
        path: '**',  /*任意的路由*/
        // component:HomeComponent
        redirectTo:'welcome'
      }
    ]
  },
   {
    path: 'shop',
    component:ShopComponent,
    children:[
      {
          path: 'shoplist',
          component:ShoplistComponent,
      },
      {
          path: 'shopcate',
          component:ShopcateComponent,
      },
      {   /*匹配不到路由的时候加载的组件*/
        path: '**',  /*任意的路由*/
        // component:HomeComponent
        redirectTo:'shoplist'
      }
    ]

  },{   /*匹配不到路由的时候加载的组件*/
    path: '**',  /*任意的路由*/
    // component:HomeComponent
    redirectTo:'home'
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
