<template>
  <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">

        <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
          <div class="container">
          <router-link to="/" class="navbar-brand">Home</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav">
        
              <li class="nav-item">
                <router-link class="nav-link" to="/blog">Blog</router-link>
              </li>
              <li class="nav-item">
              <router-link class="nav-link" to="/services">Services</router-link>
              </li>
              <li class="nav-item">
              <router-link class="nav-link" to="/contact">contact</router-link>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div class="container">
        <transition name="Feeling">
          <router-view/>
        </transition>
          
        </div>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.Feeling-enter-active{
  opacity: 0;
  transition: opacity 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  25%{
    opacity: 0.3;
  }
  50%{
    opacity: 0.5;
  }
  75%{
    opacity: 0.75;
  }
  100%{
    opacity: 1;
  }
}

.Feeling-leave-active{
  animation: moveInUp 1s ease-in;
}

@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
 50%{
   transform: translateY(-250px);
 }
  100%{
  transform: translateY(-400px);
 }
}

</style>
