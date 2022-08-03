import { Outlet } from 'react-router-dom';
import NavBar from './Componentes/NavBar';
import Section from './Componentes/Section';

function App() {
  return (
<>
      <header>
        <NavBar/>
        <Outlet/>

      </header>

      <section>
        <Section/>
      </section>
  </>
  );
}

export default App;
