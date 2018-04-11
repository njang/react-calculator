import React, {Component} from 'react'

class Button extends Component {
	render(){
    	return(
    		<button className="bg-dark text-white font-weight-bold">
    			<text>{ this.props.buttonValue }</text>
			</button>
    	)
	}  	
}

export default Button