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
	render(){
		const { lgCol, mdCol, smCol, xsCol, colClass, brCard, tlCard, children } = this.props
		return(
			<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol} className={colClass}>
				<Card className={brCard}>
					<CardHeader> {tlCard} </CardHeader>
					<CardBody>
						{children}
					</CardBody>
				</Card>
			</Col>
		)
	}
}