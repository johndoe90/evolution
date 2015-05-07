'use strict';

var fs = require('fs');


var deps = fs.readFileSync(__dirname + '/../app/deps.js', {encoding: 'UTF-8'});

fs.writeFileSync(__dirname + '/../app/loadDeps.js', deps);