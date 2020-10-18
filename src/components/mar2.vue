<template>
    <div>
  <article class="art2">
         <section>
             <div><div><img src="../assets/images/mine_images/icon_4.jpg" alt=""></div>地址管理</div>
             <a href="#"><img src="../assets/images/public/right.jpg" alt=""></a>
         </section> 
         <section>
            <div><div><img src="../assets/images/mine_images/icon_5.jpg" alt=""></div>我的钱包</div>
            <a href="#"><span>200余额</span><img src="../assets/images/public/right.jpg" alt=""></a>
        </section>
         <section>
            <div><div><img src="../assets/images/mine_images/icon_6.jpg" alt=""></div>我的优惠券</div>
            <a href="#"><img src="../assets/images/public/right.jpg" alt=""></a>
        </section>
        <section>
            <div><div><img src="../assets/images/mine_images/icon_7.jpg" alt=""></div>我的二维码</div>
            <a href="#"><img src="../assets/images/public/right.jpg" alt=""></a>
        </section>
        <section>
            <div><div><img src="../assets/images/mine_images/icon_8.jpg" alt=""></div>我的小伙伴</div>
            <a href="#"><img src="../assets/images/public/right.jpg" alt=""></a>
        </section>
       
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
.art2 {
  padding-bottom: 1.34rem;
  margin-bottom: 0;
  background: white;
}
a{
    text-decoration: none;
}
.art2 section {
  height: 1.1rem;
  border-bottom: 0.01rem #d9d9d9 solid;
  display: flex;
  justify-content: space-between;
  font-size: 0.24rem;
  color: #616161;
  align-items: center;
}
.art2 section div {
  display: flex;
  align-items: center;
  margin-left: 0.3rem;
}
.art2 section div div {
  width: 0.67rem;
}
.art2 section div div img {
  height: 0.36rem;
  margin-right: 0.25rem;
}
.art2 section a img {
  height: 0.24rem;
  margin-right: 0.36rem;
}
.art2 section a span {
  color: #f3680b;
  margin-right: 0.2rem;
}
</style>
