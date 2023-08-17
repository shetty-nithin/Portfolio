import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';

const Contact = () => {
	const [validGmail, setValidGmail] = useState(true);
	const [gmailSent, setGmailSent] = useState(false);

	const handleGmailChange = (event) => {
		const inputValue = event.target.value;
		const pattern = /^[A-Za-z0-9._%+-]+@gmail\.com$/
		setValidGmail(pattern.test(inputValue));
	}

	const sendEmail = (event) => {
		event.preventDefault();
		if(!validGmail) return;
		const templateParams = {
			from_name: document.getElementsByClassName('inputName')[0].value,
			from_email: document.getElementsByClassName('inputGmail')[0].value,
			subject: document.getElementsByClassName('inputSub')[0].value,
			message: document.getElementsByClassName('inputMessage')[0].value,
		}
		emailjs.send(
			process.env.REACT_APP_SERVICE_ID,
			process.env.REACT_APP_TEMPLATE_ID,
			templateParams,
			process.env.REACT_APP_PUBLIC_API_KEY
		).then((response) => {
			setGmailSent(true);
			event.target.reset();
		}).catch((error) => {
			console.log("Error sending email: ", error);
			alert("Error sending email. Please try again.")
		})
	}

    return (
        <div id='contactSection' className="contactSection container">
			<div className="leftDiv col-lg-5">
				<h3>Get In Touch</h3>
				<div className="leftText">
					<h5 className="wow fadeInUp">Let's talk!</h5>
					<p className="wow fadeInUp">Don't like forms? Send me an <a href="mailto:shettynithin007@gmail.com">email</a>.</p>
				</div>
			</div>
			<div className="rightDiv col-lg-6">
				<form onSubmit={sendEmail}>
					<div className="row">
						<input type="text" name="inputName" className="inputName col-lg-6 col-md-6 col-sm-12" placeholder="name" required="required" data-error="Name is required."></input>
						<input type="email" name="inputEmail" className={`inputGmail col-lg-6 col-md-6 col-sm-12 ${validGmail?'':'invalid'}`} placeholder="example@gmail.com" required="required" data-error="Gmail is required." onChange={handleGmailChange}></input>
					</div>
					<div className="row">
						<input type="text" name="inputSub" className="inputSub col-lg-12 col-md-12 col-sm-12" placeholder="subject" required="required" data-error="Subject is required."></input>
					</div>
					<div className="row">
						<textarea rows="5" name="InputMessage" className="inputMessage col-lg-12 col-md-12 col-sm-12" placeholder="Message" required="required" data-error="Message is required."></textarea>
					</div>
					<div className="row">
						<div className="btnDiv col-lg-8 col-md-10 col-sm-10">
							<button style={{cursor: validGmail ? 'pointer' : 'not-allowed'}} disabled={!validGmail} type="submit">Send</button>
							{!validGmail && <p style={{"color": "#CF4A4A", "marginTop": "10px"}}>enter a valid Gmail Id</p>}
							{gmailSent && <p style={{"color": "green", marginTop: "10px"}}>Email sent successfully!</p>}
						</div>
					</div>
				</form>
			</div>
        </div>
	)
}

export default Contact;
