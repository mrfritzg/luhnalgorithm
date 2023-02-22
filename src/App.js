import Form from "./component/Form"
import { useEffect, useState } from "react";
import './App.css'

function App() {

  let [results, setResults] = useState();


  function validCard(num) {
    //checks if the number is valid
    if (num === undefined) {
      return;
    }
    if (isNaN(parseInt(num))) {
      // console.log('This is not a valid credit card number')
      setResults('This is not a valid credit card number');
      return
    }
    let newNum = num.toString();
    const numArray = [...newNum];
    // console.log(`The current items in numArray are ${numArray}`);
    const tempArray = [];
    const tempArray1 = [];

    // step 1 Starting with the next to last digit 
    // and continuing with every other digit going back 
    // to the beginning of the card number, double the digit.
    for (let i = numArray.length - 1; i >= 0; i--) {
      console.log(i);
      if (i % 2 === 0) {
        tempArray.push(numArray[i] * 2);
      } else tempArray1.push(numArray[i]);
    }
    // console.log(`The current items in tempArray are ${tempArray}`);
    // console.log(`The current items in tempArray1 are ${tempArray1}`);

    //merge both arrays
    const newArr = [...tempArray, ...tempArray1];
    // console.log(`The current items in newArr are ${newArr}`)

    //split every entry into single digits
    const newArr2 = newArr.toString().split("");
    // console.log(`The current items in newArr2 are ${newArr2}`)

    //step 2 Sum all digits in the altered number.
    let tempSum = 0;
    newArr2.forEach(item => {
      if (!isNaN(item)) {
        return tempSum += item;
      }
    })

    console.log(tempSum);

    //Step 3. If that total is a multiple of 10, the number is valid.
    tempSum % 10 === 0 ? setResults('This is a valid credit card number') : setResults('This is not a valid credit card number');
  }

  // validCard('1234567890123456');

  // useEffect( () => {
  //   validCard('');
  // },[]);


  return (
    <div className="App">
      <h1>Credit Card Checker</h1>
      <h2>Please enter Credit card number below and click on the check button</h2>
      <Form validCard={validCard} />
      {results && <h3>Results: {results}</h3>}
    </div>
  );
}

export default App;

