import React from 'react';
import FeedIndex from './Components/FeedIndex';
import Modal from './Components/Modal';



import './App.scss';

function App() {
  return (
    <div className="App">
      <Modal />
		  <FeedIndex/>
    </div>
  );
}

export default App;
