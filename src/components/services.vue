<template>
 <div>
    <h1>{{ title }}</h1>
    <button type="button" class="btn btn-primary" v-on:click="navigate()"> 
        minus 1
    </button>
 </div>
</template>
<script>
 export default{
   name:'services',
    data (){
    return{
        title:'this page just serves to see how to use the $router-push'
      }
    },
   methods: {
      navigate() {
          this.$router.go(-1);
      }
   }
 }
</script>
<style scoped>
 
</style>