import React from 'react';
import './App.css';
import AppRoutes from './AppRoute';

const App = (props) => (
  <div>
    <AppRoutes {...props} />
  </div>
);

export default App;
