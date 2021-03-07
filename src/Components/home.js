import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';
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
            minWidth: '30vh',
            background: `linear-gradient(to right bottom, ${color1}, ${color2})`,
        }

        return (
            <div className='home'>
                <Row>
                    <Col span={1}>
                        <Card style={cardStyle}></Card>
                    </Col>
                    <Col span={6}>
                        sss
                    </Col>
                    <Col span={16}>
                        ss
                    </Col>
                    <Col span={1}>
                        ss
                    </Col>
                </Row>
            </div>
        )
    }
}
