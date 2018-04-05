// app/routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({  
  beforeModel: function() {
    return this.get('session').fetch().catch(function(){
    });
  },

  actions: {
    signIn: function(provider) {
      console.log(provider);
      this.get('session').open('firebase', {
        provider: provider,
        /* * *
        https://developers.facebook.com/docs/facebook-login/permissions
        https://github.com/firebase/emberfire/blob/master/docs/guide/authentication.md
        * * */
        settings: {
          scope: 'user_friends,user_likes'
        }
      }).then(function(data) {
        console.log(data.currentUser);
      });
    },

    signOut: function() {
      this.get('session').close();
    },
  },
});
