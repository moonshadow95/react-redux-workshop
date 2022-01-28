import Controls from "../components/Controls"
import {connect} from "react-redux"

export default connect(null,
    (dispatch) => {
        return {onClick: (mode)=>{
                dispatch({type: mode})
            }}
    }
)(Controls)