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

    <header class="showcase mt-3">
        <div class="container showcase-inner">

            <div class="intro">
              <img class="intro-img img rounded mb-0" :src="image" alt="">

                <button class="intro-img spe lined thick ml-0 mr-0 mb-5 mt-3" >
                  Check me out 
                  <i class="fas fa-meteor"></i>
                </button>

              <div class="intro-box bg-faded p-3 pb-lg-5 pr-lg-5 pl-lg-5 pt-lg-4 mb-5 rounded">
                <div class="section-heading mb-1 mb-md-1 mr-4">
                    <em>
                      <span class="tres">Joselt Ozano </span>
                      is here
                    </em>
                </div>
                <div class="mb-0 intro-text">
                  <div>
                  <span class="fug"> I am no good at running over old notes </span>
                  but subject breakdowns tends to leave a lot of them behind.
                  </div>
                  <div>
                  The <span class="blo">Blogk </span> exist to <span class="sim"> find and gather </span> 
                  drafts both brief and old.
                  Its very <span class="example"><span class="hover hover-1">audience-focused</span></span> 
                  nature sets and highen the standard.
                  <div>
                  All for a <span class="sim"><mark> consistent and interdisciplinary </mark></span>
                  <span class="sim"> model </span>to move swiftly between 
                  <span align="right"> fields and envirodments. </span>
                  </div>
                  </div>
                  <div class="mir">
                  This is what it takes to BE.
                  </div>
                  Here is my view and I hope it will be yours as well while being here
                  in my 
                  <span class="example"><span class="hover hover-1">own designed development path.</span></span>

                  <footer class="blockquote-footer text-right"><b> The Blogk </b></footer>

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
@media (max-width: 455px){
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
    margin-top: -47%;
  }
  .intro .intro-box {
    right: 32%;
    width: 67%;
    margin-top: -50%;
  }
  .intro .intro-box .intro-text{
    font-size: 0.9rem;
    font-style: italic;
  }
  .intro .intro-img{
    margin-top: -35%;
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
  }
  .section-heading{
    line-height: 1.3;
  }
}

@media (max-width: 367px){
  .showcase{
    margin-bottom: 37%;
  }
}

@media (min-width: 368px) and (max-width: 373px){
  .showcase{
    margin-bottom: 24%;
  }
}

@media (min-width: 374px) and (max-width: 380px){
  .showcase{
    margin-bottom: 12%;
  }
}

@media (min-width: 411px) and (max-width: 455px){
  .showcase {
    margin-bottom: 0%;
  }
}

/* about the tablet kinda */
@media (min-width: 500px) and (max-width: 815px){
  .showcase {
    margin-bottom: 25%;
  }
  .intro .intro-box {
    margin-top: -2%;
  }
}



a:hover {
  text-decoration: none;
}

.angle{
  position: relative;
  margin-left: 44%;
  bottom: 1.9rem;
  height: 2rem;
  width: 10rem;
  border-bottom: 6px inset #CD5C5C;
  border-right: 4px inset #A93226;
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
  background: #CD5C5C;
  position: absolute;
  width: 98%;
  /*height: 50px;*/
  bottom: 0;
  left: 0;
  border-radius: 1px;
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
      height: 2.1rem;
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
  background-image: linear-gradient(to right, #a72222 0, #F3A9A3 200%);
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
    box-shadow: inset 0 -0.03em 0 0 #F3A9A3 ;
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