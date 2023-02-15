import React, { useState, useEffect } from "react";
import Contract from "./Contact";
import "../CSS/Contracts.css";
import { contacts } from "./contantInfo"

function Contacts() {
  let [contactInfo, setContacts] = useState(contacts);//оточний стан і функцію, яка його оновлює.
  const [sexMale, setSexMale] = useState(false);
  const [sexFemale, setSexFemale] = useState(false);
  let [search, setSearch] = useState("");

  function handleSearchChange(event) {
    setSearch(event.target.value);//По суті, він отримує значення будь-якого введення, яке було викликано.У цьому випадку це ваш вхідний елемент, тому все, що ви вставите у свій вхід, можна отримати
  }
  useEffect(() => {
    setContacts(
      contacts
        .map((elem) => {
          if (
            Object.values(elem).filter((val) =>
              val.toLowerCase().includes(search)
            ).length > 0
          ) {
            if ((sexFemale && elem.gender === "female") || !elem.gender) {
              return elem;
            }
            if ((sexMale && elem.gender === "male") || !elem.gender) {
              return elem;
            }
          }
        })
        .filter((val) => val !== undefined)
    );
    console.log(handleSearchChange);
  }, [search, sexFemale, sexMale]);

  return (
    <div>
      <div className="wrapper">
        <input className="mainInput" 
        onChange={handleSearchChange}
        placeholder='Шукати'>
        </input>
        <div className="render">
          <input
            type="checkbox"
            value={sexMale}
            onChange={() => setSexMale((sexMale) => !sexMale)}
          />
          <label>Ч</label>
          <input
            type="checkbox"
            value={sexFemale}
            onChange={() => setSexFemale((sexFemale) => !sexFemale)}
          />
          <label>Ж</label>
        </div>
      </div>
      <div className="phone">
        {contactInfo.map((element, i) => {
          return <Contract data={element} key={i} />;
        })}
      </div>
    </div>
  );
};


export default Contacts;