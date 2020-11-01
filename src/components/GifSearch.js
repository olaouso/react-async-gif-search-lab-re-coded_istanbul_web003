import React, {Component} from "react"
export default class GifSearch extends Component{
    state = {
        searchInput: ""
    }
    handleInput = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }
    render(){
        return(
            <form style={{float:"right"}} onSubmit={(e) => this.props.onSubmit(e,this.state.searchInput)}>
                <input type="text" value={this.state.searchInput} placeholder="Search"
                 onChange={this.handleInput}></input>
                <button>Search</button>
            </form>
        )
    }
}  