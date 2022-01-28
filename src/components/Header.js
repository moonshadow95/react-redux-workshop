import React from 'react';
import {connect} from 'react-redux'

const Header = ({onClick}) => {
    return (
        <header>
            <h1>
                <a href="#welcome" onClick={onClick}>WEB</a>
            </h1>
            World Wide Web
        </header>
    )
};

export default connect(null, (dispatch) => {
    return {onClick: ()=>{
            dispatch({type: 'WELCOME'})
        }}
})(Header);