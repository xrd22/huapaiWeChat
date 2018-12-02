<template>
  <div class="indexContainer">
    <img v-if="isShow" class="index_img" :src="userInfo.avatarUrl" alt="">
    <Button class="btn" v-else="isShow" open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</Button>
    <p class="username">hello {{userInfo.nickName}}</p>
    <div class="gostudy">
      <p>开启小程序</p>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        userInfo: {},
        isShow:false  //表示用户没有授权

      }
    },
    beforeMount(){ // 获取用户的登录信息
      console.log("bm")
      this.handleGetuserInfo()
    },
    methods:{
      getUserInfo(data){
          //判断用户是否授权
        if(data.mp.detail.rawData){
            //用户授权
          this.handleGetuserInfo()
        }
      },
      handleGetuserInfo(){
        wx.getUserInfo({
          success: (data) => {
            console.log(data)
            // 更新data中的数据
            this.userInfo = data.userInfo
            this.isShow = true
          },
          fail: () => {
            console.log("获取失败")
          }
        })
      }
    }
  }
</script>

<style>
  page {
    background-color: #8ed145;
  }

  .indexContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .index_img {
    width: 200rpx;
    height: 200rpx;
    border-radius: 100rpx;
    margin: 100rpx 0;
  }
  .btn {
    width: 300rpx;
    height: 300rpx;
    border-radius: 150rpx;
    line-height: 300rpx;
    margin: 50rpx 0;
    text-align: center;
    font-size: 26rpx;
  }
  .username {
    font-size: 40rpx;
    font-weight: bold;
    margin: 100rpx 0;
  }

  .gostudy {
    width: 220 rpx;
    height: 80 rpx;
    border: 1px solid #eee;
    font-size: 24 rpx;
    line-height: 80 rpx;
    text-align: center;
    border-radius: 10 rpx;
  }
</style>

