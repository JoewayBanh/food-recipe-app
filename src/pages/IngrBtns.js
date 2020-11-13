import React from 'react'
import { useState} from 'react'
// import './ingBtns.css'
const IngrBtns = (props) => {
const [online, setOnline] = useState(false);
const toggle = (clickedButtonValue) => {
  setOnline(!online);
//   console.log(online)
  if (online && props.search.includes(clickedButtonValue)) {
    props.setSearch((props.search.replace(clickedButtonValue, "")));
      console.log("IF HAS PROCCED FROM IngrBtns");
  }
  else {
      props.handlePassInfoToParent(clickedButtonValue.concat(" "+props.search))
      console.log("ELSE HAS PROCCED FROM IngrBtns");
      // setSearch(valueFromChild.concat("?" + search))
  }
};
return (
    <div className="btndiv">
        <div className="r1div">
            <button className={online? 'isOnline' : 'isOffline'} value={props.val} onClick={() => toggle(props.val)}>
      {online ? `${props.val}` : `${props.val}`}
    </button>
        </div>
    </div>
)
}
export default IngrBtns