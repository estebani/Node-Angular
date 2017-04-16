module.exports = {
  //db:'mongodb://user:password@aws-us-east-1-portal.26.dblayer.com:17607/mean',
  //db:'mongodb://ds123050.mlab.com:23050/mean',
  //compose: user password
  db: {
    uri:process.env.DBURI,
    options: {
      user: process.env.DBUSER,
      pass: process.env.DBPASS
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  sessionSecret: process.env.SESSIONSECRET,
  google: {
    clientID: process.env.GOOOGLECLIENTID,
    clientSecret: process.env.GOOGLESECRETID,
    callbackURL: process.env.GOOGLECALLBACKURL
  },
  facebook: {
    clientID: process.env.FACEBOOCLIENTEID,
    clientSecret: process.env.FACEBOOKSECRET,
    callbackURL: process.env.FACEBOOKCALLBACKJURL
  },
   mailer: {
    from: process.env.MAILER_FROM,
    options: {
      service: process.env.MAILER_SERVICE_PROVIDER,
      auth: {
        user: process.env.MAILER_EMAIL_ID,
        pass: process.env.MAILER_PASSWORD 
      }
    }
  },

};



