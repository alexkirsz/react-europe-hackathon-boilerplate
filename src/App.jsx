import React from 'react';
import Touchstone from 'touchstonejs';

import './styles.less';

import HomeView from './views/Home';

let views = {
  home: HomeView,
};

export default React.createClass({
  displayName: 'App',

  mixins: [Touchstone.createApp(views)],

  getInitialState() {
    return {
      currentView: 'home',
    };
  },

  render() {
    return <div>{this.getCurrentView()}</div>;
  },
});
