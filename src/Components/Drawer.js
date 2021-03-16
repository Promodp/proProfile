import React, { useState } from 'react';
import { Drawer, Button, Row, Col } from 'antd';
import { Link } from 'react-scroll'
import './leftCard.css';
const DrawerComponent = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    const rowStyle = {
        height: '50px',
    }
    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Open
        </Button>
            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <Row>
                    <Col span={24} className='left-card'>
                        <div className="main-class">
                            <Row className="image" >
                                <Col span={24}>
                                    <Row>
                                        <img src={Image} className="image-style" alt='profile'></img>
                                    </Row>
                                    <Row>
                                        <span className="image-title">Promod Kr. Pandey</span>
                                    </Row>
                                    <Row>
                                        <span className="image-title-1">Software Developer</span>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={rowStyle} >
                                <Col span={4}>
                                    <i class="fa fa-user" style={{ fontSize: '2rem', color: 'darkcyan' }}></i>
                                </Col>

                                <Col span={20}>
                                    <Link activeClass="active" to="about" spy={true} smooth={true}> <span className="text-style">About Me</span></Link>
                                </Col>
                            </Row>

                            <Row style={rowStyle}>
                                <Col span={4}>
                                    <i class="fa fa-tasks" style={{ fontSize: '36px', color: 'darkcyan' }}></i>
                                </Col>

                                <Col span={20}>
                                    <Link to="experience" spy={true} smooth={true}>   <span className="text-style">Experience</span></Link>

                                </Col>
                            </Row>
                            <Row style={rowStyle}>
                                <Col span={4}>
                                    <i class="fa fa-address-book" style={{ fontSize: '2rem', color: 'darkcyan' }}></i>
                                </Col>

                                <Col span={20}>
                                    <Link to="project" spy={true} smooth={true}> <span className="text-style">Project</span></Link>
                                </Col>

                            </Row>
                            <Row style={rowStyle}>
                                <Col span={4}>
                                    <i class="fa fa-line-chart" style={{ fontSize: '2rem', color: 'darkcyan' }}></i>
                                </Col>

                                <Col span={20}>
                                    <Link to="skill" spy={true} smooth={true}><span className="text-style">Skills</span></Link>

                                </Col>

                            </Row>
                            <Row style={rowStyle}>
                                <Col span={4}>
                                    <i class="fa fa-star" style={{ fontSize: '2rem', color: 'darkcyan' }}></i>
                                </Col>

                                <Col span={20}>
                                    <Link to="award" spy={true} smooth={true}><span className="text-style">Awards</span></Link>

                                </Col>

                            </Row>
                            <Row style={rowStyle}>
                                <Col span={4}>
                                    <i class="fa fa-book" style={{ fontSize: '2rem', color: 'darkcyan' }}></i>
                                </Col>
                                {/* <i class="fas fa-book"></i> */}
                                <Col span={20}>
                                    <Link to="education" spy={true} smooth={true}><span className="text-style">Education</span></Link>

                                </Col>

                            </Row>
                            <Row style={rowStyle}>
                                <Col span={4}>
                                    <i class="fa fa-phone" style={{ fontSize: '2rem', color: 'darkcyan' }}></i>
                                </Col>

                                <Col span={20}>
                                    <Link to="contact" spy={true} smooth={true}> <span className="text-style">Contact</span></Link>

                                </Col>

                            </Row>
                        </div>
                    </Col>
                </Row>
            </Drawer>
        </>);
}

export default DrawerComponent;