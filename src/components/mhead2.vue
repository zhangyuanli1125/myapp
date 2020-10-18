<template>
    <div class="head">
               <div class="head_left">
                   <img src="../assets/images/mine_images/head.jpg" alt="">
                   <div>
                       <p>悠溯</p>
                       <p>V1</p>
                   </div>
               </div>
               <div class="head_right">
                  <a href="#">每日签到</a>
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
.head {
  padding: 0 0.39rem 0 0.3rem;
  background: #f26b11;
  height: 2.06rem;
  display: flex;
      margin-top: -1px;
  align-items: center;
  justify-content: space-between;
}
.head .head_left {
  display: flex;
  width: 2.4rem;
  justify-content: space-between;
}
.head .head_left img {
  width: 1.45rem;
  height: 1.45rem;
  border-radius: 50%;
  border: 0.06rem solid white;
}
.head .head_left div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.head .head_left div p:first-child {
  font-size: 0.3rem;
  color: white;
  margin-bottom: 0.23rem;
}
.head .head_left div p:last-child {
  font-size: 0.2rem;
  font-style: italic;
}
.head .head_right a {
  display: block;
  width: 1.59rem;
  height: 0.71rem;
  background: white;
  border-radius: 0.05rem;
  font-size: 0.24rem;
  color: #fb8351;
  text-align: center;
  line-height: 0.71rem;
  text-decoration: none;
}
</style>
