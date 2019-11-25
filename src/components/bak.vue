<template>
 <div>
    <router-view />
    <button v-on:click="navigate()" tag="a" class="back spe lined thick"> <em>&laquo; Back</em> </button>

 </div>
</template>

<script>
import Blogs from '../statics/blogs.json'

 export default{
  name:'gallery',
  data(){
     return{

     }
  },
   methods: {
      navigate() {
          this.$router.go(-1);
      }
   },

		computed: {
			entries() {
				return Blogs
			},
			date() {
				return Object.keys(Blogs)[0];
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