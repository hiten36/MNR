import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
const about = () => {
  return (
    <>
      <CustomCursor/>
      <Header />
      <div className="about">
        <div className="about_in">
          <div className="abouty">
            <div className="abouty_flex">
              <div className="abouty_left">
                <h3 data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine">
                  <span>digitalMnA</span> is a full-service Merger and acquisition company helping companies sell and buy assets by creating value
                </h3>
              </div>
              <div className="abouty_right">
                <div className="about_svg_img">
                  {/* <img data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" src="./images/linking.svg" alt="" /> */}
                  <img data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine" src="./images/aboutSvg.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why_hu">
          <div className="inner_hu">
            <h3>Why <span>DigitalLMnA</span></h3>
            <p data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine">digitalMnA excels in Technology M&A with a unique edge. Our strong ties to Hyperscalers provide unparalleled insights and technology access. Backed by extensive M&A experience, we navigate complexities with precision. Our comprehensive industry understanding extends beyond tech, ensuring strategic alignment and Value creation for your business</p>
            <div  className="why_sab">
              <img 
              // data-aos="fade-up"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
                src="./images/whydo.gif" alt="" />
            </div>
          </div>
        </div>

        <div className="operate_things">
          <div className="operate_inner">
            <h3 data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine">We operate in industry sectors including</h3>
            <div className="operate_cards" data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine">
              <div className="operate_card">
                <div className="opearte_box">
                  <div className="mail1">
                    <img src="./images/mail1.svg" alt="" />
                  </div>
                  <div className="mail_head">
                    <p>Cloud Computing</p>
                  </div>
                </div>
                <div className="opearte_box">
                  <div className="mail1">
                    <img src="./images/mail2.svg" alt="" />
                  </div>
                  <div className="mail_head">
                    <p>AI, Data and Analytics</p>
                  </div>
                </div>
              </div>
              <div className="operate_card">
                <div className="opearte_box">
                  <div className="mail1">
                    <img src="./images/mail3.svg" alt="" />
                  </div>
                  <div className="mail_head">
                    <p>Business Application IT Services</p>
                  </div>
                </div>
                <div className="opearte_box">
                  <div className="mail1">
                    <img src="./images/mail4.svg" alt="" />
                  </div>
                  <div className="mail_head">
                    <p>MSP, CSP, Tech enabled Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ask_mail">
          <div className="ask_inner">
            <div className="ask_flex">
              <div className="ask_right"

              >
                <h3 data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine">Work with us</h3>
                <div className="ask_para">
                  <p>If you are interested in deal making in the M&A space, tell us why you are interested and how you can make a difference</p>
                </div>
                <div className="mail_res">
                 <h4>Mail your resume</h4>
               <a href="mailto:Careers@digitalMnA.com"><div className='btsu'>
                  <img src="./images/em3.svg" alt="" />
                  <p>Careers@digitalMnA.com</p>
                </div></a>
                </div>
              </div>
              <div className="ask_left">
                <div data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" className="ask_img">
                  <img src="./images/hj.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="meet_team">
          <div className="our_team">
            <h2 data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine">Meet Our <span>team</span></h2>
            <div className="meet_flex">
              {/* <div className="meet_box">
                <div data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" className="meet_svg">
                  <img src="./images/mes1.svg" alt="" />
                </div>
                <div className="linkedin">
                  <div className="name">
                    <h3>venkat</h3>
                    <h3>narayanan</h3>
                  </div>
                  <div className="icon">
                    <img src="./images/linkedin.svg" alt="" />
                  </div>
                </div>
                <div className="director">
                  <span>Managing Partner</span>
                </div>
              </div> */}
              <div className="meet_box">
                <div data-aos="fade-top"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" className="meet_svg">
                  <img src="./images/mes2.svg" alt="" />
                </div>
                <div className="linkedin">
                  <div className="name">
                    <h3>Shashi</h3>
                    <h3>Koteshwara</h3>
                  </div>
                 <a href="https://www.linkedin.com/in/shashi-koteshwara-0a68182/" target='_blank'><div className="icon">
                    <img src="./images/linkedin.svg" alt="" />
                  </div></a> 
                </div>
                <div className="director">
                  <h4>Managing Partner</h4>
                  <p>Shashi built Microsoft Business Unit for Tech Mahindra where he acquired companies. Over the last 5 years, he has successfully advised sell side deals.</p>
                </div>
              </div>
              <div className="meet_box">
                <div data-aos="fade-top"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" className="meet_svg">
                  <img src="./images/mes3.svg" alt="" />
                </div>
                <div className="linkedin">
                  <div className="name">
                    <h3>Srinivasa</h3>
                    <h3>Karanth</h3>
                  </div>
                 <a href="https://www.linkedin.com/in/srinivasa-karanth-b531458/" target='_blank'><div className="icon">
                    <img src="./images/linkedin.svg" alt="" />
                  </div></a> 
                </div>
                <div className="director">
                  <h4>Managing Partner</h4>
                  <p>Karanth ran multi million dollar digital transformation engagements at Infosys for US customer, He is expert in strategic value creation through digital transformation</p>
                </div>
              </div>
              <div className="meet_box">
                <div data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" className="meet_svg">
                  <img src="./images/mes4.svg" alt="" />
                </div>
                <div className="linkedin">
                  <div className="name">
                    <h3>Ravikumar</h3>
                    <h3>Rajagopalan</h3>
                  </div>
                <a target='_blank' href="https://www.linkedin.com/in/ravikumar-rajagopalan-a2508a17/"><div className="icon">
                    <img src="./images/linkedin.svg" alt="" />
                  </div></a>
                </div>
                <div className="director">
                  <h4>Managing Director</h4>
                  <p>Ravi is the finance guru with extensive experience in M&A deal structuring, Fund raising and financial restructuring</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}

export default about