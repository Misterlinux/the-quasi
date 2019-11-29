<template>
<div class="home">

  <div class="home-title"> 
    <span class="for" 
      style="font-family: 'Changa One', cursive; font-weight: 500; font-size: 4rem;"> 
        <em class="little">ok so, here s the title</em>
    </span>
  </div>

<!-- trying to add a method and all the netlify -->
<!-- ok so, about the specifi form -->

  <form
    name="ask-question"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    >
    <input type="hidden" name="form-name" value="ask-question" />
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        :value="panelist"
        @input="ev => form.askPerson = ev.target.value"
        :checked="form.askPerson === panelist"
      />
      <span>{{ panelist }}</span>
    </label>
    ...
    <button>Submit</button>
  </form>

<!-- end of the form -->

  <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
    <p class="hidden"> 
      this isnt supposed to be filled I guess
    </p>

    <p class="h4 text-center mb-4">Write to us</p>
    <div class="grey-text">
      <mdb-input name="name" label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
      <mdb-input name="email" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
      <mdb-input name="subject" label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
      <mdb-textarea name="message" :rows="2" label="Your message" icon="pencil"/>
    </div>
    <div class="text-center">
      <mdb-btn outline="secondary">Send <mdb-icon far icon="paper-plane" class="ml-1"/></mdb-btn>
    </div>
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
import { mdbInput, mdbBtn, mdbTextarea } from 'mdbvue';


export default {
  name: 'contact',
    components: {
      mdbInput,
      mdbBtn,
      mdbTextarea
    },
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: [],
          text:'',

          askPerson: "",
        },
        panelists: ['Evan You', 'Chris Fritz'],

        currentPanelist: 'Evan You',

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
      },

      updatePanelist (ev) {
        
        this.currentPanelist = ev.target.value
      }
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
