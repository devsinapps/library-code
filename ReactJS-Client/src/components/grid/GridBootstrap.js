import React from 'react'

import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
export class ContainerRow extends React.Component{
	render(){
		const { children } = this.props
		return(
			<Container fluid>
				<Row>
					{children}
				</Row>
			</Container>
		)
	}
}

export class ColCard extends React.Component{
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
		const { lgCol, mdCol, smCol, xsCol, colClass, brCard, tlCard, children } = this.props
		const currentHeight = height + 50;
		const dropdownCard = isExpanded ?  0 : currentHeight;
		let styleOpacity = ''
		if(isExpanded){
			styleOpacity = {
				opacity: '0',
				transition: 'all .3s'
			}
		}else{
			styleOpacity = {
				opacity: '1',
				transition: 'all .3s'
			}
		}
		const styleCard = {
			boxShadow: '0px 0px 1px 1px rgba(0,0,0,.2)'
		}
		const styleHeader = {
			backgroundImage: 'linear-gradient(to right, #f1f2f6, #fdfdfd)'
		}
		const styleBody = {
			transition: 'all .3s',
			overflow: 'hidden',
			height: dropdownCard + 'px' 
		}
		return(
			<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol} className={colClass}>
				<Card className={brCard}  style={styleCard}>
					<CardHeader style={styleHeader} onClick={this.toggle}> {tlCard} </CardHeader>
					<CardBody style={styleBody}>
						<div ref='inner' style={styleOpacity}>
							{children}
						</div>
					</CardBody>
				</Card>
			</Col>
		)
	}
}