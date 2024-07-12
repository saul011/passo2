import React, { useState, useEffect } from 'react';

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date());
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Atualiza o relógio a cada segundo
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Mostra a mensagem por 5 segundos
    setShowMessage(true);
    const timeoutId = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    // Limpa o timeout ao desmontar o componente
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <h1>Current Time: {time.toLocaleTimeString()}</h1>
      {showMessage && <p>This message will disappear after 5 seconds.</p>}
    </div>
  );
};

export default RealTimeClock;
