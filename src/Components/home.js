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
        return (
            <div className='home'>
                <Row>
                    <Col span={1}>
                        pr
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
