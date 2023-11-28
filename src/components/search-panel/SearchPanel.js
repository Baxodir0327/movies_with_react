import './SerachPanel.css'
import {Component} from "react";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    updateTermHandler = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.updateTermHandler(term)
    }

    render() {
        return <input type='text'
                      className='form-control search-input'
                      onChange={this.updateTermHandler}
                      value={this.state.term}
                      placeholder='Kinolarni qidirish'/>
    }
}

export default SearchPanel;