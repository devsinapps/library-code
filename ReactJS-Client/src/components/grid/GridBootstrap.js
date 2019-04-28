import React, { Component } from 'react'

import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
//mdbreact
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact'
export class ContainerFluidRow extends Component{
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

export class ColCard extends Component{
	render(){
		const { lgCol, mdCol, smCol, tlCard, brCard, children } = this.props
		const config = {
			viewHeader: tlCard === '' ? null : <MDBCardHeader> {tlCard} </MDBCardHeader>,
			viewBody: children === undefined ? null : <MDBCardBody> {children} </MDBCardBody>
		}
		return(
			<MDBCol lg={lgCol} md={mdCol} sm={smCol}>
				<MDBCard className={brCard}>
					{config.viewHeader}
					{config.viewBody}
				</MDBCard>
			</MDBCol>
		)
	}
}

export class Collapsible extends Component{
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

export class Canvas extends Component{
	state = {
		active: false ,
		activeArr: [
			{
				active: false,
				height: '0',
				inner: 'inner1'
			},
			{
				active: false,
				height: '0',
				inner: 'inner2'
			},
			{
				active: false,
				height: '0',
				inner: 'inner3'
			},
			{
				active: false,
				height: '0',
				inner: 'inner4'
			},
			{
				active: false,
				height: '0',
				inner: 'inner5'
			},
			{
				active: false,
				height: '0',
				inner: 'inner6'
			}
		],
		id: ''
	}

	toggle = (mode, key) => {
		const { activeArr } = this.state
		switch(mode){
			case 'minimize':
				this.setState({
					active: !this.state.active,
					height: this.refs.inner.clientHeight
				})
				break;

			case 'minimize-Arr':
				for(let i = 0; i < activeArr.length; i++){
					if([i] == key){
						activeArr[i].active = !this.state.activeArr[i].active
						activeArr[i].height = this.refs.inner0.clientHeight
						this.setState({
							activeArr: activeArr
						})
					}
				}
				break;

			default:
				return null
		}
	}
	render(){
		const { active, height, activeArr, id } = this.state
		const { canvasClass, rowClass, lgCol, mdCol, smCol, tlCard, brCard, children } = this.props
		const config = {
			styleBody: {
				height: active ? '0' : height + 40,
				padding: active ? '0' : '',
				opacity: active ? '0' : '1',
				transition: 'all .2s'
			}
		}
		return(
			<MDBContainer fluid className={canvasClass}>
				<MDBRow className={rowClass}>
					{
						//Kondisi Jika tidak ada children yang di kirimkan
						children === undefined ? 
						(
							<MDBCol lg={lgCol} md={mdCol} sm={smCol}>
								<MDBCard className={brCard}>
									<MDBCardHeader> {tlCard} </MDBCardHeader>
								</MDBCard>
							</MDBCol>
						)
						:
						//Kondisi Jika children yang di kirimkan lebih dari satu
						children.length > 1 ?
							children.map((data, key)=>{
								return(
									<MDBCol lg={lgCol} md={mdCol} sm={smCol}>
										<MDBCard className={brCard}>
											<MDBCardHeader onClick={()=>this.toggle('minimize-Arr', key)}> {data.props.title} </MDBCardHeader>
											<MDBCardBody style={
																	{
																		height: activeArr[key].active ? '0' : activeArr[key].height + 40,
																		padding: activeArr[key].active ? '0' : '',
																		opacity: activeArr[key].active ? '0' : '1',
																		transition: 'all .3s',
																		overflow: 'hidden'
																	}
																}>
												<div ref={'inner'+key}>
													{data.props.children}
												</div>
											</MDBCardBody>
										</MDBCard>
									</MDBCol>
								)
							})
							:
							//Kondisi Jika children yang di kirimkan hanya satu
							(
								<MDBCol lg={lgCol} md={mdCol} sm={smCol}>
									<MDBCard className={brCard}>
										<MDBCardHeader onClick={()=>this.toggle('minimize', '')}> {tlCard} </MDBCardHeader>
										<MDBCardBody style={config.styleBody}>
											<div ref='inner'>
												{children}
											</div>
										</MDBCardBody>
									</MDBCard>
								</MDBCol>
							)
					}
					
				</MDBRow>
			</MDBContainer>
		)
	}
}