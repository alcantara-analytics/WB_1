import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { MascotGuide } from './components/MascotGuide';
import { useHashRoute } from './hooks/useHashRoute';
import { Home } from './pages/Home';
import { Exams } from './pages/Exams';
import { Resources } from './pages/Resources';
import { Proposals } from './pages/Proposals';
import { Participate } from './pages/Participate';
import { Team } from './pages/Team';
import { Transparency } from './pages/Transparency';
import { Events } from './pages/Events';

export default function App() {
  const { route, navigate } = useHashRoute();
  const [toast, setToast] = useState('');
  const notify = (message: string) => { setToast(message); window.setTimeout(() => setToast(''), 2500); };

  const page = (() => {
    switch (route) {
      case '/examenes': return <Exams navigate={navigate} notify={notify}/>;
      case '/recursos': return <Resources navigate={navigate} notify={notify}/>;
      case '/propuestas': return <Proposals navigate={navigate} notify={notify}/>;
      case '/participa': return <Participate navigate={navigate} notify={notify}/>;
      case '/equipo': return <Team navigate={navigate}/>;
      case '/transparencia': return <Transparency navigate={navigate}/>;
      case '/eventos': return <Events navigate={navigate} notify={notify}/>;
      default: return <Home navigate={navigate}/>;
    }
  })();

  return <>
    <Navbar route={route} navigate={navigate}/>
    {page}
    <Footer navigate={navigate}/>
    <Toast message={toast}/>
    {route !== '/' && <MascotGuide navigate={navigate}/>} 
    {route !== '/' && <button className="quick quick-v7" onClick={() => navigate('/')}><span>⌂ Hall</span></button>}
  </>;
}
