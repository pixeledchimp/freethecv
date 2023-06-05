import './App.scss'
import {
  Presentationform,
  Presentation,
} from './components/presentation/Presentation'
import { UILayout } from './components/ui-layout/UILayout'

function App() {
  return (
    <div className='App'>
      <UILayout
        formElements={[<Presentationform />]}
        templateElements={[<Presentation />]}
      />
    </div>
  )
}

export default App
