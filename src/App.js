import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
