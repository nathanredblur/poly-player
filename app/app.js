// -----------------------------------------------------
// Here is the starting point for your own code.
// All stuff below is just to show you how it works.
// -----------------------------------------------------

// Browser modules are imported through new ES6 syntax.
import { greet } from './hello_world/hello_world';

// Node modules are required the same way as always.
var os = require('os');

// window.env contains data from config/env_XXX.json file.
var envName = window.env.name;

document.getElementById('platform-info').innerHTML = os.platform();
document.getElementById('env-name').innerHTML = envName;

// Player
var wjs = require("wcjs-player");
var player = new wjs("#player").addPlayer({ autoplay: true });
// player.addPlaylist("http://archive.org/download/CartoonClassics/Krazy_Kat_-_Keeping_Up_With_Krazy.mp4");
// player.zoom(1);

document.addEventListener('drop', function(e) {
  e.preventDefault();
  e.stopPropagation();
  for (var i = 0; i < e.dataTransfer.files.length; ++i) {
    var file = 'file://' + e.dataTransfer.files[i].path;
    player.addPlaylist(file);
  }
  return false;
});
document.addEventListener('dragover', function(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
});


console.log(greet());