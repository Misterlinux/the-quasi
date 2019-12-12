<template>
  <div class="home">
  <div class="lightbox mt-3" @click.self="closeLightbox">
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

    <button class="usno spe lined thick mr-5" v-on:click="navigate()"> Back</button>
      
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
@import '../css/photo.css';

@media (max-width: 580px){
  .usno{
    display: none;
  }
  .lightbox-info-inner .title{
    font-size: 1.9rem; 
    line-height: 0.85;
  }
  .lightbox-info-inner {
    padding: 1rem;
  }

}

</style>