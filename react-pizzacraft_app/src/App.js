import "./App.css";
import Landingpage from "./Components/Landingpage"; 
import PizzaOrderPage from "./Components/PizzaOrderPage";
import ThankYou from "./Components/ThankYou";
function App() {
  return (
    <div className="App">
    <Landingpage/>
    <PizzaOrderPage/>
    <ThankYou/>
    </div>
  );
}

export default App;