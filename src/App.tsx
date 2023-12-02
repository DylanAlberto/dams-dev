import './App.css';
import Layout from './components/Layout';
import Intro from './components/sections/Intro';
import Hello from './components/sections/Hello';
import Skills from './components/sections/Skills';
import Technologies from './components/sections/Technologies';

function App() {
  return (
    <Layout>
      <Intro/>
      <Hello/>
      <Skills/>
      <Technologies/>
    </Layout>
  );
}

export default App;
