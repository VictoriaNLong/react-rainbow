import React, {useState} from 'react';
import ColorBlock from './components/ColorBlock';
import ColorForm from './components/ColorForm';
import './App.css';

const DEFAULT_COLOR = [
  'red',
  'yellow',
  'blue',
  'violet',
  'magenta',
  'teal'
]

function App() {

  let [colors, setColors] = useState(DEFAULT_COLOR)

  const addToColors = newColor => {
    setColors([...colors, newColor])
  }

  let colorMap = colors.map((colorString, i) => {
    return <ColorBlock color={colorString} key={i}/>
  })

  return (
    <div className="App">
      {colorMap}
      <ColorForm addToColors={addToColors} />
    </div>
  );
}

export default App;
