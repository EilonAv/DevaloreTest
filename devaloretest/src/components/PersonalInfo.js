import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {setInfo} from "../store/infoSlice"

function PersonalInfo() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const validateForm = () => {
    return  name.length > 0 && name.length <25 && age > 0;
  };
  const handleClick = (e) => {
      e.preventDefault();
    // go to next step
    dispatch(setInfo({name,age}))
    console.log(name, age);
  };

  return (
    <div>
      <form action="">
        <input
        class="border-2  m-1 p-1 border-zinc-900"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
        />
        <br />
        <input
        class="border-2 m-2 p-1 border-zinc-900"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder='Age'
        />
        <br />
        <button
        class="border-2 p-1 border-indigo-500/100"
          type="submit"
          onClick={handleClick}
          disabled={!validateForm()}
        >Next</button>
      </form>
    </div>
  );
}

export default PersonalInfo;
