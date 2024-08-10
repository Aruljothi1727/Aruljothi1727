import logo from './logo.svg';
import './App.css';
import Mainlayout from './pages/layout.jsx'
import Loginform from './components/loginform.jsx';
import { AuthProvider } from './context/logincontext.jsx';

function App() {
  return (
    <AuthProvider>
    <Mainlayout/>
    </AuthProvider>
  );
}

export default App;
