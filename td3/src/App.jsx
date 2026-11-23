import Header from "./componants/Header/Header";
import Destinations from "./componants/Destinations/Destinations";
import Login from "./componants/Login/Login";
import Footer from "./componants/Footer/Footer";


import "./App.css";

function App() {
  return (
     <div className="App">
        <Header/>
        <main>
         <Destinations/>
      
         <Login/>
        </main>
        <Footer/>
     </div>
  );
}
export default App;
