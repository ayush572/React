import React from "react";
import emojipedia from "../emojipedia";
import Struct from "./Struct";
function looping(value) {
  return (
    <Struct
      key={value.id}
      name={value.name}
      emoji={value.emoji}
      meaning={value.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(looping)}</dl>
    </div>
  );
}
export default App;
