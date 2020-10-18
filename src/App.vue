<template>
  <div id="app">
    <div>
    <!-- <home :is="active"></home> -->
    <!-- <shoppingcar :is="active"></shoppingcar>
    <mine :is="active"></mine> -->
       <ul class="footer">
         <li v-for="m in arr" :key="m.url">
           <router-link :to="m.url" active-class='active'>
                 <img :src="current===m.url?m.icon:m.iconA" alt="">
                  <p>{{m.title}}</p>
           </router-link>

         </li>
       </ul>
            <!-- <a href="javascript:;" @click="active='home'">
                <span></span>
                <p>首页</p>
            </a>
            <a href="javascript:;" @click="active='shoppingcar'" >
                <span></span>
                <p>购物车</p>
            </a>
            <a href="javascript:;" @click="active='mine'" >
                <span></span>
                <p>我的</p>
            </a>
            <a href="javascript:;" @click="active='cnode'" >
                <span></span>
                <p>cnode</p>
            </a> -->
            </div>
        <router-view></router-view>
  </div>
</template>

<script>
// import home from "./pages/home"
// import shoppingcar from './pages/shoppingcar'
// import mine from './pages/mine'
// import cnode from './pages/cnode'
export default {
  name: 'App',
  watch: {
    $route(route){
      // console.log(route)
      this.current = route.fullPath;
      }
    },
  components: {
    // home,shoppingcar,mine,cnode
  },data(){
    return{
      // active:"home",
       current:'/home',
      arr:[
          
         {
          title:"首页",
          url:"/home" ,
          icon:require('./assets/icon/home.png'),
          iconA:require('./assets/icon/home-a.png')
          },
          { 
            title:"购物车" ,
            url:"/shoppingcar",
            icon:require('./assets/icon/shopcar.png'),
            iconA:require('./assets/icon/shopcar-a.png')
            },
          { 
            title:"我的" ,
            url:"/mine",
            icon:require('./assets/icon/user.png'),
            iconA:require('./assets/icon/user-a.png')
            },
          { 
            title:"cnode",
            url:"/cnode" ,
            icon:require('./assets/icon/C.png'),
            iconA:require('./assets/icon/C-a.png')
            },
        ]
    }
  }
}
</script>

<style >
body,html{
 margin: 0;
    padding: 0;
}
  #app{
    width: 100%;
    background: #e9e9e9;
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
} 
.footer .active{
  color:red ;
}
.footer {
    padding: 0.2rem 0;
  height: 1.2rem;
  background: white;
  border-top: 0.01rem solid #eaeaea;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  width: 100%; 
   position: fixed;
  bottom: 0;
  z-index: 10;
}
.footer a {
  font-size: 0.18rem;
  color: #838383;
}
 
.footer li{
  list-style: none;
  text-align: center;

}
.footer p{
  margin: 0;
}
.footer img{
  width: 20px;
  height: 20px;
}


</style>
