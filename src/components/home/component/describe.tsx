/**
 * 概要信息描述
 */
import React,{useEffect} from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    ListGroup, ListGroupItem,
    Row, Col, Nav, NavItem, NavLink, TabContent, TabPane,
    Form, Label, Input
} from 'reactstrap';
import { useSelector, useDispatch} from 'react-redux'
// props data必须传递
interface DescirbeProps {
    data: {}
}
export default function Descirbe(porps: DescirbeProps) {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    console.log(todos);
    useEffect(() => {
        // Update the document title using the browser API
        dispatch({ type: 'ERROR'})
      },[]);
    return (
        <div>

            <h3>JOB # 600583</h3>
            <h4>WELLCARE</h4>
            <ListGroup flush>
                <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
                <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
            </ListGroup>


        </div>
    )
}

export function Test(porps) {
    return (
        <div>
            <Card>
                <CardTitle>Test</CardTitle>
            </Card>
            <Card>
                {/* <CardTitle>Test</CardTitle> */}
                <CardBody>
                    <Nav tabs>
                        <NavItem>

                            <NavLink
                            // className={classnames({ active: activeTab === '1' })}
                            // onClick={() => { toggle('1'); }}
                            >
                                Tab1
          </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            // className={classnames({ active: activeTab === '2' })}
                            // onClick={() => { toggle('2'); }}
                            >
                                Moar Tabs
          </NavLink>

                        </NavItem>
                    </Nav>
                    <TabContent activeTab="1">
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <h4>Tab 1 Contents</h4>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </div>
    )
}

export function FileChoose() {
    return (
        <Card>
            <CardTitle>Attachments</CardTitle>
            <CardSubtitle>WELLCARE</CardSubtitle>
            <CardBody>
                <p>Choose a file to attach</p>
                <Form>
                    <Label for="exampleFile" sm={2}>File</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="exampleFile" />
                    </Col>
                </Form>
                <p> current file attachments </p>
                <Button>remove</Button>
            </CardBody>
        </Card>
    )
}

export function InfoCard() {
    return (
        <div>
            <h3>ID CARD</h3>
            <ListGroup flush>
                <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
                <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
            </ListGroup>
        </div>
    )
}