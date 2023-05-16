import React, { useState } from 'react';


const MainComponent = () => {
  const [additionResult, setAdditionResult] = useState();
  const [subtractionResult, setSubtractionResult] = useState();
  const [divisionResult, setDivisionResult] = useState();

  return (
    <div className='d1'>
      <p>The result  is: {additionResult}</p>
      <p>The result of subtraction is: {subtractionResult}</p>
      <p>The result of division is: {divisionResult}</p> 

      <AdditionComponent setAdditionResult={setAdditionResult} />
      <SubtractionComponent setSubtractionResult={setSubtractionResult} />
      <DivisionComponent setDivisionResult={setDivisionResult} />
    </div>
  );
};


const AdditionComponent = ({ setAdditionResult }) => {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();

  const handleAddition = () => {
    const result = num1 + num2;
    setAdditionResult(result);
  };

  return (
    <div>
      <h3>Addition</h3>
      <input
        type="number"
        value={num1}
        onChange={(e) => setnum1(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setnum2(parseInt(e.target.value))}
      />
      
      <button className='btn' onClick={handleAddition}> Add</button>
    
    </div>
  );
};


const SubtractionComponent = ({ setSubtractionResult }) => {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();

  const handleSubtraction = () => {
    const result = num1 - num2;
    setSubtractionResult(result);
  };

  return (
    <div>
      <h3>Subtraction</h3>
      <input
        type="number"
        value={num1}
        onChange={(e) => setnum1(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setnum2(parseInt(e.target.value))}
      />
      
      <button className='btn' onClick={handleSubtraction}> Subtract</button>
    
    </div>
  );
};


const DivisionComponent = ({ setDivisionResult }) => {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();

  const handleDivision = () => {
    const result = num1 / num2;
    setDivisionResult(result);
  };

  return (
    <div>
      <h3>Division</h3>
      <input
        type="number"
        value={num1}
        onChange={(e) => setnum1(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setnum2(parseInt(e.target.value))}
      />
      
      <button className='btn' onClick={handleDivision}> Divide</button>
     
    </div>
  );
};
export default MainComponent;
