
// 新建home页
import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './index.scss'
import Descirbe, { Test, FileChoose, InfoCard } from './component/describe'
import { addTodo, exampleAction } from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/***
 * 这个是主页面我们采用栅格布局去做
 */
interface homeProps{
    testClick:{asyncError():void}
    onIncreaseClick(text:string):void;
}


class Home extends React.PureComponent<homeProps> {
    
    componentDidMount(){
        const {onIncreaseClick} = this.props;
        onIncreaseClick('测试typescript')
        // this.props.onIncreaseClick('123')
        // this.props.testClick.asyncThing()
        // this.props.testClick.asyncError()
    }

    render() {
        console.log(this.props);
        return (

            <div className="home">
                {/* <Button>test</Button> */}
                <Container className="themed-container" fluid={true}>
                    <Row>
                        <Col xs='6' sm='4' lg='3'>
                            <Descirbe data='test'/>
                        </Col>
                        <Col xs='6' sm='4' lg='3'>
                            <Test />
                        </Col>
                        <Col xs='6' sm='4' lg='3'>
                            <FileChoose />
                        </Col>
                        <Col xs='6' sm='4' lg='3'>
                            <InfoCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos:state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: bindActionCreators(addTodo,dispatch),
        testClick: bindActionCreators(exampleAction, dispatch)
      }

}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
