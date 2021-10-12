import React from 'react'

const About = (props) => {
  // const [myStyle, setMyStyle] = useState({
  //   color: 'white',
  //   backgroundColor: 'black',
  //   border: '1px solid white'
  // })
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'rgb(36, 74, 104)' : 'white',
  }
  // const [btnText, setbtnText] = useState('Enable Light Mode')

  // const ToggleStyle = () => {
  //   if (myStyle.color === 'white') {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     setbtnText('Enable Dark Mode');
  //   } else {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border: '1px solid white'
  //     })
  //     setbtnText('Enable Light Mode');
  //   }
  // }

  return (
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne" >
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyze Your Text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free to use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser compatible
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word counter works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
