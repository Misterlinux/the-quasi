<template>
  <div class="app">
        <vue-headful
            title="AZ' Blogk"
            description="About what it works"
        />

        <script2 src="https://kit.fontawesome.com/f107dae9c2.js"></script2>

        <nav class="navbar navbar-expand-lg fixed-top navbar-dark total">
          <div class="container-fluid">

            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                <img class="logo" src="./assets/mezzot.png" alt="logo">
              </a>
            </div>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-server"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarResponsive">

              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item" >
                  <router-link class="nav-link" to="/">
                    <span class="sr-only">(current)</span>
                  </router-link>
                </li>
                <li class="nav-item text-white-50 mr-4">
                  <router-link class="nav-link" to="/" data-toggle="collapse" data-target=".navbar-collapse.show">   
                    <a href="#">
                      <div class="icon">
                        <i class="fas fa-house-damage"></i>
                        <i class="fas fa-house-damage"></i>
                      </div>
                      <div class="name"><span data-text="Home">Home</span></div>
                    </a>
                  </router-link>
                </li>
                <li class="nav-item mr-4" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <router-link class="nav-link" to="/gallery">
                    <a href="#">
                      <div class="icon">
                        <i class="fas fa-photo-video"></i>
                        <i class="fas fa-photo-video"></i>
                      </div>
                      <div class="name"><span data-text="Gallery">Gallery</span></div>
                    </a>
                  </router-link>
                </li>
                <li class="nav-item mr-4" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <router-link class="nav-link" to="/final">
                  <a href="#">
                    <div class="icon">
                      <i class="fas fa-warehouse"></i>
                      <i class="fas fa-warehouse"></i>
                    </div>
                    <div class="name"><span data-text="Blogk">Blogk</span></div>
                  </a>
                  </router-link>
                </li>
                <li class="nav-item mr-4" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <router-link class="nav-link" to="/contact">
                    <a href="#">
                      <div class="icon">
                        <i class="fas fa-mail-bulk"></i>
                        <i class="fas fa-mail-bulk"></i>
                      </div>
                      <div class="name"><span data-text="Contact">Contact</span></div>
                    </a>
                  </router-link>
                </li>

              </ul>

            </div>

          </div>
        </nav>

        <vue-page-transition name="fade-in-left">
          <router-view />
        </vue-page-transition>
      
<footer class="footer">				
		<div class="container">
			<div class="row">
				<div class="col-md-4 mb-3">
					<div class="footer-title m-t-5 p-b-5">
						About 
            <span class="mega">
              <em> AZ </em>
            </span>
					</div>	
					<div>
            All articles has as its objective to develop a
            worthwhile <em><b>view</b></em>
            on given subjects.
          </div>
          <div>
            Due to this the number of updates can <em><b>vary.</b></em>
          </div>
          <div>
            For a daily insight follow me on my social media.
					</div>
				</div>

				<div class="col-md-4">
					<div class="footer-title m-t-5 p-b-5">
						Latest
					</div>	
					<div class="footer-links mt-3">
						<a href="https://github.com/Misterlinux">
							<b>Code's Warehouse</b>
						</a>
						<a href="https://www.deviantart.com/">
							<b>SketchBox gallery</b>
						</a>
					</div>
				</div>

					<div class="col-md-4 footer-social-links mb-2">
						<div class="footer-bottom">
							<a href="#">
								<i class="fab fa-facebook-square" aria-hidden="true"></i>
							</a>
							<a href="#">
								<i class="fab fa-twitter-square" aria-hidden="true"></i>
							</a>
              <a href="#">
                <i class="fab fa-youtube" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin" aria-hidden="true"></i>
              </a>
					</div>
				</div>

			</div>
		</div>
	</footer>
</div>

</template>

<script>

export default {
  name: 'app',
}

</script>

<style>
@import './css/app.css';
@import url('https://fonts.googleapis.com/css?family=Arvo:700i&display=swap');

/* I still have to find a way to have different background */

.thirdOverlayLine {
  left: 93%;

  position: absolute;
  display: block;
  height: 100vh;
  width: 5px;
  background: #d42b2b;
}

.titlo{
  margin-left: 20%;
  font-family: 'Saira', sans-serif; 
  font-size: 4rem; 
  font-weight: bold;
  font-style: italic;
}

.firsto{
  width: 90%;
}

.imma{
  margin-left: 2.5%;
  margin-top: 1%;
  width: 60%;
  max-height: 360px;
  border-left: 1px groove pink;
  border-bottom: 3px inset #C80815;
  border-right: 3px outset #c80815;
}

.appetize{
  margin-top: 2%;
  width: 37%;
  float: right;
  background: rgba(255, 230, 204, 0.5);
  padding: 6% 4px;
  font-family: 'Arvo', serif;
  font-size: 2.5rem; 
  line-height: 1.05;
  font-style: italic;
}

#bloggo{
    margin-left: 3%;
    padding-left: 3%;
    margin-top: 1%;
    padding-top: 2%;
    padding-right: 3%;
    width: 88%;
    background: rgba(255, 230, 204, 0.4);
    display: block;
    font-size: 22px;
    font-weight: 500;
    font-family: 'Changa', sans-serif;
}

.paragraph{
  text-align: left;
  font-size: 30px;
  margin-left: 25%;
  font-weight: bold;
  font-family: 'Arvo', serif;
}

.lefto{
    float: left;
    padding: 10px 20px 10px 7px;
    width: 30%;
    box-sizing: border-box;
}

.righto{
    float: right;
    padding: 10px 20px 10px 7px;
    width: 30%;
    box-sizing: border-box;
}

.tutto{
  float: left;
  padding: 10px 20px 10px 7px;
  width: 70%;
  box-sizing: border-box;
}

.codice{
  background-color:rgb(65, 0, 0);
  color: rgb(251, 203, 106);
  font-weight: bold;
  font-size: 17px;
}

/* ok so down here we get the animation for 
getting the content in it */

/* and here the animation is gone*/

@media (max-width: 580px){
  .thirdOverlayLine {
    left: 97.5%;
    width: 4px;
  }
  .titlo{
    margin-left: 15%;
    font-family: 'Saira', sans-serif; 
    font-size: 2.5rem; 
    font-weight: bold;
    font-style: italic;
  }
  .imma{
    width: 55%;
  }
  .firsto{
    width: 95%;
  }
  .appetize{
    margin-top: 1%;
    width: 42%;
    padding: 4% 4px;
    line-height: 1.05;
    font-size: 1.1rem;
  }
  .lefto{
      float: left;
      padding: 10px 10px 2px 7px;
      width: 40%;
  }

  .righto{
      float: right;
      padding: 10px 15px 10px 7px;
      width: 40%;
  }
  .paragraph{
    margin-left: 10%;
  }
  .codice{
    font-size: 14px;
    overflow: auto;
  }
  .tutto{
    float: left;
    padding: 10px 13px 15px 7px;
    width: 100%;
  }
  .footer-social-links .footer-bottom{
    margin-top: 8%;
  }
}

@media (min-width: 590px) and (max-width: 815px){
  .appetize{
    font-size: 2.1rem;
  }
}

</style>

<style lang="scss">
//color/ui color variables

//split button mixin
@mixin btn__split {
	.special {
		position: relative;
		letter-spacing: 0.2em;
		margin: 0 auto;
		padding: 1rem 2.5rem;
		background: transparent;
		outline: none;
    z-index: 0;

		&::after,
		&::before {
			content: "";
			position: absolute;
			height: 80%;
			width: 50%;
			transform: skewX(30deg);
			transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
			z-index: -2;
		}
		&::before {
			background-color: rgba(120, 7, 51, 0.65);
			top: 0.2rem;
			left: 1.5rem;
		}
		&::after {
			background-color: rgba(216, 135, 65, 0.7);
			top: 1rem;
			left: 7rem;
		}
		&:hover {
			&::before,
			&::after {
				top: 0;
				transform: skewx(0deg);
			}
			&::after {
				left: 0rem;
			}
			&::before {
				left: 5.75rem;
			}
		}
	}
}

.better {
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 700;
}

@include btn__split;

</style>