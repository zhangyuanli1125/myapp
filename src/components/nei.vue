<template>
    <article>
            <section v-for="(i,index) in shop" :key="index">
                <div class="sec_left">
                    <input type="checkbox"   v-model="i.show">
                      <!-- <a href="#" class="yuan" @click='click(i)' ><img src="../assets/images/shoping_car_images/select.jpg" alt="" v-show='i.show'></a> -->
                           <img :src="i.imgurl" alt="">
                       <div>
                           <p>{{i.title}}</p>
                           <p>规格:50ml</p>
                           <p>￥{{i.price}}</p>
                       </div>
                 </div> 
                <div class="sec_right">
                       <span @click="i.num>0?i.num--:0"><a href="#">-</a></span>
                       <span><a href="#">{{i.num}}</a></span>
                       <span @click="i.num++"><a href="#">+</a></span>
                </div>
                <!-- <a class="del" >
                    删除
                  </a> -->
            </section>  
              <section>
                <div class="sec_left">
                    <div><span>全选：</span> <input type="checkbox" name="" id=""  v-model="allSelect"></div>
                       <!-- <div @click="all" v-model="checkall"><a href="#"><img src="../assets/images/shoping_car_images/select.jpg" alt="" v-show='show'></a><span class="quan">全选</span></div> -->
                      
                       <div class="zongji">
                           <p class="heji">总计：<span>¥{{sum}}</span></p>
                           <p>不含运费，已优惠￥0.00</p>
                       </div>
                 </div> 
                <a href="#" class="sec_right">
                       <p>去结算({{num}})件</p>
                </a>
               
            </section>
        </article>
</template>

<script>
export default {
    // props:["shop"],
    data() {
        return {
          show:false,
            shop:[
              {imgurl:require("../assets/images/shoping_car_images/shop_4.jpg"),title:"欧莱雅面霜",guige:"规格:50ml",price:"123.00",num:1,show:false},
              {imgurl:require("../assets/images/shoping_car_images/index_06.png"),title:"雅诗兰黛护手霜",guige:"规格:50ml",price:"26.00",num:1,show:false},
              {imgurl:require("../assets/images/shoping_car_images/shop.jpg"),title:"诗兰黛素颜霜",guige:"规格:50ml",price:"226.00",num:1,show:false}
          ]
        };
    },
    watch:{
       shop:{
          handler(val){
              localStorage.shopCar=JSON.stringify(val)
          },
          deep:true,
      
       }
    },
    created() {
        if(localStorage.shopCar){
            this.shop=JSON.parse(localStorage.shopCar)
            // this.shopCar=this.shop
        }
    },
    mounted() {
         
    },
    methods: {
    //  click(i){
       
    //         i.show=!(i.show)
    //  },
    //  all(){
    //    this.show=!(this.show)
    //    this.shop.forEach(item=>{
    //        item.show=this.show
    //    })
    //  },
    },
    computed:{
            allSelect:{
                    set(val){
                        this.shop.forEach(item=>item.show = val)
                    },
                    get(){
                        let tag = true;
                        let x = this.shop.find(item => !item.show);
                        if(x){
                            tag = false;
                        }
                        return tag
                    }
          },
       sum(){
          let sum=0
           this.shop.forEach(item=> { 
               if(item.show==true){
                   sum+=item.price*item.num  
               }
               
           })
           return sum
       },num(){
           let num=0
           this.shop.forEach(item=> { 
               if(item.show==true){
                   num+=item.num  
               }
                 })
                return num
       }
    }
};
</script>

<style scoped>
article {
  background: white;
  padding-top: 0.3rem;
}
.sec_right a{
    display: inline-block;
    width: 100%;
}
article section {
  height: 1.72rem;
  box-shadow: 0 0 0.1rem 0.03rem #e9e9e9;;
  margin-top: 0.25rem;
  display: flex;
  justify-content: space-between;
}
article section:hover .del {
  display: block;
}
 .dui{
    display: none;
} 
.yuan {
    width: 0.3rem;
    height: 0.3rem;
    border: 0.01rem solid #b43929;
    border-radius: 50%;
    line-height: 0.3rem;
    margin-left: 0.3rem;
    margin-right: 0.2rem;
    text-align: center;
}
/* article section:hover a.yuan {
  display: none;
} */
article section .sec_left {
  display: flex;
  align-items: center;
}
a{
	/*去掉a标签的下划线*/
    text-decoration: none;
    color: #333/* 颜色可根据实际设置 */
}
button
article section .sec_left a:first-of-type {
  margin: 0 0.4rem 0 0.26rem;
  width: 0.36rem;
  height: 0.36rem;
  line-height: 0.36rem;
  border-radius: 50%;
  border: 0.02rem solid #b43929;
  text-align: center;
  background-size: 0.17rem auto;
}
article section .sec_left a:first-of-type img {
  height: 0.13rem;
  vertical-align: middle;
}
article section .sec_left div:last-child {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  font-size: 0.24rem;
}
article section .sec_left div:last-child p:first-child {
  color: #333333;
  margin: 0;
}
article section .sec_left div:last-child p:nth-child(2) {
  color: #666666;
  font-size: 0.22rem;
  margin: 0;
}
article section .sec_left div:last-child p:last-child {
  color: #e43a3b;
  margin: 0;
}
article section .sec_left > img {
  height: 1.08rem;
  margin-right: 0.3rem;
}
article section .sec_right {
  display: flex;
  align-items: flex-end;
  margin-right: 0.3rem;
  margin-bottom: 0.24rem;
}
article section .sec_right span {
  width: 0.62rem;
  height: 0.62rem;
  line-height: 0.62rem;
  font-size: 0.22rem;
  text-align: center;
  border: 0.01rem solid #515151;
}
article section .sec_right span:first-child {
  border-right: 0;
  border-radius: 0.04rem 0 0 0.04rem;
}
article section .sec_right span:nth-child(2) {
  border-right: 0;
  width: 0.79rem;
}
article section .sec_right span:nth-child(3) {
  border-radius: 0 0.04rem 0.04rem 0;
}
article section .del {
  display: none;
  width: 0.98rem;
  height: 1.72rem;
  line-height: 1.72rem;
  text-align: center;
  background: #e43a3d;
  font-size: 0.18rem;
  color: white;
}
article section:nth-child(3) > .sec_left > img {
  height: 0.82rem;
}
article section:nth-child(4) {
  box-shadow: none;
  height: 1.16rem;
  border-top: 0.01rem solid #ebebeb;
  padding: 0;
  margin-bottom: 0;
  margin-top: 3.66rem;
  position: absolute;
      bottom: 60px;
    width: 100%;
}
article section:nth-child(4) .sec_left {
  display: flex;
  justify-content: space-between;
  width: 5rem;
  height: 100%;
}
article section:nth-child(4) .sec_left div:first-of-type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.26rem;
}
article section:nth-child(4) .sec_left div:first-of-type a {
  margin: 0;
  border: 1px solid #e43a3b;
  width: 0.3rem;
  height: 0.3rem;
    border-radius: 50%;
    padding: 0;
    text-align: center;
}
article section:nth-child(4) .sec_left div:first-of-type span {
  font-size: 0.22rem;
  color: #666666;
  width:40px
}
article section:nth-child(4) .sec_left div.zongji p:first-child {
  font-size: 0.3rem;
  color: #333;
}
article section:nth-child(4) .sec_left div.zongji p:first-child span {
  color: #e53b3c;
}
article section:nth-child(4) .sec_left div:last-child {
  justify-content: center;
  margin-left: 0.9rem;
}
article section:nth-child(4) .sec_left div:last-child p:last-child {
  font-size: 0.18rem;
  color: #bfbdbd;
}
article section:nth-child(4) .sec_right {
  float: right;
  width: 2.46rem;
  height: 1.16rem;
  margin-right: 0;
  margin-bottom: 0;
  background: #f26b11;
  font-size: 0.3rem;
  color: white;
  display: flex;
  justify-content: center;
}

</style>
