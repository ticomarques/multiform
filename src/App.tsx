
import { Router } from './router';
import { FormProvider }  from './Contexts/FormContext';

const App = () => {
  return(
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;