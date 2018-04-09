import React, {Component} from 'react'

class Button extends Component {
	render(){
    	return(
    		<button className="bg-dark text-white font-weight-bold">
    			{ this.props.buttonValue }
			</button>
    	)
	}  	
}

export default Button