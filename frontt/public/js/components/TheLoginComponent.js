export default {
    name: "TheLoginComponent",

    template: `
    <section class="container">
    <div class="jumbotron">
        <h1>Welcome to Flashblack!</h1>
        <p class="lead">
        Before revisiting your favourite movies, tv shows or music from yesteryear, please log in with a valid username and password.
        </p>
    </div>

    <section class="log-in">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input v-model="username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>

      <label class="sr-only" for="inlineFormPassword">Name</label>
      <input v-model="password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
    </section>

    <button
    @click="tryLogIn"
        type="submit" 
        class="btn btn-primary login-submit"
    >Go!
    </button>
  </section>`,

  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    tryLogIn() {
      //debugger;     
      if (this.username.trim().length == 0) { console.log('username input is empty'); }
      if (this.password.trim().length == 0) { console.log('password input is empty'); }
      
      let userData = {
        username: this.username,
        password: this.password
      }
      fetch('/ums/login', {
      method: "POST",
      body: JSON.stringify(userdata)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    }
  }
}