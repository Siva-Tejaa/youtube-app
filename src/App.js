import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';

import Body from './components/Body';
import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import SearchPage from './components/SearchPage';
import Channel from './components/Channel';

function App() {
  return (
    <Provider store={store}>
    <div>
      <Header/>
      <Routes>
       <Route exact path='/' element={<Body/>} />
       <Route exact path='/watch/:id' element={<WatchPage/>} />
       <Route exact path='/search/:text' element={<SearchPage/>} />
       <Route exact path='/channel/:channelid' element={<Channel/>} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
