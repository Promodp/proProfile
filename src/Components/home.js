import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';
import Detail from './detail';
import LeftCard from './leftCard';
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
                    <Col span={1}>
                    </Col>
                    <Col span={22}>
                        <Card style={cardStyle}>
                            <Row>
                                <Col span={23}>
                                    <Row>
                                        <Col span={8}>
                                            <LeftCard />
                                        </Col>
                                        <Col span={1}>
                                        </Col>
                                        <Col span={15}>
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
            </div>
        )
    }
}
