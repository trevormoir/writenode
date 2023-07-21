import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);

  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <AllRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
      <Footer />
    </div>
  );
}

export default App;
