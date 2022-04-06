import React, { useState } from "react";
import { useSelector } from "react-redux";

function Agreement() {
  const [isChecked, setIsChecked] = useState(false);

    const {name,age}=useSelector((state)=> state.infoReducer)
    const {petName,petType}=useSelector((state)=> state.petReducer)




  const validateForm = () => {
    return isChecked;
  };
  const handleClick = (e) => {
    e.preventDefault();
    if(name && age && petName && petType)
      alert('Person name: '+name + '\nPerson age: '+age + '\nPet Name: '+petName + '\npet Type: '+petType)
    else
      alert('You havent added all the required information')
  };

  return (
    <div>
      <form action="">
        <div class="border-2 h-65 w-40  m-auto p-1 border-zinc-900">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          officiis, quam voluptate laboriosam, perferendis exercitationem,
          itaque magnam vero delectus excepturi cupiditate"
        </div>
        <input type="checkbox" onClick={() => setIsChecked(!isChecked)} />
        <br />
        <button class=" border-indigo-500/100 border-2 p-1" type="submit" onClick={handleClick} disabled={!validateForm()}>
          Done
        </button>
      </form>
    </div>
  );
}

export default Agreement;
