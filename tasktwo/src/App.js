import Nav from './componant/Nav';
import Card from './componant/Card';

function App(){
  
  
  return (
    <div>
  <Nav/>
  <div class="container mt-5">
    <div class="row">
  <Card name = 'Alaa'/>
  <Card name = 'sujoud'/>
  <Card name = 'ali'/>
  <Card name = 'ahmad'/>
  </div>
  </div>
    </div>
  );
};

export default App;