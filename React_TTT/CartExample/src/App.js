import logo from './logo.svg';
import './App.css';
import Cart from './component/Cart';

function App() {
  const items = [
    { name: 'Product A', price: 10 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 30 }
  ];
  return (
   
      <div className="App">
      <Cart items={items} />
    </div>
  );
}

export default App;
