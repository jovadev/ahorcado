import './components/Header.css';
import {useState} from 'react';
import Ahorcado from './Ahorcado';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  const [color, changeColor]=useState("white");
  return (
      <div className={color==="white"?"App white":"App dark"}>
        <Header 
          onClick={()=>changeColor(color==="white"?"dark":"white")}
          style={color}
          />          
        <Ahorcado estilo={color}/>
        <Footer/>
      </div>
  );
}
export default App;