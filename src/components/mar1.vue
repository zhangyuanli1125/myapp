<template>
    <div>
       <article class="art1">
           <a href="#">
               <img src="../assets/images/mine_images/icon_1.jpg" alt="">
               <p>全部订单</p>
           </a>
           <a href="#">
            <img src="../assets/images/mine_images/icon_2.jpg" alt="">
            <p>待付款</p>
        </a>
        <a href="#">
            <img src="../assets/images/mine_images/icon_3.jpg" alt="">
            <p>待收货</p>
        </a>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>
.art1 {
  height: 1.44rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.2rem;
  background: white;
}
.art1 a {
    text-decoration: none;
  font-size: 0.24rem;
  color: #686868;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.art1 a img {
  width: 0.44rem;
  margin-top: 0.2rem;
}
</style>
