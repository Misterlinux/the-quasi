<template>
  <div class="home">

    <a href=""  class="underlined underlined--offset">Welcome to the block</a>
    <span class="underlined underlined--thick"> here s another example</span>
      <h2>
        <a href="#" class="underlined underlined--gradient">I'm an other very long highlighted link.</a>
      </h2>

    <a class="titolo underlined underlined--offset">
      <em>Welcome to the block 3</em>
    </a>

  <div class="angle"></div>

    <header class="showcase">
        <div class="container showcase-inner">

            <div class="intro">
              <img class="intro-img img rounded" :src="image" alt="">
              
              <button class='intro-img spe lined thick ml-4 mr-4 mt-4' variant="outline">
                Check me out 
                <i class="fas fa-meteor"></i>
              </button>

              <div class="intro-box bg-faded p-3 p-lg-5 rounded">
                <div class="section-heading mb-2 mb-md-3">
                    <em>Jose Altozano
                    <span class="tres">This is who I am</span>
                    </em>
                </div>
                <div class="mb-0 intro-text">
                  The negativity came largely from Mr Trudeau’s missteps in office. 
                  He pressed his attorney-general to intervene in the prosecution for 
                  bribery of snc-Lavalin, an engineering firm in Quebec. Parliament’s ethics 
                  maybe a line more
                  <a href='' class="uno">will be a to your everyday</a>
                  and blackface as a young man.
                </div>

                <div class="intro-button mx-auto">
                  <a class="special better" href="#"> Check me out </a>
                </div>

              </div>

            </div>

        </div>

    </header>

  <h1 class="title-uno"> Welcome to the block 1 </h1>

  <h1 class="title-duo"> <em> Welcome to the block 2 maybe </em></h1>

  <h1 style="font-family: 'Oleo Script', cursive; font-size: 5rem; font-weight: bold;">
    <em>welcome to block oreo</em>
  </h1>

  </div>
</template>

<script>
export default {
  name: 'pagina',
  data () {
    return {
      image: require('../assets/profile1.jpg'),
    }
  },
}
</script>

<style>

/* just to avoid the white space */
@media (max-width: 580px){
  .angle{
    visibility: hidden;
  }
  .home{
    width: 107%;
  }
  .footer{
    width: 107%;
  }
  .intro .intro-box {
    right: 42%;
    width: 55%;
    margin-top: -13%;
  }
  .showcase {
    height: 45vh;
  }
  .intro .intro-box .intro-button {
    display: none;
  }
  .intro .spe{
    display: block;
    margin-right: 18px;
    color: pink;
    width: 30%;
    float: right;
    font-family: 'Orbitron', sans-serif;
    font-weight: bold;
    font-style: italic;
  }
  .intro .fa-meteor{
    transform: scaleX(-1);
  }
  .titolo{
    font-size: 37px;
    margin-left: 3%;
  }
  .section-heading{
    line-height: 1.3;
  }
}

a:hover {
  text-decoration: none;
}

.angle{
  position: relative;
  margin-left: 48%;
  bottom: 2rem;
  height: 2rem;
  width: 10rem;
  border-bottom: 7px inset red;
  border-right: 4px outset red;
  -moz-transform: skew(-45deg);
  -webkit-transform: skew(-45deg);
  transform: skew(35deg);
}

@import '../css/front.css';
@import url('https://fonts.googleapis.com/css?family=Changa+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Mirza&display=swap');
@import url('https://fonts.googleapis.com/css?family=Expletus+Sans&display=swap');
@import url('https://fonts.googleapis.com/css?family=Quantico&display=swap');
@import url('https://fonts.googleapis.com/css?family=Orbitron&display=swap');
@import url('https://fonts.googleapis.com/css?family=Saira+Stencil+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Saira&display=swap');
@import url('https://fonts.googleapis.com/css?family=Geo&display=swap');
@import url('https://fonts.googleapis.com/css?family=Faster+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Oleo+Script&display=swap');
@import url('https://fonts.googleapis.com/css?family=Fugaz+One&display=swap');

.title-uno{
  font-family: 'Changa One', cursive;
  font-size: bold;
  font-size: 5rem;
}

.title-duo{
  font-family: 'Mirza', cursive;
  font-size: 5rem; 
  font-weight: bold;
}

/* about the effect elevate hoven */
.tres {
  text-decoration: none;
  position: relative; 
  z-index: 0;
}

.tres:before {
  content: "";
  background: orange;
  position: absolute;
  width: 100%;
  /*height: 50px;*/
  bottom: 0;
  left: 0;
  border-radius: 5px;
  transform: scaleX(0);
  animation: 1s forwards no-hover-v linear;
  animation-fill-mode: forwards;
  z-index: -1;
}
.tres:hover:before,
.tres:focus:before {
  animation: .5s forwards hover-v linear;
  animation-fill-mode: forwards;
}
@keyframes hover-v {
  0% {
      transform: scaleX(0);
      height: 5px;
     }
  45% {   
      transform: scaleX(1.05);
      height: 5px;
     }
  55% {height: 5px;}
  100% {
      transform: scaleX(1.05);
      height: 1.8rem;
     }
}
@keyframes no-hover-v {
  0% {
      transform: scaleX(1.05);
      height: 2.2rem;
     }
  45% {height: 5px;}
  55% {   
      transform: scaleX(1.05);
      height: 5px;
      opacity: 1;
     }
  
  100% {
      transform: scaleX(0);
      height: 5px;
      opacity: .02;
     }
}

/*this is the effect of thecover 
and Down here we have shadown line*/

.uno {
  text-decoration: none;
  position: relative;
}

.uno:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  visibility: hidden;
  border-radius: 5px;
  transform: scaleX(0);
  transition: .25s linear;
  background: red;
  box-shadow: 0 0 10px 2px #ffdb00;  
}

.uno:hover:before,
.uno:focus:before {
  visibility: visible;
  transform: scaleX(1);
}

/* ok so, here s ends the shadow line */

</style>

<style lang="scss">
// Now that is interesting
.underlined {
  color: black;
  /*flex: 1;*/
  line-height: 1.1;
  text-decoration: none;
  background-image: linear-gradient(to right, darkred 0, red 100%);
  background-position: 0 1.2em;
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: background .5s;
  &:hover {
    background-size: 100% 110%;
  }
  &--thick {
    background-position: 0 -0.1em;
  }
  &--offset {
    background-position: 0 0em;
    //didn't find another solution than mask the underline shape by a box shadow with the same color than the bg
    box-shadow: inset 0 -0.03em 0 0 white;
  }
  &--gradient {
    background-position: 0 -0.1em;
    background-image: linear-gradient(to right, yellow 0, lightgreen 100%);
  }
  &--reverse {
    background-position: 100% -0.1em;
    transition: background 1s; //yep, that's a long link
    background-image: linear-gradient(to right, yellow 0, yellow 100%);
  }
}

</style>