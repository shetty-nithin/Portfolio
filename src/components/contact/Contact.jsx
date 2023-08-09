import React, {useState} from 'react';
import './contact.scss';

const Contact = () => {
	const [validGamil, setValidGmail] = useState(true);

	const handleGmailChange = (event) => {
		const inputValue = event.target.value;
		const pattern = /^[A-Za-z0-9._%+-]+@gmail\.com$/
		setValidGmail(pattern.test(inputValue));
	}

    return (
        <div id='contactSection' className="contactSection container">
			<div className="leftDiv col-lg-5">
				<h3>Get In Touch</h3>
				<div class="leftText">
					<h5 class="wow fadeInUp">Let's talk!</h5>
					<p class="wow fadeInUp">Don't like forms? Send me an <a href="mailto:shettynithin744@gmail.com">email</a>.</p>
				</div>
			</div>
			<div className="rightDiv col-lg-6">
				<form action="">
					<div className="row">
						<input type="text" name="inputName" className="inputName col-lg-6 col-md-6 col-sm-12" placeholder="name" required="required" data-error="Name is required."></input>
						<input type="email" name="inputEmail" className={`inputGmail col-lg-6 col-md-6 col-sm-12 ${validGamil?'':'invalid'}`} placeholder="example@gmail.com" required="required" data-error="Gmail is required." onChange={handleGmailChange}></input>
					</div>
					<div className="row">
						<input type="text" name="inputSub" className="inputSub col-lg-12 col-md-12 col-sm-12" placeholder="subject" required="required" data-error="Subject is required."></input>
					</div>
					<div className="row">
						<textarea rows="5" name="InputMessage" className="InputMessage col-lg-12 col-md-12 col-sm-12" placeholder="Message" required="required" data-error="Message is required."></textarea>
					</div>
					<div className="row">
						<div className="btnDiv col-lg-8 col-md-10 col-sm-10">
							<button style={{cursor: validGamil ? 'pointer' : 'not-allowed'}} disabled={!validGamil} type="submit">Send</button>
							{!validGamil ? <h6 style={{"color": "#CF4A4A", "marginTop": "10px"}}>enter a valid Gmail Id</h6>: ""}
						</div>
					</div>
				</form>
			</div>
        </div>
	)
}

export default Contact;
