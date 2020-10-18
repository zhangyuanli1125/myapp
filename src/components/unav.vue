<template>
<div class="nav">

            <div class="nav_left">
                <ul class="clearfix">
                    <li><a href="#" target="_blank">推荐<span></span></a></li>
                    <li><a href="#" target="_blank">女装<span></span></a></li>
                    <li><a href="#" target="_blank">鞋包<span></span></a></li>
                    <li><a href="#" target="_blank">居家<span></span></a></li>
                    <li><a href="#" target="_blank">母婴儿童<span></span></a></li>
                    <li><a href="#" target="_blank">美食<span></span></a></li>
                    <li><a href="#" target="_blank">果<span></span></a></li>
                  
                </ul>
            </div>
            <div class="nav_right">
                <a href="#"><img src="../assets/images/index_images/arrow.jpg" alt=""></a>
            </div>
      
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
.nav {
    /* width: 100%; */
    padding: 0;
    margin-top: 0;
  position: relative;
  height: 0.76rem;
  line-height: 0.76rem;
  background: white;
  /* padding-left: 0.12rem; */
  align-items: center;
}
a{
    text-decoration: none;
}
.nav .nav_left{
    width: 100%;
}
.nav .nav_left ul{
    width: 96%;
    height: 0.76rem;
    display: flex;
    justify-content: space-around;
    /* padding: 0.2rem; */
    padding-left: 0.3rem;
    margin: 0;
}
.nav .nav_left ul li {
  float: left;
  height: 0.76rem;
  list-style: none;
}
.nav .nav_left ul li:hover a {
  display: block;
  color: #ff003a;
  height: 0.72rem;
  border-bottom: 0.04rem solid #ff003a;
  position: relative;
}
.nav .nav_left ul li:hover a span {
  display: inline-block;
  width: 0.02rem;
  height: 0.32rem;
  background: #f1f1f1;
  position: absolute;
  top: 0.22rem;
  right: -0.2rem;
}
.nav .nav_left ul li a {
  font-size: 0.26rem;
  color: #353535;
}
.nav .nav_right {
  position: absolute;
  top: 0;
  right: 0;
  background: white;
  width: 1rem;
  height: 0.76rem;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.nav .nav_right a {
  display: block;
  width: 0.35rem;
  height: 0.2rem;
  margin: 0 auto;
}
.nav .nav_right a img {
  width: 0.35rem;
  height: 0.2rem;
}
</style>
