const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const LaunchDarkly = require('launchdarkly-node-server-sdk');

var ldClient = LaunchDarkly.init(process.env.LD_SDK_KEY);

// Set up the context properties.
// This context should appear on your LaunchDarkly contexts dashboard soon after you run the demo.
// Normal and bootstrapped flag values for this context should appear in your app.
var context = {
  key: "bootstrapDemo",
  kind: "user"
}

ldClient.on("ready", ()=>{
  express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => {
      ldClient.allFlagsState(context, {clientSideOnly: true}).then( (allFlags) => {
        const data = {
          context,
          allFlags,
          clientsideId: process.env.LD_CLIENTSIDE_ID
        };
        res.render('pages/index', data);
      });
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));
});