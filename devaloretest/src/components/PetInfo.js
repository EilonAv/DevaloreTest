import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPet } from "../store/petSlice";

function PetInfo() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  const petTypes = ["Cat", "Dog", "Horse"];

  const validateForm = () => {
    return name.length > 0;
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setPet({ name, type }));
    console.log(name, type);
  };

  return (
    <div>
      <form action="">
        <input
        class="border-2 m-1 border-zinc-900"
          type="text"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
          placeholder="Name"
        />
        <br />
        <select class="border-2 m-2 border-zinc-900" onChange={(e) =>{console.log(e.target.value); setType(e.target.value)}}>
          {petTypes.map((type, index) => {
            return <option key = {index} value={type}>{type}</option>;
          })}
        </select>
        <br />
        <button class="border-2 p-1 border-indigo-500/100" type="submit" onClick={handleClick} disabled={!validateForm()}>
          Next
        </button>
      </form>
    </div>
  );
}

export default PetInfo;
