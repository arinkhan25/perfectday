import React from 'react';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Card from './Components/Card';
import './App.css';

function App() {
return (
<div className="App">
<Navbar/>
<Dashboard/>
<div className="card-container">
<Card category = 'Food' title = 'Pasta'/>
<Card category = 'Movie' title = 'Transformers'/>
<Card category = 'Activity' title = 'Swimming'/>
<Card category = 'Video Game' title = 'cod'/>
</div>
</div>
);
}

export default App;