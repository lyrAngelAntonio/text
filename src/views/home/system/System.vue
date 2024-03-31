<script setup>


</script>

<template>
   <div class="fund">
      <div class="nav">
         <div class="title"></div>
         <div class="item">
            <RouterLink to="/home/system/user">用户管理</RouterLink>
         </div>
      </div>
      <main>
        <main>
         <header>
            <p>admin</p>|<p @click="Onlogin">退出</p>
         </header>
         <van-tabs v-model:active="active">
            <van-tab title="资金组成 X" >资金组成</van-tab>
            <van-tab title="资金流向 X">资金流向</van-tab>
            <van-tab title="资金来源 X">资金来源</van-tab>
            <van-tab title="用户管理 X">用户管理</van-tab>
         </van-tabs>
         <RouterView />
      </main>
      
      </main>
   </div>
</template>

<style lang='scss' scoped>
.fund{
   display: flex;
   .nav{
      width:110px;
      height:100vh;
      background:#000066;
   }
   
   .title{
      height:102px;
      border-bottom: 1px solid #848486;
   }
  
   .item{
      display: flex;
      flex-direction: column;
      height:130px;
      margin: 10px 0;
   }
   a{
      flex:1;
      color: #8a8787;
      font-size: 14px;
      text-align: center;
      line-height:50px;
      &.router-link-active{
          background:#000066;
          color:#fff;
        }
   }
}
main{
    flex:1;
}
header{
   padding:0 20px;
   height:40px;
   border-bottom:1px solid #bab8b8;
   display: flex;
   align-items: center;
   justify-content: flex-end;

}

</style>
