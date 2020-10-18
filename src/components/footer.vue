<template >
    <div class="footer">
            <a href="javascript:;" @click="active='home'">
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
        </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {
      
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>

a{
    text-decoration: none;
}
.footer {
    padding-top: 0.2rem;
  height: 1.2rem;
  background: white;
  border-top: 0.01rem solid #eaeaea;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  width: 100%;
}
.footer a {
  font-size: 0.18rem;
  display: flex;
  color: #838383;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer a span {
  display: block;
  width: 0.52rem;
  height: 0.53rem;
  /* margin-bottom: 0.1rem; */
}
.footer a:first-child span {
  background: url("../assets/images/public/icon_8.jpg") no-repeat;
  background-size: 0.52rem 0.53rem;
}
.footer a:first-child:hover span {
  background: url("../assets/images/public/icon_6.jpg") no-repeat;
  background-size: 0.49rem 0.53rem;
}
.footer a:first-child:hover p {
  color: #fb670f;
}
.footer a:nth-child(2) span {
  background: url("../assets/images/public/icon_7.jpg") no-repeat;
  background-size: 0.56rem 0.53rem;
}
.footer a:nth-child(2):hover span {
  background: url("../assets/images/public/icon_9.jpg") no-repeat;
  background-size: 0.57rem 0.51rem;
}
.footer a:nth-child(2):hover p {
  color: #fb670f;
}
.footer a:last-child span {
  background: url("../assets/images/public/icon_5.jpg") no-repeat;
  background-size: 0.52rem 0.58rem;
}
.footer a:last-child:hover span {
  background: url("../assets/images/public/icon_10.jpg") no-repeat;
  background-size: 0.49rem 0.62rem;
}
.footer a:last-child:hover p {
  color: #fb670f;
}
</style>
