<template>
 <div>
    <router-view />
    <button v-on:click="navigate()" tag="a" class="back spe lined thick"> <em>&laquo; Back</em> </button>

 </div>
</template>

<script>

 export default{
  name:'gallery',
  methods: {
    navigate() {
       this.$router.go(-1);
      }
   },
 }

</script>

<style scoped>
 
.back{
   margin-top: -5px;
   margin-bottom: 10px;
   font-family: 'Changa One', cursive;
   font-size: 1.1rem;
}

</style>