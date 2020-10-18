<template>
   <article class="art4">
            <section class="art4_one">
                <a href="#">热门推荐</a>
                <a href="#">发现好货</a>
                <a href="#">只看专场</a>
                <a href="#">只看商品</a>
            </section>
            <section class="art4_two" v-for="(i,index) in goods" :key='index'>
                <div >
                     <img :src="i.imgurl" alt="">
                </div>
                <div class="ya">
                    <p>{{i.title}}</p>
                    <p>￥<span>{{i.price}}</span></p>
                    <p>{{i.sale}}</p>
                    <a class="qianggou" href="#">立即抢购</a>
                </div>
            </section>
            
                    
        </article>
</template>

<script>
export default {
  name: '',
  // props:['goods'],
  data(){
    return {
       goods:[
          {imgurl:require("../assets/images/index_images/shop_4.jpg"),title:"雅诗兰黛染发膏60ml",price:"123.00",sale:"已售800件"},
          {imgurl:require("../assets/images/index_images/index_03.png"),title:"雅诗兰黛染发膏60ml",price:"123.00",sale:"已售800件"},
          {imgurl:require("../assets/images/index_images/index_06.png"),title:"雅诗兰黛染发膏60ml",price:"123.00",sale:"已售800件"},
        ]
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
.art4 {
  background: white;
  overflow: hidden;
}
.art4 .art4_one {
  width: 100%;
  height: 0.68rem;
  display: flex;
}
a{
    text-decoration: none;
}
.art4 .art4_one a {
  width: 25%;
  height: 0.72rem;
  line-height: 0.72rem;
  border: 0.01rem solid #d0d0d0;
  text-align: center;
  font-size: 0.28rem;
  color: #373737;
}
.art4 .art4_one a:hover {
  background: #f26b11;
  color: white;
  border: 0.01rem solid #f26b11;
}
.art4 .art4_one a:nth-child(2) {
  border-left: 0;
  border-right: 0;
}
.art4 .art4_one a:nth-child(3) {
  border-right: 0;
}
.art4 .art4_two {
    width: 95%;
  height: 3rem;
  margin: 0 auto;
  box-shadow: 0 0 0.06rem 0.03rem #e9e9e9;
  display: flex;
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
}
.art4 .art4_two div:first-child {
  width: 2.85rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.art4 .art4_two div:first-child img {
  height: 2.2rem;
}
.art4 .art4_two div.ya {
  padding-top: 0.46rem;
  margin-left: 0.6rem;
}
.art4 .art4_two div.ya p:first-child {
  font-size: 0.28rem;
  color: #353535;
  margin: 0;
}
.art4 .art4_two div.ya p:nth-child(2) {
  font-size: 0.18rem;
  color: #da3e49;

}
.art4 .art4_two div.ya p:nth-child(2) span {
  font-size: 0.24rem;
}
.art4 .art4_two div.ya p:nth-child(3) {
  font-size: 0.24rem;
  margin: 0.1rem 0;
  color: #9b9b9b;
}
.art4 .art4_two div.ya a.qianggou {
  display: block;
  width: 1.64rem;
  height: 0.52rem;
  line-height: 0.52rem;
  background: #f26b11;
  color: white;
  font-size: 0.22rem;
  text-align: center;
  border-radius: 0.06rem;
}
</style>
