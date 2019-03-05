import React from 'react'

//Fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export class Dropdown extends React.Component{
	state = {
		isExpanded: false
	}

	toggle = () => {
		this.setState({
			isExpanded: !this.state.isExpanded,
			height: this.refs.inner.clientHeight
		})
	}
	render(){
		const { isExpanded, height } = this.state
		const {titleDropdown, children} = this.props
		const currentHeight = isExpanded ? height : 0;
		const activeDropdown = isExpanded ? 'active' : '';
		const styleDropdown = {
			transition: 'all .3s',
			overflow: 'hidden',
			height: currentHeight + 'px'
		}
		return(
			<div className='Dropdown'>
				<li onClick={this.toggle} className={'titleDropdown' + ' ' + activeDropdown}> 
					<i> {titleDropdown} </i> 
					<FontAwesomeIcon icon='angle-right' className={'iconDropdown' + ' ' + activeDropdown}/>
				</li>
				<div className='DropdownMenu' style={styleDropdown}>
					<div className='Menu' ref='inner'>
						{children}
					</div>
				</div>
			</div>
		)
	}
}