import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
const Contact = () => {
  const [val, setVal] = useState({
    firstName: "",
    lastName: "",
    method: "",
    here: "",
    message: "",
  });

  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(val),
    });

    const data = await res.json();
    // console.log(data);
    alert(data.message);

    setVal({
      firstName: "",
      lastName: "",
      method: "",
      here: "",
      message: "",
    });
  };
  return (
    <>
      <CustomCursor />
      <Header />
      <div data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine" className="contact">
        <div className="schedule">
          <div className="schedule_inner">
            <div className="schedule1">
              <h3>Connect With Us</h3>
              <div className="talk">
                <div className="talk_flex">
                  <div className="talk_box">
                    <div className="sas_img">
                      <img src="./images/sas.svg" alt="" />
                    </div>
                    <h4>Shashi</h4>
                    <div className="talk_sis">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="12.5" stroke="#3464FD" />
                        <path d="M18.4587 19.4866C16.9946 19.4866 15.5476 19.1678 14.1177 18.5302C12.6878 17.8926 11.3833 16.9875 10.2043 15.8149C9.02528 14.6359 8.11696 13.3298 7.47936 11.8967C6.84175 10.4636 6.52295 9.01497 6.52295 7.55086C6.52295 7.25535 6.62038 7.00855 6.81523 6.81048C7.01008 6.61241 7.25526 6.51337 7.55077 6.51337H10.3122C10.6201 6.51337 10.8754 6.59493 11.0782 6.75805C11.281 6.92118 11.4131 7.14454 11.4746 7.42815L11.9097 9.61984C11.9582 9.89899 11.9542 10.1367 11.8974 10.3331C11.8406 10.5294 11.7279 10.7022 11.5594 10.8514L9.84214 12.4504C10.0444 12.8014 10.283 13.1479 10.558 13.4897C10.8329 13.8316 11.1456 14.1721 11.4961 14.5112C11.8174 14.8325 12.1397 15.1217 12.463 15.3787C12.7862 15.6358 13.1194 15.864 13.4625 16.0633L15.1381 14.4167C15.3116 14.2496 15.5133 14.134 15.7431 14.0698C15.9729 14.0056 16.216 13.9978 16.4723 14.0464L18.5718 14.4963C18.8668 14.5806 19.093 14.7164 19.2504 14.9039C19.4078 15.0913 19.4865 15.3268 19.4865 15.6104V18.4491C19.4865 18.7446 19.3875 18.9914 19.1894 19.1895C18.9914 19.3876 18.7478 19.4866 18.4587 19.4866Z" fill="#3464FD" />
                      </svg>
                      <p>+1-425-274-6360</p>
                    </div>
                    <a href="mailto:shashi@DigitalMnA.com"><div className="talk_sis">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="12.5" stroke="#3464FD" />
                        <path d="M7.7001 18.5C7.32885 18.5 7.01104 18.3678 6.74666 18.1034C6.48229 17.8391 6.3501 17.5212 6.3501 17.15V9.05C6.3501 8.67875 6.48229 8.36093 6.74666 8.09656C7.01104 7.83218 7.32885 7.7 7.7001 7.7H18.5001C18.8713 7.7 19.1892 7.83218 19.4535 8.09656C19.7179 8.36093 19.8501 8.67875 19.8501 9.05V17.15C19.8501 17.5212 19.7179 17.8391 19.4535 18.1034C19.1892 18.3678 18.8713 18.5 18.5001 18.5H7.7001ZM13.1001 13.775L7.7001 10.4V17.15H18.5001V10.4L13.1001 13.775ZM13.1001 12.425L18.5001 9.05H7.7001L13.1001 12.425ZM7.7001 10.4V9.05V17.15V10.4Z" fill="#3464FD" />
                      </svg>
                      <p>shashi@DigitalMnA.com</p>
                    </div></a>
                    <a target='_blank' href="http://booking.microsoft.com"><div className="team_sch">
                      <div className="sch_svg">
                        <img src="./images/cala.svg" alt="" />
                      </div>
                      <div className="sch_para">
                        <h3>Schedule time</h3>
                      </div>
                    </div></a>
                  </div>
                  <div className="talk_box">
                    <div className="sas_img">
                      <img src="./images/sas1.svg" alt="" />
                    </div>
                    <h4>Srinivas Karanth</h4>
                    <div className="talk_sis">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="12.5" stroke="#3464FD" />
                        <path d="M18.4587 19.4866C16.9946 19.4866 15.5476 19.1678 14.1177 18.5302C12.6878 17.8926 11.3833 16.9875 10.2043 15.8149C9.02528 14.6359 8.11696 13.3298 7.47936 11.8967C6.84175 10.4636 6.52295 9.01497 6.52295 7.55086C6.52295 7.25535 6.62038 7.00855 6.81523 6.81048C7.01008 6.61241 7.25526 6.51337 7.55077 6.51337H10.3122C10.6201 6.51337 10.8754 6.59493 11.0782 6.75805C11.281 6.92118 11.4131 7.14454 11.4746 7.42815L11.9097 9.61984C11.9582 9.89899 11.9542 10.1367 11.8974 10.3331C11.8406 10.5294 11.7279 10.7022 11.5594 10.8514L9.84214 12.4504C10.0444 12.8014 10.283 13.1479 10.558 13.4897C10.8329 13.8316 11.1456 14.1721 11.4961 14.5112C11.8174 14.8325 12.1397 15.1217 12.463 15.3787C12.7862 15.6358 13.1194 15.864 13.4625 16.0633L15.1381 14.4167C15.3116 14.2496 15.5133 14.134 15.7431 14.0698C15.9729 14.0056 16.216 13.9978 16.4723 14.0464L18.5718 14.4963C18.8668 14.5806 19.093 14.7164 19.2504 14.9039C19.4078 15.0913 19.4865 15.3268 19.4865 15.6104V18.4491C19.4865 18.7446 19.3875 18.9914 19.1894 19.1895C18.9914 19.3876 18.7478 19.4866 18.4587 19.4866Z" fill="#3464FD" />
                      </svg>
                      <p>+1-510-229-0433</p>
                    </div>
                    <a target='_blank' href="mailto:karanth@DigitalMnA.com"> <div className="talk_sis">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="12.5" stroke="#3464FD" />
                        <path d="M7.7001 18.5C7.32885 18.5 7.01104 18.3678 6.74666 18.1034C6.48229 17.8391 6.3501 17.5212 6.3501 17.15V9.05C6.3501 8.67875 6.48229 8.36093 6.74666 8.09656C7.01104 7.83218 7.32885 7.7 7.7001 7.7H18.5001C18.8713 7.7 19.1892 7.83218 19.4535 8.09656C19.7179 8.36093 19.8501 8.67875 19.8501 9.05V17.15C19.8501 17.5212 19.7179 17.8391 19.4535 18.1034C19.1892 18.3678 18.8713 18.5 18.5001 18.5H7.7001ZM13.1001 13.775L7.7001 10.4V17.15H18.5001V10.4L13.1001 13.775ZM13.1001 12.425L18.5001 9.05H7.7001L13.1001 12.425ZM7.7001 10.4V9.05V17.15V10.4Z" fill="#3464FD" />
                      </svg>

                      <p>Karanth@DigitalMnA.com</p>
                    </div></a>
                    <a target='_blank' href="http://booking.microsoft.com"><div className="team_sch">
                      <div className="sch_svg">
                        <img src="./images/cala.svg" alt="" />
                      </div>
                      <div className="sch_para">
                        <h3>Schedule time</h3>
                      </div>
                    </div></a>

                  </div>
                  <div className="talk_box">
                    <div className="sas_img">
                      <img src="./images/sas2.svg" alt="" />
                    </div>
                    <h4>Ravi</h4>
                    <div className="talk_sis">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="12.5" stroke="#3464FD" />
                        <path d="M18.4587 19.4866C16.9946 19.4866 15.5476 19.1678 14.1177 18.5302C12.6878 17.8926 11.3833 16.9875 10.2043 15.8149C9.02528 14.6359 8.11696 13.3298 7.47936 11.8967C6.84175 10.4636 6.52295 9.01497 6.52295 7.55086C6.52295 7.25535 6.62038 7.00855 6.81523 6.81048C7.01008 6.61241 7.25526 6.51337 7.55077 6.51337H10.3122C10.6201 6.51337 10.8754 6.59493 11.0782 6.75805C11.281 6.92118 11.4131 7.14454 11.4746 7.42815L11.9097 9.61984C11.9582 9.89899 11.9542 10.1367 11.8974 10.3331C11.8406 10.5294 11.7279 10.7022 11.5594 10.8514L9.84214 12.4504C10.0444 12.8014 10.283 13.1479 10.558 13.4897C10.8329 13.8316 11.1456 14.1721 11.4961 14.5112C11.8174 14.8325 12.1397 15.1217 12.463 15.3787C12.7862 15.6358 13.1194 15.864 13.4625 16.0633L15.1381 14.4167C15.3116 14.2496 15.5133 14.134 15.7431 14.0698C15.9729 14.0056 16.216 13.9978 16.4723 14.0464L18.5718 14.4963C18.8668 14.5806 19.093 14.7164 19.2504 14.9039C19.4078 15.0913 19.4865 15.3268 19.4865 15.6104V18.4491C19.4865 18.7446 19.3875 18.9914 19.1894 19.1895C18.9914 19.3876 18.7478 19.4866 18.4587 19.4866Z" fill="#3464FD" />
                      </svg>
                      <p>+91-9840-715-318</p>
                    </div>
                    <a href="mailto:ravi@DigitalMnA.com"><div className="talk_sis">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="12.5" stroke="#3464FD" />
                        <path d="M7.7001 18.5C7.32885 18.5 7.01104 18.3678 6.74666 18.1034C6.48229 17.8391 6.3501 17.5212 6.3501 17.15V9.05C6.3501 8.67875 6.48229 8.36093 6.74666 8.09656C7.01104 7.83218 7.32885 7.7 7.7001 7.7H18.5001C18.8713 7.7 19.1892 7.83218 19.4535 8.09656C19.7179 8.36093 19.8501 8.67875 19.8501 9.05V17.15C19.8501 17.5212 19.7179 17.8391 19.4535 18.1034C19.1892 18.3678 18.8713 18.5 18.5001 18.5H7.7001ZM13.1001 13.775L7.7001 10.4V17.15H18.5001V10.4L13.1001 13.775ZM13.1001 12.425L18.5001 9.05H7.7001L13.1001 12.425ZM7.7001 10.4V9.05V17.15V10.4Z" fill="#3464FD" />
                      </svg>
                      <p>Ravi@DigitalMnA.com</p>
                    </div></a>
                    <a href="http://booking.microsoft.com"><div className="team_sch">
                      <div className="sch_svg">
                        <img src="./images/cala.svg" alt="" />
                      </div>
                      <div className="sch_para">
                        <h3>Schedule time</h3>
                      </div>
                    </div></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule2">
              <h3>Share information with us</h3>
              <form onSubmit={handleSubmit}>
                <div className="flex_form_input">
                  <div className="left_filed">
                    <div className="filed_section">
                      <div className="inp1">
                        <label htmlFor="firstName">First name*</label>
                        <input id='firstName' name='firstName' value={val.firstName} onChange={handleChange} placeholder='Your name' type="text" required />
                      </div>
                      <div className="inp1">
                        <label htmlFor="lastName">Last name*</label>
                        <input id='lastName' name='lastName' value={val.lastName} onChange={handleChange} placeholder='Last name' type="text" required />
                      </div>
                    </div>
                    <div className="filed_section inp11">
                      <div className="inp1">
                        <label htmlFor="method">Preferred Method of contact*</label>
                        <select name="method" id="method" onChange={handleChange} value={val.method} required>
                          <option value="">Please select</option>
                          <option>Phone</option>
                          <option>Email</option>
                        </select>
                      </div>
                      <div className="inp1 ">
                        <label htmlFor="here">How did you here about us?</label>
                        <select name="here" id="here" onChange={handleChange} value={val.here} required >
                          <option value="">Please  select</option>
                          <option>Another website</option>
                          <option>Article or blog post</option>
                          <option>In-person event or tradeshow</option>
                          <option>Organic search/serach engine</option>
                          <option>Referral from a friend or colleague</option>
                          <option>School/Campus</option>
                          <option>Social media</option>
                          <option>TEKsystems</option>
                          <option>Webinar or virtual event</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="right_filed">
                    <div className="inp2">
                      <label htmlFor="message">How can we help you?</label>
                      <textarea onChange={handleChange} value={val.message} placeholder='Your message here' name="message" id="message" cols="30" rows="10" required >
                      </textarea>
                    </div>
                  </div>
                </div>
                <div className="checkt">
                  <input type="checkbox" className="checkbox-round" />
                  <span>I have read and agree to DigitalMNR Privacy Policy.*</span>
                </div>

                <button className='sbt'><span>Submit</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;
