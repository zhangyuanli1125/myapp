<template>
    <div class="shop">
    <uhead></uhead>
     <nei ></nei>
     <!-- <foot></foot> -->
    </div>
</template>

<script>
import uhead from '../components/header'
import nei from '../components/nei'
import foot from '../components/footer'
export default {
    data() {
        return {
          // shop:[
          //     {imgurl:require("../assets/images/shoping_car_images/shop_4.jpg"),title:"欧莱雅面霜",guige:"规格:50ml",price:"123.00",num:1,show:false},
          //     {imgurl:require("../assets/images/shoping_car_images/index_06.png"),title:"雅诗兰黛护手霜",guige:"规格:50ml",price:"26.00",num:1,show:false},
          //     {imgurl:require("../assets/images/shoping_car_images/shop.jpg"),title:"诗兰黛素颜霜",guige:"规格:50ml",price:"226.00",num:1,show:false}
          // ]
        };
    },
    components:{
  uhead,nei,foot
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped >
   .shop{
         font-size: 0.12rem;
  line-height: 1;
  background: #f1f1f1;
  font-family: "微软雅黑";
  margin: 0;
  padding: 0;
   }
</style>
