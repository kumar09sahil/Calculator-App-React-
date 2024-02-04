import React from 'react'

const Keypad = (props) => {
  return (
    <>
        <div className="box"   style={props.keyBg} onClick={()=>props.setNumber(7)}> 7 </div>
          <div className="box" style={props.keyBg}  onClick={()=>props.setNumber(8)}> 8 </div>
          <div className="box" style={props.keyBg} onClick={() => props.setNumber(9)}> 9 </div>
          <div className="box" style={props.keyBg} onClick={() => props.deleting()}> DEL </div>
          <div className="box" style={props.keyBg}  onClick={() => props.setNumber(4)}> 4 </div>
          <div className="box"  style={props.keyBg}onClick={() => props.setNumber(5)}> 5 </div>
          <div className="box" style={props.keyBg} onClick={() => props.setNumber(6)}> 6 </div>
          <div className="box" style={props.keyBg} onClick={() => props.operationType('+')}> + </div>
          <div className="box" style={props.keyBg} onClick={() => props.setNumber(1)}> 1 </div>
          <div className="box" style={props.keyBg} onClick={() => props.setNumber(2)}> 2 </div>
          <div className="box" style={props.keyBg} onClick={() => props.setNumber(3)}> 3 </div>
          <div className="box" style={props.keyBg} onClick={ () => props.operationType('-')}> - </div>
          <div className="box" style={props.keyBg} onClick={() => props.dotOperation('.')}> . </div>
          <div className="box" style={props.keyBg} onClick={() => props.setNumber(0)}> 0 </div>
          <div className="box" style={props.keyBg} onClick={() => props.operationType('/')}> / </div>
          <div className="box" style={props.keyBg} onClick={() => props.operationType('*')}> * </div>
          <div className="box big-b" style={props.keyBg} onClick={ () => props.reset()}> RESET</div>
          <div className="box big-b2" style={props.keyBg} onClick={ () => props.getresult()}> = </div>
    </>
  )
}

export default Keypad
