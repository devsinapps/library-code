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
		const style = {
			styleCard: {
				boxShadow: '0px 0px 1px 1px rgba(0,0,0,.2)'
			},
			styleHeader: {
				backgroundImage: 'linear-gradient(to right, #f1f2f6, #fdfdfd)'
			},
			styleBody: {
				transition: 'all .3s',
				overflow: 'hidden',
				height: dropdownCard + 'px' 
			},
			styleOpacity: {
				opacity: isExpanded ? '0' : '1',
				transition: isExpanded ? 'all .3s' : 'all .3s'
			}
		}
		const viewHeader = tlCard === '' ? null : <CardHeader style={style.styleHeader} onClick={this.toggle}> {tlCard} </CardHeader> ;
		return(
			<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol} className={colClass}>
				<Card className={brCard}  style={style.styleCard}>
					{viewHeader}
					<CardBody style={style.styleBody}>
						<div ref='inner' style={style.styleOpacity}>
							{children}
						</div>
					</CardBody>
				</Card>
			</Col>
		)
	}
}