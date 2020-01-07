<template>
  <div class="home">
    <br>
    <br>
      <a class="titolo underlined underlined--offset"
        style="color:	rgb(128, 0, 8)">
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
              <img class="intro-img img rounded" :src="image" alt="">

                <button class="intro-img spe lined thick ml-0 mr-0 mb-0 mt-0" >
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
@media (max-width: 530px){
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

@media (min-width: 700px) and (max-width: 800px){
  .titolo{
    font-size: 40px;
  }
  .intro .intro-box {
    right: 30%;
    width: 68%;
  }
  .intro .intro-box .intro-button {
    font-size: 2.8vw;
    width: 100%;
    left: 60%;
    bottom: -2rem;
  }
  .angle{
    visibility: hidden;
  }
  .showcase {
    margin-bottom: 35%;
  }
  .intro .intro-box {
    margin-top: -2%;
  }
}

@media (min-width: 801px) and (max-width: 900px){
  .titolo{
    font-size: 45px;
  }
  .intro .intro-box {
    right: 30%;
    width: 68%;
  }
  .intro .intro-box .intro-button {
    font-size: 2.8vw;
    width: 100%;
    left: 55%;
    bottom: -2rem;
  }
  .showcase {
    margin-bottom: 25%;
  }
  .angle{
    visibility: hidden;
  }
}

@media (min-width: 901px) and (max-width: 1015px){
  .titolo{
    font-size: 50px;
  }
  .intro .intro-box {
    right: 30%;
    width: 68%;
  }
  .intro .intro-box .intro-button {
    font-size: 2.4vw;
    width: 100%;
    left: 55%;
    bottom: -2rem;
  }
  .angle{
    visibility: hidden;
  }
  .showcase {
    margin-bottom: 20%;
  }
}

@media (max-width: 380px){
  .intro .intro-box {
    margin-top: -45%;
  }
  .showcase{
    margin-bottom: 45%;
  }
  .titolo{
    margin-bottom: -8%;
  }
  .intro .intro-img{
    margin-top: -35%;
  }
  .intro .img{
    height: 120%;
  }
}

@media (min-width: 380px) and (max-width: 400px){
  .intro .intro-box {
    margin-top: -50%;
  }
  .showcase{
    margin-bottom: 20%;
  }
  .titolo{
    margin-bottom: -4%;
  }
  .intro .intro-img{
    margin-top: -35%;
  }
  .intro .img{
    height: 120%;
  }
}

@media (min-width: 401px) and (max-width: 420px){
  .intro .intro-box {
    margin-top: -45%;
  }
  .showcase{
    margin-bottom: 15%;
  }
  .titolo{
    margin-bottom: -5%;
  }
  .intro .intro-img{
    margin-top: -40%;
  }
  .intro .img{
    height: 140%;
  }
}

@media (min-width: 421px) and (max-width: 455px){
  .intro .intro-box {
    margin-top: -48%;
  }
  .showcase {
    margin-bottom: 10%;
  }
  .titolo{
    margin-bottom: -4%;
  }
  .intro .intro-img{
    margin-top: -40%;
  }
  .intro .img{
    height: 200%;
  }
}

@media (min-width: 456px) and (max-width: 500px){
  .intro .intro-box {
    margin-top: -50%;
  }
  .showcase {
    margin-bottom: -7%;
  }
  .titolo{
    margin-bottom: 0%;
  }
  .intro .intro-img{
    margin-top: -45%;
  }
  .intro .img{
    height: 230%;
  }
}

@media (min-width: 501px) and (max-width: 530px){
  .intro .intro-box {
    margin-top: -53%;
  }
  .showcase {
    margin-bottom: -7%;
  }
  .titolo{
    margin-bottom: 0%;
  }
  .intro .intro-img{
    margin-top: -50%;
  }
  .intro .img{
    height: 270%;
  }
}

a:hover {
  text-decoration: none;
}

.angle{
  position: relative;
  margin-left: 48%;
  bottom: 1.9rem;
  height: 2rem;
  width: 10rem;
  border-bottom: 6px inset #CD5C5C;
  border-right: 4px inset #c40815;
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
  background-image: linear-gradient(to right, rgba(171, 7, 18, 0.75) 0, rgba(205, 92, 92, 0.5) 110%);
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
    box-shadow: inset 0 -0.03em 0 0 rgb(102, 0, 7);
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