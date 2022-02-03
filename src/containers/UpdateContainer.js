import {connect} from 'react-redux'
import Update from "../components/Update";

export default connect(
    (state) => {
        const selected = state.contents.find(content => content.id === state.selected_id)
        return {
            id: selected.id,
            title: selected.title,
            desc: selected.desc
        }
    },
    (dispatch) => {
        return {
            onSubmit: (id, title, desc) => {
                dispatch({type: 'UPDATE_PROCESS', id, title, desc})
            }
        }
    }
)(Update)