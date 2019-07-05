import React from 'react';

import './fonts/glyphicons-halflings-regular.eot';
import './compiled/bootstrap.min.css';
import './compiled/myApp.min.css';

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
    return (
        <div className="App">
        <Header />
        <Content />
        <div className="clearfix"> </div>
        <Footer />
    </div>  
  );
}

export default App;
