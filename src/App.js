import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './App.css';

function App() {
    const [equation, setEquation] = useState([]);
    const [display, setDisplay] = useState('');
    const [theme, setTheme] = useState(1);

    useEffect(() => {

    }, [equation])

    const calculate = (ev) => {
        if (equation[0]) {
            console.log('in state check');
            ev.preventDefault(ev);
            const parse = (equation) => {
                return Function(`'use strict'; return (${equation})`)()
            }
            const total = parse(equation.join(''));
            console.log(total);
            if (total && total !== Infinity || total === 0) {
                console.log('cleared number check')
                return setDisplay(total);
            }
            setDisplay("Can't divide by zero");
        }
    }

    const tally = (ev) => {
        setEquation([...equation, ev.target.value])
    }

    const clear = () => {
        setEquation([]);
        setDisplay(0);
    }

    const backspace = () => {
        const delArr = [...equation];
        delArr.pop();
        setEquation(delArr);
    }

    const themeChanger = () => {
        console.log('in theme changer');
        const themeNum = theme;
        console.log(themeNum);
        if (themeNum === 2) {
            console.log('theme is 2');
            setTheme(1);
            console.log(theme);
        } else {
            setTheme(2);
        }
    }

    return (
        <Container className={`calculator theme${theme}`}>
            <Row>
                <Button className='theme-button' onClick={() => themeChanger()}>THEME TOGGLE</Button>
            </Row>
            <Row className={`heading theme${theme}`}>
                <Col xs >Gavin Instruments</Col>
                <Col xs >GK-31X</Col>
            </Row>
            <Row className={`readout theme${theme}`}>
                <Col xs='12' className='equation'>
                    <p>{display}</p>
                </Col>
                <Col xs='12' className='total'>
                    <p>{equation}</p>
                </Col>
            </Row>
            <Row className={`buttonGroup theme${theme}`}>
                <Col xs='3'>
                    <Button
                        onClick={() => clear()}
                        className='clearButtons'
                    >AC</Button>
                </Col>
                <Col xs='3'>
                    <Button
                        onClick={() => backspace()}
                        className='clearButtons'
                    >DEL</Button>
                </Col>
                <Col xs='3'>
                    <Button
                        value={'+'}
                        onClick={(ev) => tally(ev)}
                        className='operator'
                    >+</Button>
                </Col>
                <Col xs='3'>
                    <Button
                        value={'-'}
                        onClick={(ev) => tally(ev)}
                        className='operator'
                    >-</Button>
                </Col>
            </Row>
            <Row className={`buttonGroup theme${theme}`}>
                <Col xs='3'>
                    <Button
                        value={7}
                        onClick={(ev) => tally(ev)}
                        className='integer'
                    >7</Button>
                </Col>
                <Col xs='3'>
                    <Button
                        value={8}
                        onClick={(ev) => tally(ev)}
                        className='integer'
                    >8</Button>
                </Col>
                <Col xs='3'>
                    <Button
                        value={9}
                        onClick={(ev) => tally(ev)}
                        className='integer'
                    >9</Button>
                </Col>
                <Col xs='3'>
                    <Button
                        value={'*'}
                        onClick={(ev) => tally(ev)}
                        className='operator'
                    >x</Button>
                </Col>
            </Row>
            <Row className={`buttonGroup theme${theme}`}>
                <Col xs='3'>
                    <Button
                        value={4}
                        onClick={(ev) => tally(ev)}
                        className='integer'
                    >4</Button>
                </Col>
                <Col xs='3'>
                    <Button
                        value={5}
                        onClick={(ev) => tally(ev)}
                        className='integer'
                    >5</Button>
                </Col>
                <Col xs='3'>
                    <Button
                        value={6}
                        onClick={(ev) => tally(ev)}
                        className='integer'
                    >6</Button>
                </Col>
                <Col xs='3'>
                    <Button
                        value={'/'}
                        onClick={(ev) => tally(ev)}
                        className='operator'
                    >÷</Button>
                </Col>
            </Row>
            <Row className={`buttonGroup theme${theme}`}>
                <Col xs='3'>
                    <Button
                        value={1}
                        onClick={(ev) => tally(ev)}
                        className='integer'
                    >1</Button>
                </Col>
                <Col xs='3'>
                    <Button
                        value={2}
                        onClick={(ev) => tally(ev)}
                        className='integer'
                    >2</Button>
                </Col>
                <Col xs='3'>
                    <Button
                        value={3}
                        onClick={(ev) => tally(ev)}
                        className='integer'
                    >3</Button>
                </Col>
                <Col xs='3'>
                    <Button
                        value={'.'}
                        onClick={(ev) => tally(ev)}
                        className='decimal'
                    >.</Button>
                </Col>
            </Row>
            <Row className={`buttonGroup theme${theme}`}>
                <Col xs='3'>
                    <Button
                        value={0}
                        onClick={(ev) => tally(ev)}
                        className='integer'
                    >0</Button>
                </Col>
                <Col xs='9'>
                    <Button
                        value={'='}
                        onClick={(ev) => calculate(ev)}
                        className='equalOperator'
                    >=</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
