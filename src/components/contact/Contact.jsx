import React from 'react';
import './contact.scss';

const Contact = () => {
    return (
        <div id='contactSection' className="contactSection container">
			<h3 className="left col-lg-3">Get In Touch</h3>
			<div className="right col-lg-9">
				<form action="">
					<div className="row">
						<input type="text" name="inputName" className="inputName col-lg-4 col-md-5 col-sm-10" placeholder="name" required="required" data-error="Name is required."></input>
						<input type="email" name="inputEmail" className="inputEmail col-lg-4 col-md-5 col-sm-10" placeholder="emal" required="required" data-error="Email is required."></input>
					</div>
					<div className="row">
						<input type="text" name="inputSub" className="inputSub col-lg-8 col-md-10 col-sm-10" placeholder="subject" required="required" data-error="Subject is required."></input>
					</div>
					<div className="row">
						<textarea rows="5" name="InputMessage" className="InputMessage col-lg-8 col-md-10 col-sm-10" placeholder="Message" required="required" data-error="Message is required."></textarea>
					</div>
					<div className="row">
						<div className=" btnDiv col-lg-8 col-md-10 col-sm-10">
							<button type="submit">Send</button>
						</div>
					</div>
				</form>
			</div>
        </div>
    )
}

export default Contact;
