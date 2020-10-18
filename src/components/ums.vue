<template>
  <div class=''>
       <article class="art2">
             <section class="art_left ">
                 <div><img src="../assets/images/index_images/timer.jpg" alt=""><h2>限时抢购</h2></div>
                 <p>每天零点抢  好货抢不停</p>
                 <div><span>02</span>:<span>16</span>:<span>45</span><div>秒杀 </div> </div>
                   <div><div><span>￥</span>14.8</div></div>
             </section>
             <section class="art_right ">
                 <section class="right_top">
                     <div class="top_left">
                        <div><h2>品牌上新</h2><span>拆</span></div>
                        <p>每日九点 抢大牌</p>
                        <div><img src="../assets/images/index_images/brand.jpg" alt=""></div>
                     </div>
                     <div class="top_right">
                                     <img src="../assets/images/index_images/shop_1.jpg" alt="">
                     </div>

                 </section>
                 <section class="right_bottom">
                     <figure>
                        <h2>每日十件</h2>
                        <p>只为你选好货</p>
                        <div>
                            <img src="../assets/images/index_images/shop_2.jpg" alt="">
                        </div>
                     </figure>
                     <figure>
                        <h2>拼啊</h2>
                        <p>超级好拼拼团</p>
                        <div>
                            <img src="../assets/images/index_images/shop_3.jpg" alt="">
                        </div>
                     </figure>

                 </section>
            </section>
            
        </article>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
.fl{
    float: left;
}
.fr{
    float: right;
}
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
.clearfix {
    *zoom: 1;
}
.art2 {
  display: flex;
  height: 3.8rem;
  background: white;
  margin-bottom: 0.3rem;
  margin-top: 0.2rem;
}
.art2 .art_left {
  width: 40%;
  height: 100%;
  padding-left: 0.2rem;
  padding-top: 0.2rem;
  border-right: 0.01rem solid #f0f0f0;
}
.art2 .art_left div:first-child {
  margin-bottom: 0.1rem;
}
.art2 .art_left div:first-child img {
  height: 0.32rem;
}
.art2 .art_left div:first-child h2 {
  display: inline-block;
  margin: 0;
  color: #f64e8b;
  font-size: 0.28rem;
  margin-left: 0.16rem;
   margin-bottom: 0;
  font-weight: normal;
}
.art2 .art_left p:nth-child(2) {
  font-size: 0.1rem !important;
  color: #9b9b9b;
  margin-bottom: 0.1rem;
  margin: 0;
}
.art2 .art_left div:nth-child(3) {
  display: inline-block;
  height: 0.42rem;
  line-height: 0.42rem;
  font-size: 0.16rem;
  font-weight: bold;
}
.art2 .art_left div:nth-child(3) span {
  display: inline-block;
  width: 0.42rem;
  height: 0.42rem;
  line-height: 0.42rem;
  background: #27272f;
  border-radius: 0.06rem;
  text-align: center;
  font-size: 0.18rem;
  font-weight: normal;
  color: #f5f6fb;
  margin: 0 0.07rem;
}
.art2 .art_left div:nth-child(3) span:first-child {
  margin-left: 0;
}
.art2 .art_left div:nth-child(3) div {
  display: inline-block;
  vertical-align: middle;
  width: 0.97rem;
  height: 0.4rem;
  line-height: 0.4rem;
  background: url("../assets/images/index_images/bg.jpg") no-repeat;
  background-size: 0.97rem 0.4rem;
  margin: 0 0 0.05rem 0.23rem;
  color: #30261a;
  font-size: 0.24rem;
  font-weight: normal;
  text-align: center;
}
.art2 .art_left div:last-child {
  margin-left: 0.4rem;
  height: 2rem;
  background: url("../assets/images/index_images/shop_5.jpg") no-repeat;
  background-size: auto 2rem;
  position: relative;
}
.art2 .art_left div:last-child span {
  font-size: 0.15rem;
}
.art2 .art_left div:last-child div {
  width: 0.84rem;
  height: 0.84rem;
  line-height: 0.84rem;
  background: #ff3179;
  border-radius: 50%;
  text-align: center;
  font-size: 0.22rem;
  color: white;
  position: absolute;
  bottom: 0;
  right: 0.38rem;
}
.art2 .art_right {
    width: 60%;
}
.art2 .art_right .right_top {
  padding-left: 0.2rem;
  height: 1.87rem;
  border-bottom: 0.01rem solid #f0f0f0;
  border-top: 0;
  display: flex;
 justify-content: space-around;
}
.art2 .art_right .right_top .top_left div:first-child {
  margin-top: 0.2rem;
  margin-bottom: 0.1rem;
  height: 0.28rem;
  line-height: 0.28rem;
}
.art2 .art_right .right_top .top_left div:first-child h2 {
  display: inline-block;
  color: #f64e8b;
  font-size: 0.28rem;
  vertical-align: middle;
  font-weight: normal;
}
.art2 .art_right .right_top .top_left div:first-child span {
  display: inline-block;
  vertical-align: middle;
  width: 0.32rem;
  height: 0.24rem;
  line-height: 0.24rem;
  background: #fd2d67;
  text-align: center;
  font-size: 0.18rem;
  color: #ffdbe9;
  margin-left: 0.09rem;
}
.art2 .art_right .right_top .top_left p:nth-child(2) {
  /* font-size: 0.2rem; */
  color: #9b9b9b;
  margin-bottom: 0.3rem;
}
.art2 .art_right .right_top .top_left div:last-child {
  height: 0.32rem;
}
.art2 .art_right .right_top .top_left div:last-child img {
  height: 100%;
}
.art2 .art_right .right_top .top_right {
  width: 1.92rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.art2 .art_right .right_top .top_right img {
  height: 1.8rem;
}
.art2 .art_right .right_bottom {
    width: 100%;
  height: 1.9rem;
  display: flex;
  justify-content: space-between;
}
.art2 .art_right .right_bottom figure {
  text-align: center;
  margin: 0;
  width: 100%;
  height: 1.9rem;
}
.art2 .art_right .right_bottom figure h2 {
  /* margin: 0.14rem 0 0.06rem 0; */
  margin: 0;
  color: #f64e8b;
  font-size: 0.28rem;
  font-weight: normal;
}
.art2 .art_right .right_bottom figure p:nth-child(2) {
  font-size: 0.2rem;
  color: #9b9b9b;
      margin: 0;
}
.art2 .art_right .right_bottom figure div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.1rem;
  max-height: 1.2rem;
}
.art2 .art_right .right_bottom figure div img {
  height: 1rem;
}
.art2 .art_right .right_bottom figure:first-child {
  width: 50%;
  margin: 0;
  border-right: 0.01rem solid #f0f0f0;
}
.art2 .art_right .right_bottom figure:last-child {
  width: 50%;
}
</style>
