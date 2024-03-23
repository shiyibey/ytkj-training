<template>
  <div>
      <h2>走马灯</h2>

      <el-carousel height="500px">
        <el-carousel-item v-for="path in pics" :key="path">
          <img :src="path" width="100%" height="100%">
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {
  name: "etCarousel",
  data(){
    return{
      pics:[]
    }
  },
  methods:{
    queryPics(){
      //调用异步获取图片
      this.$http.get('http://shibe.online/api/cats?count=6').then(response=>{
          this.pics = response.data
      })
    }
  },
  created() {
    this.queryPics()
  }
}
</script>

<style scoped>

</style>