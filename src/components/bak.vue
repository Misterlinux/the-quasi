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
 
.back{
   font-family: 'Changa One', cursive;
   font-size: 1.1rem;
}

.forth{
   color: #F0E6AA;
   font-family: 'Saira Stencil One', cursive;
   font-size: 1.1rem;
   font-weight: lighter;
}

.lay{
    position: relative;
    width: 100%;
    height: auto;
    padding: 1.5rem 0;
    background: linear-gradient(to bottom right,rgba(156, 76, 76, 0.5) 0%, rgba(179, 99, 99, 0.5) 30%, rgba(179, 99, 99, 0.5) 70%, rgba(156, 76, 76, 0.5) 100%), url("../assets/backo.jpg");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}

.lay .d-flex{
   margin-bottom: -20px;
}
</style>