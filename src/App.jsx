import './App.css';
import { useState } from 'react';
import { ToggleAnimation } from './Components/ToggleAnimation';

export const Example = () => {
  const segments = {start:[0,40], end:[40,83]};
  const [isReversed, setReversed] = useState(false);

  return (<>
    <ToggleAnimation segments={segments} isReversed={isReversed} setReversed={setReversed} />
  </>);
};
