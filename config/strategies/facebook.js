
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var url = require('url'),
    Profile = require('./profile'),
    config = require('../config'),
    users = require('../../app/controllers/users.server.controller'),
 Profile = require('./profile');


module.exports = function(){

    passport.use( new FacebookStrategy({
            clientID: config.facebook.clientID,
            clientSecret: config.facebook.clientSecret,
            callbackURL: config.facebook.callbackURL,
            passReqToCallback:true,
            profileFields: ['email', 'id', 'name',  'displayName', 'picture.type(large)', 'hometown', 'profileUrl', 'gender', "age_range"]
            },
        
        function(req, accessToken, refreshToken, profile, done) {
            var providerData = profile._json;
            providerData.accessToken = accessToken;
            providerData.refreshToken = refreshToken;
          
          var providerUserProfile = {
            providerId: profile.id,
            username: profile.displayName,
            fullName: profile.displayName,
            firstname:profile.name.givenName,
            lastname: profile.name.familyName,
            email: profile.emails[0].value,
            provider: 'facebook',
            providerId: profile.id,
            providerData: providerData
            };
          users.saveOAuthUserProfile(req, providerUserProfile, done);
        }
    ))
};