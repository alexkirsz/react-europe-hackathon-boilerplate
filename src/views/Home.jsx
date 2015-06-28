import React from 'react';
import { Navigation, Link, UI } from 'touchstonejs';

export default React.createClass({
  mixins: [Navigation],

  render() {
    return (
      <UI.View>
        <UI.Headerbar type="default" label="Home"/>
        <UI.ViewContent grow scrollable>
        </UI.ViewContent>
      </UI.View>
    );
  },
});