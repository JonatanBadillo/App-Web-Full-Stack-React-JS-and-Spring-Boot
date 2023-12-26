import { BrowserRouter , Route, Routes} from "react-router-dom"; 
import AddEmployee from "./employees/AddEmployee";
import EditEmployee from "./employees/EditEmployee";
import ListEmployees from "./employees/ListEmployees";
import Nav from "./template/Nav";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<ListEmployees/>}/>
          <Route exact path="/add" element={<AddEmployee/>}/>
          <Route exact path="/edit/:id" element={<EditEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
