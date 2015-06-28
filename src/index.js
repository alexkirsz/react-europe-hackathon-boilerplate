import React from 'react';

import App from './App';

if (__DEV__ && __CORDOVA__) {
  // Wait until we've opened our debugger
  alert('Ready?');
}

function render() {
  React.render(<App />, document.getElementById('container'));
}

function onDeviceReady() {
  StatusBar.styleDefault();
  render();
}

if (__CORDOVA__) {
  document.addEventListener('deviceready', onDeviceReady, false);
} else {
  render();
}