<template>
<div class="home">

  <div class="home-title"> 
    <span class="for" 
      style="font-family: 'Changa One', cursive; font-weight: 500; font-size: 4rem;"> 
        <em class="little">ok so, here s the title</em>
    </span>
  </div>

<!-- trying to add a method and all the netlify -->

							<form method="POST" data-netlify="true">
								<div class="fields">
									<div class="field half">
										<input type="text" name="name" id="name" placeholder="Name" />
									</div>
									<div class="field half">
										<input type="email" name="email" id="email" placeholder="Email" />
									</div>
									<div class="field">
										<textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
									</div>

									<div class="field">
										<div data-netlify-recaptcha="true"></div>
									</div>

								</div>
								<ul class="actions">
									<li><input type="submit" value="Send Message" class="button primary" /></li>
								</ul>
							</form>

<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>


  <div class="forma">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" method="POST" data-netlify="true" netlify-honeypot="bot-field" >
    
    <b-form-group
      label-cols-lg="4"
      label="so I would need to put a long text here and an3
      image, how am I supposed to do that, are yo sure?"
      label-size="lg"
      label-class="font-weight-bold ml-4 elemento"
      class="mt-4"
      label-align-lg="right"
    >

    <i class="fas fa-feather-alt"></i>

      <b-img
        src="https://media.gipys.shoes/2019/04/guess.jpg" 
        fluid 
        left
        rounded
        alt="principal image"
        class="primo mt-4"
      >
      </b-img>

      <b-img 
        left 
        thumbnail 
        fluid 
        src="https://picsum.photos/250/250/?image=54" 
        class="secondon mt-5 ml-1" 
        alt="Cell image"
      >
      </b-img>

        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          label-cols-sm="2"
          label-align-sm="right" 
          label-class="font-weight-bold"
          class="mb-3 mt-4 mr-5 ml-1 altro"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Email here"
          ></b-form-input>
        </b-form-group>

        <b-form-group 
          id="input-group-2" 
          label="Your Name:" 
          label-for="input-2"
          label-cols-sm="2"
          label-align-sm="right" 
          label-class="font-weight-bold"
          class="mb-3 mr-5 ml-1 altro"
        >
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Enter name"
            ></b-form-input>
        </b-form-group>

        <b-form-group 
          id="input-group-3" 
          label="Food:" 
          label-for="input-3"
          label-cols-sm="2"
          label-size="lg"
          label-align-sm="right" class="mb-3 mr-5 ml-1 altro"
          label-class="font-weight-bold basso"
        >
          <b-form-select
            id="input-3"
            v-model="form.food"
            :options="foods"
            required
          ></b-form-select>
        </b-form-group>

      <b-form-group          
          label="Message:" 
          label-cols-sm="2"
          label-size="lg"
          label-align-sm="right" 
          class="mb-3 mr-5 ml-1 altro"
          label-class="font-weight-bold basso"
      >
        <b-form-textarea
          id="textarea"
          v-model="form.text"
          placeholder="Enter something..."
          size="lg"
          rows="3"
          max-rows="7"
          required
        ></b-form-textarea>
      </b-form-group>

        <div class="d-flex">
          <button class='spe lined thick' type="reset" variant="outline">Clear</button>

          <button class='spe dashed thick ml-auto' type="submit" variant="primary">Submit</button>

        </div>
    </b-form-group>

    </b-form>

  </div>

</div>
</template>

<script>
export default {
  name: 'contact',
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: [],
          text:''
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        this.form.text = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
}

</script>

<style>
@import '../css/contact.css';

@media (max-width: 580px){
  .primo{
    visibility: hidden;
  }
  .secondon{
    display:inline-block;
    width: 40%;
    height: 30%;
  }
  .basso{
    margin-top: -4%;
  }
  .d-flex .lined{
    margin-left: 50%;
  }
}
</style>

<style lang="scss">



</style>
