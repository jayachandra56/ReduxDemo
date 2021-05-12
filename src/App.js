import logo from './logo.svg';
import './App.css';
import CakeCompo from './CakeCompo'
import IceCreameCompo from './IceCreameCompo'
import { Provider } from 'react-redux'
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <CakeCompo />
      <IceCreameCompo/>
      </div>
    </Provider>
  );
}



export default App;
