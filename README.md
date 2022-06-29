# LaunchDarkly sample Node.js (server-side) application with bootstrapping

We've built a simple Node.js app that demonstrates LaunchDarkly server-side bootstrapping.

Below, you'll find the build and deploy procedures. To learn more about the Node.js SDK, read [Node.js (server-side) SDK reference](https://docs.launchdarkly.com/sdk/server-side/node-js).

## Build instructions

Make sure you have [Node.js](http://nodejs.org/) installed. Then, clone the repository, set the `LD_SDK_KEY` and `LD_CLIENTSIDE_ID` environment variables, and start your local server. Here's how:

```sh
$ git clone git@github.com:launchdarkly/hello-bootstrap.git # or clone your own fork
$ cd hello-bootstrap
$ export LD_SDK_KEY=YOUR-SDK-KEY
$ export LD_CLIENTSIDE_ID=YOUR-CLIENTSIDE-ID
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

Your app should display a JSON representation of all flags in the project and environment associated with your SDK key and Client-side ID, with the values served for both the normal client and the bootstrapped client for the example user.

## Deploying to Heroku

If you are using Heroku, you can also deploy there. Make sure you have the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ heroku create
$ heroku config:set LD_SDK_KEY=YOUR-SDK-KEY
$ heroku config:set LD_CLIENTSIDE_ID=YOUR-CLIENTSIDE-ID
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
