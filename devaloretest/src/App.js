import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import PersonalInfo from './components/PersonalInfo';
import PetInfo from './components/PetInfo';
import Agreement from './components/Agreement';
import StepIndicator from './components/StepIndicator';

function App() {
  return (
    <div className="App">
      <StepIndicator/>
      <Accordion open='true' title="Personal Info" form={<PersonalInfo/>}/>
      <Accordion open='false' title="Pet Info" form={<PetInfo/>}/>
      <Accordion open='false' title="Agreement" form={<Agreement/>}/>
    </div>
  );
}

export default App;
