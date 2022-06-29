import {useRoutes} from 'react-router-dom'
import router from './router'
import './base.css'
function App() {
  return useRoutes(router);
}

export default App;
