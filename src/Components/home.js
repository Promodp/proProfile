import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';
import Detail from './detail';
import LeftCard from './leftCard';
import DrawerComponent from './Drawer';

import './home.css';
export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const color1 = `rgba(255, 255, 255, 0.7)`;
        const color2 = `rgba(255, 255, 255, 0.3)`;

        const cardStyle = {
            minHeight: '80vh',
            minWidth: '90vh',
            marginTop: '30px',
            background: `linear-gradient(to right bottom, ${color1}, ${color2})`,
        }
        return (
            <div className='home'>
                <Row className='home-card'>
                    <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 1 }} lg={{ span: 1 }}>
                    </Col>
                    <Col xs={{ span: 22 }} sm={{ span: 1 }} md={{ span: 22 }} lg={{ span: 22 }}>
                        <Card style={cardStyle}>
                            <Row>
                                <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 23 }} lg={{ span: 23 }}>
                                    <Row>
                                        <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 8 }} lg={{ span: 8 }}>
                                            <LeftCard />
                                        </Col>
                                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 0 }} lg={{ span: 0 }}>
                                            <DrawerComponent />
                                        </Col>
                                        <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 1 }} lg={{ span: 1 }}>
                                        </Col>
                                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 15 }} lg={{ span: 15 }}>
                                            <Detail />
                                        </Col>
                                    </Row>

                                </Col>
                                <Col span={1}>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={1}>
                    </Col>
                </Row>
                <Row className="footer">
                    <Col span={10} className='footer-contact'>
                        <Row>
                            Get In Touch
                        </Row>
                        <Row>
                            <div style={{ marginTop: '6rem', marginLeft: '-5rem' }}>
                                <i class="fa fa-envelope" style={{ fontSize: '32px' }}></i>
                                <i class="fa fa-phone" style={{ fontSize: '32px', marginLeft: '2rem' }}></i>
                                <i class="fa fa-linkedin" style={{ fontSize: '32px', marginLeft: '2rem' }}></i>
                            </div>
                        </Row>
                    </Col>
                    <Col span={12} className='get-code'>
                        <Row>Get The Code here:</Row>
                        <Row > <a style={{
                            color: 'slateblue', marginTop: ' 68px',
                            marginLeft: '-121px'
                        }} href="https://github.com/Promodp/proProfile" target="_blank">Click here to get the code </a></Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
