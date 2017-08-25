var sjcl = require('sjcl');
var gen = new sjcl.prng(10);
gen.startCollectors();
sjcl.random.addEventListener("seeded", function() { document.getElementById("seed").innerText = genSeed(); });
sjcl.random.addEventListener("progress", function(p) { 
  if(p != 1) {
    document.getElementById("seed").innerText = "Collecting entropy, please move your mouse/device\nProgress: " + p * 100 + "%"
  }
});

function genSeed() {
  var seed = "";
  for(;seed.length < 81;seed += sjcl.codec.base64.fromBits(sjcl.random.randomWords(33, 10)).replace(/[^A-Z9]+/g, '')) {};
  return seed.substring(0,81);
}
