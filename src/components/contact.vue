<template>
<div class="home">

  <div class="home-title"> 
    <span class="for" 
      style="font-family: 'Changa One', cursive; font-weight: 500; font-size: 4rem;
        border-bottom: 3px outset #C80815; border-right: 2px outset #C80815;"> 
        <em class="little"> The Blogk's Contact Form <i class="fas fa-paper-plane ml-1"></i></em>
    </span>
  </div>

<!-- trying to add a method and all the netlify -->
<!-- ok so, about the specifi form -->

<!-- end of the form -->

  <div class="forma">
    <b-form @reset="onReset" v-if="show" 
      name="ask-question"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field">

    <input type="hidden" name="form-name" value="ask-question" />

    <b-form-group
      label-cols-lg="4"
      label="
      Welcome to the direct comment line,
      any and all commentary will be dispatched,tell me the aftertaste the Blogk left you."
      label-size="lg"
      label-class="font-weight-bold ml-4 elemento"
      class="mt-4"
      label-align-lg="center"
    >

    <i class="fas fa-shipping-fast"></i>

      <b-img
        src="//live.staticflickr.com/65535/49197710168_014f46e3a2_n.jpg" 
        fluid 
        left
        rounded
        alt="principal image"
        class="primo mt-4 mr-1"
      >
      </b-img>

      <b-img 
        left 
        thumbnail 
        fluid 
        src="//live.staticflickr.com/65535/49197710168_014f46e3a2_n.jpg" 
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

            name="mail"
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

              name="name"
            ></b-form-input>
        </b-form-group>

        <b-form-group 
          id="input-group-3" 
          label="afterTaste" 
          label-for="input-3"
          label-cols-sm="2"
          label-size="lg"
          label-align-sm="right" class="mb-2 mr-5 ml-1 altro"
          label-class="font-weight-bold basso"
        >
          <b-form-select
            id="input-3"
            v-model="form.food"
            :options="foods"
            required

            name="taste"
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
          placeholder="Your comment being..."
          size="lg"
          rows="3"
          max-rows="7"
          required

          name="question"
        ></b-form-textarea>
      </b-form-group>

        <div class="d-flex">

          <button class='spe lined thick' type="reset" variant="outline">Clear</button>

          <!--<button class='spe dashed thick ml-auto' type="submit" variant="primary">Submit</button>-->

          <button class='spe dashed thick ml-auto' >Submit</button>
        </div>

    </b-form-group>

    </b-form>

    <div data-netlify-recaptcha="true"></div>

  </div>

</div>
</template>

<script>
export default {
  name: 'contact',
    data() {
      return {
        form: {
          name: '',
          email: '',
          subject:'',
          message: '',

          food: null,
          text:'',

        },

        foods: [{ text: 'Select One', value: null }, 'Sweet', 'Sour', 'Bitter', 'Salty','Umami'],
        show: true
      }
    },

    methods: {
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.text = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
// end added data I guess
    }
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
