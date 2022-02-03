import Header from "./components/Header";
import NavContainer from "./containers/NavContainer";
import ReadContainer from "./containers/ReadContainer";
import ControlsContainer from "./containers/ControlsContainer";
import CreateContainer from "./containers/CreateContainer";
import {connect} from 'react-redux'
import UpdateContainer from "./containers/UpdateContainer";

function App({mode}) {
    let article = null
    if (mode === 'WELCOME') {
        article = <ReadContainer/>
    }
    if (mode === 'READ') {
        article = <ReadContainer/>
    }
    if (mode === 'CREATE') {
        article = <CreateContainer/>
    }
    if (mode === 'UPDATE') {
        article = <UpdateContainer/>
    }
    return (
        <div className="App">
            <Header/>
            <NavContainer/>
            <ControlsContainer/>
            {article}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            mode: state.mode
        }
    }
)(App);
