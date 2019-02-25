import React from 'react'

import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
export class ContainerFull extends React.Component{
	render(){
		const { lgCol, mdCol, smCol, xsCol, brCard, tlCard, children } = this.props
		return(
			<Container fluid>
				<Row>
					<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol}>
						<Card className={brCard}>
							<CardHeader> {tlCard} </CardHeader>
							<CardBody>
								{children}
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		)
	}
}

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
		const { lgCol, mdCol, smCol, xsCol, brCard, tlCard, children } = this.props
		return(
			<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol}>
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