import React, {useState} from 'react'



const TestForm = (props) => {
   const handleUpClick = () => {
      // console.log('Uppercase was clicked.' + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert('Converting to Uppercase!', 'success');
   }
   const handleLoClick = () => {
      // console.log('Uppercase was clicked.' + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converting to Lowercase!', 'success');
   }
   const handleCapClick = () => {
      // console.log('Uppercase was clicked.' + text);
      let newText = '';
      text.split(' ').forEach(ele => {
         newText += ele.charAt(0).toUpperCase() + ele.slice(1) + ' ';
      });
      setText(newText);
   }

   const handleClClick = () => {
      // console.log('Uppercase was clicked.' + text);
      let newText = '';
      setText(newText);
      props.showAlert('Text cleared', 'success');
   }
   const handleCopClick = () => {
      // console.log('Uppercase was clicked.' + text);
      // var text = document.getElementById('myBox');
      // text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Copied to clipboard!', 'success');
      // document.getSelection().removeAllRange();
   }
   const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
   }


   const handleOnChange = (event) => {
      setText(event.target.value);
   }

   const [text, setText] = useState('');
   // console.log(useState('Enter text here'));
   // text = 'new text'  -> wrong way
   // setText('new text')
   return (
      <>
         <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
         <h2>{props.heading} </h2>
         <div className="mb-3">
               <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36, 74, 104)' : 'white', color: props.mode === 'dark' ? 'white' : 'black', border: props.mode === 'dark' ? '1px solid grey' : '1px solid black' }} id="myBox" rows="8"></textarea>
         </div>
         <button className="btn btn-primary mx-2 my-2" disabled ={text.length === 0} onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" disabled={text.length === 0} onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" disabled={text.length === 0} onClick={handleCapClick} >Title Case</button>
            <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button className="btn btn-primary mx-2 my-2" disabled={text.length === 0} onClick={handleCopClick} >Copy</button>
            <button className="btn btn-primary mx-2 my-2" disabled={text.length === 0} onClick={handleClClick}>Clear</button>
         </div>
         <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
            <h2>Your Text Summary</h2>
            <p><b>{text.split(" ").filter((ele) => { return ele.length !== 0 }).length}</b> words and <b>{text.length}</b> characters</p>
            <p><b>{0.008 * text.split(" ").filter((ele) => { return ele.length !== 0 }).length}</b> Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length > 0? text :'Enter something in the text box to preview it'}</p>
         </div>
      </>
   )
}

export default TestForm
