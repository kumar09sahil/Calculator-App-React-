import React, { useState } from 'react'
import './App.css';
import Keypad from './Components/Keypad';
import Header from './Components/Header';


const App = () => {
  
  const [result, setresult] = useState(0);
  const [screenValue,setscreenValue] = useState("0")
  const [dotentered, setdotentered] = useState(false);
  const [operation, setoperation] = useState("")
  const [toggleState, settoggleState] = useState('dark')

  const setNumber = (num)=> {
    const screenval = document.querySelector('.screenval');
    if(screenValue.length>=20)
    {
      screenval.style.fontSize='20px';
    }
    else
    {
      screenval.style.fontSize='40px';
    }
    setscreenValue(screenValue === '0' ? String(num) : screenValue + num);
  }

  const operationType = (op) => {
    setoperation(op);
    if (screenValue === '0') {
      alert('invalid operation');
    } else {
      const lastChar = screenValue[screenValue.length - 1];
  
      if (lastChar === op) {
        // If the last character is the same as the current operator, don't add it again
        return;
      } else if ('+-*/'.includes(lastChar)) {
        // If the last character is an operator, replace it with the new one
        setscreenValue(screenValue.slice(0, -1) + op);
      } else {
        // Otherwise, append the operator to the screenValue
        setscreenValue(screenValue + op);
        setdotentered(false)
      }
    }
  
    console.log(op);
  };

  const deleting = () =>{
    if(screenValue.length===1 ){ 
      setscreenValue(screenValue.slice(0,-1))
      setscreenValue("0") 
    }
    else
    {
      setscreenValue(screenValue.slice(0,-1))
    }
  }

  const reset = () =>{
      setscreenValue("0");
      setdotentered(false)
  }

  
  const precedence = (op) =>{
    if(op === '*' || op==='/')
    return 1;
  else if(op==='-'|| op==='+')
  return 0;
}

  const performOperation = (num1,num2,op) =>{
    if(op==='+')
      return num1+num2;
    else if(op === '-')
      return num1-num2;
    else if(op === '*')
      return num1*num2;
    else if(op=== '/')
      return num1/num2;
  }
  const getresult = () =>{
        const stack = []
        const stack2 = []
        let v='';
        for( let i=0;i<screenValue.length;i++)
        {
            if(screenValue[i]!=='+' && screenValue[i]!=='-' && screenValue[i]!=='*' && screenValue[i]!=='/')
            {
              v = v+screenValue[i];
            }
            else{
              stack.push(Number(v));
              while(stack2.length!==0 && precedence(screenValue[i])<=precedence(stack2[stack2.length-1]))
              {
                let op = stack2.pop()
                let num2 = stack.pop();
                let num1 = stack.pop();
                let res = performOperation(num1,num2,op)
                stack.push(res);
              }
              stack2.push(screenValue[i])
              v='';
            }
        }
        stack.push(Number(v));
        while(stack2.length!==0)
        {
            let c= stack2.pop();
            let v2=stack.pop();
            let v1 = stack.pop()
            let val = performOperation(v1,v2,c);
            stack.push(val);
        }
        let num = stack[0]
        
        if (String(stack[0]).includes('.'))
        {
           num = stack[0].toFixed(4)
        }
        
        setscreenValue(String(num));
        setresult(stack[0]);
  }

  const dotOperation = (dot) =>{
    setoperation(dot)
    setscreenValue((prevscreenval) => {
      if(prevscreenval.endsWith('.') || dotentered)
        return prevscreenval;
      else
      {
        setdotentered(true)
        return prevscreenval+dot
      }
    })
  }
  const toggleEvent = () =>{
    toggleState === 'dark'? settoggleState('light') : settoggleState('dark');
    console.log(toggleState)

      const screenval = document.querySelector('.screenval');
      const header = document.querySelector('.header');
      screenval.style.color = toggleState === 'dark' ? 'black' : 'white';
      header.style.color = toggleState === 'dark' ? 'black' : 'white';
  }

  const bodyStyle = {
   backgroundColor: toggleState==='light' ? ' hsl(0, 0%, 90%)':'hsl(222, 26%, 31%)'
 }

 const screeStyle = {
    backgroundColor: toggleState==='light' ? ' hsl(0, 0%, 93%)':'hsl(224, 36%, 15%)',
    
  }
  
  const keyBg ={
   boxShadow: toggleState==='light' ? '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19), inset 0 0 10px hsl(224deg 20.64% 79.96%)': '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19), inset 0 0 10px hsl(224, 28%, 35%)',
  }
  
  const numbersBg = {
   backgroundColor: toggleState==='light' ? 'hsl(0, 5%, 81%)':'hsl(223, 31%, 20%)',
 }
  
  

  return (
    <>
    <div className="body" style={bodyStyle}>
      <div className="container">
        <div className="header">
          <Header toggleState={toggleState} toggleEvent={toggleEvent} />
        </div>
        <div className="screen" style={screeStyle}>
             <span className='screenval'> {`${screenValue}`} </span>
        </div>
        <div className="numbers" style={numbersBg}>
              <Keypad keyBg={keyBg} setNumber={setNumber} deleting={deleting} operationType={operationType} dotOperation={dotOperation} reset={reset} getresult={getresult} />
        </div>
      </div>
    </div>
    </>
  )
}

export default App

