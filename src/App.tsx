import React, { useState } from 'react';
import evaluate from './utils/evaluate';

const App = () => {
  const [expression, setExpression] = useState('');

  const handleEvaluate = (expression: string): number => {
    try {
      return evaluate(expression);
    } catch (err) {
      return NaN;
    }
  }

  return (
    <div className="App">
      <input type="text" value={expression} onChange={e => setExpression(e.target.value)}/>
      <div>
        Result: {expression && handleEvaluate(expression)}
      </div>
    </div>
  );
}

export default App;
