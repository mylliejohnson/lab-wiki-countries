import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CountriesList/>
      <CountryDetails/>
    {/* <Switch>
    <Route exact path='/country/:dynamicId' render={(props) => <CountryDetails {...props} />} /> 
    </Switch> */}
    </div>
  );
}

export default App;
