<template>
 <div class="header">
            <div class="left">
                <div></div>              
            </div>
            <div class="center">
                <h1>我的订单</h1>
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
.header {
  height: 1.3rem;
  padding: 0.2rem 0.35rem 0 0.28rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f26b11;
  color: white;
}
.header .left {
  width: 0.3rem;
}
.header .left div {
  width: 0.18rem;
  height: 0.18rem;
  border-left: 0.02rem solid white;
  border-bottom: 0.02rem solid white;
  transform: rotate(45deg);
}
.header .center {
  text-align: center;
}
.header .center h1 {
  font-weight: normal;
  font-size: 0.32rem;
}
.header .right {
  width: 0.55rem;
  display: flex;
  justify-content: space-between;
}
.header .right span {
  width: 0.11rem;
  height: 0.11rem;
  background: #fff;
  border-radius: 50%;
}
</style>
