<template>
  <div class="home">

    <div class="container-fluid page-section">
      <img class="img-fluid rounded heading-img mb-0" src="../assets/larg.jpg" alt="">
      
      <div class="about-heading-content">
          <div class="col-11 mx-auto">
            <div class="bg-faded rounded p-2 p-lg-5">
              <div class="mb-4">
                Welcome to the
                    <div class="flip mr-1">
                      <div><div>views</div></div>
                      <div><div>sets</div></div>
                      <div><div>zest</div></div>
                    </div>
                <a href="#"><span class="underlined underlined--thick">of the Blogk</span></a>
              </div>
              <p class="example prin">
                <span class="hover hover-1 mb-1">
                  Everything I want to know, everything <em> you </em> want to read.
                </span>
              </p>
            </div>
          </div>
      </div>
    </div>

<section class="page-section">
<div class="container">
    <div class="row">

<!--first argument -->
      <div class="col-md-6 argument">
        <router-link to="/intro">

        <div class="product-item-title d-flex ">
          <div class="bg-faded p-lg-2 ml-auto rounded">
            <div class="p-3 mb-5 item-title">
                <a href="#" class="underlined underlined--reverse">Introduction to the Blogk's backbone</a>
            </div>
          </div>
        </div>

        <img class="product-item-img mx-auto d-flex rounded img-fluid " src="../assets/intro.jpg" alt="">

        </router-link>
        <div class="product-item-description d-flex ml-auto">
          <div class="bg-faded p-4 p-md-5 rounded">
            <span class="mb-0">
              <div class="d-flex justify-content-between">
                <div class="">december | 2019</div>
                <div class=""> standard </div>
              </div>
              <div class="h4"> <b><em> Introduction </em></b></div>
              Anything <small> great </small> needs a proper introduction.
              <div>
              it would be a waste not to keep notes on 
              everthing needed to air the Blogk.
              </div>
              <div class="mt-2">
              Recommended for those who tend to be interested 
              to travel notes.
              </div>
            <footer class="blockquote-footer text-right">The Blogk</footer>
            </span>
          </div>
        </div>

      </div>

<!--end of first-->

      <div class="col-md-6 argument">

      <router-link to="/microe">

        <div class="product-item-title d-flex ">
          <div class="bg-faded p-lg-2 ml-auto rounded">
            <div class="p-3 mr-2 mb-5">
                <a href="#" class="underlined underlined--reverse">About the Micro and the Economy</a>
            </div>
          </div>
        </div>

        <img class="product-item-img mx-auto d-flex rounded img-fluid " src="../assets/microe3.jpg" alt="">

      </router-link>
        <div class="product-item-description d-flex ml-auto">
          <div class="bg-faded p-5 rounded">
            <div class="d-flex justify-content-between">
              <div class="">December | 2019</div>
              <div class=""> core </div>
            </div>
            <div class="h4"><em><b>Microeconomy</b></em></div>
            <div>
              if the economy is a machinery this is about each singular gear.
            </div>
              For those interested on how money flows between economic actors
              and how they settle the market's stage
            
            <footer class="blockquote-footer text-right">about the core</footer>

          </div>
        </div>

      </div>
<!-- hello there -->

      <div class="col-md-6 argument">
        <router-link to="/macro">

        <div class="product-item-title d-flex ">
          <div class="bg-faded p-4 ml-auto rounded">
            <div class="mb-0">
                <a href="#" class="underlined underlined--reverse">About how Macro can the economy be</a>
            </div>
          </div>
        </div>

        <img class="product-item-img mx-auto d-flex rounded img-fluid " src="../assets/macroe1.jpg" alt="">

        </router-link>
        <div class="product-item-description d-flex ml-auto">
          <div class="bg-faded p-5 rounded">
            <div class="d-flex justify-content-between">
              <div class="">December | 2019</div>
              <div class=""> core </div>
            </div>
            <span class="mb-0">
              <div class="h4"><em><b>Macroeconomy</b></em></div>
                History, sociology and finances.Those are the subjects that are required in 
                order to get the when, who and how of their lowest common denominator;
                <div>
                the Economy.
                </div>
                <div>
                for those who dont mind peeking an eye at the affairs of others.
                </div>
            </span>

            <footer class="blockquote-footer text-right">Someone famous in <cite title="what ya search?">Source Title</cite></footer>
          </div>
        </div>

      </div>
<!-- what about -->

      <div class="col-md-6 argument">
        <router-link to="/design">

        <div class="product-item-title d-flex ">
          <div class="bg-faded p-4 ml-auto rounded">
            <div class="mb-0">
                <a href="#" class="underlined underlined--reverse">About the Design of things</a>
            </div>
          </div>
        </div>

        <img class="product-item-img mx-auto d-flex rounded img-fluid " src="../assets/des.jpg" alt="">

        </router-link>
        <div class="product-item-description d-flex ml-auto">
          <div class="bg-faded p-5 rounded">
              <span class="mb-0">
                <div class="d-flex justify-content-between">
                  <div class="">december | 2019</div>
                  <div class=""> standard </div>
                </div>
                  <div class="h4"><em><b>Design</b></em></div>
                  the world is based on mechanics and being able to developt them as 
                  dynamics means having the world in a pocket. or at least being ablr to create them
                  each any single part.

                  
                  <footer class="blockquote-footer text-right">The Blogk</footer>
              </span>
          </div>
        </div>

      </div>

  </div>
</div>
</section>

    <button class="spe lined thick" v-on:click="closeLightbox()"> 
        minus 1
    </button>

    <div class="example">
      <span class="hover hover-1">underline effects</span>
    </div>

    <div class="example">
      <span class="hover hover-2">I still have to use</span>
    </div>

    <div class="example">
      <span class="hover hover-3">on the different</span>
    </div>

    <div class="example">
      <span class="hover hover-4">spaces</span>
    </div>  
  
  </div>
</template>

<script>
import Blogs from '../statics/blogs.json'

export default {
  name: 'home',
  computed: {
    entries() {
      return Blogs
    }
  },
   methods: {
      closeLightbox() {
        this.$router.push('/');
      }
   }
}

</script>

<style>

@import '../css/final.css';

@media (max-width: 455px){
  .product-item-title {
      height: 17%;
      font-size: 1.65rem;
  }
}

@media (max-width: 580px){
  .flip {
    height: 40px;
    margin-bottom: -10px;
  }
  .flip > div > div {
    height: 40px;
    margin-bottom: 20px;
  }
  .about-heading-content {
    margin-top: -5rem;
    font-size: 7vw; 
  }
  .heading-img {
    height: 25vh;
  }
  .bg-faded .prin{
    font-size: 3.5vw;
    margin-top: -4%;
  }
  @keyframes show {
    0% {margin-top:-150px;}
    5% {margin-top:-115px;}
    33% {margin-top:-115px;}
    38% {margin-top:-55px;}
    66% {margin-top:-55px;}
    71% {margin-top: 0px;}
    99.99% {margin-top: 0px;}
    100% {margin-top:-150px;}
  }

  .argument{
    margin-bottom: 1.5rem;
  }

}

@media (min-width: 500px) and (max-width: 815px){
  .heading-img {
    height: 25vh;
  }
  .about-heading-content {
    margin-top: -6rem;
  }
  .product-item-title {
      font-size: 1.6rem;
  }
}

/*#container {
  color:#999;
  text-transform: uppercase;
  font-size: 36px;
  font-weight:bold;
  padding-top:50px;  
  position:relative;
  width:100%;
  bottom:25%;
  display: inline-block;
} */

</style>

<style lang="scss">

$animate: all 0.2s ease-in-out;

.hover {
      transition: $animate;
      position: relative;
      &:before,
      &:after {
        content: "";
        position: absolute;
        bottom: -5px;
        width: 0px;
        height: 3.5px;
        margin: 5px 0 0;
        transition: $animate;
        transition-duration: 0.75s;
        opacity: 0;
        background-color: darken(#A93226,5%);
      }
      &.hover-1 {
        &:before,
        &:after {
          left: 0;
        }
      }
      &.hover-2 {
        &:before,
        &:after {
          right: 0;
        }
      }
      &.hover-3 {
        &:before {
          left: 50%;
        }
        &:after {
          right: 50%;
        }
      }
      &.hover-4 {
        &:before {
          left: 0;
        }
        &:after {
          right: 0;
        }
      }
    }
.example:hover {
      cursor: pointer;
      .hover {
        &:before,
        &:after {
          width: 100%;
          opacity: 1;
        }
        &.hover-3,
        &.hover-4 {
          &:before,
          &:after {
            width: 50%;
          }
        }
      }
    }

</style>