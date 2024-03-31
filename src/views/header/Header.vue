<script setup>
   import { TransformStreamDefaultController } from 'node:stream/web'
   import { ref } from 'vue'
   import { useRouter, useRoute} from 'vue-router'
   const router=useRouter()
   const active = ref(0) 
 
   const onLogin=()=>{
    router.push('/login')
   }

  
</script>

<template>
    <div class="top">
        <header>
          <p>admin</p>|
          <p @click="onLogin" class="back">退出</p>
        </header>
        <div class="list">
            <van-tabs v-model:active="active" type="line">
                <van-tab title="资金组成">资金组成</van-tab>
                <van-tab title="资金流向">资金流向</van-tab>
                <van-tab title="资金来源">资金来源</van-tab>
                <van-tab title="用户管理">用户管理</van-tab>
            </van-tabs>
        </div>
        
         
    </div>
     
</template>

<style lang='scss' scoped>
header{
  height:40px;
  border-bottom:1px solid #cdcccc;
  display: flex;
  justify-content: flex-end;
  p{
    margin: 5px 10px;
  }
}

.back{
    cursor: pointer;
}

.list{
    border-bottom:10x solid #d3d2d2;
    height:35px;
}


</style>
