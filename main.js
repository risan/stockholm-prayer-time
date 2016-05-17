const menubar = require('menubar');
const mb = menubar({
  width: 200,
  height: 300
});

mb.on('ready', function ready () {
  console.log('App is ready.');
});
