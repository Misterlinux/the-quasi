<template>
 <div>
    <h1>{{ title }}</h1>
    <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">Navigate to Page1</a>
 </div>
</template>
<script>
 export default{
   name:'services',
    data (){
    return{
        title:'I will have to see how this work with more style on it'
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