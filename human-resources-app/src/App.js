import { BrowserRouter , Route, Routes} from "react-router-dom"; 
import ListEmployees from "./employees/ListEmployees";
import Nav from "./template/Nav";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<ListEmployees/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
