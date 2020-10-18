<template>
    <div class="header">
            <div class="left">
                <h1>
                    <a href="#" title="小u商城">小U商城-低价正品，品质保证</a>
                </h1>
            </div>
            <div class="center">
                <input type="text" value="寻找商品">
            </div>
            <div class="right">
                <span></span>
                <span></span>
                <span></span>
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
.header {
  height: 0.84rem;
  padding: 0.44rem 0.23rem 0 0.23rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-bottom: 0.01rem solid #e4e4e4;
}
.header .left h1 {
  overflow: hidden;
}
.header .left h1 a {
  display: block;
  width: 1.47rem;
  height: 0.33rem;
  background: url("../assets/images/index_images/logo.jpg") no-repeat;
  background-size: 1.47rem 0.33rem;
  text-indent: -9.99rem;
}
.header .center > input {
  width: 3.05rem;
  height: 0.39rem;
  background: #eeeeee;
  border-radius: 0.05rem;
  text-align: center;
  font-size: 0.16rem;
  color: #b1b1b1;
  outline: none;
  border: none;
}
.header .right {
  display: flex;
  width: 0.55rem;
  justify-content: space-between;
}
.header .right span {
  width: 0.11rem;
  height: 0.11rem;
  border-radius: 50%;
  background: #030303;
}
</style>
