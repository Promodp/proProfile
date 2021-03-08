import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';
import './detail.css';
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
            background: `linear-gradient(to right bottom, ${color2}, ${color1})`,
        }
        const card2 = {
            minHeight: '10rem',
            minWidth: '117vh;',
            marginTop: '30px',
            background: `linear-gradient(to right bottom, ${color2}, ${color1})`,
        }
        return (
            <Row>
                <Row className="about-me">
                    <Col span={24}>
                        <Row>
                            <h3 className="about">About Me</h3>
                        </Row>
                        <Row>
                            Hi I am Promd. I am innovative Front End Developer with 2+ years experience building and maintaining responsive websites for various clients. Proficient in ReactJS, JavaScript, HTML, and CSS, plus modern libraries and frameworks.
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='detailStyle'>
                        <Row>
                            <h3 className="experience">Experience</h3>
                        </Row>
                        <Row>
                            <Card style={card1} title='Nineleaps Technology Pvt Ltd' extra='Software developer'>
                                <Row>
                                    <span> 1. Have experience in designing and developing 2.web-based applications for healthcare, Online 3. learning platforms, Content Management 4. systems, and the real estate industry. 5. Handled projects for various clients like Mirable Health Care, Total Environment, MemberSuite, and Spry. 6. Worked on Nineleaps Product, APNA-IAS (e-learning platform for IAS aspirants ).
    </span>
                                </Row>
                                <Row>

                                </Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card1} title='Nineleaps Technology Pvt Ltd' extra='Software developer'>
                                <Row>
                                    <span> 1. Have experience in designing and developing 2.web-based applications for healthcare, Online 3. learning platforms, Content Management 4. systems, and the real estate industry. 5. Handled projects for various clients like Mirable Health Care, Total Environment, MemberSuite, and Spry. 6. Worked on Nineleaps Product, APNA-IAS (e-learning platform for IAS aspirants ).
    </span>
                                </Row>
                                <Row>

                                </Row>
                            </Card>
                        </Row>
                        <Row>
                            <h3 className="experience">Projects</h3>
                        </Row>
                        <Row>
                            <Card style={card1} title='Spry' extra='FrontEnd developer'>
                                <Row>
                                    <span>1. Have experience in designing and developing 2.web-based applications for healthcare, Online 3. learning platforms, Content Management 4. systems, and the real estate industry. 5. Handled projects for various clients like Mirable Health Care, Total Environment, MemberSuite, and Spry. 6. Worked on Nineleaps Product, APNA-IAS (e-learning platform for IAS aspirants ).
    </span>
                                </Row>
                                <Row>

                                </Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card1} title='APNA-IAS' extra='FrontEnd developer'>
                                <Row>
                                    <span>1. Have experience in designing and developing 2.web-based applications for healthcare, Online 3. learning platforms, Content Management 4. systems, and the real estate industry. 5. Handled projects for various clients like Mirable Health Care, Total Environment, MemberSuite, and Spry. 6. Worked on Nineleaps Product, APNA-IAS (e-learning platform for IAS aspirants ).
    </span>
                                </Row>
                                <Row>

                                </Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card1} title='CMS-MemberSuite' extra='FrontEnd developer'>
                                <Row>
                                    <span>1. Have experience in designing and developing 2.web-based applications for healthcare, Online 3. learning platforms, Content Management 4. systems, and the real estate industry. 5. Handled projects for various clients like Mirable Health Care, Total Environment, MemberSuite, and Spry. 6. Worked on Nineleaps Product, APNA-IAS (e-learning platform for IAS aspirants ).
    </span>
                                </Row>
                                <Row>

                                </Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card1} title='Mirable Health Care' extra='FrontEnd developer'>
                                <Row>
                                    <span>1. Have experience in designing and developing 2.web-based applications for healthcare, Online 3. learning platforms, Content Management 4. systems, and the real estate industry. 5. Handled projects for various clients like Mirable Health Care, Total Environment, MemberSuite, and Spry. 6. Worked on Nineleaps Product, APNA-IAS (e-learning platform for IAS aspirants ).
    </span>
                                </Row>
                                <Row>

                                </Row>
                            </Card>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Row>
                            <h3 className="skill">Skills</h3>
                        </Row>
                        <Row>
                            <Card style={card2} title={<h3>HTML</h3>} >
                                <img src='https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png' style={{ width: '5rem' }}></img>

                                <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' style={{ width: '5rem' }}></img>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card2} title={<h3>CSS</h3>} >
                                <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png' style={{ width: '5rem' }}></img>

                                <img src=' https://cdn3.iconfinder.com/data/icons/3d-alphabets-and-numbers/130/19-512.png' style={{ width: '5rem' }}></img>
                                <img src='https://cdn2.iconfinder.com/data/icons/pretty-office-part14-2/256/A_yellow-512.png' style={{ width: '5rem' }}></img>

                                <img src='https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/bootstrap-512.png' style={{ width: '5rem' }}></img> Media

                                <img src='https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/bootstrap-512.png' style={{ width: '5rem' }}></img>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card2} title={<h3>JavaScript</h3>} >
                                <img src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png' style={{ width: '5rem' }}></img>
                                <img src='https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png' style={{ width: '5rem' }}></img>
                                <img src='https://cdn2.iconfinder.com/data/icons/programming-languages-8/64/207_programming-program-language-code-typescript-512.png ' style={{ width: '5rem' }}></img>

                                <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/367_Vuejs_logo-512.png' style={{ width: '5rem' }}></img>
                                <img src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-512.png' style={{ width: '5rem' }}></img>

                            </Card>
                        </Row>
                        <Row>
                            <Card style={card2} title={<h3>Other</h3>} >
                                <img src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png' style={{ width: '5rem' }}></img>
                                <img src='https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/visual_studio-512.png' style={{ width: '5rem' }}></img>
                                <img src='https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png' style={{ width: '5rem' }}></img>
                                <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/367_Vuejs_logo-512.png' style={{ width: '5rem' }}></img>
                            </Card>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Row>
                            <h3 className="skill">Awards</h3>
                        </Row>
                        <Row>
                            <Card style={card2} title={<h3>Client Relationship Award</h3>} extra="6th Jan 2020">
                                <Row>
                                    Nineleaps Technology Pvt. Ltd.
                               </Row>
                                <Row>  Awarded for the on-time delivery of
    the product and client satisfaction.</Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card2} title={<h3>Feather on the hat</h3>} extra="Aug 2020">
                                <Row>
                                    Nineleaps Technology Pvt. Ltd.
                               </Row>
                                <Row>  Awarded for the exceptional effort and
delivering the quality output.</Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card2} title={<h3>Best student of the Year</h3>} extra="2013">
                                <Row>
                                    St. Albert School Shillon, Meghalaya
                               </Row>
                                <Row> Award in class-X, for doing excellent in
the study as well as sports.</Row>
                            </Card>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Row>
                            <h3 className="skill">Education</h3>
                        </Row>
                        <Row>
                            <Card style={card2}>
                                <Row>
                                    Lovely Professional University,
    Jalandhar, Punjab, India-144411
                               </Row>
                                <Row> B.Tech (Computer Science And
Engineering)</Row>
                                <Row>Jul 2015 - May 2019</Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card2}>
                                <Row>
                                    St. Edmund's College(Higher
    Secondary Section), Shillong,
    Meghalaya, India-793021
                               </Row>
                                <Row> XII (MBOSE) | Mar 2014 - May 2015</Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card2}>
                                <Row>
                                    St. Albert's School, Shillong,
    Meghalaya, India-793021
                               </Row>
                                <Row>
                                    X(MBOSE) | Jan 2012 - May 2014</Row>
                            </Card>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Row>
                            <h3 className="skill">Contact</h3>
                        </Row>
                        <Row>
                            <Col span={2}>
                                <i class="fa fa-envelope" style={{ fontSize: '32px' }}></i>
                            </Col>
                            <Col span={22}>
                                <span>promod1208@gmail.com</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={2} style={{ fontSize: '32px' }}>
                                <i class="fa fa-phone"></i>
                            </Col>
                            <Col span={22}>
                                <span>+91-7814124336</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={2} style={{ fontSize: '32px' }}>
                                <i class="fa fa-linkedin"></i>
                            </Col>
                            <Col span={22}>
                                <a>https://www.linkedin.com/in/promod-kr-pandey-051a7b126/</a>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={2} style={{ fontSize: '32px' }}>
                                <i class="fa fa-address" ></i>
                            </Col>
                            <Col span={22}>
                                <span>RM Reddy PG for gents,
                                1st A Main Rd, 1st Block
                                Koramangala, Bengaluru,
                                Karnataka-560034
</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
        )
    }
}