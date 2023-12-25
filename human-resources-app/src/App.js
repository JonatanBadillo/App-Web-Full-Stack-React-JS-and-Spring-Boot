import ListEmployees from "./employees/ListEmployees";
import Nav from "./template/Nav";

function App() {
  return (
    <div className="container">
      <Nav/>
      <ListEmployees/>
    </div>
    
  );
}

export default App;
