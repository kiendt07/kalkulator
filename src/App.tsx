import React, { useState } from 'react';
import evaluate from './utils/evaluate';
import tokenize from './utils/tokenize';
import { Token } from './models/token';

const App = () => {
  const [expression, setExpression] = useState('');

  const handleEvaluate = (expression: string): number => {
    try {
      const tokens: Token[] = tokenize(expression);
      return evaluate(tokens);
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
