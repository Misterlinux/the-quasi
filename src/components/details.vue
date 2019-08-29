<template>
 <div>
  <div class="container">
    <div class="col-md-12" v-for="(product,index) in gallery" :key="index">
     <div v-if="proId == product.galleryId">
      <h1>{{product.prompt}}</h1>
      <img :src="product.image" class="img-fluid">
     </div>
    </div>

    <h3>the product id is :{{ proId }}</h3>
    <button v:on:click='this.$router.go(-1)'
        type="button" class="btn btn-primary"> minus 1
    </button>
   <h1 class="text-primary text-center">{{title}}</h1>


  </div>
 </div>
</template>
<script>

 export default{
  name:'forth',
  data(){
   return{
    proId: this.$route.params.Pid,
    title: " trying different name",
    gallery: [
        {
          prompt: 'lets try the movement',
          image: require('../assets/case.jpg'),
          galleryId:1
        },
        {
          prompt: 'can I see it?',
          image: require('../assets/berlin.jpg'),
          galleryId:2
        }
      ]
   }
  },
 }
</script>