import React from 'react';

export const Result = ({ stats,setStep }) => {
  return (
    <div className="flex result">
      <div className="result__top-icon">😓</div>
      <p className="result__phrase">
        Неплохо! За <b>{stats.sec} секунд</b>, ты ввел:
      </p>
      <div className="result__number-of-words">{stats.words} слова</div>
      <button onClick={() => setStep('welcome')} className="button">🤔 Попробовать снова?</button>
    </div>
  );
};
