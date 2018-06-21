# hello-bootstrap

A Node.js app demonstrating LaunchDarkly server-side bootstrapping.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ git clone git@github.com:launchdarkly/hello-bootstrap.git # or clone your own fork
$ cd hello-bootstrap
$ export LD_SDK_KEY=YOUR-SDK-KEY
$ export LD_CLIENTSIDE_ID=YOUR-CLIENTSIDE-ID
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

Make sure you have the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ heroku create
$ heroku config:set LD_SDK_KEY=YOUR-SDK-KEY
$ heroku config:set LD_CLIENTSIDE_ID=YOUR-CLIENTSIDE-ID
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

After successful deployment