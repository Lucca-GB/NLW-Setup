import './styles/global.css'

import { Habits } from "./components/Habits";

function App() {

  return (
    <div>
      <Habits completed={3}/>
    </div>
  )
}

export default App
