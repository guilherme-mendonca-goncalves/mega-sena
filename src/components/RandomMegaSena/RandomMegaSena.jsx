import { useEffect, useState } from 'react';
import { randomMega } from '../../functions';
import DisplayNumber from '../DisplayNumber';
import styles from './RandomMegaSena.module.css';

const RandomMegaSena = () => {
  const [quantity, setQuantity] = useState(6);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(randomMega(quantity));
  }, []);

  const renderNumbers = () => {

    return numbers.map(n => <DisplayNumber key={n} number={n} />);
  };

  return (
    <div className={styles.container}>
      <h1>Aposta para Mega-Sena</h1>
      <div className={styles.numbers}>
        {renderNumbers()}
      </div>
      <p>Quantidade de números da aposta:</p>
      <div>
        <input className={styles.inputs} type="number" min={6} max={15} value={quantity} onChange={e => setQuantity(e.target.value)} />
        <button onClick={() => setNumbers(randomMega(quantity))} className={styles.buttons}>Gerar Aposta</button>
      </div>
    </div>
  );
};

export default RandomMegaSena;
