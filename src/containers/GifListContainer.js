import React, {Component} from "react";
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"
export default class GifListContainer extends Component{
    state = {
        gifs : []
    }
    handleFetch = async (e,searchQuery) => {
        e.preventDefault()
        let res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=ctqnFnfR6HgpjNZf2l0tmGi06WHbuMAv&rating=g`)
        let data =  await res.json()

        const first3Gifs = [];
        for(let i = 0; i < 3; i++){
            first3Gifs.push(data.data[i].images.original.url)
        }
        this.setState({
            gifs: first3Gifs
        })
    }
    render(){
        return(
            <div>
                <GifSearch onSubmit={this.handleFetch}></GifSearch>
                <GifList key={this.state.gifs} gifs={this.state.gifs}></GifList>
            </div>
        )
    }
}  