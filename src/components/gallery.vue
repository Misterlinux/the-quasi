<template>
  <div class="home">
 <div class="container">

    <div class="home-title">
      <span class="for gallery-title"><em> Welcome to the gallery </em></span>
      <span class="sec gallery-sub"> where everything is a reminder of "If I can see it I can sketch it" 
        <i class="fas fa-pencil-ruler"></i> 
      </span>
    </div>

<!-- ok so our build -->
  <div class="gallery">
    <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">

      <div v-if="photo.id % 2 == 0">
        <router-link :to="`/gallery/${photo.id}`">
          <img :src="thumbUrl(photo.filename)">
        </router-link>
        <h2 class="appetizer"><em> {{photo.desc}} </em></h2>
      </div>

    <div v-if="photo.id % 2 == 1">
      <div class="dis">
        <router-link :to="`/gallery/${photo.id}`">
          <img :src="thumbUrl(photo.filename)">
        </router-link>
        <h2 class="appetizer"><em> {{photo.desc}} </em></h2>
      </div>
    </div>
  </div>
</div>

     <button type="button" class="spe dashed thick" v-on:click="navigate()"> 
        back
    </button>

  </div>
  </div>
</template>

<script>
import photos from '../statics//gallery.json';

 export default{
   name:'gallery',
    data (){
    return{
        photos
      };
    },
   methods: {
      navigate() {
          this.$router.go(-1);
      },
      thumbUrl(filename) {
        return require(`../assets/images/thumbnails/${filename}`);
      }
    }
}

</script>

<style>
@import '../css/gallery.css';

@media (max-width: 580px){
  .gallery-title{
    font-size: 13vw; 
  }
  .gallery-sub{
    font-size: 6vw; 
    line-height: 1.2;
  }
  .home-title .for{
    padding: 1rem 1rem;
    line-height: 1.1;
  }
  .home-title .sec{
    padding-top: 0.4rem;
    padding-right: 0.55rem;
    line-height: 1;
  }
}

</style>

<style lang="scss">

@import url(https://fonts.googleapis.com/css?family=Patrick+Hand+SC);

.spe{
      background:transparent;
      padding: 0.8rem 1rem;
      margin: 1rem 1rem;
      transition:all .5s ease;
      /*font-size: 1.5rem;*/
      font-weight: bold;
      letter-spacing: 0.5px;
      outline:none;
      box-shadow: 30px 38px 35px -25px rgba(121, 7, 50, 1);
      border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
      /*
      Above is shorthand for:
      border-top-left-radius: 255px 15px;
      border-top-right-radius: 15px 225px;
      border-bottom-right-radius: 225px 15px;
      border-bottom-left-radius:15px 255px;
      */
       &:hover{
         box-shadow: 7.5px 10px 4px -4px rgba(75, 17, 40, 0.7);
      } 
      &.dashed.thick{
        border:dashed 5px rgb(185, 7, 19);
      }
       &.lined.thick{
         border:solid 5px rgb(185, 7, 19);
      }
    }

@media (max-width:580px){



}


</style>