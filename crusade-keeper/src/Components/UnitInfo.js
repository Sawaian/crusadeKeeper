
import React, { useState } from "react";


// This will create an array of the characters. Whenever the Array is clicked on, it'll store of the index value is true or false

const clickChange = () = {

}

const UnitInfo= () => {
  //array of images
  const [unitName, setUnitName] = useState("Gaunts");
  // Checks to see if clicked
  const [battlefieldRole, setBattleFieldRole] = useState("Troop")

  return (
    <div>
      <div id="character">
        <h1 id="UnitName">
          Unit Name: {unitName}
        </h1>
        <div id="BattlefieldRole">
            <h1> BattleField Role: {battlefieldRole}
            </h1>
        </div>
        </div>
    </div>
  );
};

export default UnitInfo;
