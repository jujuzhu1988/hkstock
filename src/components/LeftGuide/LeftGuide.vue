<template>

  <div id="nav" class="nav">
  <span @click="goTo('/home')">回到主页</span>
  <span @click="goTo('/account')">账户管理</span>
  <span onclick="goTo('/report')">数据统计</span>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo(path){
        this.$router.replace(path)
      } 
    }
  }
</script>

<style>

.nav {
  margin-top: 200px;
}
.nav.aside {
  boder-right-style:solid;
}
span {
width:80px;
height:50px;
text-decoration: none;
display:block;
background-color: #55585a;
line-height: 50px;
font-size: 14px;
padding-left: 20px;
color: #fff;
}
span:hover {
  background-color:#ff6700;
}


</style>