import {createStore} from "redux";
const initState = {
    mode: 'WELCOME',
    welcome_content: {
        title:'WEB',
        desc: "Hello, WEB",
    },
    selected_id: 1,
    contents:[
        {id:1, title: 'HTML', desc: 'HTML is...'},
        {id:2, title: 'CSS', desc: 'CSS is...'},
        {id:3, title: 'Java Script', desc: 'Java Script is...'},
    ]
}

function reducer(state = initState, action){
    if(state === undefined){
        return initState;
    }
    return state
}

export default createStore(reducer)