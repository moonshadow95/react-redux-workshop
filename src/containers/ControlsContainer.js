import Controls from "../components/Controls"
import {connect} from "react-redux"

export default connect(state => {
        if (state.selected_id) {
            return {selected_id: state.selected_id}
        }
    },
    (dispatch) => {
        return {
            onClick: (mode) => {
                if (mode === 'DELETE_PROCESS') {
                    if (!window.confirm('Really?')) {
                        return
                    }
                }
                dispatch({type: mode})
            }
        }
    }
)(Controls)