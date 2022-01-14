import React from 'react';
import './App.css';
import Market from './components/Market';
import {Provider} from 'react-redux';
import store from './redux/store';
import Loader from 'react-loader-spinner';

function App(){
  return  (
   <Provider store={store}>
     <div className="App">
       <Market/>
     </div>
   </Provider>
 );
}

export default App;
