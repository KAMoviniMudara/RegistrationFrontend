import Register from './pages/registration';
import './App.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Register/>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
