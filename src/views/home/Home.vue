<script setup lang="ts">
// import Header from '../header/Header.vue'
</script>

<template>
  <div class="home">
    <nav>
        <div class="sidebar">
          <p>
            <RouterLink to="/home/fund">资金管理</RouterLink>
            <RouterLink to="/home/system">系统管理</RouterLink>
          </p>
        </div>
        <!-- <div class="sidebar-item">
         
        </div> -->
    </nav>
    <main>
      <RouterView />
    </main>
   
  </div>
    
</template>

<style lang="scss" scoped>
.home{
  width:100vw;
  height:100vh;
  display: flex;
  cursor: pointer;
}

nav{
  width:90px;
  height:100vh;
  display: flex;
  
  .sidebar{
    width:90px;
    height:100vh;
    background: #001135;
    p{
      display: flex;
      flex-direction: column;
      width:100%;
      margin:100px 0 auto;
      height:130px;
      text-align: center;
      line-height: 80px;
      a{
        flex:1;
        color:#818184;
        &.router-link-active{
          background:#000066;
          color:#fff;
        }
      }
    }
  }
  .sidebar-item{
    flex:1;
    background:#000066;
  }
}

main{
  flex:1;
}




</style>