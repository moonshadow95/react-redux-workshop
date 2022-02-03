import Controls from "../components/Controls"
import {connect} from "react-redux"

export default connect(null,
    (dispatch) => {
        return {onClick: (mode)=>{
                if(mode === 'DELETE_PROCESS'){
                    if(!window.confirm('Really?')){
                        return
                    }
                }
                dispatch({type: mode})
            }}
    }
)(Controls)