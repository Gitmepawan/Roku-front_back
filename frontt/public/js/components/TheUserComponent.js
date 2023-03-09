export default {
    name: "TheUserComponent",
    props: ['user'],

    template: `
    <div @click="NavToHome" class="card rounded avatar">
       <div class="card-body text-center">
       <img :src='"images/" +user.avatar' class="rounded-circle img-fluid" alt="user avatar">        
       <p>{{ user.username }}</p>
    </div>
    </div>
    `,
    methods : {
        NavToHome() {
           // look at the users permission level and set route based oon the permission
           // if it is less than 3, send them to the kids home  page
           // else send them to the default home page



        let targetRoute = (this.user.permissions <= 3) ? 'kidshome' : 'defaulthome';
        this.$router.push({ name: targetRoute });
           } 
          
        }
    }
