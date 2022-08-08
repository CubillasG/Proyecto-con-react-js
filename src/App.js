
import NavBar from './Componentes/NavBar';
import Section from './Componentes/Section';
import Container from 'react-bootstrap/Container'
import { Outlet } from 'react-router-dom';
function App() {
  return (
<>
        <NavBar/>
        <Outlet/>
 



      {/* <section>
      <Container>
        <Section/>
      </Container>
      </section> */}
      
  </>
  );
}

export default App;
