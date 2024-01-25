import React, { useState } from "react";

function Colorpicker() {
  const [color, setColor] = useState("#000000"); // Set an initial color value

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="main">
      <h1>Color</h1>
      <div className="C" style={{ backgroundColor: color }}>
        <p style={{ color: "white" }}>Selected Color</p>
      </div>
      <label className="Label">Choose a color :</label>
      <input className="input" type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default Colorpicker;
