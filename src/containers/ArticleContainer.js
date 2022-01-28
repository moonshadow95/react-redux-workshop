import Article from '../components/Article'
import {connect} from 'react-redux'

export default connect(
    function (state) {
        if (state.mode === 'WELCOME') {
            return {title: 'WEB', desc: 'HELLO, WEB!'}
        } else {
            const selected = state.contents.find(content => content.id === state.selected_id)
            return {title: selected.title, desc: selected.desc}
        }
    }
)(Article)