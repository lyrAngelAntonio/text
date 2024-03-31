<script setup>
import { ref } from 'vue'
import { useRouter , useRoute } from 'vue-router'
const router=useRouter()
const route=useRoute()

    const username = ref('');
    const password = ref('');
    const onSubmit = () => {
      if(username.value ==="admin" && password.value ==='123'){
        console.log(123)
        // const token= values.username + values.password
        const token = 'admin'
        localStorage.setItem('token' , token)
        router.push("/home")
        console.log(values)
      }
    }

</script>

<template>
   <div class="login">
    <div class="login-page">
        <h2>登录页</h2>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field
                v-model="username"
                name="username"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                v-model="password"
                type="password"
                name="password"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
                />
            </van-cell-group>
            <div class="btn" style="margin: 16px;" @click="onSubmit">
                <van-button round block type="primary" native-type="submit">
                 登录
                </van-button>
            </div>
        </van-form>
    </div>
      
   </div>
   
</template>

<style lang='scss' scoped>

.login{
    width:100vw;
    height:100vh;
    background: rgb(38, 107, 225);
    padding:20px;
    position: relative;
}
.login-page{
    width:350px;
    height:300px;
    background: #fff;
    border-radius: 8px;
    position: absolute;
    top:30%;
    right:200px;
}
h2{
   text-align: center;
   margin-top: 20px;
   color:rgb(36, 36, 36);
}
form{
  text-align: center;
  font-size: 12px;
  color:red;
}
.van-field{
    margin:10px;
    
}

.btn{
    width:280px;
    border-radius: 8px;
    padding:10px;
    background: cornflowerblue;
    color: #fff;
    font-size: 14px;
}
</style>
