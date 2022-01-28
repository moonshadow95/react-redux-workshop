import Nav from '../components/Nav'
import {connect} from 'react-redux'

export default connect(
    function (state) {
        return {data: state.contents}
    }, function (dispatch) {
        return {
            onClick: (id) => {
                dispatch({type: 'READ', id: id})}
        }
    }
)(Nav);