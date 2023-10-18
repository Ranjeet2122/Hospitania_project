import './App.css';
import DismissNav from './components/DismissNav';
import DropDowns from './components/DropDowns';
import Footer from './components/Fotter';
import Search_bar from './components/Search_bar';


function App() {
  return (
    <div className="App">
    <DismissNav/>
    <Search_bar/>
    <DropDowns/>
    
    <Footer/>
 

    </div>
  );
}

export default App;
