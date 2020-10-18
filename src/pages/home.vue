<template>
  <div class='home'>
      <uheader></uheader>
      <unav></unav>
      <banner></banner>
      <uqg ></uqg>
      <ums></ums>
      <fig></fig>
      <goods ></goods>
      <!-- <goods :goods="goods"></goods> -->
  </div>
</template>

<script>
import uheader from '../components/uheader'
import unav from '../components/unav'
import banner from '../components/banner'
import uqg from '../components/uqg'
import ums from '../components/ums'
import fig from '../components/fig'
import goods from '../components/goods'
export default {
  name: '',
  
  data(){
    return {
        // user:[
        //   {imgurl:require("../assets/images/index_images/icon_1.jpg"),title:"限时抢购"},
        //   {imgurl:require("../assets/images/index_images/icon_2.jpg"),title:"联系我们"},
        //   {imgurl:require("../assets/images/index_images/icon_3.jpg"),title:"积分商城"},
        //   {imgurl:require("../assets/images/index_images/icon_4.jpg"),title:"商品分类"}

        // ],
        // goods:[
        //   {imgurl:require("../assets/images/index_images/shop_4.jpg"),title:"雅诗兰黛染发膏60ml",price:"123.00",sale:"已售800件"},
        //   {imgurl:require("../assets/images/index_images/index_03.png"),title:"雅诗兰黛染发膏60ml",price:"123.00",sale:"已售800件"},
        //   {imgurl:require("../assets/images/index_images/index_06.png"),title:"雅诗兰黛染发膏60ml",price:"123.00",sale:"已售800件"},
        // ]
     
    }
  },
  components: {
      uheader,unav,banner,uqg,ums,fig,goods
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>

</style>
