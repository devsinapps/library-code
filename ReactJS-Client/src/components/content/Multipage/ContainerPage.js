import React from 'react'
//Reactstrap
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
export const ContainerPage = ({lgCol, mdCol, smCol, xsCol, colClass, brCard, tlCard, center, children}) => {
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
