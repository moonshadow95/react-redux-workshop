import Header from "./components/Header";
import NavContainer from "./containers/NavContainer";
import Article from "./components/Article";

function App() {
    return (
        <div className="App">
            <Header/>
            <NavContainer/>
            <Article />
        </div>
    );
}

export default App;
