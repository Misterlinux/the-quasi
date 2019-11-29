<template>
  <div class="home">
    <br>
    <br>
    <a class="titolo underlined underlined--offset">
      <em>Welcome to the Block</em>
    </a>

    <!-- they are the sam but one as a line border and onw without the shadow
      <h2>
        <a href="#" class="underlined underlined--gradient">I'm an other very long highlighted link.</a>
      </h2>
      <a href=""  class="underlined underlined--offset">Welcome to the block</a>
      <span class="underlined underlined--thick"> here s another example</span>
    -->

  <div class="angle"></div>

    <header class="showcase">
        <div class="container showcase-inner">

            <div class="intro">
              <img class="intro-img img rounded mb-0" :src="image" alt="">

                <button class="intro-img spe lined thick ml-4 mr-4 mb-5 mt-3" >
                  Check me out 
                  <i class="fas fa-meteor"></i>
                </button>

              <div class="intro-box bg-faded p-3 p-lg-5 rounded">
                <div class="section-heading mb-2 mb-md-3 mr-4">
                    <em> 
                      <span class="tres">Joselt Ozano </span>
                      is here
                    </em>
                </div>
                <div class="mb-0 intro-text">

                  I am not very good run over old notes.



                  To know and be able to use and inter-disciplies and be able towork
                  different envirodments and a variety of tools is fundamental
                  in the current century, and even if it wasnt Its how I want tofoces/approach
                  my lifelon education/ learning.

                  developt different toold, different areas, inter-
                  (I need workds for usable, practical)

                  its also an objective to be able to interact with 
                  complex ideas and interact to what I think is the best way tohi
                  higher my standards and the best way to refine both y ideas, 
                  concepts and views.
                  
                  thats why I think having a space in which is easier for me to checkread and interact
                  with others is the smoother path to get to a more complete knowledge.

                  which will also allow me to 
                  developing projects on different medias
                  different media projects/ different formats and multi fiels etc.

                  for a cleaner and smoother/ more defined development
                  of the porfolio, the blogk, 

                  thats the idea/ this si the idea I want to follow
                  this is the plan....this is the plan of how I thik to archieve
                  this....
                  this is what I want to develop as my style.....
                  thsi is how I want thgs to follow their course..
                  
                  thats the way I want to follow /only way, and I hope the ones
                  that you will have being in my own designed development path.
                  the blogk.

                  <a href='' class="uno">will be a to your everyday</a>

                </div>

                <div class="intro-button mx-auto">
                  <a class="special better" href="#"><em> Check me out </em></a>
                </div>

              </div>

            </div>

        </div>
        <br>
    </header>

  </div>
</template>

<script>
export default {
  name: 'pagina',
  data () {
    return {
      image: require('../assets/profile.png'),
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
  .intro{
    margin-top: -30%;
  }
  .intro .intro-box {
    right: 42%;
    width: 55%;
    margin-top: -50%;
  }
  .intro .intro-img{
    margin-top: -40%;
  }
  .intro .img{
    height: 100%;
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
    font-size: bold;
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
  margin-left: 45%;
  bottom: 1.9rem;
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
@import url('https://fonts.googleapis.com/css?family=Fugaz+One&display=swap');

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