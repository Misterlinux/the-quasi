<template>
  <div class="home">
 <div class="container">

    <div class="home-title">
      <span class="for gallery-title"><em> Welcome to the gallery </em></span>
      <span class="sec gallery-sub">some undertext in which I have to explain kinda a lot </span>
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
        <h2> {{photo.id}} is odd </h2>
      </div>

    <div v-if="photo.id % 2 == 1">
      <div class="dis">
        <router-link :to="`/gallery/${photo.id}`">
          <img :src="thumbUrl(photo.filename)">
        </router-link>
        <h2> {{photo.id}} is no odd </h2>
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
    padding-top: 1rem;
    padding-right: 0.5rem;
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
      box-shadow: 20px 38px 34px -26px rgba(216, 2, 2, 0.557);
      border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
      /*
      Above is shorthand for:
      border-top-left-radius: 255px 15px;
      border-top-right-radius: 15px 225px;
      border-bottom-right-radius: 225px 15px;
      border-bottom-left-radius:15px 255px;
      */
       &:hover{
         box-shadow:2px 8px 4px -6px hsla(0,0%,0%,.3);
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