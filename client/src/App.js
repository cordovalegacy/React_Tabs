import Tabs from './components/tabs';
import './App.css';
import {useState} from 'react';

function App() {

  const [tab, setTab] = useState([
    {
      tabOne: "This is tab 1",
      oneClicked: true
    },
    {
      tabTwo: "This is tab 2",
      twoClicked: false
    },
    {
      tabThree: "This is tab 3",
      threeClicked: false
    },
  ])

  return (
    <div className="App">
      <Tabs tab={tab} setTab={setTab} />
    </div>
  );
}

export default App;
