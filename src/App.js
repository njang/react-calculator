import React, { Component } from 'react';
import './App.css';
import Button from "./components/Button"

class App extends Component {
    constructor(){
        super()
        this.state = {
            buttons: [
                ["\u00B1", "\u221A", "\u0025", "\u2215"], 
                [7, 8, 9, "\u00D7"], 
                [4, 5, 6, "\u2013"], 
                [1, 2, 3, "\u002B"], 
                [".", 0, "\u003D", "C"]
            ]
        }
    }
    render() {
        let buttonsArray = this.state.buttons.map((row) => {
            return (
                row.map((cell) => {
                    return (
                        <Button 
                            buttonValue = { cell }
                        />
                    )
                })
            )
        })
        return (
            <div className="Calculator">
                <input id="display" placeholder="0" disabled />
                { buttonsArray }
            </div>
        );
    }
}

export default App;
