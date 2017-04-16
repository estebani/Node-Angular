// Invocar el modo 'strict' de JavaScript
'use strict';

// Cargar las dependencias del módulo
var users = require('../../app/controllers/users.server.controller'),
    passport = require('passport');

//Definir el método del módulo routes
module.exports = function(app) {
	//Configurar las rutas 'signup'
  app.route('/signup')
     .get(users.renderSignup)
     .post(users.signup);

  //Configurar las routes 'signin'
  app.route('/signin')
     .get(users.renderSignin)
     .post(passport.authenticate('local', {
       successRedirect: '/',
       failureRedirect: '/signin',
       failureFlash: true
     }));
     
 // Configurar las rutas Google OAuth 
  app.get('/oauth/google', passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ],
    failureRedirect: '/signin'
  }));
  app.get('/oauth/google/callback', passport.authenticate('google', {
    failureRedirect: '/signin',
    successRedirect: '/#!/'
  }));

 // Configurar las rutas facebook
app.route('/auth/facebook').get(passport.authenticate('facebook', { scope: ['email']}));

app.get('/auth/facebook/callback', passport.authenticate('facebook',
  { successRedirect: '/#!/', 
    failureRedirect: '/signin' }));

  //Configurar la route 'signout'
  app.get('/signout', users.signout);



  //configurar ruta de correos
  app.get('/olvidoclave',users.correo);

  app.get('/send',users.forgot);

  //configurar ruta de correos
  app.get('/drive', users.drive);


   
};

