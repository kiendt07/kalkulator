import { useState } from 'react';

// COMPONENTS
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

// UTILS
import evaluate from './utils/evaluate';
import { ALLOWED_OPERATORS } from './utils/constants';
import './App.css';

const btnValues = [
  ['C', 'DEL', 'CHI', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const App = () => {
  const [expression, setExpression] = useState('');

  const handleClick = (btn: string) => {
    if (btn >= '0' && btn <= '9' || btn === '.') handleNumberClick(btn);
    if (ALLOWED_OPERATORS.includes(btn)) handleOperatorClick(btn);
    if (btn === '=') handleEqualClick();
    if (btn === 'C') handleResetClick();
    if (btn === 'DEL') handleDeleteClick();
  }
  const handleOperatorClick = (s: string) => setExpression(expression + s);
  const handleNumberClick = (n: string) => setExpression(expression + n);
  const handleEqualClick = () => {
    try {
      const result = evaluate(expression);
      setExpression(`${result}`);
    } catch (err) {
      console.error(err);
      setExpression('');
    }
  };
  const handleResetClick = () => setExpression('');
  const handleDeleteClick = () => setExpression(expression.slice(0, expression.length - 1));

  return (
    <div className='App'>
      <Wrapper>
        <Screen value={expression} />
        <ButtonBox>
          {
            btnValues.flat().map((btn, i) => {
              return (
                <Button
                  key={i}
                  className={btn === '=' ? 'equals' : ''}
                  value={btn}
                  onClick={() => handleClick(btn)}
                />
              );
            })
          }
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
