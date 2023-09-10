import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";
import reactRouter from './R089_reactRouter'
import reactRouter2 from './R089_reactRouter2'

function App() {
  return (
    <div className="App">
      <h1>react라우더DOM</h1>
      <Route exact path='/' component={reactRouter} />
      <Route exact path='/reactRouter2' component={reactRouter2} />
    </div>
  );
}


export default App;