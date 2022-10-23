import { Route } from "react-router-dom";
import PorKm from "./pages/PorKm";

function App() {
  return ( 
    <> 
      <Route exact path="/" component={PorKm} />
    </>
  );
}

export default App;
