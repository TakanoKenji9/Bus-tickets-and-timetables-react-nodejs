import '../components/Timetable/Timetable.css'
import { Dropdown, Table, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsArrowLeftRight } from 'react-icons/bs';

function Timetable() {
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={6} className='text-center' align="left">
                        <h1 className='page-header'>Разписание на автобуси Демо-Д</h1>
                        <Row id="timetable-dropdowns" className='justify-content-center'>
                            <Col lg={5}>
                                <Dropdown className="d-inline mx-2">
                                    <Dropdown.Toggle id="destination-from" variant="light">
                                        Тръгване от:
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Бобов дол</Dropdown.Item>
                                        <Dropdown.Item href="#">Дупница</Dropdown.Item>
                                        <Dropdown.Item href="#">Сапарева баня</Dropdown.Item>
                                        <Dropdown.Item href="#">Кюстендил</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col lg={1}>
                                <OverlayTrigger key='bottom' placement='bottom'
                                    overlay={
                                        <Tooltip id="tooltip-bottom">
                                            Обръщане
                                        </Tooltip>
                                    }
                                >
                                    <button className='tooltip-btn'><BsArrowLeftRight /></button>
                                </OverlayTrigger>
                            </Col>
                            <Col lg={5}>
                                <Dropdown className="d-inline mx-2">
                                    <Dropdown.Toggle id="destination-to" variant="light">
                                        Пристигане във:
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Бобов дол</Dropdown.Item>
                                        <Dropdown.Item href="#">Дупница</Dropdown.Item>
                                        <Dropdown.Item href="#">Сапарева баня</Dropdown.Item>
                                        <Dropdown.Item href="#">Кюстендил</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>

                        <Col lg={12} id='timetable' className="justify-content-center text-center">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Тръгване от: Дупница</th>
                                        <th>Пристигане във: Кюстендил</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>08:00</td>
                                        <td>09:45</td>
                                    </tr>
                                    <tr>
                                        <td>08:50</td>
                                        <td>10:30</td>
                                    </tr>
                                    <tr>
                                        <td>08:00</td>
                                        <td>09:45</td>
                                    </tr>
                                    <tr>
                                        <td>08:50</td>
                                        <td>10:30</td>
                                    </tr>
                                    <tr>
                                        <td>08:00</td>
                                        <td>09:45</td>
                                    </tr>
                                    <tr>
                                        <td>08:50</td>
                                        <td>10:30</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                    </Col>
                    <Col lg={6} align="right">
                        <img className="img-fluid" id="timetable-img" src="images/bus.jpg" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Timetable;