<template>
  <div>
    <h1>{{ texto }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      or maybe just to get to the next
    </p>

    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in gallery" :key="index">
        <img :src="data.image" class="img-fluid">
         <h3 v-on:click="goTodetail(data.galleryId)">{{ data.prompt }}</h3>
      </div>
    </div>

    <div class="alert alert-success alert-dismissible fade show" role="alert">
      With Bootstrap!
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  </div>
</template>

<script>
export default {
  name: 'pagina',
  data () {
    return {
      texto: 'welcome to the actual content of this page',
      gallery: [
        {
          prompt: 'lets try the movement',
          image: require('../assets/case.jpg'),
          galleryId:1
        },
        {
          prompt: 'can I see it?',
          image: require('../assets/berlin.jpg'),
          galleryId:2
        }
      ]
    }
  },
  methods:{
      goTodetail(proId) {
        this.$router.push({name:'details',params:{Pid:proId}})
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>