import React, { Component } from 'react';
import './App.css';
import Button from "./components/Button"

class App extends Component {
    constructor(){
        super()
        this.state = {
            buttons: [
                ["&plusmn;", "&radic;", "&percnt;", "&div;"], 
                [7, 8, 9, "&times;"], 
                [4, 5, 6, "&ndash;"], 
                [1, 2, 3, "&plus;"], 
                [".", 0, "&equals;", "C"]
            ]
        }
    }
    render() {
        let buttonsArray = this.state.buttons.map((row) => {
            return (
                row.map((cell) => {
                    // let buttonValue = (Number.isInteger(cell) ? cell : cell.replace(/[^A-Za-z.]/g, ''));

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
                { buttonsArray }
            </div>
        );
    }
}

export default App;
