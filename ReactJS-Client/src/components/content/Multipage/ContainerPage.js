import React from 'react'

//Reactstrap
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
export class ContainerPage extends React.Component{
	render(){
		const { lgCol, mdCol, smCol, xsCol, colClass, brCard, tlCard, center, children } = this.props
		return(
			<Container fluid>
				<Row>
					<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol} className={colClass}>
						<Card className={brCard}>
							<CardHeader className={center}> 
								{tlCard.button1} {' '}
								{tlCard.button2} {' '}
								{tlCard.button3} {' '}
							</CardHeader>
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