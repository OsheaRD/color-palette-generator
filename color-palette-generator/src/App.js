import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="text-center bg-dark fixed-top">
    <button class="btn btn-secondary m-1">RANDOMIZE COLORS</button>  
    </div>
    <div class="w-100 d-flex" style="height: 100vh;">
    <div style="background-color: blue" class="w-100 d-flex flex-column align-items-center justify-content-center">
        <h1>#FF00FF</h1>
        <button class="btn btn-dark">UNLOCK</button>
    </div>
    <div style="background-color: orange" class="w-100 d-flex flex-column align-items-center justify-content-center">
      <h1>#FF00FF</h1>  
      <button class="btn btn-outline-dark">LOCK</button>
    </div>
    <div style="background-color: lightgreen" class="w-100 d-flex flex-column align-items-center justify-content-center">
      <h1>#FF00FF</h1>  
      <button class="btn btn-outline-dark">LOCK</button>
    </div>
    <div style="background-color: aqua" class="w-100 d-flex flex-column align-items-center justify-content-center">
      <h1>#FF00FF</h1>  
      <button class="btn btn-outline-dark">LOCK</button>
    </div>
    <div style="background-color: maroon" class="w-100 d-flex flex-column align-items-center justify-content-center">
      <h1>#FF00FF</h1>  
      <button class="btn btn-outline-dark">LOCK</button>
    </div>
</div>
    </div>
  );
}

export default App;


