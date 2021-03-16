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
            minWidth: '110vh',
            marginTop: '30px',
            background: `linear-gradient(to right bottom, ${color2}, ${color1})`,
        }
        const card2 = {
            minHeight: '10rem',
            minWidth: '117vh;',
            marginTop: '30px',
            background: `linear-gradient(to right bottom, ${color2}, ${color1})`,
        }
        const mobileCard = {
            minWidth: '22vh',
            minHeight: '10rem',
            marginTop: '30px',
            background: `linear-gradient(to right bottom, ${color2}, ${color1})`,
        }
        const cardFinalStyle = window.innerWidth > 1365 ? card1 : mobileCard;
        return (
            <Row>
                <Row className="about-me">
                    <Col xs={{ span: 16 }} sm={{ span: 19 }} md={{ span: 24 }} lg={{ span: 24 }}>
                        <Row id='about'>
                            <h3 className="about">About Me</h3>
                        </Row>
                        <Row>
                            Hi I am Promod. I am innovative Front End Developer with 2+ years experience building and maintaining responsive websites for various clients. Proficient in ReactJS, JavaScript, HTML, and CSS, plus modern libraries and frameworks.
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 16 }} sm={{ span: 19 }} md={{ span: 24 }} lg={{ span: 24 }} className='detailStyle'>
                        <Row id='experience'>
                            <h3 className="experience">Experience</h3>
                        </Row>
                        <Row>
                            <Card style={cardFinalStyle} headStyle={{ fontWeight: '600' }} title='Nineleaps Technology Pvt Ltd' extra='Software developer'>
                                <Row>
                                    <span className='duration'> Jun 2019 - Present </span>
                                </Row>
                                <Row>
                                    <ul>
                                        <li>Have experience in designing and developing web-based applications for healthcare, Online learning platforms, Content Management systems, and the real estate industry.</li>
                                        <li>Handled projects for various clients like Mirable Health Care, Total Environment, MemberSuite, and Spry.</li>
                                        <li>Worked on Nineleaps Product, APNA-IAS (e-learning platform for IAS aspirants ).</li>
                                    </ul>
                                </Row>
                                <Row>

                                </Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={cardFinalStyle} headStyle={{ fontWeight: '600' }} title='Nineleaps Technology Pvt Ltd' extra='Software developer Trainee'>
                                <Row>
                                    <span className='duration'> Oct 2018 - May
2019 </span>
                                </Row>
                                <Row>
                                    <ul>
                                        <li>During the internship, provided with training on ReactJs, NodeJs, Git,Jira and Agile Process.</li>
                                        <li>Learned JavaScript, Rest APIs(Axios), typescript and enzymes(unit test cases)</li>

                                        <li>Woked on a client project</li>
                                    </ul>
                                </Row>
                                <Row>

                                </Row>
                            </Card>
                        </Row>
                        <Row id='project'>
                            <h3 className="experience">Projects</h3>
                        </Row>
                        <Row>
                            <Card style={cardFinalStyle} headStyle={{ fontWeight: '600' }} title='Spry' extra='Front-End developer'>
                                <Row>
                                    <span className='duration'> Sep 2020 - Present </span>
                                </Row>
                                <Row>
                                    <ul>
                                        <li> Spry is a comprehensive platform to correctly handle opportunities, payments, and oversight forNCAA member institutions and student-athletes.</li>
                                        <li>The technology used is ReactJS.</li>
                                        <li>Monorepo project architecture.</li>
                                    </ul>
                                </Row>
                                <Row>

                                </Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={cardFinalStyle} headStyle={{ fontWeight: '600' }} title='APNA-IAS' extra='Front-End developer'>
                                <Row>
                                    <span className='duration'> Jan 2020 - Aug 2020 </span>
                                </Row>
                                <Row>
                                    <ul>

                                        <li>
                                            This Product is an online learning platform for IAS aspirants. Aspirants will be provided with the different test modules on various topics of prelims and mains exam.
                                        </li>
                                        <li> The technology used is ReactJS.</li>
                                        <li>Used Jest and Enzymes for Unit test Case.</li>
                                        <li>Atomic design pattern for project development.</li>
                                    </ul>
                                </Row>
                                <Row>

                                </Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={cardFinalStyle} headStyle={{ fontWeight: '600' }} title='CMS-MemberSuite' extra='Front-End developer'>
                                <Row>
                                    <span className='duration'> July 2019 - Dec 2020 </span>
                                </Row>
                                <Row>
                                    <ul>
                                        <li>This product provides various plugins that would
    enable an individual or an organization to make their
    own templates or a web application. These various
plugins are developed with the help of GrapesJs.</li>
                                        <li>One-Click deployment in react.</li>
                                        <li>Various plugins in GrapeJs.</li>
                                        <li>Technology Used: ReactJs and GrapesJs.</li>
                                    </ul>
                                </Row>
                                <Row>

                                </Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={cardFinalStyle} headStyle={{ fontWeight: '600' }} title='Mirable Health Care' extra='Front-End developer'>
                                <Row>
                                    <span className='duration'> Feb 2019 - Jun 2019 </span>
                                </Row>
                                <Row>
                                    <ul>
                                        <li> This product provides healthcare services. On this product, users can book an appointment for blood tests and various other tests.</li>
                                        <li> Worked with Vue JS, Vuex, Bootstrap, HTML, CSS.</li>
                                        <li>Created API with Node JS, Express JS, and MongoDB.</li>
                                    </ul>
                                </Row>
                                <Row>

                                </Row>
                            </Card>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 16 }} sm={{ span: 19 }} md={{ span: 24 }} lg={{ span: 24 }}>
                        <Row id='skill'>
                            <h3 className="skill">Skills</h3>
                        </Row>
                        <Row>
                            <Card style={card2} headStyle={{ fontWeight: '600' }} title={<h3>HTML</h3>} >
                                <Row>
                                    <Col span={12}>
                                        <Row>
                                            <img src='https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png' style={{ width: '5rem', marginRight: '49px' }}></img>
                                        </Row>
                                        <Row>
                                            <span className="skill-label">HTML5</span>
                                        </Row>
                                    </Col>
                                    <Col span={12}>
                                        <Row>
                                            <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' style={{ width: '5rem' }}></img>

                                        </Row>
                                        <Row>
                                            <span className="skill-label">JSX</span>

                                        </Row>
                                    </Col>
                                </Row>

                            </Card>
                        </Row>
                        <Row>
                            <Card style={card2} headStyle={{ fontWeight: '600' }} title={<h3>CSS</h3>} >
                                <Row>
                                    <Col span={6}>
                                        <Row>
                                            <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png' style={{ width: '5rem', marginRight: '49px' }}></img>
                                        </Row>
                                        <Row>
                                            <span className="skill-label">CSS3</span>
                                        </Row>
                                    </Col>
                                    <Col span={6}>
                                        <Row>
                                            <img src='https://cdn.iconscout.com/icon/free/png-512/sass-226054.png' style={{ width: '5rem' }}></img>

                                        </Row>
                                        <Row>
                                            <span className="skill-label">SaaS</span>

                                        </Row>
                                    </Col>
                                    <Col span={6}>
                                        <Row>
                                            <img src='https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/bootstrap-512.png' style={{ width: '5rem' }}></img>

                                        </Row>
                                        <Row>
                                            <span className="skill-label">Bootstrap</span>

                                        </Row>
                                    </Col>
                                    <Col span={6}>
                                        <Row>
                                            <img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' style={{ width: '5rem' }}></img>

                                        </Row>
                                        <Row>
                                            <span className="skill-label">Antd</span>

                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card2} headStyle={{ fontWeight: '600' }} title={<h3>JavaScript</h3>} >
                                <Row>
                                    <Col span={6}>
                                        <Row>
                                            <img src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png' style={{ width: '5rem', marginRight: '49px' }}></img>
                                        </Row>
                                        <Row>
                                            <span className="skill-label">JavaScript</span>
                                        </Row>
                                    </Col>
                                    <Col span={6}>
                                        <Row>
                                            <img src='https://cdn.auth0.com/blog/react-js/react.png' style={{ width: '5rem', marginRight: '49px' }}></img>

                                        </Row>
                                        <Row>
                                            <span className="skill-label">ReactJS</span>

                                        </Row>
                                    </Col>
                                    <Col span={6}>
                                        <Row>
                                            <img src='https://cdn2.iconfinder.com/data/icons/programming-languages-8/64/207_programming-program-language-code-typescript-512.png ' style={{ width: '5rem' }}></img>

                                        </Row>
                                        <Row>
                                            <span className="skill-label">Typescript</span>

                                        </Row>
                                    </Col>
                                    <Col span={6}>
                                        <Row>
                                            <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/367_Vuejs_logo-512.png' style={{ width: '5rem' }}></img>

                                        </Row>
                                        <Row>
                                            <span className="skill-label">VueJS</span>

                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card2} headStyle={{ fontWeight: '600' }} title={<h3>Other</h3>} >
                                <img src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png' style={{ width: '5rem', marginRight: '49px' }}></img>
                                <img src='https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/visual_studio-512.png' style={{ width: '5rem', marginRight: '49px' }}></img>
                                <img src='https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png' style={{ width: '5rem', marginRight: '49px' }}></img>
                                <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/367_Vuejs_logo-512.png' style={{ width: '5rem' }}></img>
                            </Card>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 16 }} sm={{ span: 19 }} md={{ span: 24 }} lg={{ span: 24 }}>
                        <Row id='award'>
                            <h3 className="skill">Awards</h3>
                        </Row>
                        <Row>
                            <Card style={card2} title={<h3 style={{ fontWeight: '600' }}>Client Relationship Award</h3>} extra="6th Jan 2020">
                                <Row>
                                    Nineleaps Technology Pvt. Ltd.
                               </Row>
                                <Row>  Awarded for the on-time delivery of
    the product and client satisfaction.</Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card2} title={<h3 style={{ fontWeight: '600' }}>Feather on the hat</h3>} extra="Aug 2020">
                                <Row>
                                    Nineleaps Technology Pvt. Ltd.
                               </Row>
                                <Row>  Awarded for the exceptional effort and
delivering the quality output.</Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card2} title={<h3 style={{ fontWeight: '600' }}>Best student of the Year</h3>} extra="2013">
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
                    <Col xs={{ span: 16 }} sm={{ span: 19 }} md={{ span: 24 }} lg={{ span: 24 }}>
                        <Row id='education'>
                            <h3 className="skill">Education</h3>
                        </Row>
                        <Row>
                            <Card style={card2}>
                                <Row>
                                    <span style={{ fontWeight: '600' }}>  Lovely Professional University,
    Jalandhar, Punjab, India-144411</span>
                                </Row>
                                <Row> B.Tech (Computer Science And
Engineering)</Row>
                                <Row>Jul 2015 - May 2019</Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card2}>
                                <Row>
                                    <span style={{ fontWeight: '600' }}> St. Edmund's College(Higher
        Secondary Section), Shillong,
    Meghalaya, India-793021</span>
                                </Row>
                                <Row> XII (MBOSE) | Mar 2014 - May 2015</Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card style={card2}>
                                <Row>
                                    <span style={{ fontWeight: '600' }}> St. Albert's School, Shillong,
    Meghalaya, India-793021</span>
                                </Row>
                                <Row>
                                    X(MBOSE) | Jan 2012 - May 2014</Row>
                            </Card>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 16 }} sm={{ span: 19 }} md={{ span: 24 }} lg={{ span: 24 }}>
                        <Row id='contact'>
                            <h3 className="skill">Contact</h3>
                        </Row>
                        <Row>
                            <Col span={2}>
                                <i class="fa fa-envelope" style={{ fontSize: '28px' }}></i>
                            </Col>
                            <Col span={22}>
                                <span>promod1208@gmail.com</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={2} style={{ fontSize: '28px' }}>
                                <i class="fa fa-phone"></i>
                            </Col>
                            <Col span={22}>
                                <span>+91-7814124336</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={2} style={{ fontSize: '28px' }}>
                                <i class="fa fa-linkedin"></i>
                            </Col>
                            <Col span={22}>
                                <a href="https://www.linkedin.com/in/promod-kr-pandey-051a7b126/" target="_blank">Linkdin</a>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={2} style={{ fontSize: '28px' }}>
                                <i class="fa fa-address-card"></i>

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
            </Row >
        )
    }
}