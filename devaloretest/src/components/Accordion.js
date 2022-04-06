import React, { useState } from "react";

function Accordion(props) {
  const startingState = props.open === 'true'
  const [open, setOpen] = useState(startingState);

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <div class="font-bold m-1">{props.title} <button class="border-2 p-0.5" onClick={open? handleClose:handleOpen}>+</button></div>
      <div> {open ? props.form : null} </div>
    </div>
  );
}

export default Accordion;
