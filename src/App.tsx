import './App.css';
import Layout from './components/Layout';
import Intro from './components/sections/Intro';
import Hello from './components/sections/Hello';
import Skills from './components/sections/Skills';
import Background from './components/sections/Background';

function App() {
  return (
    <Layout>
      <Intro/>
      <Hello/>
      <Skills/>
      <Background/>
    </Layout>
  );
}

export default App;
