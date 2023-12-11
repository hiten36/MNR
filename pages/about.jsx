import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
const About = () => {
  return (
    <>
      <CustomCursor />
      <Header />
      <div className="about">
        <div className="about_in">
          <div className="abouty">
            <div className="abouty_flex">
              <div className="abouty_left">
                <h3 data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine">
                  <span>DigitalMnA</span> is a full-service Merger and Acquisition Company Helping Companies Sell and Buy assets by creating value
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
            <h3>Why <span>DigitalMnA</span></h3>
            <p data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine">DigitalMnA excels in Technology M&A with a unique edge. Our strong ties to Hyperscalers provide unparalleled insights and technology access. Backed by extensive M&A experience, We navigate complexities with precision. Our comprehensive industry understanding extends beyond tech, ensuring strategic alignment and Value creation for your business</p>
            <div className="why_sab">
              <img
                // data-aos="fade-up"
                // data-aos-offset="300"
                // data-aos-easing="ease-in-sine"
                src="./images/wot1.gif" alt="" />
            </div>

            <div className="mobile_that_card">
              <div className="mobile_that_flex" >
                <div className="flex_that"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine">
                  <div className="that_svg">
                    <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1507 45.6573C19.1845 45.6573 17.5681 44.2533 17.4515 42.3106C17.4015 41.527 17.1016 41.1352 16.4184 40.7598C13.419 39.1109 10.4529 37.4131 7.48684 35.7316C7.12024 35.5194 6.87029 35.4704 6.45371 35.7153C4.72073 36.7601 2.33787 36.1561 1.30475 34.4582C0.254962 32.7278 0.838178 30.4749 2.67114 29.4464C3.15438 29.1689 3.30435 28.8914 3.30435 28.3689C3.28768 24.908 3.28768 21.4634 3.30435 18.0025C3.30435 17.5454 3.23769 17.2515 2.73779 16.9903C0.921494 16.0761 0.271626 13.8396 1.2381 12.0928C2.22123 10.297 4.52077 9.59501 6.30374 10.6235C6.90362 10.9663 7.27021 10.8847 7.78677 10.5745C10.7695 8.86038 13.7522 7.14624 16.7516 5.44842C17.1682 5.21987 17.3182 4.95867 17.3348 4.50156C17.4015 2.33031 18.9678 0.79575 21.0508 0.779425C23.167 0.763099 24.75 2.31399 24.8167 4.50156C24.8333 4.97499 25.0166 5.21987 25.4165 5.44842C28.5159 7.17889 31.6153 8.92568 34.698 10.6888C35.0979 10.9174 35.3812 10.95 35.8144 10.6888C37.6641 9.61134 39.9636 10.2154 40.9967 11.9948C42.0632 13.8232 41.38 16.0271 39.447 17.0883C39.2304 17.2025 39.0138 17.5617 39.0138 17.8066C38.9805 21.3655 38.9805 24.9407 39.0138 28.4996C39.0138 28.7934 39.2804 29.1852 39.547 29.3485C41.4633 30.4422 42.1465 32.6625 41.08 34.4746C40.0636 36.1887 37.6641 36.7927 35.8644 35.6989C35.4145 35.4214 35.1479 35.5194 34.7647 35.7316C31.7986 37.4294 28.8325 39.1109 25.8331 40.7598C25.1833 41.1189 24.9166 41.527 24.8667 42.2617C24.7167 44.2533 23.117 45.6573 21.1507 45.6573ZM18.7012 39.2089C20.3509 38.0334 22.0006 38.0661 23.6169 39.2089C26.9662 37.3151 30.2822 35.4541 33.5816 33.544C33.8148 33.4134 33.9815 33.0053 33.9981 32.7114C34.0315 31.2259 34.6813 30.1321 35.9977 29.3648C36.2477 29.2179 36.4976 28.8587 36.4976 28.5975C36.531 25.0386 36.531 21.4797 36.4976 17.9045C36.4976 17.627 36.2644 17.2678 36.0144 17.1209C34.698 16.321 34.0315 15.2109 34.0148 13.6926C34.0148 13.4151 33.7982 13.0233 33.5649 12.8927C30.4155 11.0806 27.2495 9.28483 24.0668 7.52172C23.8502 7.40744 23.4336 7.40744 23.217 7.53804C21.8339 8.30533 20.5009 8.30533 19.1178 7.52172C18.9179 7.40744 18.5346 7.37479 18.3346 7.48907C15.102 9.25218 11.9026 11.0316 8.71992 12.8437C8.5033 12.9743 8.32 13.3335 8.30334 13.5947C8.27001 15.1292 7.65347 16.3047 6.25375 17.0719C6.03713 17.2025 5.82051 17.5454 5.82051 17.7902C5.78718 21.4144 5.78718 25.0223 5.82051 28.6465C5.82051 28.875 6.02046 29.2015 6.22042 29.3158C7.65347 30.0994 8.32 31.2585 8.30334 32.8584C8.30334 33.0706 8.45331 33.3971 8.6366 33.4951C11.9693 35.4051 15.3352 37.2988 18.7012 39.2089Z" fill="#3464FD" />
                      <path d="M19.901 32.4015C17.5182 31.0628 15.2853 29.8221 13.0857 28.5324C12.7858 28.3692 12.4692 27.9447 12.4692 27.6509C12.4192 25.0552 12.4359 22.4595 12.4359 19.7169C13.3024 20.2066 14.0689 20.6147 14.8187 21.0555C16.3351 21.9044 17.8514 22.7533 19.3345 23.6349C19.5844 23.7818 19.8677 24.1083 19.8677 24.3532C19.9177 26.9652 19.901 29.5936 19.901 32.4015Z" fill="#3464FD" />
                      <path d="M22.4005 32.4012C22.4005 30.6708 22.4005 29.1035 22.4005 27.5363C22.4005 26.5242 22.3838 25.5283 22.4172 24.5162C22.4338 24.255 22.5338 23.8632 22.7171 23.7489C25.05 22.3939 27.3995 21.0879 29.8323 19.7003C29.8657 20.0431 29.899 20.2716 29.899 20.5002C29.899 22.6714 29.8823 24.8427 29.9156 27.0139C29.9323 27.8139 29.6324 28.3363 28.9158 28.7281C26.7829 29.9198 24.6834 31.1279 22.4005 32.4012Z" fill="#3464FD" />
                      <path d="M13.6523 17.5781C15.3853 16.5823 17.0349 15.6517 18.6679 14.7212C21.484 13.1376 20.7842 13.1213 23.6169 14.7212C25.2499 15.6354 26.8663 16.5659 28.5826 17.5454C28.366 17.7087 28.1993 17.823 28.0327 17.9209C25.9331 19.1127 23.8169 20.3044 21.7007 21.4798C21.4507 21.6104 21.0341 21.7084 20.8175 21.5941C18.4513 20.2881 16.1185 18.9494 13.6523 17.5781Z" fill="#3464FD" />
                    </svg>
                  </div>

                  <div className="pata_that">
                    <p>Experience working in Hyperscale ecosystem</p>
                  </div>
                </div>
                <div className="flex_that" data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine">
                  <div className="that_svg">
                    <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1507 45.6573C19.1845 45.6573 17.5681 44.2533 17.4515 42.3106C17.4015 41.527 17.1016 41.1352 16.4184 40.7598C13.419 39.1109 10.4529 37.4131 7.48684 35.7316C7.12024 35.5194 6.87029 35.4704 6.45371 35.7153C4.72073 36.7601 2.33787 36.1561 1.30475 34.4582C0.254962 32.7278 0.838178 30.4749 2.67114 29.4464C3.15438 29.1689 3.30435 28.8914 3.30435 28.3689C3.28768 24.908 3.28768 21.4634 3.30435 18.0025C3.30435 17.5454 3.23769 17.2515 2.73779 16.9903C0.921494 16.0761 0.271626 13.8396 1.2381 12.0928C2.22123 10.297 4.52077 9.59501 6.30374 10.6235C6.90362 10.9663 7.27021 10.8847 7.78677 10.5745C10.7695 8.86038 13.7522 7.14624 16.7516 5.44842C17.1682 5.21987 17.3182 4.95867 17.3348 4.50156C17.4015 2.33031 18.9678 0.79575 21.0508 0.779425C23.167 0.763099 24.75 2.31399 24.8167 4.50156C24.8333 4.97499 25.0166 5.21987 25.4165 5.44842C28.5159 7.17889 31.6153 8.92568 34.698 10.6888C35.0979 10.9174 35.3812 10.95 35.8144 10.6888C37.6641 9.61134 39.9636 10.2154 40.9967 11.9948C42.0632 13.8232 41.38 16.0271 39.447 17.0883C39.2304 17.2025 39.0138 17.5617 39.0138 17.8066C38.9805 21.3655 38.9805 24.9407 39.0138 28.4996C39.0138 28.7934 39.2804 29.1852 39.547 29.3485C41.4633 30.4422 42.1465 32.6625 41.08 34.4746C40.0636 36.1887 37.6641 36.7927 35.8644 35.6989C35.4145 35.4214 35.1479 35.5194 34.7647 35.7316C31.7986 37.4294 28.8325 39.1109 25.8331 40.7598C25.1833 41.1189 24.9166 41.527 24.8667 42.2617C24.7167 44.2533 23.117 45.6573 21.1507 45.6573ZM18.7012 39.2089C20.3509 38.0334 22.0006 38.0661 23.6169 39.2089C26.9662 37.3151 30.2822 35.4541 33.5816 33.544C33.8148 33.4134 33.9815 33.0053 33.9981 32.7114C34.0315 31.2259 34.6813 30.1321 35.9977 29.3648C36.2477 29.2179 36.4976 28.8587 36.4976 28.5975C36.531 25.0386 36.531 21.4797 36.4976 17.9045C36.4976 17.627 36.2644 17.2678 36.0144 17.1209C34.698 16.321 34.0315 15.2109 34.0148 13.6926C34.0148 13.4151 33.7982 13.0233 33.5649 12.8927C30.4155 11.0806 27.2495 9.28483 24.0668 7.52172C23.8502 7.40744 23.4336 7.40744 23.217 7.53804C21.8339 8.30533 20.5009 8.30533 19.1178 7.52172C18.9179 7.40744 18.5346 7.37479 18.3346 7.48907C15.102 9.25218 11.9026 11.0316 8.71992 12.8437C8.5033 12.9743 8.32 13.3335 8.30334 13.5947C8.27001 15.1292 7.65347 16.3047 6.25375 17.0719C6.03713 17.2025 5.82051 17.5454 5.82051 17.7902C5.78718 21.4144 5.78718 25.0223 5.82051 28.6465C5.82051 28.875 6.02046 29.2015 6.22042 29.3158C7.65347 30.0994 8.32 31.2585 8.30334 32.8584C8.30334 33.0706 8.45331 33.3971 8.6366 33.4951C11.9693 35.4051 15.3352 37.2988 18.7012 39.2089Z" fill="#3464FD" />
                      <path d="M19.901 32.4015C17.5182 31.0628 15.2853 29.8221 13.0857 28.5324C12.7858 28.3692 12.4692 27.9447 12.4692 27.6509C12.4192 25.0552 12.4359 22.4595 12.4359 19.7169C13.3024 20.2066 14.0689 20.6147 14.8187 21.0555C16.3351 21.9044 17.8514 22.7533 19.3345 23.6349C19.5844 23.7818 19.8677 24.1083 19.8677 24.3532C19.9177 26.9652 19.901 29.5936 19.901 32.4015Z" fill="#3464FD" />
                      <path d="M22.4005 32.4012C22.4005 30.6708 22.4005 29.1035 22.4005 27.5363C22.4005 26.5242 22.3838 25.5283 22.4172 24.5162C22.4338 24.255 22.5338 23.8632 22.7171 23.7489C25.05 22.3939 27.3995 21.0879 29.8323 19.7003C29.8657 20.0431 29.899 20.2716 29.899 20.5002C29.899 22.6714 29.8823 24.8427 29.9156 27.0139C29.9323 27.8139 29.6324 28.3363 28.9158 28.7281C26.7829 29.9198 24.6834 31.1279 22.4005 32.4012Z" fill="#3464FD" />
                      <path d="M13.6523 17.5781C15.3853 16.5823 17.0349 15.6517 18.6679 14.7212C21.484 13.1376 20.7842 13.1213 23.6169 14.7212C25.2499 15.6354 26.8663 16.5659 28.5826 17.5454C28.366 17.7087 28.1993 17.823 28.0327 17.9209C25.9331 19.1127 23.8169 20.3044 21.7007 21.4798C21.4507 21.6104 21.0341 21.7084 20.8175 21.5941C18.4513 20.2881 16.1185 18.9494 13.6523 17.5781Z" fill="#3464FD" />
                    </svg>
                  </div>

                  <div className="pata_that">
                    <p>Synergy Creation</p>
                  </div>
                </div>
                <div className="flex_that"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="that_svg">
                    <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1507 45.6573C19.1845 45.6573 17.5681 44.2533 17.4515 42.3106C17.4015 41.527 17.1016 41.1352 16.4184 40.7598C13.419 39.1109 10.4529 37.4131 7.48684 35.7316C7.12024 35.5194 6.87029 35.4704 6.45371 35.7153C4.72073 36.7601 2.33787 36.1561 1.30475 34.4582C0.254962 32.7278 0.838178 30.4749 2.67114 29.4464C3.15438 29.1689 3.30435 28.8914 3.30435 28.3689C3.28768 24.908 3.28768 21.4634 3.30435 18.0025C3.30435 17.5454 3.23769 17.2515 2.73779 16.9903C0.921494 16.0761 0.271626 13.8396 1.2381 12.0928C2.22123 10.297 4.52077 9.59501 6.30374 10.6235C6.90362 10.9663 7.27021 10.8847 7.78677 10.5745C10.7695 8.86038 13.7522 7.14624 16.7516 5.44842C17.1682 5.21987 17.3182 4.95867 17.3348 4.50156C17.4015 2.33031 18.9678 0.79575 21.0508 0.779425C23.167 0.763099 24.75 2.31399 24.8167 4.50156C24.8333 4.97499 25.0166 5.21987 25.4165 5.44842C28.5159 7.17889 31.6153 8.92568 34.698 10.6888C35.0979 10.9174 35.3812 10.95 35.8144 10.6888C37.6641 9.61134 39.9636 10.2154 40.9967 11.9948C42.0632 13.8232 41.38 16.0271 39.447 17.0883C39.2304 17.2025 39.0138 17.5617 39.0138 17.8066C38.9805 21.3655 38.9805 24.9407 39.0138 28.4996C39.0138 28.7934 39.2804 29.1852 39.547 29.3485C41.4633 30.4422 42.1465 32.6625 41.08 34.4746C40.0636 36.1887 37.6641 36.7927 35.8644 35.6989C35.4145 35.4214 35.1479 35.5194 34.7647 35.7316C31.7986 37.4294 28.8325 39.1109 25.8331 40.7598C25.1833 41.1189 24.9166 41.527 24.8667 42.2617C24.7167 44.2533 23.117 45.6573 21.1507 45.6573ZM18.7012 39.2089C20.3509 38.0334 22.0006 38.0661 23.6169 39.2089C26.9662 37.3151 30.2822 35.4541 33.5816 33.544C33.8148 33.4134 33.9815 33.0053 33.9981 32.7114C34.0315 31.2259 34.6813 30.1321 35.9977 29.3648C36.2477 29.2179 36.4976 28.8587 36.4976 28.5975C36.531 25.0386 36.531 21.4797 36.4976 17.9045C36.4976 17.627 36.2644 17.2678 36.0144 17.1209C34.698 16.321 34.0315 15.2109 34.0148 13.6926C34.0148 13.4151 33.7982 13.0233 33.5649 12.8927C30.4155 11.0806 27.2495 9.28483 24.0668 7.52172C23.8502 7.40744 23.4336 7.40744 23.217 7.53804C21.8339 8.30533 20.5009 8.30533 19.1178 7.52172C18.9179 7.40744 18.5346 7.37479 18.3346 7.48907C15.102 9.25218 11.9026 11.0316 8.71992 12.8437C8.5033 12.9743 8.32 13.3335 8.30334 13.5947C8.27001 15.1292 7.65347 16.3047 6.25375 17.0719C6.03713 17.2025 5.82051 17.5454 5.82051 17.7902C5.78718 21.4144 5.78718 25.0223 5.82051 28.6465C5.82051 28.875 6.02046 29.2015 6.22042 29.3158C7.65347 30.0994 8.32 31.2585 8.30334 32.8584C8.30334 33.0706 8.45331 33.3971 8.6366 33.4951C11.9693 35.4051 15.3352 37.2988 18.7012 39.2089Z" fill="#3464FD" />
                      <path d="M19.901 32.4015C17.5182 31.0628 15.2853 29.8221 13.0857 28.5324C12.7858 28.3692 12.4692 27.9447 12.4692 27.6509C12.4192 25.0552 12.4359 22.4595 12.4359 19.7169C13.3024 20.2066 14.0689 20.6147 14.8187 21.0555C16.3351 21.9044 17.8514 22.7533 19.3345 23.6349C19.5844 23.7818 19.8677 24.1083 19.8677 24.3532C19.9177 26.9652 19.901 29.5936 19.901 32.4015Z" fill="#3464FD" />
                      <path d="M22.4005 32.4012C22.4005 30.6708 22.4005 29.1035 22.4005 27.5363C22.4005 26.5242 22.3838 25.5283 22.4172 24.5162C22.4338 24.255 22.5338 23.8632 22.7171 23.7489C25.05 22.3939 27.3995 21.0879 29.8323 19.7003C29.8657 20.0431 29.899 20.2716 29.899 20.5002C29.899 22.6714 29.8823 24.8427 29.9156 27.0139C29.9323 27.8139 29.6324 28.3363 28.9158 28.7281C26.7829 29.9198 24.6834 31.1279 22.4005 32.4012Z" fill="#3464FD" />
                      <path d="M13.6523 17.5781C15.3853 16.5823 17.0349 15.6517 18.6679 14.7212C21.484 13.1376 20.7842 13.1213 23.6169 14.7212C25.2499 15.6354 26.8663 16.5659 28.5826 17.5454C28.366 17.7087 28.1993 17.823 28.0327 17.9209C25.9331 19.1127 23.8169 20.3044 21.7007 21.4798C21.4507 21.6104 21.0341 21.7084 20.8175 21.5941C18.4513 20.2881 16.1185 18.9494 13.6523 17.5781Z" fill="#3464FD" />
                    </svg>
                  </div>

                  <div className="pata_that">
                    <p>Build Competitive Advantage - Positioning</p>
                  </div>
                </div>
                <div data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" className="flex_that">
                  <div className="that_svg">
                    <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1507 45.6573C19.1845 45.6573 17.5681 44.2533 17.4515 42.3106C17.4015 41.527 17.1016 41.1352 16.4184 40.7598C13.419 39.1109 10.4529 37.4131 7.48684 35.7316C7.12024 35.5194 6.87029 35.4704 6.45371 35.7153C4.72073 36.7601 2.33787 36.1561 1.30475 34.4582C0.254962 32.7278 0.838178 30.4749 2.67114 29.4464C3.15438 29.1689 3.30435 28.8914 3.30435 28.3689C3.28768 24.908 3.28768 21.4634 3.30435 18.0025C3.30435 17.5454 3.23769 17.2515 2.73779 16.9903C0.921494 16.0761 0.271626 13.8396 1.2381 12.0928C2.22123 10.297 4.52077 9.59501 6.30374 10.6235C6.90362 10.9663 7.27021 10.8847 7.78677 10.5745C10.7695 8.86038 13.7522 7.14624 16.7516 5.44842C17.1682 5.21987 17.3182 4.95867 17.3348 4.50156C17.4015 2.33031 18.9678 0.79575 21.0508 0.779425C23.167 0.763099 24.75 2.31399 24.8167 4.50156C24.8333 4.97499 25.0166 5.21987 25.4165 5.44842C28.5159 7.17889 31.6153 8.92568 34.698 10.6888C35.0979 10.9174 35.3812 10.95 35.8144 10.6888C37.6641 9.61134 39.9636 10.2154 40.9967 11.9948C42.0632 13.8232 41.38 16.0271 39.447 17.0883C39.2304 17.2025 39.0138 17.5617 39.0138 17.8066C38.9805 21.3655 38.9805 24.9407 39.0138 28.4996C39.0138 28.7934 39.2804 29.1852 39.547 29.3485C41.4633 30.4422 42.1465 32.6625 41.08 34.4746C40.0636 36.1887 37.6641 36.7927 35.8644 35.6989C35.4145 35.4214 35.1479 35.5194 34.7647 35.7316C31.7986 37.4294 28.8325 39.1109 25.8331 40.7598C25.1833 41.1189 24.9166 41.527 24.8667 42.2617C24.7167 44.2533 23.117 45.6573 21.1507 45.6573ZM18.7012 39.2089C20.3509 38.0334 22.0006 38.0661 23.6169 39.2089C26.9662 37.3151 30.2822 35.4541 33.5816 33.544C33.8148 33.4134 33.9815 33.0053 33.9981 32.7114C34.0315 31.2259 34.6813 30.1321 35.9977 29.3648C36.2477 29.2179 36.4976 28.8587 36.4976 28.5975C36.531 25.0386 36.531 21.4797 36.4976 17.9045C36.4976 17.627 36.2644 17.2678 36.0144 17.1209C34.698 16.321 34.0315 15.2109 34.0148 13.6926C34.0148 13.4151 33.7982 13.0233 33.5649 12.8927C30.4155 11.0806 27.2495 9.28483 24.0668 7.52172C23.8502 7.40744 23.4336 7.40744 23.217 7.53804C21.8339 8.30533 20.5009 8.30533 19.1178 7.52172C18.9179 7.40744 18.5346 7.37479 18.3346 7.48907C15.102 9.25218 11.9026 11.0316 8.71992 12.8437C8.5033 12.9743 8.32 13.3335 8.30334 13.5947C8.27001 15.1292 7.65347 16.3047 6.25375 17.0719C6.03713 17.2025 5.82051 17.5454 5.82051 17.7902C5.78718 21.4144 5.78718 25.0223 5.82051 28.6465C5.82051 28.875 6.02046 29.2015 6.22042 29.3158C7.65347 30.0994 8.32 31.2585 8.30334 32.8584C8.30334 33.0706 8.45331 33.3971 8.6366 33.4951C11.9693 35.4051 15.3352 37.2988 18.7012 39.2089Z" fill="#3464FD" />
                      <path d="M19.901 32.4015C17.5182 31.0628 15.2853 29.8221 13.0857 28.5324C12.7858 28.3692 12.4692 27.9447 12.4692 27.6509C12.4192 25.0552 12.4359 22.4595 12.4359 19.7169C13.3024 20.2066 14.0689 20.6147 14.8187 21.0555C16.3351 21.9044 17.8514 22.7533 19.3345 23.6349C19.5844 23.7818 19.8677 24.1083 19.8677 24.3532C19.9177 26.9652 19.901 29.5936 19.901 32.4015Z" fill="#3464FD" />
                      <path d="M22.4005 32.4012C22.4005 30.6708 22.4005 29.1035 22.4005 27.5363C22.4005 26.5242 22.3838 25.5283 22.4172 24.5162C22.4338 24.255 22.5338 23.8632 22.7171 23.7489C25.05 22.3939 27.3995 21.0879 29.8323 19.7003C29.8657 20.0431 29.899 20.2716 29.899 20.5002C29.899 22.6714 29.8823 24.8427 29.9156 27.0139C29.9323 27.8139 29.6324 28.3363 28.9158 28.7281C26.7829 29.9198 24.6834 31.1279 22.4005 32.4012Z" fill="#3464FD" />
                      <path d="M13.6523 17.5781C15.3853 16.5823 17.0349 15.6517 18.6679 14.7212C21.484 13.1376 20.7842 13.1213 23.6169 14.7212C25.2499 15.6354 26.8663 16.5659 28.5826 17.5454C28.366 17.7087 28.1993 17.823 28.0327 17.9209C25.9331 19.1127 23.8169 20.3044 21.7007 21.4798C21.4507 21.6104 21.0341 21.7084 20.8175 21.5941C18.4513 20.2881 16.1185 18.9494 13.6523 17.5781Z" fill="#3464FD" />
                    </svg>
                  </div>

                  <div className="pata_that">
                    <p>Scalability</p>
                  </div>
                </div>
                <div data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" className="flex_that">
                  <div className="that_svg">
                    <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1507 45.6573C19.1845 45.6573 17.5681 44.2533 17.4515 42.3106C17.4015 41.527 17.1016 41.1352 16.4184 40.7598C13.419 39.1109 10.4529 37.4131 7.48684 35.7316C7.12024 35.5194 6.87029 35.4704 6.45371 35.7153C4.72073 36.7601 2.33787 36.1561 1.30475 34.4582C0.254962 32.7278 0.838178 30.4749 2.67114 29.4464C3.15438 29.1689 3.30435 28.8914 3.30435 28.3689C3.28768 24.908 3.28768 21.4634 3.30435 18.0025C3.30435 17.5454 3.23769 17.2515 2.73779 16.9903C0.921494 16.0761 0.271626 13.8396 1.2381 12.0928C2.22123 10.297 4.52077 9.59501 6.30374 10.6235C6.90362 10.9663 7.27021 10.8847 7.78677 10.5745C10.7695 8.86038 13.7522 7.14624 16.7516 5.44842C17.1682 5.21987 17.3182 4.95867 17.3348 4.50156C17.4015 2.33031 18.9678 0.79575 21.0508 0.779425C23.167 0.763099 24.75 2.31399 24.8167 4.50156C24.8333 4.97499 25.0166 5.21987 25.4165 5.44842C28.5159 7.17889 31.6153 8.92568 34.698 10.6888C35.0979 10.9174 35.3812 10.95 35.8144 10.6888C37.6641 9.61134 39.9636 10.2154 40.9967 11.9948C42.0632 13.8232 41.38 16.0271 39.447 17.0883C39.2304 17.2025 39.0138 17.5617 39.0138 17.8066C38.9805 21.3655 38.9805 24.9407 39.0138 28.4996C39.0138 28.7934 39.2804 29.1852 39.547 29.3485C41.4633 30.4422 42.1465 32.6625 41.08 34.4746C40.0636 36.1887 37.6641 36.7927 35.8644 35.6989C35.4145 35.4214 35.1479 35.5194 34.7647 35.7316C31.7986 37.4294 28.8325 39.1109 25.8331 40.7598C25.1833 41.1189 24.9166 41.527 24.8667 42.2617C24.7167 44.2533 23.117 45.6573 21.1507 45.6573ZM18.7012 39.2089C20.3509 38.0334 22.0006 38.0661 23.6169 39.2089C26.9662 37.3151 30.2822 35.4541 33.5816 33.544C33.8148 33.4134 33.9815 33.0053 33.9981 32.7114C34.0315 31.2259 34.6813 30.1321 35.9977 29.3648C36.2477 29.2179 36.4976 28.8587 36.4976 28.5975C36.531 25.0386 36.531 21.4797 36.4976 17.9045C36.4976 17.627 36.2644 17.2678 36.0144 17.1209C34.698 16.321 34.0315 15.2109 34.0148 13.6926C34.0148 13.4151 33.7982 13.0233 33.5649 12.8927C30.4155 11.0806 27.2495 9.28483 24.0668 7.52172C23.8502 7.40744 23.4336 7.40744 23.217 7.53804C21.8339 8.30533 20.5009 8.30533 19.1178 7.52172C18.9179 7.40744 18.5346 7.37479 18.3346 7.48907C15.102 9.25218 11.9026 11.0316 8.71992 12.8437C8.5033 12.9743 8.32 13.3335 8.30334 13.5947C8.27001 15.1292 7.65347 16.3047 6.25375 17.0719C6.03713 17.2025 5.82051 17.5454 5.82051 17.7902C5.78718 21.4144 5.78718 25.0223 5.82051 28.6465C5.82051 28.875 6.02046 29.2015 6.22042 29.3158C7.65347 30.0994 8.32 31.2585 8.30334 32.8584C8.30334 33.0706 8.45331 33.3971 8.6366 33.4951C11.9693 35.4051 15.3352 37.2988 18.7012 39.2089Z" fill="#3464FD" />
                      <path d="M19.901 32.4015C17.5182 31.0628 15.2853 29.8221 13.0857 28.5324C12.7858 28.3692 12.4692 27.9447 12.4692 27.6509C12.4192 25.0552 12.4359 22.4595 12.4359 19.7169C13.3024 20.2066 14.0689 20.6147 14.8187 21.0555C16.3351 21.9044 17.8514 22.7533 19.3345 23.6349C19.5844 23.7818 19.8677 24.1083 19.8677 24.3532C19.9177 26.9652 19.901 29.5936 19.901 32.4015Z" fill="#3464FD" />
                      <path d="M22.4005 32.4012C22.4005 30.6708 22.4005 29.1035 22.4005 27.5363C22.4005 26.5242 22.3838 25.5283 22.4172 24.5162C22.4338 24.255 22.5338 23.8632 22.7171 23.7489C25.05 22.3939 27.3995 21.0879 29.8323 19.7003C29.8657 20.0431 29.899 20.2716 29.899 20.5002C29.899 22.6714 29.8823 24.8427 29.9156 27.0139C29.9323 27.8139 29.6324 28.3363 28.9158 28.7281C26.7829 29.9198 24.6834 31.1279 22.4005 32.4012Z" fill="#3464FD" />
                      <path d="M13.6523 17.5781C15.3853 16.5823 17.0349 15.6517 18.6679 14.7212C21.484 13.1376 20.7842 13.1213 23.6169 14.7212C25.2499 15.6354 26.8663 16.5659 28.5826 17.5454C28.366 17.7087 28.1993 17.823 28.0327 17.9209C25.9331 19.1127 23.8169 20.3044 21.7007 21.4798C21.4507 21.6104 21.0341 21.7084 20.8175 21.5941C18.4513 20.2881 16.1185 18.9494 13.6523 17.5781Z" fill="#3464FD" />
                    </svg>
                  </div>

                  <div className="pata_that">
                    <p>Strategic Partnerships</p>
                  </div>
                </div>
                <div data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" className="flex_that">
                  <div className="that_svg">
                    <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1507 45.6573C19.1845 45.6573 17.5681 44.2533 17.4515 42.3106C17.4015 41.527 17.1016 41.1352 16.4184 40.7598C13.419 39.1109 10.4529 37.4131 7.48684 35.7316C7.12024 35.5194 6.87029 35.4704 6.45371 35.7153C4.72073 36.7601 2.33787 36.1561 1.30475 34.4582C0.254962 32.7278 0.838178 30.4749 2.67114 29.4464C3.15438 29.1689 3.30435 28.8914 3.30435 28.3689C3.28768 24.908 3.28768 21.4634 3.30435 18.0025C3.30435 17.5454 3.23769 17.2515 2.73779 16.9903C0.921494 16.0761 0.271626 13.8396 1.2381 12.0928C2.22123 10.297 4.52077 9.59501 6.30374 10.6235C6.90362 10.9663 7.27021 10.8847 7.78677 10.5745C10.7695 8.86038 13.7522 7.14624 16.7516 5.44842C17.1682 5.21987 17.3182 4.95867 17.3348 4.50156C17.4015 2.33031 18.9678 0.79575 21.0508 0.779425C23.167 0.763099 24.75 2.31399 24.8167 4.50156C24.8333 4.97499 25.0166 5.21987 25.4165 5.44842C28.5159 7.17889 31.6153 8.92568 34.698 10.6888C35.0979 10.9174 35.3812 10.95 35.8144 10.6888C37.6641 9.61134 39.9636 10.2154 40.9967 11.9948C42.0632 13.8232 41.38 16.0271 39.447 17.0883C39.2304 17.2025 39.0138 17.5617 39.0138 17.8066C38.9805 21.3655 38.9805 24.9407 39.0138 28.4996C39.0138 28.7934 39.2804 29.1852 39.547 29.3485C41.4633 30.4422 42.1465 32.6625 41.08 34.4746C40.0636 36.1887 37.6641 36.7927 35.8644 35.6989C35.4145 35.4214 35.1479 35.5194 34.7647 35.7316C31.7986 37.4294 28.8325 39.1109 25.8331 40.7598C25.1833 41.1189 24.9166 41.527 24.8667 42.2617C24.7167 44.2533 23.117 45.6573 21.1507 45.6573ZM18.7012 39.2089C20.3509 38.0334 22.0006 38.0661 23.6169 39.2089C26.9662 37.3151 30.2822 35.4541 33.5816 33.544C33.8148 33.4134 33.9815 33.0053 33.9981 32.7114C34.0315 31.2259 34.6813 30.1321 35.9977 29.3648C36.2477 29.2179 36.4976 28.8587 36.4976 28.5975C36.531 25.0386 36.531 21.4797 36.4976 17.9045C36.4976 17.627 36.2644 17.2678 36.0144 17.1209C34.698 16.321 34.0315 15.2109 34.0148 13.6926C34.0148 13.4151 33.7982 13.0233 33.5649 12.8927C30.4155 11.0806 27.2495 9.28483 24.0668 7.52172C23.8502 7.40744 23.4336 7.40744 23.217 7.53804C21.8339 8.30533 20.5009 8.30533 19.1178 7.52172C18.9179 7.40744 18.5346 7.37479 18.3346 7.48907C15.102 9.25218 11.9026 11.0316 8.71992 12.8437C8.5033 12.9743 8.32 13.3335 8.30334 13.5947C8.27001 15.1292 7.65347 16.3047 6.25375 17.0719C6.03713 17.2025 5.82051 17.5454 5.82051 17.7902C5.78718 21.4144 5.78718 25.0223 5.82051 28.6465C5.82051 28.875 6.02046 29.2015 6.22042 29.3158C7.65347 30.0994 8.32 31.2585 8.30334 32.8584C8.30334 33.0706 8.45331 33.3971 8.6366 33.4951C11.9693 35.4051 15.3352 37.2988 18.7012 39.2089Z" fill="#3464FD" />
                      <path d="M19.901 32.4015C17.5182 31.0628 15.2853 29.8221 13.0857 28.5324C12.7858 28.3692 12.4692 27.9447 12.4692 27.6509C12.4192 25.0552 12.4359 22.4595 12.4359 19.7169C13.3024 20.2066 14.0689 20.6147 14.8187 21.0555C16.3351 21.9044 17.8514 22.7533 19.3345 23.6349C19.5844 23.7818 19.8677 24.1083 19.8677 24.3532C19.9177 26.9652 19.901 29.5936 19.901 32.4015Z" fill="#3464FD" />
                      <path d="M22.4005 32.4012C22.4005 30.6708 22.4005 29.1035 22.4005 27.5363C22.4005 26.5242 22.3838 25.5283 22.4172 24.5162C22.4338 24.255 22.5338 23.8632 22.7171 23.7489C25.05 22.3939 27.3995 21.0879 29.8323 19.7003C29.8657 20.0431 29.899 20.2716 29.899 20.5002C29.899 22.6714 29.8823 24.8427 29.9156 27.0139C29.9323 27.8139 29.6324 28.3363 28.9158 28.7281C26.7829 29.9198 24.6834 31.1279 22.4005 32.4012Z" fill="#3464FD" />
                      <path d="M13.6523 17.5781C15.3853 16.5823 17.0349 15.6517 18.6679 14.7212C21.484 13.1376 20.7842 13.1213 23.6169 14.7212C25.2499 15.6354 26.8663 16.5659 28.5826 17.5454C28.366 17.7087 28.1993 17.823 28.0327 17.9209C25.9331 19.1127 23.8169 20.3044 21.7007 21.4798C21.4507 21.6104 21.0341 21.7084 20.8175 21.5941C18.4513 20.2881 16.1185 18.9494 13.6523 17.5781Z" fill="#3464FD" />
                    </svg>
                  </div>

                  <div className="pata_that">
                    <p>Create Solution accelerators</p>
                  </div>
                </div>
              </div>
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
                  <p>If you are interested in deal-making in the M&A space, tell us why you are interested and how you can make a difference</p>
                </div>
                <div className="mail_res">
                  <h4>Mail your resume</h4>
                  <a href="mailto:Careers@DigitalMnA.com"><div className='btsu'>
                    <img src="./images/em3.svg" alt="" />
                    <p>Careers@DigitalMnA.com</p>
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

export default About