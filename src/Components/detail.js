import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';

export default class Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        const color1 = `rgba(255, 255, 255, 0.9)`;
        const color2 = `rgba(255, 255, 255, 0.1)`;

        const card1 = {
            minHeight: '10rem',
            minWidth: '100vh',
            marginTop: '30px',
            background: `linear-gradient(to right bottom, ${color1}, ${color2})`,
        }
        return (
            <Row>
                <Row className="about-me">
                    <Col span={24}>
                        <Row>
                            About Me
                        </Row>
                        <Row>
                            Hi I am Promd. I am Software developer.
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='detailStyle'>
                        <Row>
                            Experience:
                        </Row>
                        <Row>
                            <Card style={card1}>
                                Hi
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card1}>
                                Hi
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card1}>
                                Hi
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card1}>
                                Hi
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card1}>
                                Hi
                            </Card>
                        </Row><Row>
                            <Card style={card1}>
                                Hi
                            </Card>
                        </Row>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Row>
        )
    }
}
