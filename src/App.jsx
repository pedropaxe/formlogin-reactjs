import './App.css';
import Form from './components/form/form';
import Login from './components/login/login';
import LogoForm from './components/logo/logo';



function App() {
  return (
    <div className='app'>
      <div className='app-logo'>
        <LogoForm />
      </div>
      <div className='app-main'>
        <Login /> 
        <Form />
      </div>
    </div>
  );
}

export default App;
