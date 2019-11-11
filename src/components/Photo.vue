<template>
  <div class="home">
  <div class="lightbox" @click.self="closeLightbox">
    <img :src="photoUrl(photo.filename)">
    <div class="lightbox-info">
      <div class="lightbox-info-inner">

        <h2 v-if="photo.title" class="title"><em> {{ photo.title }} </em></h2>
        <p v-if="photo.location">{{ photo.location }}</p>
        <p v-if="photo.photographer">
           From:
          <a rel="nofollow" :href="photo.photographer.url">
              {{ photo.photographer.name }}
          </a>
        </p>
        <p v-if="photo.source">
        via
        <a rel="nofollow" :href="photo.source.url">
            {{ photo.source.name }}
        </a>
        </p>

      </div>

    <button class="usno spe lined thick mr-5" v-on:click="navigate()"> minus 2 </button>
      
    </div>

  </div>
  </div>
</template>

<script>
import photos from '../statics//gallery.json';

export default {
  name: 'Photo',
  data() {
    return {
      photos,
    };
  },
  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id);
      });
    },
  },
  methods: {
    photoUrl(filename) {
      return require(`../assets/images/${filename}`);
    },
    closeLightbox() {
      this.$router.push('/');
    },
    navigate() {
      this.$router.go(-1);
    }
  },
};
</script>

<style>

@media (max-width: 580px){
  .usno{
    display: none;
  }
}

.lightbox-info-inner .title{
  font-family: 'Geo', sans-serif; 
  font-size: 2.5rem; 
  font-weight: bold;
}

.lightbox .spe{
  color: white;
  margin-left: -0.1rem;
}

.lightbox {
    position: relative;
    padding: 2%;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: grid;
    grid-template-columns: 5fr 3fr;
    grid-column-gap: 6%;
  }
  .lightbox img {
    margin: auto;
    width: 100%;
    grid-column-start: 1;
  }
  .lightbox-info {
    margin: auto;
  }
  .lightbox-info-inner {
    background-color: #FFFFFF;
    display: inline-block;
    padding: 2rem;
  }
</style>