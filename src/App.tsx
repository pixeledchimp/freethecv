import { Jobs, JobsForm } from './components/jobs/Jobs'
import {
    Presentation,
    Presentationform,
} from './components/presentation/Presentation'
import { UILayout } from './components/ui-layout/UILayout'

function App() {
    return (
        <div className="App">
            <UILayout
                formElements={[<Presentationform />, <JobsForm />]}
                templateElements={[<Presentation />, <Jobs />]}
            />
        </div>
    )
}

export default App
