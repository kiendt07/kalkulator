import React, { useState } from 'react';
import evaluate, { evaluateTokens } from './kalkulator';
import tokenize from './services/tokenize';
import { Token } from './models/token';

const App = () => {
  const [expression, setExpression] = useState('');
  const [error, setError] = useState('');

  const handleEvaluate = (expression: string): number => {
    try {
      const tokens: Token[] = tokenize(expression);
      console.log({ tokens });
      return evaluateTokens(tokens);
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
