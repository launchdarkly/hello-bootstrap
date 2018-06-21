const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const LaunchDarkly = require('ldclient-node');

var ldClient = LaunchDarkly.init(process.env.LD_SDK_KEY);

var user = {
  key: "bootstrapDemo"
}

ldClient.on("ready", ()=>{
  express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => {
      ldClient.allFlags(user).then( (allFlags) => {
        var data = {
          user: user,
          allFlags: allFlags,
          clientsideId: process.env.LD_CLIENTSIDE_ID
        };
        res.render('pages/index', data);
      });
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));
});