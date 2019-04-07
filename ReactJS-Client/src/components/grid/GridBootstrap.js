import React from 'react'

import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
//mdbreact
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact'
export class ContainerFluidRow extends React.Component{
	render(){
		const { rowClass, children } = this.props
		return(
			<MDBContainer>
				<MDBRow className={rowClass}>
					{children}
				</MDBRow>
			</MDBContainer>
		)
	}
}


export class Collapsible extends React.Component{
	state = {
		isExpanded: false,
		display: true
	}

	toggle = (mode) => {
		switch(mode){
			case 'minimize':
				this.setState({
					isExpanded: !this.state.isExpanded,
					height: this.refs.inner.clientHeight
				})
				break;

			case 'close':
				this.setState({
					display: false
				})
				break;

			default:
				return null
		}
	}
	render(){
		const { isExpanded, height, display } = this.state
		const { lgCol, mdCol, smCol, brCard, tlCard, children } = this.props
		const statement = {
			click: children === undefined ? null : this.toggle,
			styleCard: {
				display: display ? 'block' : 'none'
			},
			styleBody: {
				overflow: 'hidden',
				transition: 'all .3s',
				height: isExpanded ? '0' : height + 40,
				padding: isExpanded ? '0' : '',
				opacity: isExpanded ? '0' : '1'
			}
		}
		const config = {
			viewHeader: tlCard === '' ? null : <MDBCardHeader onClick={()=>statement.click('minimize')}> {tlCard} </MDBCardHeader>,
			viewBody: children === undefined ? null : <MDBCardBody style={statement.styleBody}> <div ref='inner'> {children} </div> </MDBCardBody>
		}
		return(
			<MDBCol lg={lgCol} md={mdCol} sm={smCol} style={statement.styleCard}>
				<MDBCard className={brCard}>
					{config.viewHeader}
					{config.viewBody}
				</MDBCard>
			</MDBCol>
		)
	}
}