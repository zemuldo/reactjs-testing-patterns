import React from 'react';
import ReactDOM from 'react-dom';
import HelloName from './HelloName';
import Form from './Form';
import Profile from './Profile';

ReactDOM.render(<HelloName />, document.getElementById('hello-name'));
ReactDOM.render(<Form />, document.getElementById('form'));
ReactDOM.render(<Profile />, document.getElementById('profile'));
