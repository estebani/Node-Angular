module.exports = {
  db: {
    uri:'',
    options: {
      user: '',
      pass: ''
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  sessionSecret: '',
  google: {
    clientID: '',
    clientSecret: '',
    callbackURL: ''
  },
  //configurar dominio desde facebook developer
  facebook: {
    clientID: '',
    clientSecret: '',
    callbackURL: ''
  },
  mailer: {
    from: process.env.MAILER_FROM || '',
    options: {
      service: process.env.MAILER_SERVICE_PROVIDER || '',
      auth: {
        user: process.env.MAILER_EMAIL_ID || '',
        pass: process.env.MAILER_PASSWORD || ''
      }
    }
  },

};



