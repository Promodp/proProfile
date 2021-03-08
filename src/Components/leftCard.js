import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import './leftCard.css';
import Image from '../Photo.jpg';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-scroll'
export default class Leftcard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Row>
                <Col span={24} className='left-card'>
                    <div className="main-class">
                        <Row className="image">
                            <Col span={24}>
                                <Row>
                                    <img src={Image} className="image-style" alt='profile'></img>
                                </Row>
                                <Row>
                                    <span className="image-title">Promod Kr. Pandey</span>
                                </Row>
                            </Col>
                        </Row>
                        <Row >
                            <Col span={4}>
                                <i class="fa fa-user" style={{ fontSize: '3rem', color: 'darkcyan' }}></i>
                            </Col>

                            <Col span={20}>
                                <Link activeClass="active" to="about" spy={true} smooth={true}> <span className="text-style">About Me</span></Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={4}>
                                <i class="fa fa-tasks" style={{ fontSize: '36px', color: 'darkcyan' }}></i>
                            </Col>

                            <Col span={20}>
                                <Link to="experience" spy={true} smooth={true}>   <span className="text-style">Experience</span></Link>

                            </Col>
                        </Row>
                        <Row>
                            <Col span={4}>
                                <i class="fa fa-address-book" style={{ fontSize: '3rem', color: 'darkcyan' }}></i>
                            </Col>

                            <Col span={20}>
                                <Link to="project" spy={true} smooth={true}> <span className="text-style">Project</span></Link>
                            </Col>

                        </Row>
                        <Row>
                            <Col span={4}>
                                <i class="fa fa-user" style={{ fontSize: '3rem', color: 'darkcyan' }}></i>
                            </Col>

                            <Col span={20}>
                                <Link to="skill" spy={true} smooth={true}><span className="text-style">Skills</span></Link>

                            </Col>

                        </Row>
                        <Row>
                            <Col span={4}>
                                <i class="fa fa-star" style={{ fontSize: '3rem', color: 'darkcyan' }}></i>
                            </Col>

                            <Col span={20}>
                                <Link to="award" spy={true} smooth={true}><span className="text-style">Awards</span></Link>

                            </Col>

                        </Row>
                        <Row>
                            <Col span={4}>
                                <i class="fa fa-user" style={{ fontSize: '3rem', color: 'darkcyan' }}></i>
                            </Col>

                            <Col span={20}>
                                <Link to="education" spy={true} smooth={true}><span className="text-style">Education</span></Link>

                            </Col>

                        </Row>
                        <Row>
                            <Col span={4}>
                                <i class="fa fa-user" style={{ fontSize: '3rem', color: 'darkcyan' }}></i>
                            </Col>

                            <Col span={20}>
                                <Link to="contact" spy={true} smooth={true}> <span className="text-style">Contact</span></Link>

                            </Col>

                        </Row>
                    </div>
                </Col>
            </Row>
        )
    }
}
