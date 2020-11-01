import React, {Component} from "react";

export default class GifList extends Component{
    render(){
        return(
            <ul>
                {this.props.gifs.map(gif => <li><img src={gif} style={{width : "300px", height:"150px"}} alt="A gif"></img></li>)}
            </ul>
        )
    }
}  