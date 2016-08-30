
import React from "react";
import Display from "./Display";
import axios from 'axios';

export default React.createClass({
    render() {
        return (
            <div>
                <input onKeyDown={this.handleChange}/>
                <img src={this.state && this.state.pokemon} />
            </div>
        )
    },
    handleChange(e) {
        console.log(e.keyCode)
        if (e.keyCode === 13) {
            console.log("sent request")
            axios.get(`http://pokeapi.co/api/v2/pokemon/${e.target.value}`)
                .then((result) => {
                    console.log(result);
                    this.setState({
                        pokemon: result.data.sprites.front_shiny
                    })
                })
        }
    }
});
