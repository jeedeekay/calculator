import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './App.css';

function App() {
  const [equation, setEquation] = useState([]);
  const [display, setDisplay] = useState(0);

  useEffect(() => {

  }, [equation])

  const calculate = (ev) => {
    ev.preventDefault(ev);
    function parse(equation) {
      return Function(`'use strict'; return (${equation})`)()
    } 
    setDisplay(parse(equation.join('')));
  }

  const tally = (ev) => {
    setEquation([ ...equation, ev.target.value ])
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

  return (
    <Container className='calculator'>
      <Row className='heading'>
        <Col xs >Gavin Instruments</Col>
        <Col xs >GK-31X</Col>
      </Row>
      <Row className='readout'>
        <Col xs='12' className='equation'>
          <p>{display}</p>
        </Col>
        <Col xs='12' className='total'>
          <p>{equation}</p>
        </Col>
      </Row>
      <Row>
        <Col xs='3'>
          <Button
            color='light'
            onClick={() => clear()}
          >AC</Button>
        </Col>
        <Col xs='3'>
          <Button
            color='light'
            onClick={() => backspace()}
          >DEL</Button>
        </Col>
        <Col xs='3'>
          <Button
          color='warning'
            value={'+'}
            onClick={(ev) => tally(ev)}
          >+</Button>
        </Col>
        <Col xs='3'>
          <Button
          color='warning'
              value={'-'}
              onClick={(ev) => tally(ev)}
          >-</Button>
        </Col>
      </Row>
      <Row>
        <Col xs='3'>
          <Button
            value={7}
            onClick={(ev) => tally(ev)}
          >7</Button>
        </Col>
        <Col xs='3'>
          <Button
            value={8}
            onClick={(ev) => tally(ev)}
          >8</Button>
        </Col>
        <Col xs='3'>
          <Button
            value={9}
            onClick={(ev) => tally(ev)}
          >9</Button>
        </Col>
        <Col xs='3'>
          <Button
          color='warning'
            value={'*'}
            onClick={(ev) => tally(ev)}
        >x</Button>
        </Col>
      </Row>
      <Row>
        <Col xs='3'>
          <Button
            value={4}
            onClick={(ev) => tally(ev)}
          >4</Button>
        </Col>
        <Col xs='3'>
          <Button
            value={5}
            onClick={(ev) => tally(ev)}
          >5</Button>
        </Col>
        <Col xs='3'>
          <Button
            value={6}
            onClick={(ev) => tally(ev)}
          >6</Button>
        </Col>
        <Col xs='3'>
          <Button
          color='warning'
            value={'/'}
            onClick={(ev) => tally(ev)}
        >÷</Button>
        </Col>
      </Row>
      <Row>
        <Col xs='3'>
          <Button
            value={1}
            onClick={(ev) => tally(ev)}
          >1</Button>
        </Col>
        <Col xs='3'>
          <Button
            value={2}
            onClick={(ev) => tally(ev)}
          >2</Button>
        </Col>
        <Col xs='3'>
          <Button
            value={3}
            onClick={(ev) => tally(ev)}
          >3</Button>
        </Col>
        <Col xs='3'>
          <Button
            color='info'
            value={'.'}
            onClick={(ev) => tally(ev)}
          >.</Button>
        </Col>
      </Row>
      <Row>
        <Col xs='3'>
          <Button
            value={0}
            onClick={(ev) => calculate(ev)}
          >0</Button>
        </Col>
        <Col xs='9'>
          <Button
          color='danger'
            value={'='}
            onClick={(ev) => calculate(ev)}
          >=</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
