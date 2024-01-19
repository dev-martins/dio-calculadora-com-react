import { Input } from './components/Input';
import { Button } from './components/Button';
import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operator, setOperator] = useState('');

  const handleAddNumber = (number) => {
    if (operator === '=') {
      // Se a última operação foi uma igualdade, reinicie os valores
      setFirstNumber('0');
      setOperator('');
    }

    setCurrentNumber((prev) => (prev === '0' || operator === '=') ? number : prev + number);
  };

  const handleClear = () => {
    setFirstNumber('0');
    setCurrentNumber('0');
    setOperator('');
  };

  const handleOperator = (newOperator) => {
    if (operator) {
      // Se já houver um operador, execute a operação anterior
      performOperation();
    }

    setOperator(newOperator);
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
  };

  const performOperation = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentNumber);

    if (!isNaN(num1) && !isNaN(num2)) {
      switch (operator) {
        case '+':
          setCurrentNumber(String(num1 + num2));
          break;
        case '-':
          setCurrentNumber(String(num1 - num2));
          break;
        case '*':
          setCurrentNumber(String(num1 * num2));
          break;
        case '/':
          setCurrentNumber(String(num1 / num2));
          break;
        default:
          break;
      }
    }

    setOperator('=');
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="*" onClick={() => handleOperator('*')} />
          <Button label="/" onClick={() => handleOperator('/')} />
          <Button label="C" onClick={handleClear} />
          <Button label="-" onClick={() => handleOperator('-')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="+" onClick={() => handleOperator('+')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="=" onClick={performOperation} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={performOperation} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
