'use strict';

/**
 * Expose
 */

module.exports = {
  db:'mongodb://mongo:27017/noobjs_prod',
  facebook: {
    clientID: process.env.FACEBOOK_CLIENTID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: 'http://docker-mongo.com/auth/facebook/callback'
  },
  twitter: {
    clientID: process.env.TWITTER_CLIENTID,
    clientSecret: process.env.TWITTER_SECRET,
    callbackURL: 'http://docker-mongo.com/auth/twitter/callback'
  },
  github: {
    clientID: process.env.GITHUB_CLIENTID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: 'http://docker-mongo.com/auth/github/callback'
  },
  linkedin: {
    clientID: process.env.LINKEDIN_CLIENTID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: 'http://docker-mongo.com/auth/linkedin/callback'
  },
  google: {
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: 'http://docker-mongo.com/auth/google/callback'
  }
};
