import React,{useState} from "react";

const StepIndicator = () => {
    const [step,setStep]= useState(1)
  return (
    <div> Step indicator
      <span> 1 </span>
      <span> 2 </span>
      <span> 3 </span>
    </div>
  );
};

export default StepIndicator;
