<template>
  <div class=''>
        <article class="art1">
            <div v-for="(i,index) in user" :key="index">
                <a href="#" ><img :src="i.imgurl" alt="">  </a>
                <a href="#" ><span>{{i.title}}</span></a>
            </div>
        </article>
  </div>
</template>

<script>
export default {
  name: '',
    // props:['user'],
  data(){
    return {
         user:[
          {imgurl:require("../assets/images/index_images/icon_1.jpg"),title:"限时抢购"},
          {imgurl:require("../assets/images/index_images/icon_2.jpg"),title:"联系我们"},
          {imgurl:require("../assets/images/index_images/icon_3.jpg"),title:"积分商城"},
          {imgurl:require("../assets/images/index_images/icon_4.jpg"),title:"商品分类"}

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
.art1 {
    /* margin-top: 0.6rem; */
  height: 1.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  margin-bottom: 0.3rem;
}
a{
    text-decoration: none;
}
.art1 div {
  min-width: 1.1rem;
  height: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.art1 div a {
  display: block;
  font-size: 0.24rem;
  color: #6f6f6f;
}
.art1 div a img {
  max-height: 0.64rem;
}

</style>
