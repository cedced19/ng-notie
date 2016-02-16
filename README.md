# ng-notie

AngularJS wrapper for [notie.js](https://github.com/jaredreich/notie.js) which was created by [Jared Reich](https://github.com/jaredreich).

[![](https://raw.githubusercontent.com/jaredreich/notie.js/master/demo.gif)](https://github.com/jaredreich/notie.js)

## Documentation

This isn't the original project see it [here](https://github.com/jaredreich/notie.js).

## Installation with npm and browserify:
```bash
$ npm install ng-notie
```
In your js file:
```javascript
require('ng-notie');
var app = angular.module('yourApp', ['ngNotie'])
app.controller('MainCtrl', function (notie) {
  notie.alert(1, 'Success!', 1.5);
});
```
