<template>
 <div>
    <div class="lay">

    <router-view />

    <div class="d-flex">

    <button v-on:click="navigate()" tag="a" class="back spe lined thick mr-auto ml-2"> <em>&laquo; Back</em> </button>

    <router-link to="/contact">
      <button tag="a" class="spe lined thick ml-auto forth mr-4"> <em> Feel free to comment</em> 
         <i class="far fa-comments ml-2"></i>
      </button>
    </router-link>

      </div>
   </div>
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
@import '../css/bak.css';

@media (max-width: 580px){
 .lay{
     width: 107%;
   }
}

</style>