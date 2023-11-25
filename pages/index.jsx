import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState } from 'react';
import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [perPage, setPerPage] = useState(3);
  const [perpage1, setPerPage1] = useState(3);
  return (
    <>
      <Header />

      {/* <div className="my-t">
        <div className="cont-top">
          <div class="container">
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="trigger"></div>
            <div class="monitor">
              <div class="camera o-x">
                <div class="camera o-y">
                  <div class="camera o-z">
                    <div class="vr">
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                      <div class="vr_layer">
                        <div class="vr_layer_item"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_left">
          <h2>Creating <span className='syn'>Synergy</span>  <br />
            for sellers</h2>
          <div className='mting'>
            <p>DigitalMnR is a full-service Merger and acquisition company helping
            </p>
            <p>companies sell and buy assets by creating value</p>
          </div>
          <div className="btn_home">
            <button><span>Learn about our approach</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z" fill="#3464FD" />
              </svg>
            </button>
          </div>
        </div>
      </div> */}

      <div className='main_home'>
        <div className="banner_main">
          <div className="banner_home">
            {/* <div className="banner_con">
              <div className="banner_content">
                <div>
                  <p>DigitalMnA is a full-service Merger and acquisition company helping
                  </p>
                  <p>companies sell and buy assets by creating value</p>
                </div>
                <button><span>Learn about our approach</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div> */}
            <div className="banner_sect">

              <div className="banner_left">
                <h2>Creating <span className='syn'>Synergy</span>  <br />
                  for sellers</h2>
                <div className='mting'>
                  <p>DigitalMnR is a full-service Merger and acquisition company helping
                  </p>
                  <p>companies sell and buy assets by creating value</p>
                </div>
                <div className="btn_home">
                  <button><span>Learn about our approach</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z" fill="#3464FD" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* <div className="banner_right">
                  <img src="./images/trt.gif" alt="" />
              </div> */}

            </div>


          </div>
        </div>
        <div className="about_section">
          <div className="about_mai">
            <div className="about_icon">
              <svg width="202" height="82" viewBox="0 0 202 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#32B5FB" />
                <mask id="path-2-inside-1_304_3962" fill="white">
                  <path d="M52.176 56.048H39.376V53.392H52.176V56.048ZM56.656 62H53.392L45.232 41.104H46.384L38.224 62H35.088L44.176 39.12H47.536L56.656 62ZM60.2788 62V39.12H69.1748C70.6681 39.12 71.9588 39.376 73.0468 39.888C74.1561 40.3787 75.0094 41.072 75.6068 41.968C76.2254 42.864 76.5347 43.92 76.5347 45.136C76.5347 46.2453 76.2254 47.2373 75.6068 48.112C75.0094 48.9653 74.1561 49.6373 73.0468 50.128C71.9588 50.5973 70.6681 50.832 69.1748 50.832H63.6708V49.264H69.7508C71.3081 49.264 72.6628 49.52 73.8148 50.032C74.9881 50.544 75.8948 51.2693 76.5347 52.208C77.1961 53.1253 77.5268 54.224 77.5268 55.504C77.5268 56.8053 77.1961 57.9467 76.5347 58.928C75.8948 59.9093 74.9881 60.6667 73.8148 61.2C72.6628 61.7333 71.3081 62 69.7508 62H60.2788ZM63.3508 59.344H69.7828C71.2121 59.344 72.3321 59.0027 73.1428 58.32C73.9748 57.6373 74.3908 56.6773 74.3908 55.44C74.3908 54.2027 73.9748 53.2427 73.1428 52.56C72.3321 51.8773 71.2121 51.536 69.7828 51.536H63.0308V48.944H69.1108C70.4334 48.944 71.4788 48.624 72.2468 47.984C73.0148 47.3227 73.3988 46.4267 73.3988 45.296C73.3988 44.208 73.0148 43.3547 72.2468 42.736C71.4788 42.096 70.4334 41.776 69.1108 41.776H63.3508V59.344ZM92.696 62.512C90.968 62.512 89.3787 62.2133 87.928 61.616C86.4773 61.0187 85.208 60.1867 84.12 59.12C83.032 58.032 82.1893 56.7627 81.592 55.312C80.9947 53.84 80.696 52.2507 80.696 50.544C80.696 48.8373 80.9947 47.2587 81.592 45.808C82.1893 44.3573 83.032 43.0987 84.12 42.032C85.208 40.944 86.4773 40.1013 87.928 39.504C89.3787 38.9067 90.968 38.608 92.696 38.608C94.424 38.608 96.0133 38.9067 97.464 39.504C98.9147 40.1013 100.184 40.944 101.272 42.032C102.36 43.0987 103.203 44.3573 103.8 45.808C104.397 47.2587 104.696 48.8373 104.696 50.544C104.696 52.2507 104.397 53.84 103.8 55.312C103.203 56.7627 102.36 58.032 101.272 59.12C100.184 60.1867 98.9147 61.0187 97.464 61.616C96.0133 62.2133 94.424 62.512 92.696 62.512ZM92.696 59.76C94.424 59.76 95.9493 59.3653 97.272 58.576C98.5947 57.7867 99.6187 56.6987 100.344 55.312C101.091 53.904 101.464 52.3147 101.464 50.544C101.464 48.7733 101.091 47.1947 100.344 45.808C99.6187 44.4213 98.5947 43.3333 97.272 42.544C95.9493 41.7547 94.424 41.36 92.696 41.36C90.9893 41.36 89.464 41.7547 88.12 42.544C86.7973 43.3333 85.7627 44.4213 85.016 45.808C84.2907 47.1947 83.928 48.7733 83.928 50.544C83.928 52.3147 84.2907 53.904 85.016 55.312C85.7627 56.6987 86.7973 57.7867 88.12 58.576C89.464 59.3653 90.9893 59.76 92.696 59.76ZM127.398 39.12V52.976C127.398 55.984 126.566 58.3307 124.902 60.016C123.26 61.68 120.977 62.512 118.054 62.512C115.153 62.512 112.87 61.68 111.206 60.016C109.542 58.3307 108.71 55.984 108.71 52.976V39.12H111.782V52.976C111.782 55.152 112.326 56.8267 113.414 58C114.524 59.1733 116.07 59.76 118.054 59.76C120.06 59.76 121.606 59.1733 122.694 58C123.804 56.8267 124.358 55.152 124.358 52.976V39.12H127.398ZM141.336 62H138.264V41.488H141.336V62ZM148.824 41.808H130.808V39.12H148.824V41.808ZM177.148 39.12V52.976C177.148 55.984 176.316 58.3307 174.652 60.016C173.01 61.68 170.727 62.512 167.804 62.512C164.903 62.512 162.62 61.68 160.956 60.016C159.292 58.3307 158.46 55.984 158.46 52.976V39.12H161.532V52.976C161.532 55.152 162.076 56.8267 163.164 58C164.274 59.1733 165.82 59.76 167.804 59.76C169.81 59.76 171.356 59.1733 172.444 58C173.554 56.8267 174.108 55.152 174.108 52.976V39.12H177.148ZM180.527 58.288L182.703 56.176C183.322 56.9227 184.036 57.5627 184.847 58.096C185.658 58.6293 186.532 59.0453 187.471 59.344C188.41 59.6427 189.402 59.792 190.447 59.792C191.62 59.792 192.655 59.6213 193.551 59.28C194.447 58.9173 195.151 58.4267 195.663 57.808C196.175 57.1893 196.431 56.464 196.431 55.632C196.431 54.544 195.951 53.6907 194.991 53.072C194.052 52.432 192.431 51.9413 190.127 51.6C188.036 51.28 186.362 50.8533 185.103 50.32C183.844 49.7867 182.927 49.1147 182.351 48.304C181.775 47.472 181.487 46.4907 181.487 45.36C181.487 44.0373 181.86 42.864 182.607 41.84C183.354 40.816 184.378 40.0267 185.679 39.472C187.002 38.896 188.506 38.608 190.191 38.608C192.132 38.608 193.85 38.992 195.343 39.76C196.858 40.5067 198.18 41.5307 199.311 42.832L197.167 44.912C196.292 43.824 195.3 42.96 194.191 42.32C193.082 41.6587 191.748 41.328 190.191 41.328C188.57 41.328 187.236 41.6907 186.191 42.416C185.167 43.12 184.655 44.0693 184.655 45.264C184.655 45.8827 184.847 46.416 185.231 46.864C185.615 47.2907 186.244 47.6533 187.119 47.952C187.994 48.2507 189.167 48.5173 190.639 48.752C192.772 49.0507 194.49 49.4987 195.791 50.096C197.114 50.672 198.074 51.408 198.671 52.304C199.29 53.2 199.599 54.2773 199.599 55.536C199.599 56.9227 199.204 58.1387 198.415 59.184C197.647 60.2293 196.57 61.0507 195.183 61.648C193.818 62.224 192.239 62.512 190.447 62.512C188.335 62.512 186.458 62.1387 184.815 61.392C183.172 60.624 181.743 59.5893 180.527 58.288Z" />
                </mask>
                <path d="M52.176 56.048H39.376V53.392H52.176V56.048ZM56.656 62H53.392L45.232 41.104H46.384L38.224 62H35.088L44.176 39.12H47.536L56.656 62ZM60.2788 62V39.12H69.1748C70.6681 39.12 71.9588 39.376 73.0468 39.888C74.1561 40.3787 75.0094 41.072 75.6068 41.968C76.2254 42.864 76.5347 43.92 76.5347 45.136C76.5347 46.2453 76.2254 47.2373 75.6068 48.112C75.0094 48.9653 74.1561 49.6373 73.0468 50.128C71.9588 50.5973 70.6681 50.832 69.1748 50.832H63.6708V49.264H69.7508C71.3081 49.264 72.6628 49.52 73.8148 50.032C74.9881 50.544 75.8948 51.2693 76.5347 52.208C77.1961 53.1253 77.5268 54.224 77.5268 55.504C77.5268 56.8053 77.1961 57.9467 76.5347 58.928C75.8948 59.9093 74.9881 60.6667 73.8148 61.2C72.6628 61.7333 71.3081 62 69.7508 62H60.2788ZM63.3508 59.344H69.7828C71.2121 59.344 72.3321 59.0027 73.1428 58.32C73.9748 57.6373 74.3908 56.6773 74.3908 55.44C74.3908 54.2027 73.9748 53.2427 73.1428 52.56C72.3321 51.8773 71.2121 51.536 69.7828 51.536H63.0308V48.944H69.1108C70.4334 48.944 71.4788 48.624 72.2468 47.984C73.0148 47.3227 73.3988 46.4267 73.3988 45.296C73.3988 44.208 73.0148 43.3547 72.2468 42.736C71.4788 42.096 70.4334 41.776 69.1108 41.776H63.3508V59.344ZM92.696 62.512C90.968 62.512 89.3787 62.2133 87.928 61.616C86.4773 61.0187 85.208 60.1867 84.12 59.12C83.032 58.032 82.1893 56.7627 81.592 55.312C80.9947 53.84 80.696 52.2507 80.696 50.544C80.696 48.8373 80.9947 47.2587 81.592 45.808C82.1893 44.3573 83.032 43.0987 84.12 42.032C85.208 40.944 86.4773 40.1013 87.928 39.504C89.3787 38.9067 90.968 38.608 92.696 38.608C94.424 38.608 96.0133 38.9067 97.464 39.504C98.9147 40.1013 100.184 40.944 101.272 42.032C102.36 43.0987 103.203 44.3573 103.8 45.808C104.397 47.2587 104.696 48.8373 104.696 50.544C104.696 52.2507 104.397 53.84 103.8 55.312C103.203 56.7627 102.36 58.032 101.272 59.12C100.184 60.1867 98.9147 61.0187 97.464 61.616C96.0133 62.2133 94.424 62.512 92.696 62.512ZM92.696 59.76C94.424 59.76 95.9493 59.3653 97.272 58.576C98.5947 57.7867 99.6187 56.6987 100.344 55.312C101.091 53.904 101.464 52.3147 101.464 50.544C101.464 48.7733 101.091 47.1947 100.344 45.808C99.6187 44.4213 98.5947 43.3333 97.272 42.544C95.9493 41.7547 94.424 41.36 92.696 41.36C90.9893 41.36 89.464 41.7547 88.12 42.544C86.7973 43.3333 85.7627 44.4213 85.016 45.808C84.2907 47.1947 83.928 48.7733 83.928 50.544C83.928 52.3147 84.2907 53.904 85.016 55.312C85.7627 56.6987 86.7973 57.7867 88.12 58.576C89.464 59.3653 90.9893 59.76 92.696 59.76ZM127.398 39.12V52.976C127.398 55.984 126.566 58.3307 124.902 60.016C123.26 61.68 120.977 62.512 118.054 62.512C115.153 62.512 112.87 61.68 111.206 60.016C109.542 58.3307 108.71 55.984 108.71 52.976V39.12H111.782V52.976C111.782 55.152 112.326 56.8267 113.414 58C114.524 59.1733 116.07 59.76 118.054 59.76C120.06 59.76 121.606 59.1733 122.694 58C123.804 56.8267 124.358 55.152 124.358 52.976V39.12H127.398ZM141.336 62H138.264V41.488H141.336V62ZM148.824 41.808H130.808V39.12H148.824V41.808ZM177.148 39.12V52.976C177.148 55.984 176.316 58.3307 174.652 60.016C173.01 61.68 170.727 62.512 167.804 62.512C164.903 62.512 162.62 61.68 160.956 60.016C159.292 58.3307 158.46 55.984 158.46 52.976V39.12H161.532V52.976C161.532 55.152 162.076 56.8267 163.164 58C164.274 59.1733 165.82 59.76 167.804 59.76C169.81 59.76 171.356 59.1733 172.444 58C173.554 56.8267 174.108 55.152 174.108 52.976V39.12H177.148ZM180.527 58.288L182.703 56.176C183.322 56.9227 184.036 57.5627 184.847 58.096C185.658 58.6293 186.532 59.0453 187.471 59.344C188.41 59.6427 189.402 59.792 190.447 59.792C191.62 59.792 192.655 59.6213 193.551 59.28C194.447 58.9173 195.151 58.4267 195.663 57.808C196.175 57.1893 196.431 56.464 196.431 55.632C196.431 54.544 195.951 53.6907 194.991 53.072C194.052 52.432 192.431 51.9413 190.127 51.6C188.036 51.28 186.362 50.8533 185.103 50.32C183.844 49.7867 182.927 49.1147 182.351 48.304C181.775 47.472 181.487 46.4907 181.487 45.36C181.487 44.0373 181.86 42.864 182.607 41.84C183.354 40.816 184.378 40.0267 185.679 39.472C187.002 38.896 188.506 38.608 190.191 38.608C192.132 38.608 193.85 38.992 195.343 39.76C196.858 40.5067 198.18 41.5307 199.311 42.832L197.167 44.912C196.292 43.824 195.3 42.96 194.191 42.32C193.082 41.6587 191.748 41.328 190.191 41.328C188.57 41.328 187.236 41.6907 186.191 42.416C185.167 43.12 184.655 44.0693 184.655 45.264C184.655 45.8827 184.847 46.416 185.231 46.864C185.615 47.2907 186.244 47.6533 187.119 47.952C187.994 48.2507 189.167 48.5173 190.639 48.752C192.772 49.0507 194.49 49.4987 195.791 50.096C197.114 50.672 198.074 51.408 198.671 52.304C199.29 53.2 199.599 54.2773 199.599 55.536C199.599 56.9227 199.204 58.1387 198.415 59.184C197.647 60.2293 196.57 61.0507 195.183 61.648C193.818 62.224 192.239 62.512 190.447 62.512C188.335 62.512 186.458 62.1387 184.815 61.392C183.172 60.624 181.743 59.5893 180.527 58.288Z" fill="white" />
                <path d="M52.176 56.048V156.048H152.176V56.048H52.176ZM39.376 56.048H-60.624V156.048H39.376V56.048ZM39.376 53.392V-46.608H-60.624V53.392H39.376ZM52.176 53.392H152.176V-46.608H52.176V53.392ZM56.656 62V162H204.168L149.548 24.973L56.656 62ZM53.392 62L-39.7575 98.3754L-14.9118 162H53.392V62ZM45.232 41.104V-58.896H-101.173L-47.9175 77.4794L45.232 41.104ZM46.384 41.104L139.534 77.4794L192.789 -58.896H46.384V41.104ZM38.224 62V162H106.528L131.374 98.3754L38.224 62ZM35.088 62L-57.849 25.0851L-112.232 162H35.088V62ZM44.176 39.12V-60.88H-23.7034L-48.761 2.20515L44.176 39.12ZM47.536 39.12L140.428 2.09296L115.327 -60.88H47.536V39.12ZM52.176 -43.952H39.376V156.048H52.176V-43.952ZM139.376 56.048V53.392H-60.624V56.048H139.376ZM39.376 153.392H52.176V-46.608H39.376V153.392ZM-47.824 53.392V56.048H152.176V53.392H-47.824ZM56.656 -38H53.392V162H56.656V-38ZM146.542 25.6246L138.382 4.72862L-47.9175 77.4794L-39.7575 98.3754L146.542 25.6246ZM45.232 141.104H46.384V-58.896H45.232V141.104ZM-46.7655 4.72861L-54.9255 25.6246L131.374 98.3754L139.534 77.4794L-46.7655 4.72861ZM38.224 -38H35.088V162H38.224V-38ZM128.025 98.9149L137.113 76.0349L-48.761 2.20515L-57.849 25.0851L128.025 98.9149ZM44.176 139.12H47.536V-60.88H44.176V139.12ZM-45.3564 76.147L-36.2364 99.027L149.548 24.973L140.428 2.09296L-45.3564 76.147ZM60.2787 62H-39.7213V162H60.2787V62ZM60.2787 39.12V-60.88H-39.7213V39.12H60.2787ZM73.0468 39.888L30.4671 130.37L31.5259 130.868L32.5961 131.342L73.0468 39.888ZM75.6068 41.968L-7.59828 97.438L-7.14611 98.1163L-6.68295 98.7871L75.6068 41.968ZM75.6068 48.112L-6.03484 -9.63444L-6.17612 -9.43469L-6.31644 -9.23424L75.6068 48.112ZM73.0468 50.128L112.656 141.949L113.077 141.767L113.497 141.582L73.0468 50.128ZM63.6707 50.832H-36.3292V150.832H63.6707V50.832ZM63.6707 49.264V-50.736H-36.3292V49.264H63.6707ZM73.8148 50.032L33.2009 141.413L33.5101 141.551L33.8203 141.686L73.8148 50.032ZM76.5348 52.208L-6.08801 108.542L-5.34951 109.625L-4.58288 110.688L76.5348 52.208ZM76.5348 58.928L-6.39188 3.04263L-6.81386 3.6688L-7.22633 4.30126L76.5348 58.928ZM73.8148 61.2L32.4345 -29.8367L32.1179 -29.6928L31.8024 -29.5467L73.8148 61.2ZM63.3507 59.344H-36.6492V159.344H63.3507V59.344ZM73.1427 58.32L9.7111 -18.9873L9.21753 -18.5824L8.72917 -18.1711L73.1427 58.32ZM73.1427 52.56L8.72916 129.051L9.21752 129.462L9.71109 129.867L73.1427 52.56ZM63.0308 51.536H-36.9693V151.536H63.0308V51.536ZM63.0308 48.944V-51.056H-36.9693V48.944H63.0308ZM72.2467 47.984L136.265 124.806L136.886 124.288L137.499 123.761L72.2467 47.984ZM72.2467 42.736L8.22836 119.558L8.86667 120.09L9.51372 120.611L72.2467 42.736ZM63.3507 41.776V-58.224H-36.6492V41.776H63.3507ZM160.279 62V39.12H-39.7213V62H160.279ZM60.2787 139.12H69.1748V-60.88H60.2787V139.12ZM69.1748 139.12C59.4195 139.12 45.5188 137.453 30.4671 130.37L115.626 -50.5939C98.3987 -58.701 81.9167 -60.88 69.1748 -60.88V139.12ZM32.5961 131.342C18.5863 125.145 3.63972 114.295 -7.59828 97.438L158.812 -13.502C146.379 -32.151 129.726 -44.3875 113.497 -51.5655L32.5961 131.342ZM-6.68295 98.7871C-18.9243 81.0581 -23.4652 61.7505 -23.4652 45.136H176.535C176.535 26.0895 171.375 4.66986 157.896 -14.8511L-6.68295 98.7871ZM-23.4652 45.136C-23.4652 26.3426 -17.8041 7.00481 -6.03484 -9.63444L157.248 105.858C170.255 87.4699 176.535 66.1481 176.535 45.136H-23.4652ZM-6.31644 -9.23424C5.15976 -25.6288 19.8134 -35.6716 32.5961 -41.3255L113.497 141.582C128.499 134.946 144.859 123.559 157.53 105.458L-6.31644 -9.23424ZM33.4376 -41.6931C47.6585 -47.8276 60.4686 -49.168 69.1748 -49.168V150.832C80.8676 150.832 96.259 149.022 112.656 141.949L33.4376 -41.6931ZM69.1748 -49.168H63.6707V150.832H69.1748V-49.168ZM163.671 50.832V49.264H-36.3292V50.832H163.671ZM63.6707 149.264H69.7508V-50.736H63.6707V149.264ZM69.7508 149.264C60.521 149.264 47.4705 147.755 33.2009 141.413L114.429 -41.3491C97.855 -48.7152 82.0952 -50.736 69.7508 -50.736V149.264ZM33.8203 141.686C19.9929 135.652 5.17698 125.064 -6.08801 108.542L159.158 -4.12565C146.613 -22.525 129.983 -34.5642 113.809 -41.6219L33.8203 141.686ZM-4.58288 110.688C-17.7834 92.3778 -22.4733 72.3317 -22.4733 55.504H177.527C177.527 36.1163 172.176 13.8729 157.652 -6.27217L-4.58288 110.688ZM-22.4733 55.504C-22.4733 38.9623 -17.962 20.2112 -6.39188 3.04263L159.461 114.813C172.354 95.6821 177.527 74.6484 177.527 55.504H-22.4733ZM-7.22633 4.30126C3.54099 -12.2087 18.1031 -23.3224 32.4345 -29.8367L115.195 152.237C131.873 144.656 148.249 132.027 160.296 113.555L-7.22633 4.30126ZM31.8024 -29.5467C46.4541 -36.3299 60.0158 -38 69.7508 -38V162C82.6003 162 98.8714 159.797 115.827 151.947L31.8024 -29.5467ZM69.7508 -38H60.2787V162H69.7508V-38ZM63.3507 159.344H69.7827V-40.656H63.3507V159.344ZM69.7827 159.344C86.5346 159.344 113.278 155.256 137.556 134.811L8.72917 -18.1711C31.386 -37.2506 55.8896 -40.656 69.7827 -40.656V159.344ZM136.574 135.627C164.179 112.977 174.391 81.5968 174.391 55.44H-25.6092C-25.6092 44.8417 -23.8072 31.4743 -17.6768 17.3273C-11.3778 2.79101 -1.80013 -9.54223 9.7111 -18.9873L136.574 135.627ZM174.391 55.44C174.391 29.2832 164.179 -2.0974 136.574 -24.7473L9.71109 129.867C-1.80014 120.422 -11.3778 108.089 -17.6768 93.5527C-23.8072 79.4057 -25.6092 66.0383 -25.6092 55.44H174.391ZM137.556 -23.9311C113.278 -44.3759 86.5346 -48.464 69.7827 -48.464V151.536C55.8896 151.536 31.386 148.131 8.72916 129.051L137.556 -23.9311ZM69.7827 -48.464H63.0308V151.536H69.7827V-48.464ZM163.031 51.536V48.944H-36.9693V51.536H163.031ZM63.0308 148.944H69.1107V-51.056H63.0308V148.944ZM69.1107 148.944C86.2012 148.944 112.429 144.67 136.265 124.806L8.22832 -28.8381C30.5289 -47.4219 54.6656 -51.056 69.1107 -51.056V148.944ZM137.499 123.761C163.036 101.771 173.399 71.7647 173.399 45.296H-26.6012C-26.6012 34.4629 -24.7309 21.254 -18.8038 7.42408C-12.755 -6.68962 -3.69247 -18.5903 6.99443 -27.7929L137.499 123.761ZM173.399 45.296C173.399 17.5043 161.95 -13.4137 134.98 -35.1393L9.51372 120.611C-1.67517 111.598 -11.4684 99.5721 -18.0814 84.8764C-24.5647 70.4691 -26.6012 56.6154 -26.6012 45.296H173.399ZM136.265 -34.0862C112.429 -53.95 86.2012 -58.224 69.1107 -58.224V141.776C54.6656 141.776 30.5289 138.142 8.22836 119.558L136.265 -34.0862ZM69.1107 -58.224H63.3507V141.776H69.1107V-58.224ZM-36.6492 41.776V59.344H163.351V41.776H-36.6492ZM87.928 61.616L126.003 -30.8518L126.003 -30.8518L87.928 61.616ZM84.12 59.12L13.4093 129.831L13.7594 130.181L14.1129 130.527L84.12 59.12ZM81.592 55.312L-11.0693 92.9137L-10.9732 93.1506L-10.8758 93.387L81.592 55.312ZM81.592 45.808L-10.8758 7.73299L-10.8758 7.73303L81.592 45.808ZM84.12 42.032L154.127 113.439L154.481 113.093L154.831 112.743L84.12 42.032ZM87.928 39.504L126.003 131.972H126.003L87.928 39.504ZM101.272 42.032L30.5613 112.743L30.9114 113.093L31.2649 113.439L101.272 42.032ZM103.8 45.808L196.268 7.73303L196.268 7.733L103.8 45.808ZM103.8 55.312L196.268 93.387L196.365 93.1506L196.461 92.9137L103.8 55.312ZM101.272 59.12L171.279 130.527L171.633 130.181L171.983 129.831L101.272 59.12ZM97.464 61.616L135.539 154.084H135.539L97.464 61.616ZM97.272 58.576L148.518 144.447L148.518 144.447L97.272 58.576ZM100.344 55.312L11.9978 8.46177L11.8653 8.71161L11.7342 8.9622L100.344 55.312ZM100.344 45.808L11.7342 92.1578L12.0124 92.6896L12.2969 93.2179L100.344 45.808ZM97.272 42.544L148.518 -43.3273L148.518 -43.3273L97.272 42.544ZM88.12 42.544L37.4778 -43.6846L37.1754 -43.507L36.8743 -43.3273L88.12 42.544ZM85.016 45.808L-3.03111 -1.60198L-3.31565 -1.07355L-3.59383 -0.541733L85.016 45.808ZM85.016 55.312L-3.88146 101.108L-3.46365 101.919L-3.03111 102.722L85.016 55.312ZM88.12 58.576L36.8743 144.447L37.1754 144.627L37.4778 144.805L88.12 58.576ZM92.696 -37.488C102.7 -37.488 114.204 -35.71 126.003 -30.8518L49.853 154.084C64.5529 160.137 79.2356 162.512 92.696 162.512V-37.488ZM126.003 -30.8518C136.092 -26.6974 145.751 -20.4989 154.127 -12.2873L14.1129 130.527C24.6647 140.872 36.8625 148.735 49.853 154.084L126.003 -30.8518ZM154.831 -11.5907C163.264 -3.15725 169.731 6.72485 174.06 17.237L-10.8758 93.387C-5.3526 106.8 2.79989 119.221 13.4093 129.831L154.831 -11.5907ZM174.253 17.7103C178.854 29.0467 180.696 40.3281 180.696 50.544H-19.304C-19.304 64.1733 -16.8642 78.6333 -11.0693 92.9137L174.253 17.7103ZM180.696 50.544C180.696 60.7439 178.857 72.2315 174.06 83.883L-10.8758 7.73303C-16.8681 22.2858 -19.304 36.9308 -19.304 50.544H180.696ZM174.06 83.883C169.66 94.5687 162.994 104.746 154.127 113.439L14.1129 -29.3753C3.07004 -18.549 -5.28112 -5.85408 -10.8758 7.73299L174.06 83.883ZM154.831 112.743C146.397 121.176 136.515 127.643 126.003 131.972L49.853 -52.9638C36.4395 -47.4406 24.0188 -39.2881 13.4093 -28.6787L154.831 112.743ZM126.003 131.972C114.204 136.83 102.7 138.608 92.696 138.608V-61.392C79.2356 -61.392 64.5529 -59.0167 49.853 -52.9638L126.003 131.972ZM92.696 138.608C82.6916 138.608 71.1876 136.83 59.389 131.972L135.539 -52.9638C120.839 -59.0167 106.156 -61.392 92.696 -61.392V138.608ZM59.389 131.972C48.8769 127.643 38.9948 121.176 30.5613 112.743L171.983 -28.6787C161.373 -39.2881 148.952 -47.4406 135.539 -52.9638L59.389 131.972ZM31.2649 113.439C22.398 104.746 15.7322 94.5687 11.3322 83.883L196.268 7.733C190.673 -5.85407 182.322 -18.549 171.279 -29.3753L31.2649 113.439ZM11.3322 83.883C6.53454 72.2315 4.696 60.7439 4.696 50.544H204.696C204.696 36.9308 202.26 22.2858 196.268 7.73303L11.3322 83.883ZM4.696 50.544C4.696 40.3281 6.53845 29.0467 11.1387 17.7103L196.461 92.9137C202.256 78.6333 204.696 64.1733 204.696 50.544H4.696ZM11.3322 17.237C15.6607 6.72486 22.1279 -3.15724 30.5613 -11.5907L171.983 129.831C182.592 119.221 190.745 106.8 196.268 93.387L11.3322 17.237ZM31.2649 -12.2873C39.6407 -20.4989 49.2998 -26.6974 59.389 -30.8518L135.539 154.084C148.53 148.735 160.727 140.872 171.279 130.527L31.2649 -12.2873ZM59.389 -30.8518C71.1876 -35.71 82.6916 -37.488 92.696 -37.488V162.512C106.156 162.512 120.839 160.137 135.539 154.084L59.389 -30.8518ZM92.696 159.76C110.215 159.76 129.874 155.573 148.518 144.447L46.0263 -27.2953C62.0244 -36.8425 78.6329 -40.24 92.696 -40.24V159.76ZM148.518 144.447C165.973 134.031 179.809 119.145 188.954 101.662L11.7342 8.9622C19.4286 -5.74769 31.2166 -18.4572 46.0262 -27.2952L148.518 144.447ZM188.69 102.162C197.909 84.7776 201.464 66.8043 201.464 50.544H1.464C1.464 37.825 4.27199 23.0304 11.9978 8.46177L188.69 102.162ZM201.464 50.544C201.464 34.312 197.917 16.0891 188.391 -1.60193L12.2969 93.2179C4.26427 78.3002 1.464 63.2347 1.464 50.544H201.464ZM188.954 -0.541798C179.809 -18.025 165.973 -32.9106 148.518 -43.3273L46.0262 128.415C31.2166 119.577 19.4286 106.868 11.7342 92.1578L188.954 -0.541798ZM148.518 -43.3273C129.874 -54.4532 110.215 -58.64 92.696 -58.64V141.36C78.6329 141.36 62.0244 137.963 46.0263 128.415L148.518 -43.3273ZM92.696 -58.64C74.9254 -58.64 55.6108 -54.3341 37.4778 -43.6846L138.762 128.773C123.317 137.843 107.053 141.36 92.696 141.36V-58.64ZM36.8743 -43.3273C19.6723 -33.0616 6.08007 -18.5227 -3.03111 -1.60198L173.063 93.218C165.445 107.365 153.922 119.728 139.366 128.415L36.8743 -43.3273ZM-3.59383 -0.541733C-12.7361 16.9362 -16.072 34.7758 -16.072 50.544H183.928C183.928 62.7709 181.317 77.4532 173.626 92.1577L-3.59383 -0.541733ZM-16.072 50.544C-16.072 66.3426 -12.7274 83.9361 -3.88146 101.108L173.913 9.51635C181.309 23.8719 183.928 38.2868 183.928 50.544H-16.072ZM-3.03111 102.722C6.08007 119.643 19.6723 134.182 36.8743 144.447L139.366 -27.2953C153.922 -18.6083 165.445 -6.24541 173.063 7.90202L-3.03111 102.722ZM37.4778 144.805C55.6108 155.454 74.9254 159.76 92.696 159.76V-40.24C107.053 -40.24 123.317 -36.7234 138.762 -27.6526L37.4778 144.805ZM127.398 39.12H227.398V-60.88H127.398V39.12ZM124.902 60.016L53.7426 -10.2429L53.7368 -10.237L124.902 60.016ZM111.206 60.016L40.0466 130.275L40.2704 130.501L40.4956 130.727L111.206 60.016ZM108.71 39.12V-60.88H8.71025V39.12H108.71ZM111.782 39.12H211.782V-60.88H111.782V39.12ZM113.414 58L40.0874 125.994L40.4168 126.349L40.7496 126.701L113.414 58ZM122.694 58L50.0296 -10.7012L49.6968 -10.3492L49.3674 -9.99393L122.694 58ZM124.358 39.12V-60.88H24.3583V39.12H124.358ZM27.3983 39.12V52.976H227.398V39.12H27.3983ZM27.3983 52.976C27.3983 37.1311 32.2822 11.4927 53.7426 -10.2429L196.062 130.275C220.85 105.169 227.398 74.8369 227.398 52.976H27.3983ZM53.7368 -10.237C75.3315 -32.1121 101.307 -37.488 118.054 -37.488V162.512C140.647 162.512 171.188 155.472 196.068 130.269L53.7368 -10.237ZM118.054 -37.488C135.12 -37.488 160.652 -31.9596 181.917 -10.6947L40.4956 130.727C65.0885 155.32 95.1855 162.512 118.054 162.512V-37.488ZM182.366 -10.2429C203.826 11.4927 208.71 37.1311 208.71 52.976H8.71025C8.71025 74.8369 15.2582 105.169 40.0466 130.275L182.366 -10.2429ZM208.71 52.976V39.12H8.71025V52.976H208.71ZM108.71 139.12H111.782V-60.88H108.71V139.12ZM11.7822 39.12V52.976H211.782V39.12H11.7822ZM11.7822 52.976C11.7822 71.1645 16.4809 100.536 40.0874 125.994L186.741 -9.99395C208.172 13.1174 211.782 39.1395 211.782 52.976H11.7822ZM40.7496 126.701C64.926 152.272 95.315 159.76 118.054 159.76V-40.24C136.826 -40.24 164.121 -33.9256 186.079 -10.7011L40.7496 126.701ZM118.054 159.76C140.363 159.76 171.435 152.508 196.021 125.994L49.3674 -9.99393C71.7772 -34.1614 99.7564 -40.24 118.054 -40.24V159.76ZM195.359 126.701C219.392 101.282 224.358 71.64 224.358 52.976H24.3583C24.3583 38.664 28.2155 12.3714 50.0296 -10.7012L195.359 126.701ZM224.358 52.976V39.12H24.3583V52.976H224.358ZM124.358 139.12H127.398V-60.88H124.358V139.12ZM141.336 62V162H241.335V62H141.336ZM138.264 62H38.2635V162H138.264V62ZM138.264 41.488V-58.512H38.2635V41.488H138.264ZM141.336 41.488H241.335V-58.512H141.336V41.488ZM148.824 41.808V141.808H248.824V41.808H148.824ZM130.808 41.808H30.8075V141.808H130.808V41.808ZM130.808 39.12V-60.88H30.8075V39.12H130.808ZM148.824 39.12H248.824V-60.88H148.824V39.12ZM141.336 -38H138.264V162H141.336V-38ZM238.264 62V41.488H38.2635V62H238.264ZM138.264 141.488H141.336V-58.512H138.264V141.488ZM41.3355 41.488V62H241.335V41.488H41.3355ZM148.824 -58.192H130.808V141.808H148.824V-58.192ZM230.807 41.808V39.12H30.8075V41.808H230.807ZM130.808 139.12H148.824V-60.88H130.808V139.12ZM48.8235 39.12V41.808H248.824V39.12H48.8235ZM177.148 39.12H277.148V-60.88H177.148V39.12ZM174.652 60.016L103.493 -10.2429L103.487 -10.237L174.652 60.016ZM160.956 60.016L89.7966 130.275L90.0204 130.501L90.2456 130.727L160.956 60.016ZM158.46 39.12V-60.88H58.4603V39.12H158.46ZM161.532 39.12H261.532V-60.88H161.532V39.12ZM163.164 58L89.8374 125.994L90.1668 126.349L90.4996 126.701L163.164 58ZM172.444 58L99.7796 -10.7012L99.4468 -10.3492L99.1174 -9.99393L172.444 58ZM174.108 39.12V-60.88H74.1083V39.12H174.108ZM77.1483 39.12V52.976H277.148V39.12H77.1483ZM77.1483 52.976C77.1483 37.1311 82.0322 11.4927 103.493 -10.2429L245.812 130.275C270.6 105.169 277.148 74.8369 277.148 52.976H77.1483ZM103.487 -10.237C125.082 -32.1121 151.057 -37.488 167.804 -37.488V162.512C190.397 162.512 220.938 155.472 245.818 130.269L103.487 -10.237ZM167.804 -37.488C184.87 -37.488 210.402 -31.9596 231.667 -10.6947L90.2456 130.727C114.838 155.32 144.935 162.512 167.804 162.512V-37.488ZM232.116 -10.2429C253.576 11.4927 258.46 37.1311 258.46 52.976H58.4603C58.4603 74.8369 65.0082 105.169 89.7966 130.275L232.116 -10.2429ZM258.46 52.976V39.12H58.4603V52.976H258.46ZM158.46 139.12H161.532V-60.88H158.46V139.12ZM61.5322 39.12V52.976H261.532V39.12H61.5322ZM61.5322 52.976C61.5322 71.1645 66.2309 100.536 89.8374 125.994L236.491 -9.99395C257.922 13.1174 261.532 39.1395 261.532 52.976H61.5322ZM90.4996 126.701C114.676 152.272 145.065 159.76 167.804 159.76V-40.24C186.576 -40.24 213.871 -33.9256 235.829 -10.7011L90.4996 126.701ZM167.804 159.76C190.113 159.76 221.185 152.508 245.771 125.994L99.1174 -9.99393C121.527 -34.1614 149.506 -40.24 167.804 -40.24V159.76ZM245.109 126.701C269.142 101.282 274.108 71.64 274.108 52.976H74.1083C74.1083 38.664 77.9655 12.3714 99.7796 -10.7012L245.109 126.701ZM274.108 52.976V39.12H74.1083V52.976H274.108ZM174.108 139.12H177.148V-60.88H174.108V139.12ZM180.527 58.288L110.879 -13.4701L40.4693 54.8692L107.461 126.562L180.527 58.288ZM182.703 56.176L259.705 -7.62577L190.684 -90.9273L113.055 -15.5821L182.703 56.176ZM184.847 58.096L239.809 -25.4457L239.809 -25.4457L184.847 58.096ZM187.471 59.344L217.791 -35.9486L217.791 -35.9486L187.471 59.344ZM193.551 59.28L229.151 152.729L230.114 152.362L231.07 151.975L193.551 59.28ZM195.663 57.808L118.624 -5.94885L118.624 -5.94875L195.663 57.808ZM194.991 53.072L138.657 135.695L139.73 136.426L140.821 137.129L194.991 53.072ZM190.127 51.6L174.997 150.449L175.235 150.485L175.472 150.52L190.127 51.6ZM182.351 48.304L100.132 105.225L100.479 105.727L100.833 106.225L182.351 48.304ZM182.607 41.84L101.806 -17.0772L101.806 -17.0772L182.607 41.84ZM185.679 39.472L224.889 131.464L225.248 131.311L225.606 131.156L185.679 39.472ZM195.343 39.76L149.608 128.689L150.365 129.078L151.128 129.454L195.343 39.76ZM199.311 42.832L268.942 114.606L336.879 48.6967L274.798 -22.7552L199.311 42.832ZM197.167 44.912L119.229 107.568L188.009 193.123L266.798 116.686L197.167 44.912ZM194.191 42.32L142.985 128.215L143.599 128.581L144.219 128.939L194.191 42.32ZM186.191 42.416L242.844 124.82L243.022 124.698L243.199 124.575L186.191 42.416ZM185.231 46.864L109.305 111.943L110.092 112.861L110.902 113.76L185.231 46.864ZM190.639 48.752L174.896 147.505L175.834 147.654L176.774 147.786L190.639 48.752ZM195.791 50.096L154.074 140.979L154.965 141.388L155.864 141.779L195.791 50.096ZM198.671 52.304L115.466 107.774L115.918 108.452L116.381 109.123L198.671 52.304ZM198.415 59.184L118.611 -1.07627L118.215 -0.552532L117.827 -0.023653L198.415 59.184ZM195.183 61.648L234.053 153.784L234.4 153.638L234.745 153.489L195.183 61.648ZM184.815 61.392L142.462 151.98L142.947 152.207L143.435 152.429L184.815 61.392ZM250.175 130.046L252.351 127.934L113.055 -15.5821L110.879 -13.4701L250.175 130.046ZM105.701 119.978C112.652 128.367 120.796 135.658 129.885 141.638L239.809 -25.4457C247.277 -20.5324 253.992 -14.5212 259.705 -7.62577L105.701 119.978ZM129.885 141.638C138.45 147.272 147.633 151.608 157.151 154.637L217.791 -35.9486C225.432 -33.5175 232.866 -30.0135 239.809 -25.4457L129.885 141.638ZM157.151 154.637C168.478 158.241 179.744 159.792 190.447 159.792V-40.208C199.059 -40.208 208.342 -38.9553 217.791 -35.9486L157.151 154.637ZM190.447 159.792C201.151 159.792 214.658 158.25 229.151 152.729L157.951 -34.1688C170.652 -39.0071 182.09 -40.208 190.447 -40.208V159.792ZM231.07 151.975C244.222 146.651 259.668 137.315 272.702 121.565L118.624 -5.94875C130.634 -20.4617 144.672 -28.8167 156.032 -33.4147L231.07 151.975ZM272.702 121.565C288.626 102.324 296.431 78.8293 296.431 55.632H96.431C96.431 34.0987 103.724 12.0547 118.624 -5.94885L272.702 121.565ZM296.431 55.632C296.431 18.574 276.981 -13.0567 249.161 -30.9851L140.821 137.129C129.901 130.092 117.887 119.156 108.913 103.202C99.8257 87.0462 96.431 70.3091 96.431 55.632H296.431ZM251.325 -29.5507C230.527 -43.7309 209.536 -46.6161 204.782 -47.3203L175.472 150.52C173.438 150.219 169.348 149.524 164.105 147.937C159.469 146.534 149.63 143.176 138.657 135.695L251.325 -29.5507ZM205.257 -47.2488C206.746 -47.0208 209.073 -46.6081 211.992 -45.8644C214.832 -45.1408 219.075 -43.8919 224.118 -41.7552L146.088 142.395C157.963 147.427 168.646 149.477 174.997 150.449L205.257 -47.2488ZM224.118 -41.7552C233.77 -37.6655 250.413 -28.5554 263.869 -9.6167L100.833 106.225C115.441 126.785 133.919 137.239 146.088 142.395L224.118 -41.7552ZM264.57 -8.61703C276.91 9.20756 281.487 28.635 281.487 45.36H81.487C81.487 64.3463 86.6397 85.7364 100.132 105.225L264.57 -8.61703ZM281.487 45.36C281.487 64.2268 275.707 83.8897 263.408 100.757L101.806 -17.0772C88.0137 1.83827 81.487 23.8478 81.487 45.36H281.487ZM263.408 100.757C252.328 115.952 238.202 125.79 224.889 131.464L146.469 -52.5203C130.553 -45.7366 114.379 -34.3203 101.806 -17.0772L263.408 100.757ZM225.606 131.156C212.393 136.91 199.958 138.608 190.191 138.608V-61.392C177.053 -61.392 161.611 -59.1176 145.752 -52.2115L225.606 131.156ZM190.191 138.608C178.714 138.608 164.322 136.256 149.608 128.689L241.078 -49.1688C223.377 -58.272 205.55 -61.392 190.191 -61.392V138.608ZM151.128 129.454C140.468 124.199 131.225 116.938 123.824 108.419L274.798 -22.7552C265.136 -33.8763 253.248 -43.1857 239.558 -49.934L151.128 129.454ZM129.68 -28.9418L127.536 -26.8618L266.798 116.686L268.942 114.606L129.68 -28.9418ZM275.105 -17.7437C267.173 -27.6104 256.925 -36.936 244.163 -44.2986L144.219 128.939C133.676 122.856 125.412 115.258 119.229 107.568L275.105 -17.7437ZM245.397 -43.5747C225.893 -55.2024 206.057 -58.672 190.191 -58.672V141.328C177.439 141.328 160.27 138.52 142.985 128.215L245.397 -43.5747ZM190.191 -58.672C173.78 -58.672 151.038 -54.9075 129.183 -39.7428L243.199 124.575C223.435 138.289 203.359 141.328 190.191 141.328V-58.672ZM129.538 -39.9882C102.677 -21.5212 84.655 9.59479 84.655 45.264H284.655C284.655 59.4205 281.485 75.4938 273.054 91.1249C264.705 106.606 253.413 117.554 242.844 124.82L129.538 -39.9882ZM84.655 45.264C84.655 68.4941 92.5856 92.4368 109.305 111.943L261.157 -18.2152C277.108 0.395224 284.655 23.2712 284.655 45.264H84.655ZM110.902 113.76C127.636 132.354 146.625 139.794 154.805 142.587L219.433 -46.683C223.547 -45.2784 229.365 -42.9652 235.921 -39.187C242.423 -35.4397 251.127 -29.403 259.56 -20.0324L110.902 113.76ZM154.805 142.587C163.322 145.495 170.759 146.846 174.896 147.505L206.382 -50.001C207.315 -49.8523 208.849 -49.5847 210.817 -49.1373C212.702 -48.709 215.722 -47.9504 219.433 -46.683L154.805 142.587ZM176.774 147.786C174.785 147.508 171.861 147.007 168.285 146.074C164.772 145.157 159.814 143.614 154.074 140.979L237.508 -40.787C224.116 -46.9339 211.931 -49.2424 204.504 -50.2822L176.774 147.786ZM155.864 141.779C145.414 137.228 128.569 127.429 115.466 107.774L281.876 -3.16599C267.578 -24.6128 248.814 -35.8844 235.718 -41.5875L155.864 141.779ZM116.381 109.123C103.742 90.8186 99.599 71.3131 99.599 55.536H299.599C299.599 37.2415 294.837 15.5814 280.961 -4.51505L116.381 109.123ZM99.599 55.536C99.599 36.5354 105.497 16.2904 118.611 -1.07627L278.219 119.444C292.911 99.987 299.599 77.3099 299.599 55.536H99.599ZM117.827 -0.023653C129.208 -15.5154 143.384 -24.9219 155.621 -30.1933L234.745 153.489C249.756 147.023 266.086 135.974 279.003 118.392L117.827 -0.023653ZM156.313 -30.4884C169.537 -36.0674 181.617 -37.488 190.447 -37.488V162.512C202.861 162.512 218.098 160.515 234.053 153.784L156.313 -30.4884ZM190.447 -37.488C200.198 -37.488 212.813 -35.7276 226.195 -29.6446L143.435 152.429C160.103 160.005 176.472 162.512 190.447 162.512V-37.488ZM227.168 -29.1962C236.879 -24.6559 245.929 -18.1874 253.593 -9.98649L107.461 126.562C117.557 137.366 129.466 145.904 142.462 151.98L227.168 -29.1962Z" fill="white" mask="url(#path-2-inside-1_304_3962)" />
              </svg>

            </div>
            <div className="about_content">
              <p>DigitalMnA is a full-service Merger and acquisition company helping companies sell and buy assets by creating value</p>
            </div>
            <div className="about_btn">
              <button><span>Learn about our Approach</span>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.9 18L5.5 16.6L15.1 7H6.5V5H18.5V17H16.5V8.4L6.9 18Z" fill="white" />
                </svg>

              </button>
            </div>
            <div className="voice_gif">
              <img src="./images/voice.gif" alt="" />
            </div>
          </div>
        </div>
        <div className="service_hone">
          <div className="main_hone">
            <div className="sell">
              <h3>Sell-Side Advisory</h3>
              <svg width="303" height="1" viewBox="0 0 303 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="303" y2="0.5" stroke="#B9E6FE" />
              </svg>
            </div>
            <div className="sell_para">
              <p>Strategies, actions and process</p>
              <p>that enhance your Company</p>
              <p>Valuation</p>
            </div>
            <div className="st">
              <div className="small_para">
                <p>Benefit from DigitalMnA’ expertise to ensure you’re selling at the right time. Make
                </p>
                <p>certain the legacy you’ve built continues to thrive.</p>
              </div>

            </div>

            <div className="service_hone_main">
              <div className="service_flex_main">
                <div className="hone_left">
                  <div className="cont-top">
                    <div class="container">
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="monitor">
                        <div class="camera o-x">
                          <div class="camera o-y">
                            <div class="camera o-z">
                              <div class="vr">
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <img src="./images/CFol.gif" alt="" /> */}
                  {/* <div><iframe src="https://gifer.com/embed/V5y" width="100%" height="100%"  frameBorder="0" allowFullScreen></iframe></div><p><a href="https://gifer.com">via GIFER</a></p> */}
                </div>
                <div className="hone_right">
                  <div className="hone_box">
                    <div className="hone_svg">
                      <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.776 38.384C21.448 38.384 20.296 38.032 19.32 37.328C18.36 36.608 17.624 35.584 17.112 34.256C16.6 32.912 16.344 31.304 16.344 29.432C16.344 26.6 16.912 24.4 18.048 22.832C19.2 21.248 20.776 20.456 22.776 20.456C24.792 20.456 26.368 21.248 27.504 22.832C28.656 24.4 29.232 26.6 29.232 29.432C29.232 31.304 28.976 32.912 28.464 34.256C27.952 35.584 27.216 36.608 26.256 37.328C25.296 38.032 24.136 38.384 22.776 38.384ZM22.776 36.464C24.088 36.464 25.096 35.864 25.8 34.664C26.52 33.448 26.88 31.704 26.88 29.432C26.88 27.144 26.52 25.4 25.8 24.2C25.096 22.984 24.088 22.376 22.776 22.376C21.48 22.376 20.472 22.984 19.752 24.2C19.032 25.4 18.672 27.144 18.672 29.432C18.672 31.704 19.032 33.448 19.752 34.664C20.472 35.864 21.48 36.464 22.776 36.464ZM36.9939 20.84H39.0819V38H36.8259V23.264L32.4579 26.576V24.2L36.9939 20.84Z" fill="white" />
                        <circle cx="29" cy="29" r="28.5" stroke="url(#paint0_linear_304_5235)" />
                        <defs>
                          <linearGradient id="paint0_linear_304_5235" x1="29" y1="0" x2="29" y2="58" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#56C5FF" />
                            <stop offset="1" stop-color="#ECE370" />
                          </linearGradient>
                        </defs>
                      </svg>

                    </div>
                    <h3>Strategic Planning</h3>
                    <div className="stratic">
                      <div className="stratic_flex">
                        <p>Operational Efficiency</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.4 23.5852L5 22.1852L14.6 12.5852H6V10.5852H18V22.5852H16V13.9852L6.4 23.5852Z" fill="white" />
                        </svg>
                      </div>
                      <div className="stratic_flex">
                        <p>Market Position and Competitive Advantage</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.4 23.5852L5 22.1852L14.6 12.5852H6V10.5852H18V22.5852H16V13.9852L6.4 23.5852Z" fill="white" />
                        </svg>
                      </div>
                      <div className="stratic_flex">
                        <p>Technology and Innovation</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.4 23.5852L5 22.1852L14.6 12.5852H6V10.5852H18V22.5852H16V13.9852L6.4 23.5852Z" fill="white" />
                        </svg>
                      </div>
                      <div className="stratic_flex">
                        <p>Scalability and Growth Potential</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.4 23.5852L5 22.1852L14.6 12.5852H6V10.5852H18V22.5852H16V13.9852L6.4 23.5852Z" fill="white" />
                        </svg>
                      </div>
                      <div className="stratic_flex">
                        <p>Synergy Identification</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.4 23.5852L5 22.1852L14.6 12.5852H6V10.5852H18V22.5852H16V13.9852L6.4 23.5852Z" fill="white" />
                        </svg>
                      </div>
                      <div className="stratic_flex">
                        <p>Strategic Partnerships</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.4 23.5852L5 22.1852L14.6 12.5852H6V10.5852H18V22.5852H16V13.9852L6.4 23.5852Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service_flex_main mty">
                <div className="hone_left">
                  <div className="hone_box">
                    <div className="hone_svg">
                      <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.776 38.384C21.448 38.384 20.296 38.032 19.32 37.328C18.36 36.608 17.624 35.584 17.112 34.256C16.6 32.912 16.344 31.304 16.344 29.432C16.344 26.6 16.912 24.4 18.048 22.832C19.2 21.248 20.776 20.456 22.776 20.456C24.792 20.456 26.368 21.248 27.504 22.832C28.656 24.4 29.232 26.6 29.232 29.432C29.232 31.304 28.976 32.912 28.464 34.256C27.952 35.584 27.216 36.608 26.256 37.328C25.296 38.032 24.136 38.384 22.776 38.384ZM22.776 36.464C24.088 36.464 25.096 35.864 25.8 34.664C26.52 33.448 26.88 31.704 26.88 29.432C26.88 27.144 26.52 25.4 25.8 24.2C25.096 22.984 24.088 22.376 22.776 22.376C21.48 22.376 20.472 22.984 19.752 24.2C19.032 25.4 18.672 27.144 18.672 29.432C18.672 31.704 19.032 33.448 19.752 34.664C20.472 35.864 21.48 36.464 22.776 36.464ZM43.2819 38H31.7859V36.128L37.9059 30.416C38.8819 29.488 39.6259 28.648 40.1379 27.896C40.6659 27.144 40.9299 26.368 40.9299 25.568C40.9299 24.976 40.7859 24.44 40.4979 23.96C40.2259 23.48 39.8419 23.096 39.3459 22.808C38.8499 22.52 38.2739 22.376 37.6179 22.376C36.7059 22.376 35.8739 22.632 35.1219 23.144C34.3699 23.64 33.7139 24.344 33.1539 25.256L31.5939 23.792C32.4099 22.688 33.3219 21.856 34.3299 21.296C35.3539 20.736 36.4819 20.456 37.7139 20.456C38.8179 20.456 39.7779 20.688 40.5939 21.152C41.4099 21.6 42.0419 22.208 42.4899 22.976C42.9539 23.744 43.1859 24.616 43.1859 25.592C43.1859 26.328 43.0259 27.032 42.7059 27.704C42.4019 28.376 41.9459 29.064 41.3379 29.768C40.7299 30.472 39.9539 31.248 39.0099 32.096C38.5299 32.544 38.0419 33 37.5459 33.464C37.0499 33.912 36.5539 34.36 36.0579 34.808C35.5779 35.256 35.0979 35.696 34.6179 36.128H43.2819V38Z" fill="white" />
                        <circle cx="29" cy="29" r="28.5" stroke="url(#paint0_linear_365_1381)" />
                        <defs>
                          <linearGradient id="paint0_linear_365_1381" x1="29" y1="0" x2="29" y2="58" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#56C5FF" />
                            <stop offset="1" stop-color="#ECE370" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h3>Business Valuation</h3>
                    <div className="stratic">
                      <div className="stratic_flex static_flex1">
                        <p>Conduct a thorough business valuation to determine <br /> the appropriate asking price.</p>
                        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.4 23.5852L5 22.1852L14.6 12.5852H6V10.5852H18V22.5852H16V13.9852L6.4 23.5852Z" fill="white" />
                        </svg> */}
                      </div>
                      <div className="stratic_flex static_flex1">
                        <p>Consider various valuation methods and market <br /> benchmarks.</p>
                        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.4 23.5852L5 22.1852L14.6 12.5852H6V10.5852H18V22.5852H16V13.9852L6.4 23.5852Z" fill="white" />
                        </svg> */}
                      </div>

                    </div>
                  </div>
                </div>
                <div className="hone_right">
                  <div className="cont-top">
                    <div class="container">
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="monitor">
                        <div class="camera o-x">
                          <div class="camera o-y">
                            <div class="camera o-z">
                              <div class="vr">
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service_flex_main mty">
                <div className="hone_left">
                <div className="cont-top">
                    <div class="container">
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="monitor">
                        <div class="camera o-x">
                          <div class="camera o-y">
                            <div class="camera o-z">
                              <div class="vr">
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hone_right">
                  <div className="hone_box">
                    <div className="hone_svg">
                      <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.776 38.384C21.448 38.384 20.296 38.032 19.32 37.328C18.36 36.608 17.624 35.584 17.112 34.256C16.6 32.912 16.344 31.304 16.344 29.432C16.344 26.6 16.912 24.4 18.048 22.832C19.2 21.248 20.776 20.456 22.776 20.456C24.792 20.456 26.368 21.248 27.504 22.832C28.656 24.4 29.232 26.6 29.232 29.432C29.232 31.304 28.976 32.912 28.464 34.256C27.952 35.584 27.216 36.608 26.256 37.328C25.296 38.032 24.136 38.384 22.776 38.384ZM22.776 36.464C24.088 36.464 25.096 35.864 25.8 34.664C26.52 33.448 26.88 31.704 26.88 29.432C26.88 27.144 26.52 25.4 25.8 24.2C25.096 22.984 24.088 22.376 22.776 22.376C21.48 22.376 20.472 22.984 19.752 24.2C19.032 25.4 18.672 27.144 18.672 29.432C18.672 31.704 19.032 33.448 19.752 34.664C20.472 35.864 21.48 36.464 22.776 36.464ZM31.4259 35.336L32.9859 33.872C33.5619 34.672 34.2499 35.304 35.0499 35.768C35.8499 36.232 36.7539 36.464 37.7619 36.464C38.9299 36.464 39.8659 36.16 40.5699 35.552C41.2899 34.928 41.6499 34.136 41.6499 33.176C41.6499 32.52 41.4739 31.96 41.1219 31.496C40.7699 31.016 40.2899 30.656 39.6819 30.416C39.0739 30.16 38.3859 30.032 37.6179 30.032H35.9619V28.112H37.6179C38.2899 28.112 38.8899 27.992 39.4179 27.752C39.9619 27.512 40.3859 27.184 40.6899 26.768C41.0099 26.336 41.1699 25.84 41.1699 25.28C41.1699 24.416 40.8579 23.72 40.2339 23.192C39.6259 22.648 38.8259 22.376 37.8339 22.376C36.9059 22.376 36.0819 22.608 35.3619 23.072C34.6419 23.52 34.0099 24.152 33.4659 24.968L31.9059 23.504C32.6739 22.544 33.5539 21.8 34.5459 21.272C35.5539 20.728 36.6579 20.456 37.8579 20.456C38.9779 20.456 39.9539 20.664 40.7859 21.08C41.6339 21.496 42.2979 22.064 42.7779 22.784C43.2579 23.488 43.4979 24.288 43.4979 25.184C43.4979 25.984 43.2499 26.704 42.7539 27.344C42.2739 27.984 41.5939 28.488 40.7139 28.856C39.8499 29.208 38.8499 29.384 37.7139 29.384L38.0499 28.496C39.2179 28.496 40.2499 28.704 41.1459 29.12C42.0419 29.52 42.7379 30.072 43.2339 30.776C43.7299 31.48 43.9779 32.296 43.9779 33.224C43.9779 34.2 43.7139 35.08 43.1859 35.864C42.6739 36.632 41.9539 37.248 41.0259 37.712C40.0979 38.16 39.0259 38.384 37.8099 38.384C36.5139 38.384 35.3219 38.12 34.2339 37.592C33.1619 37.048 32.2259 36.296 31.4259 35.336Z" fill="white" />
                        <circle cx="29" cy="29" r="28.5" stroke="url(#paint0_linear_365_1396)" />
                        <defs>
                          <linearGradient id="paint0_linear_365_1396" x1="29" y1="0" x2="29" y2="58" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#56C5FF" />
                            <stop offset="1" stop-color="#ECE370" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h3>Information <br /> Memorandum</h3>
                    <div className="stratic">
                      <div className="stratic_flex static_flex1">
                        <p>Prepare a comprehensive Information Memorandum <br /> (IM) or Offering Memorandum that provides detailed <br /> information  about the company.</p>

                      </div>
                      <div className="stratic_flex static_flex1">
                        <p>Include financials, operations, market position, and <br /> growth opportunities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service_flex_main mty">
                <div className="hone_left">
                  <div className="hone_box">
                    <div className="hone_svg">
                      <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.776 38.384C21.448 38.384 20.296 38.032 19.32 37.328C18.36 36.608 17.624 35.584 17.112 34.256C16.6 32.912 16.344 31.304 16.344 29.432C16.344 26.6 16.912 24.4 18.048 22.832C19.2 21.248 20.776 20.456 22.776 20.456C24.792 20.456 26.368 21.248 27.504 22.832C28.656 24.4 29.232 26.6 29.232 29.432C29.232 31.304 28.976 32.912 28.464 34.256C27.952 35.584 27.216 36.608 26.256 37.328C25.296 38.032 24.136 38.384 22.776 38.384ZM22.776 36.464C24.088 36.464 25.096 35.864 25.8 34.664C26.52 33.448 26.88 31.704 26.88 29.432C26.88 27.144 26.52 25.4 25.8 24.2C25.096 22.984 24.088 22.376 22.776 22.376C21.48 22.376 20.472 22.984 19.752 24.2C19.032 25.4 18.672 27.144 18.672 29.432C18.672 31.704 19.032 33.448 19.752 34.664C20.472 35.864 21.48 36.464 22.776 36.464ZM42.7539 38H40.5219V33.896H31.5699V32.072L40.5219 20.84H42.7539V32.072H45.3219V33.896H42.7539V38ZM40.5219 23.72L33.8499 32.072H40.5219V23.72Z" fill="white" />
                        <circle cx="29" cy="29" r="28.5" stroke="url(#paint0_linear_365_1368)" />
                        <defs>
                          <linearGradient id="paint0_linear_365_1368" x1="29" y1="0" x2="29" y2="58" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#56C5FF" />
                            <stop offset="1" stop-color="#ECE370" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h3>Identify Potential <br /> Buyers</h3>
                    <div className="stratic">
                      <div className="stratic_flex static_flex1">
                        <p>1.Identify and target potential buyers, which may <br /> include strategic acquirers, private equity firms, or <br /> other investors.</p>

                      </div>
                      <div className="stratic_flex static_flex1">
                        <p>Market Position and Competitive Advantage</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hone_right">
                <div className="cont-top">
                    <div class="container">
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="trigger"></div>
                      <div class="monitor">
                        <div class="camera o-x">
                          <div class="camera o-y">
                            <div class="camera o-z">
                              <div class="vr">
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                                <div class="vr_layer">
                                  <div class="vr_layer_item"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="seei">
                <button className='see_all'><span>Explore all Services</span>
                  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4 13.0967L0 11.6967L9.6 2.09668H1V0.0966797H13V12.0967H11V3.49668L1.4 13.0967Z" fill="#3464FD" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="work_here">
          <div className="work_man">
            <div className="work_flex_man">
              <div className="work_lef">
                <h2>Our<span>Work</span></h2>
                <p>DigitalMnR is a full-service Merger and acquisition company helping
                  companies sell and buy assets by creating value</p>
                <button><span>Explore all works</span>
                  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4 13.0967L0 11.6967L9.6 2.09668H1V0.0966797H13V12.0967H11V3.49668L1.4 13.0967Z" fill="#3464FD" />
                  </svg>
                </button>
              </div>
              <div className="work_rig">
                <div className="work_boxing">
                  {/* <Splide
                    className=" w-full"
                    aria-label="Our Services"
                    options={{
                      perPage: 1,
                      perMove: 1,
                      autoplay: true,
                      pauseOnHover: true,
                      type: "loop",
                      interval: 2000,
                      drag: true,
                      wheel: true,
                      releaseWheel: true,
                      waitForTransition: true
                    }}
                  >
                    <SplideSlide>
                      <div className='d_ring'>
                        <img src="./images/tryinh.png" alt="" />
                        <img src="./images/tryinh.png" alt="" />
                        <img src="./images/tryinh.png" alt="" />
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className='d_ring'>
                        <img src="./images/tryinh.png" alt="" />
                        <img src="./images/tryinh.png" alt="" />
                        <img src="./images/tryinh.png" alt="" />
                      </div>
                    </SplideSlide>
                  </Splide> */}
                  <Splide
                    className=" w-full"
                    aria-label="Our Services"
                    options={{
                      perPage: 1,
                      perMove: 1,
                      autoplay: true,
                      pauseOnHover: true,
                      type: "loop",
                      interval: 2000,
                      drag: true,
                    }}
                  >
                    <SplideSlide>
                      <div className='d_ring'>
                        <div className="box_bis">
                          <a target='_blank' href="https://economictimes.indiatimes.com/tech/ites/tech-mahindra-acquires-zen3-infosolutions-announces-interim-dividend/articleshow/74288423.cms"><button><span>view case study</span>
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.4 13.5L0 12.1L9.6 2.5H1V0.5H13V12.5H11V3.9L1.4 13.5Z" fill="white" />
                            </svg>
                          </button></a>
                          <div className="box_img1">
                            <img src="./images/ty.svg" alt="" />
                          </div>
                          <div className="box_img2">
                            <img src="./images/pin1.png" alt="" />
                          </div>
                        </div>
                        <div className="box_bis">
                          <a href="https://www.einnews.com/pr_news/556359663/people-tech-group-aims-to-be-a-250m-arr-company-by-dec-2023-announces-acquisition-of-laurel-group-and-aegis-company"><button><span>view case study</span>
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.4 13.5L0 12.1L9.6 2.5H1V0.5H13V12.5H11V3.9L1.4 13.5Z" fill="white" />
                            </svg>
                          </button></a>
                          <div className="box_img1">
                            <img src="./images/rami.svg" alt="" />
                          </div>
                          <div className="box_img2">
                            <img src="./images/three.png" alt="" />
                          </div>

                        </div>
                        <div className="box_bis">
                          <button><span>view case study</span>
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.4 13.5L0 12.1L9.6 2.5H1V0.5H13V12.5H11V3.9L1.4 13.5Z" fill="white" />
                            </svg>
                          </button>
                          <div className="box_img1">
                            <img src="./images/ty.svg" alt="" />
                          </div>
                          <div className="box_img2">
                            <img src="./images/pin1.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className='d_ring'>
                        <div className="box_bis">
                          <a target='_blank' href="https://economictimes.indiatimes.com/tech/ites/tech-mahindra-acquires-zen3-infosolutions-announces-interim-dividend/articleshow/74288423.cms"><button><span>view case study</span>
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.4 13.5L0 12.1L9.6 2.5H1V0.5H13V12.5H11V3.9L1.4 13.5Z" fill="white" />
                            </svg>
                          </button></a>
                          <div className="box_img1">
                            <img src="./images/ty.svg" alt="" />
                          </div>
                          <div className="box_img2">
                            <img src="./images/pin1.png" alt="" />
                          </div>
                        </div>
                        <div className="box_bis">
                          <a href="https://www.einnews.com/pr_news/556359663/people-tech-group-aims-to-be-a-250m-arr-company-by-dec-2023-announces-acquisition-of-laurel-group-and-aegis-company"><button><span>view case study</span>
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.4 13.5L0 12.1L9.6 2.5H1V0.5H13V12.5H11V3.9L1.4 13.5Z" fill="white" />
                            </svg>
                          </button></a>
                          <div className="box_img1">
                            <img src="./images/rami.svg" alt="" />
                          </div>
                          <div className="box_img2">
                            <img src="./images/three.png" alt="" />
                          </div>

                        </div>
                        <div className="box_bis">
                          <button><span>view case study</span>
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.4 13.5L0 12.1L9.6 2.5H1V0.5H13V12.5H11V3.9L1.4 13.5Z" fill="white" />
                            </svg>
                          </button>
                          <div className="box_img1">
                            <img src="./images/ty.svg" alt="" />
                          </div>
                          <div className="box_img2">
                            <img src="./images/pin1.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  </Splide>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="why_digitala">
          <div className="digital_here">
            <h2>Why <span>DIGITALMnR</span></h2>
            <div className="digital_flex">
              <div className="digi1">
                <div className="dif dif1">
                  <h3>Experience working</h3>
                  <h3>in Hyperscale's</h3>
                  <h3>ecosystem</h3>
                </div>
                <div className="dif dif2">
                  <h3>Scalability</h3>
                </div>
                <div className="dif dif3">
                  <h3>Strategic</h3>
                  <h3>Partnerships</h3>
                </div>
              </div>
              <div className="digi2">
                <div className="dif_img">
                  {/* <img src="./images/pera.png" alt="" /> */}
                  <svg width="555" height="476" viewBox="0 0 555 476" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.66">
                      <path d="M226.597 324.285C226.597 324.285 225.571 323.651 223.993 322.701C223.204 322.226 222.336 321.593 221.389 320.96C220.442 320.327 219.417 319.614 218.47 318.902C216.576 317.398 214.603 315.894 213.262 314.707C211.842 313.519 210.974 312.728 210.974 312.728L213.656 309.72C213.656 309.72 214.524 310.511 215.866 311.619C217.207 312.807 219.022 314.232 220.916 315.656C221.863 316.369 222.81 317.002 223.678 317.635C224.624 318.269 225.414 318.902 226.124 319.298C227.623 320.248 228.57 320.881 228.57 320.881L226.597 324.285Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M258.081 337.029C258.081 337.029 253.267 336 248.691 334.496C246.324 333.783 244.114 332.833 242.378 332.2C241.51 331.884 240.8 331.567 240.327 331.329C239.853 331.092 239.538 331.013 239.538 331.013L241.116 327.292C241.116 327.292 241.352 327.372 241.826 327.609C242.299 327.767 242.931 328.163 243.799 328.401C245.456 329.034 247.586 329.905 249.874 330.538C254.293 332.042 258.949 332.992 258.949 332.992L258.081 337.029Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M291.853 338.849C291.853 338.849 290.669 339.008 288.854 339.166C287.907 339.245 286.881 339.324 285.777 339.404C284.672 339.404 283.41 339.483 282.226 339.483C281.042 339.562 279.78 339.483 278.675 339.483C277.571 339.483 276.466 339.483 275.519 339.404C273.704 339.245 272.521 339.166 272.521 339.166L272.836 335.129C272.836 335.129 274.02 335.208 275.756 335.367C276.624 335.446 277.649 335.446 278.754 335.446C279.859 335.446 281.042 335.525 282.226 335.446C283.41 335.446 284.593 335.367 285.698 335.367C286.803 335.287 287.828 335.208 288.696 335.129C290.432 335.05 291.616 334.892 291.616 334.892L291.853 338.849Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M330.517 319.06C330.517 319.06 330.201 319.298 329.57 319.614C328.939 320.01 327.992 320.485 326.73 321.197C325.546 321.91 323.968 322.622 322.232 323.493C321.364 323.968 320.417 324.284 319.391 324.759C318.366 325.155 317.34 325.709 316.235 326.105C311.816 327.926 306.451 329.588 300.612 330.775C294.772 332.042 288.46 332.754 282.069 332.833C275.677 332.913 269.365 332.358 263.447 331.329C257.529 330.3 252.163 328.717 247.665 327.134C246.561 326.738 245.456 326.343 244.43 325.947C243.404 325.551 242.457 325.076 241.589 324.759C239.775 324.047 238.275 323.255 237.013 322.622C236.382 322.306 235.829 322.068 235.356 321.831C234.882 321.593 234.488 321.356 234.172 321.197C233.541 320.802 233.146 320.643 233.146 320.643L236.934 313.915C236.934 313.915 237.25 314.073 237.881 314.39C238.196 314.548 238.512 314.786 238.986 315.023C239.459 315.261 239.932 315.498 240.485 315.815C241.668 316.369 243.01 317.081 244.667 317.794C245.456 318.11 246.324 318.506 247.271 318.902C248.218 319.218 249.165 319.614 250.19 320.01C254.293 321.514 259.265 322.939 264.709 323.889C270.154 324.839 275.993 325.393 281.832 325.314C287.671 325.234 293.51 324.522 298.955 323.414C304.32 322.306 309.291 320.722 313.315 319.06C314.341 318.664 315.288 318.269 316.235 317.873C317.182 317.477 318.05 317.081 318.839 316.685C320.417 315.894 321.837 315.261 322.942 314.548C324.047 313.915 324.915 313.44 325.546 313.123C326.177 312.807 326.414 312.569 326.414 312.569L330.517 319.06Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M233.225 339.641C233.225 339.641 232.752 339.403 231.884 339.008C231.016 338.612 229.753 337.979 228.333 337.266C226.834 336.554 225.177 335.525 223.362 334.575C221.547 333.546 219.732 332.358 217.838 331.171C216.024 329.905 214.209 328.717 212.552 327.451C210.895 326.184 209.395 324.997 208.133 323.968C205.687 321.831 204.03 320.406 204.03 320.406L209.159 314.707C209.159 314.707 210.737 316.052 213.025 318.031C214.209 318.981 215.629 320.089 217.128 321.277C218.706 322.385 220.363 323.572 222.02 324.759C223.756 325.868 225.492 326.976 227.149 327.926C228.806 328.876 230.385 329.746 231.726 330.459C233.067 331.171 234.251 331.725 235.04 332.121C235.829 332.517 236.303 332.754 236.303 332.754L233.225 339.641Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M353.794 154.177C353.794 154.177 354.741 155.127 356.556 156.869C357.029 157.344 357.503 157.739 358.055 158.293C358.607 158.847 359.16 159.481 359.791 160.114C360.422 160.747 361.132 161.46 361.764 162.251C362.474 163.043 363.184 163.913 363.894 164.784C364.289 165.259 364.683 165.655 365.078 166.13C365.472 166.605 365.867 167.08 366.261 167.634C367.05 168.663 367.918 169.692 368.708 170.879C369.497 172.067 370.365 173.254 371.233 174.52C372.101 175.787 372.89 177.133 373.758 178.557C377.151 184.178 380.465 190.827 383.226 198.426C385.988 206.025 387.961 214.574 388.986 223.756C389.46 228.347 389.697 233.096 389.539 237.925C389.539 240.379 389.302 242.832 389.144 245.286C389.065 246.553 388.908 247.74 388.75 249.007C388.671 249.64 388.592 250.273 388.513 250.906C388.434 251.54 388.276 252.173 388.197 252.806C386.619 262.78 383.621 272.833 379.044 282.411C376.835 287.239 374.152 291.83 371.154 296.342C368.155 300.775 364.841 305.049 361.29 309.007C357.661 312.965 353.794 316.686 349.691 320.089C345.509 323.493 341.248 326.58 336.671 329.351C327.597 334.812 317.892 338.849 308.186 341.461L306.371 341.936C305.74 342.095 305.188 342.174 304.557 342.332C303.373 342.57 302.11 342.886 300.927 343.124C298.481 343.52 296.114 343.994 293.667 344.232C288.854 344.865 284.12 345.103 279.543 345.103C270.311 345.023 261.631 343.836 253.82 341.857C246.008 339.878 239.064 337.266 233.146 334.417C231.647 333.704 230.227 332.992 228.885 332.279C227.544 331.567 226.281 330.775 225.019 330.142C223.835 329.43 222.652 328.717 221.547 328.005C220.995 327.688 220.442 327.292 219.969 326.976C219.495 326.659 218.943 326.263 218.47 325.947C217.523 325.234 216.576 324.601 215.708 324.047C214.84 323.414 214.13 322.781 213.42 322.226C212.709 321.672 211.999 321.118 211.447 320.643C210.816 320.168 210.342 319.693 209.869 319.298C207.975 317.635 206.949 316.765 206.949 316.765L208.764 314.707C208.764 314.707 209.79 315.577 211.605 317.16C212.078 317.556 212.552 318.031 213.183 318.506C213.814 318.981 214.445 319.456 215.155 320.01C215.866 320.564 216.576 321.118 217.444 321.751C218.312 322.306 219.18 322.939 220.127 323.651C220.6 323.968 221.073 324.285 221.547 324.68C222.02 324.997 222.573 325.314 223.125 325.709C224.23 326.343 225.334 327.134 226.518 327.767C227.702 328.48 228.964 329.113 230.306 329.905C231.647 330.617 232.988 331.25 234.409 331.963C240.169 334.733 246.876 337.266 254.53 339.245C262.105 341.145 270.627 342.332 279.543 342.411C284.041 342.411 288.617 342.174 293.352 341.62C295.719 341.382 298.007 340.907 300.374 340.512C301.558 340.274 302.742 340.037 303.925 339.72L305.74 339.324L307.476 338.849C316.945 336.395 326.414 332.438 335.251 327.055C339.67 324.443 343.852 321.356 347.955 318.031C351.979 314.707 355.688 311.065 359.239 307.187C362.711 303.308 365.946 299.192 368.865 294.838C371.706 290.485 374.31 285.973 376.519 281.303C380.938 271.962 383.858 262.147 385.436 252.41L385.751 250.59C385.83 249.957 385.909 249.402 385.988 248.769C386.146 247.582 386.304 246.395 386.383 245.128C386.54 242.753 386.777 240.379 386.777 238.004C386.935 233.255 386.619 228.663 386.225 224.152C385.199 215.207 383.226 206.895 380.622 199.455C377.94 192.014 374.704 185.602 371.39 180.141C370.522 178.795 369.733 177.449 368.944 176.262C368.076 175.075 367.287 173.887 366.498 172.7C365.709 171.592 364.841 170.563 364.052 169.534C363.658 169.059 363.263 168.584 362.947 168.109C362.553 167.634 362.158 167.238 361.843 166.763C361.132 165.892 360.422 165.101 359.712 164.309C359.002 163.518 358.371 162.884 357.74 162.251C357.108 161.618 356.556 160.985 356.004 160.431C355.451 159.877 354.978 159.402 354.504 159.006C352.768 157.344 351.822 156.394 351.822 156.394L353.794 154.177Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M285.619 349.852C285.619 349.852 285.067 349.852 284.12 349.931C283.173 349.931 281.832 350.01 280.175 350.01C278.518 349.931 276.624 349.931 274.572 349.852C273.547 349.773 272.521 349.694 271.416 349.615C270.864 349.535 270.311 349.535 269.759 349.456C269.207 349.377 268.654 349.298 268.102 349.298C266.997 349.14 265.893 349.06 264.867 348.902C263.762 348.744 262.736 348.585 261.711 348.427C260.685 348.269 259.738 348.111 258.791 347.952C257.844 347.794 256.976 347.556 256.187 347.398C254.609 347.082 253.268 346.765 252.321 346.527C251.374 346.29 250.9 346.132 250.9 346.132L252.873 338.691C252.873 338.691 253.346 338.849 254.214 339.087C255.082 339.324 256.345 339.641 257.844 339.957C258.633 340.116 259.422 340.274 260.29 340.512C261.158 340.67 262.105 340.828 263.052 340.986C263.999 341.145 264.946 341.303 265.972 341.461C266.997 341.541 268.023 341.699 268.97 341.857C269.443 341.936 269.996 341.936 270.469 342.015C270.943 342.015 271.495 342.095 271.968 342.095C272.994 342.174 273.941 342.253 274.888 342.332C276.782 342.411 278.597 342.411 280.096 342.49C281.595 342.49 282.936 342.411 283.804 342.411C284.672 342.411 285.225 342.332 285.225 342.332L285.619 349.852Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M336.987 334.97C336.987 334.97 336.514 335.208 335.646 335.683C334.778 336.158 333.594 336.87 332.095 337.583C330.596 338.295 328.939 339.245 327.045 340.036C326.098 340.432 325.151 340.907 324.125 341.303C323.1 341.699 322.074 342.095 321.048 342.49C320.022 342.886 318.996 343.282 317.971 343.599C316.945 343.915 315.919 344.232 314.972 344.548C313 345.182 311.185 345.657 309.607 346.132C308.028 346.606 306.687 346.844 305.74 347.081C304.793 347.319 304.241 347.398 304.241 347.398L302.663 339.878C302.663 339.878 303.136 339.799 304.004 339.562C304.872 339.403 306.135 339.087 307.634 338.691C309.133 338.295 310.869 337.82 312.684 337.266C313.631 336.949 314.499 336.633 315.525 336.316C316.471 336 317.418 335.604 318.365 335.287C319.312 334.891 320.259 334.575 321.206 334.179C322.153 333.783 323.021 333.387 323.889 332.992C325.625 332.279 327.282 331.408 328.623 330.696C330.043 330.063 331.148 329.43 331.937 328.955C332.726 328.48 333.2 328.242 333.2 328.242L336.987 334.97Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M375.967 298.4C375.967 298.4 374.705 300.221 372.811 302.912C371.864 304.258 370.68 305.762 369.418 307.345C368.155 308.928 366.656 310.591 365.236 312.253C363.737 313.836 362.237 315.419 360.817 316.923C359.318 318.348 357.976 319.694 356.714 320.802C354.189 322.939 352.532 324.364 352.532 324.364L347.719 318.348C347.719 318.348 349.297 317.002 351.585 315.023C352.69 313.994 354.031 312.728 355.372 311.382C356.714 310.036 358.134 308.533 359.554 307.029C360.896 305.445 362.237 303.941 363.421 302.437C364.604 300.933 365.709 299.509 366.577 298.242C368.313 295.709 369.497 294.047 369.497 294.047L375.967 298.4Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M394.037 247.898C394.037 247.898 393.958 248.453 393.879 249.402C393.8 250.352 393.642 251.698 393.326 253.36C393.011 255.023 392.774 256.922 392.301 258.901C392.064 259.93 391.827 260.959 391.591 261.988C391.354 263.017 391.038 264.126 390.801 265.155C390.486 266.184 390.249 267.292 389.933 268.321C389.618 269.35 389.302 270.379 388.987 271.329C388.355 273.308 387.645 275.128 387.093 276.632C386.54 278.215 385.988 279.482 385.594 280.353C385.199 281.223 384.962 281.777 384.962 281.777L377.94 278.69C377.94 278.69 378.176 278.215 378.492 277.424C378.887 276.632 379.36 275.445 379.912 273.941C380.465 272.516 381.096 270.854 381.648 268.954C381.964 268.004 382.28 267.054 382.516 266.104C382.832 265.155 383.069 264.126 383.305 263.176C383.542 262.147 383.858 261.197 384.094 260.247C384.331 259.297 384.489 258.268 384.726 257.318C385.199 255.418 385.436 253.677 385.673 252.173C385.909 250.669 386.067 249.402 386.146 248.532C386.225 247.661 386.304 247.107 386.304 247.107L394.037 247.898Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M387.251 194.785C387.251 194.785 387.408 195.339 387.803 196.209C388.197 197.08 388.592 198.426 389.065 200.009C389.302 200.801 389.618 201.671 389.854 202.542C390.091 203.492 390.407 204.442 390.644 205.392C390.88 206.421 391.196 207.45 391.433 208.479C391.669 209.508 391.906 210.616 392.143 211.645C392.222 212.199 392.379 212.753 392.458 213.228C392.537 213.782 392.616 214.336 392.774 214.811C392.932 215.84 393.169 216.948 393.326 217.978C393.642 220.036 393.8 221.935 394.037 223.598C394.194 225.26 394.273 226.606 394.352 227.555C394.431 228.505 394.431 229.059 394.431 229.059L386.777 229.455C386.777 229.455 386.777 228.98 386.698 228.03C386.619 227.16 386.54 225.893 386.383 224.31C386.225 222.806 385.988 220.985 385.672 219.086C385.515 218.136 385.357 217.186 385.199 216.157C385.12 215.682 385.041 215.128 384.962 214.653L384.647 213.149C384.41 212.12 384.173 211.17 384.015 210.141C383.779 209.191 383.542 208.241 383.226 207.291C382.99 206.342 382.753 205.471 382.516 204.6C382.279 203.729 381.964 202.938 381.727 202.225C381.254 200.721 380.859 199.534 380.544 198.742C380.228 197.872 380.07 197.397 380.07 197.397L387.251 194.785Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M357.108 150.536C357.108 150.536 358.687 152.04 361.054 154.336C362.237 155.523 363.5 156.869 364.92 158.373C366.262 159.877 367.682 161.618 369.102 163.28C370.444 165.022 371.785 166.763 373.048 168.425C374.231 170.088 375.336 171.671 376.204 173.096C377.072 174.521 377.782 175.629 378.334 176.499C378.887 177.291 379.123 177.766 379.123 177.766L372.495 181.645C372.495 181.645 372.259 181.17 371.785 180.457C371.312 179.666 370.601 178.637 369.812 177.291C369.023 176.025 367.919 174.521 366.814 172.937C365.709 171.354 364.447 169.771 363.184 168.109C361.843 166.526 360.58 164.943 359.239 163.518C357.898 162.093 356.714 160.826 355.609 159.718C353.4 157.581 351.901 156.156 351.901 156.156L357.108 150.536Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M342.905 198.98C342.905 198.98 342.747 198.663 342.432 198.188C342.116 197.634 341.643 196.922 341.09 196.051C340.538 195.18 339.828 194.23 339.118 193.122C338.329 192.093 337.461 190.985 336.672 189.877C335.725 188.848 334.857 187.74 333.989 186.79C333.121 185.84 332.253 184.969 331.543 184.177C330.043 182.753 329.018 181.803 329.018 181.803L334.147 176.104C334.147 176.104 335.251 177.133 336.908 178.795C337.697 179.586 338.644 180.615 339.591 181.644C340.538 182.753 341.564 183.94 342.511 185.048C343.457 186.315 344.404 187.502 345.272 188.61C346.061 189.798 346.85 190.906 347.482 191.856C348.113 192.806 348.586 193.676 348.981 194.23C349.375 194.784 349.533 195.101 349.533 195.101L342.905 198.98Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M228.806 292.859C228.806 292.859 229.517 293.493 230.858 294.601C231.174 294.917 231.568 295.234 231.963 295.551C232.357 295.867 232.831 296.263 233.383 296.659C233.856 297.055 234.409 297.451 235.04 297.925C235.671 298.321 236.303 298.796 236.934 299.271C242.378 303.071 250.742 307.741 261.789 310.511C267.313 311.936 273.468 312.728 279.938 312.807C283.173 312.807 286.566 312.649 289.959 312.174C291.695 312.015 293.352 311.699 295.088 311.382C295.956 311.224 296.824 310.986 297.692 310.828L298.954 310.511L300.217 310.195C307.082 308.374 313.947 305.524 320.259 301.646C323.494 299.746 326.493 297.53 329.412 295.155C332.332 292.78 335.015 290.089 337.619 287.318C340.144 284.469 342.511 281.461 344.562 278.374C346.614 275.208 348.508 271.962 350.086 268.558C353.242 261.83 355.451 254.706 356.477 247.661L356.714 246.315L356.872 244.97C356.951 244.099 357.108 243.228 357.187 242.358C357.266 240.616 357.503 238.875 357.424 237.133C357.503 233.73 357.345 230.326 357.03 227.08C356.319 220.59 354.899 214.574 352.926 209.191C349.06 198.426 343.615 190.51 339.276 185.523C338.723 184.89 338.25 184.257 337.776 183.703C337.303 183.149 336.829 182.674 336.356 182.199C335.883 181.724 335.488 181.328 335.093 180.932C334.699 180.536 334.304 180.22 333.989 179.903C332.726 178.637 332.016 178.003 332.016 178.003L333.831 175.945C333.831 175.945 334.541 176.658 335.883 177.924C336.198 178.241 336.593 178.557 336.987 179.032C337.382 179.428 337.776 179.903 338.25 180.378C338.723 180.853 339.197 181.407 339.749 181.961C340.222 182.515 340.775 183.149 341.327 183.782C345.746 189.006 351.427 197.238 355.451 208.32C357.424 213.861 358.923 220.115 359.712 226.843C360.028 230.167 360.265 233.65 360.107 237.212C360.107 238.954 359.949 240.774 359.791 242.595C359.712 243.466 359.555 244.416 359.476 245.286L359.318 246.632L359.081 247.978C357.976 255.26 355.688 262.622 352.453 269.587C350.796 273.07 348.823 276.474 346.693 279.719C344.562 282.965 342.037 286.052 339.512 288.981C336.829 291.83 334.068 294.601 330.99 297.134C327.913 299.588 324.836 301.883 321.522 303.862C314.893 307.82 307.871 310.828 300.769 312.649L299.428 313.044L298.086 313.361C297.218 313.519 296.35 313.757 295.404 313.915C293.589 314.232 291.853 314.548 290.117 314.707C286.645 315.182 283.173 315.34 279.78 315.34C273.073 315.261 266.682 314.469 261 312.965C249.559 310.116 240.879 305.287 235.277 301.329C234.567 300.854 233.935 300.379 233.304 299.904C232.673 299.429 232.121 299.034 231.568 298.559C231.016 298.163 230.542 297.767 230.069 297.451C229.596 297.134 229.28 296.738 228.885 296.421C227.465 295.234 226.755 294.601 226.755 294.601L228.806 292.859Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M236.303 284.548C236.303 284.548 236.934 285.102 238.117 286.052C238.433 286.289 238.749 286.606 239.064 286.844C239.459 287.16 239.853 287.477 240.248 287.793C240.721 288.11 241.116 288.506 241.668 288.902C242.221 289.297 242.773 289.614 243.325 290.089C247.981 293.334 255.161 297.292 264.551 299.667C269.286 300.854 274.493 301.567 280.096 301.646C282.857 301.646 285.777 301.567 288.618 301.171C290.038 301.013 291.537 300.696 293.036 300.458C293.747 300.3 294.536 300.142 295.246 299.983L296.35 299.746L297.455 299.429C303.294 297.925 309.133 295.472 314.578 292.147C317.34 290.485 319.865 288.585 322.39 286.606C324.915 284.548 327.203 282.252 329.412 279.878C331.543 277.424 333.594 274.891 335.409 272.2C337.145 269.508 338.802 266.738 340.144 263.809C342.826 258.031 344.72 252.015 345.667 245.92L345.825 244.811L345.983 243.703C346.062 242.991 346.14 242.199 346.219 241.487C346.298 239.983 346.456 238.479 346.456 237.054C346.535 234.125 346.377 231.276 346.14 228.426C345.509 222.885 344.326 217.661 342.669 213.149C339.355 203.967 334.699 197.238 330.99 192.885C330.517 192.331 330.122 191.856 329.649 191.381C329.254 190.906 328.781 190.51 328.387 190.114C327.992 189.719 327.676 189.323 327.361 189.006C327.045 188.689 326.729 188.373 326.414 188.135C325.309 187.106 324.757 186.473 324.757 186.473L326.572 184.415C326.572 184.415 327.203 184.969 328.308 186.077C328.623 186.394 328.939 186.631 329.254 187.027C329.57 187.344 329.965 187.74 330.359 188.215C330.754 188.61 331.227 189.085 331.622 189.56C332.016 190.035 332.49 190.589 332.963 191.143C336.83 195.576 341.643 202.7 345.115 212.199C346.851 216.948 348.113 222.331 348.744 228.109C349.06 231.038 349.218 233.967 349.139 237.054C349.139 238.558 348.981 240.141 348.902 241.645C348.823 242.437 348.744 243.228 348.665 243.941L348.508 245.128L348.35 246.315C347.403 252.569 345.43 258.901 342.669 264.917C341.248 267.925 339.591 270.854 337.776 273.624C335.883 276.395 333.752 279.086 331.543 281.619C329.254 284.073 326.808 286.448 324.204 288.664C321.601 290.801 318.918 292.78 316.077 294.443C310.396 297.846 304.32 300.458 298.244 302.042L297.14 302.358L295.956 302.596C295.167 302.754 294.457 302.991 293.668 303.071C292.168 303.308 290.59 303.625 289.091 303.783C286.093 304.179 283.094 304.337 280.175 304.337C274.336 304.258 268.891 303.546 263.999 302.279C254.214 299.825 246.718 295.63 241.826 292.305C241.195 291.91 240.642 291.514 240.09 291.118C239.538 290.722 239.064 290.326 238.591 290.01C238.117 289.693 237.723 289.297 237.328 289.06C236.934 288.743 236.618 288.427 236.303 288.189C235.119 287.16 234.488 286.606 234.488 286.606L236.303 284.548Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M224.23 297.925C224.23 297.925 225.019 298.638 226.518 299.825C226.913 300.142 227.307 300.538 227.781 300.854C228.254 301.25 228.728 301.646 229.28 302.042C229.832 302.437 230.385 302.912 231.095 303.387C231.726 303.862 232.436 304.337 233.225 304.891C233.62 305.129 233.935 305.445 234.33 305.683C234.725 305.92 235.119 306.158 235.593 306.474C236.46 307.028 237.328 307.583 238.275 308.137C239.222 308.691 240.248 309.245 241.274 309.799C242.3 310.353 243.404 310.907 244.509 311.461C249.007 313.598 254.372 315.657 260.369 317.161C266.366 318.664 273.073 319.535 280.096 319.614C283.647 319.614 287.276 319.456 290.985 318.981C292.8 318.823 294.693 318.427 296.587 318.11C297.534 317.952 298.481 317.715 299.349 317.477L300.769 317.161L302.19 316.765C309.686 314.786 317.103 311.699 324.047 307.503C327.519 305.445 330.833 302.992 334.068 300.379C337.224 297.767 340.223 294.838 342.984 291.83C345.746 288.743 348.271 285.498 350.559 282.094C352.769 278.611 354.899 275.128 356.556 271.408C360.028 264.047 362.395 256.289 363.579 248.69L363.816 247.265L363.973 245.841C364.052 244.891 364.21 243.941 364.289 242.991C364.447 241.091 364.605 239.191 364.605 237.371C364.762 233.65 364.526 230.009 364.131 226.447C363.342 219.402 361.764 212.832 359.712 206.975C357.582 201.117 355.057 196.051 352.453 191.777C351.743 190.748 351.191 189.639 350.48 188.69C349.849 187.74 349.139 186.79 348.508 185.919C347.876 185.048 347.245 184.257 346.614 183.465C346.298 183.069 345.983 182.674 345.746 182.278C345.43 181.882 345.115 181.565 344.878 181.249C344.326 180.536 343.773 179.903 343.221 179.27C342.669 178.637 342.116 178.162 341.643 177.608C341.169 177.133 340.696 176.658 340.301 176.183C339.907 175.787 339.512 175.391 339.118 175.075C337.698 173.729 336.987 173.017 336.987 173.017L338.802 170.958C338.802 170.958 339.591 171.671 341.012 173.096C341.406 173.412 341.801 173.808 342.195 174.283C342.59 174.758 343.063 175.233 343.616 175.708C344.089 176.262 344.641 176.816 345.194 177.37C345.746 178.003 346.298 178.637 346.93 179.349C347.245 179.666 347.561 180.061 347.876 180.457C348.192 180.853 348.508 181.249 348.823 181.645C349.455 182.436 350.086 183.307 350.796 184.178C351.427 185.128 352.137 186.077 352.769 187.027C353.479 188.056 354.11 189.085 354.82 190.194C357.503 194.626 360.186 199.93 362.316 205.946C364.526 211.962 366.104 218.769 366.893 226.051C367.287 229.693 367.445 233.492 367.366 237.292C367.366 239.191 367.209 241.17 367.051 243.149C366.972 244.099 366.814 245.128 366.735 246.078L366.577 247.582L366.341 249.086C365.078 257.002 362.711 264.996 359.081 272.595C357.345 276.395 355.136 280.036 352.848 283.598C350.48 287.16 347.798 290.485 345.036 293.651C342.116 296.817 339.118 299.746 335.804 302.517C332.49 305.208 329.097 307.662 325.467 309.878C318.287 314.232 310.633 317.398 302.9 319.456L301.479 319.852L300.059 320.168C299.112 320.406 298.165 320.643 297.14 320.802C295.246 321.118 293.273 321.514 291.379 321.672C287.592 322.147 283.804 322.306 280.175 322.306C272.836 322.227 265.972 321.356 259.738 319.773C253.583 318.19 248.06 316.131 243.404 313.915C242.221 313.361 241.116 312.807 240.011 312.253C238.986 311.699 237.96 311.065 236.934 310.511C235.987 309.957 235.04 309.324 234.172 308.77C233.699 308.532 233.304 308.216 232.91 307.978C232.515 307.662 232.121 307.424 231.726 307.187C230.937 306.633 230.227 306.158 229.596 305.683C228.964 305.208 228.333 304.733 227.781 304.258C227.228 303.783 226.676 303.387 226.203 302.992C225.729 302.596 225.335 302.2 224.94 301.883C223.441 300.617 222.652 299.904 222.652 299.904L224.23 297.925Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M352.611 231.434C352.611 231.434 352.611 231.117 352.532 230.484C352.453 229.851 352.453 228.98 352.295 227.951C352.137 226.922 352.058 225.735 351.822 224.389C351.743 223.756 351.585 223.043 351.506 222.41C351.427 222.094 351.427 221.698 351.348 221.381L351.112 220.352C350.954 219.64 350.796 219.006 350.638 218.294C350.48 217.661 350.323 216.948 350.086 216.315C349.928 215.682 349.77 215.049 349.612 214.495C349.455 213.94 349.218 213.386 349.06 212.911C348.744 211.882 348.508 211.091 348.271 210.537C348.034 209.983 347.955 209.666 347.955 209.666L355.136 206.896C355.136 206.896 355.294 207.291 355.53 207.845C355.767 208.479 356.083 209.349 356.398 210.458C356.556 211.012 356.793 211.566 356.951 212.199C357.108 212.832 357.345 213.545 357.503 214.178C357.661 214.89 357.898 215.603 358.055 216.315C358.213 217.028 358.371 217.819 358.529 218.532L358.766 219.64C358.844 220.035 358.923 220.431 358.923 220.748C359.081 221.46 359.16 222.252 359.318 222.964C359.555 224.389 359.633 225.735 359.791 226.843C359.949 227.951 359.949 228.98 360.028 229.613C360.107 230.247 360.107 230.642 360.107 230.642L352.611 231.434Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M346.535 264.759C346.535 264.759 346.693 264.442 346.929 263.888C347.166 263.334 347.561 262.543 347.876 261.593C348.192 260.643 348.744 259.535 349.06 258.268C349.297 257.635 349.454 257.002 349.691 256.368C349.928 255.735 350.086 255.023 350.244 254.389C350.401 253.677 350.638 253.044 350.796 252.411C350.954 251.777 351.111 251.065 351.19 250.432C351.506 249.165 351.664 247.978 351.822 246.949C351.979 245.92 352.058 245.049 352.137 244.416C352.216 243.782 352.216 243.466 352.216 243.466L359.87 244.337C359.87 244.337 359.791 244.732 359.712 245.366C359.633 245.999 359.554 247.028 359.318 248.136C359.081 249.244 358.923 250.59 358.608 252.015C358.45 252.727 358.292 253.44 358.134 254.152C357.976 254.864 357.74 255.656 357.582 256.368C357.345 257.081 357.187 257.872 356.951 258.585C356.714 259.297 356.477 260.01 356.24 260.722C355.846 262.068 355.294 263.334 354.899 264.442C354.504 265.55 354.11 266.421 353.873 267.054C353.636 267.688 353.479 268.004 353.479 268.004L346.535 264.759Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M326.019 291.672C326.019 291.672 327.045 290.801 328.623 289.377C329.412 288.664 330.28 287.793 331.227 286.923C332.174 285.973 333.121 284.944 334.068 283.994C334.936 282.886 335.883 281.857 336.751 280.907C337.54 279.878 338.329 278.928 338.96 278.057C340.144 276.316 340.933 275.208 340.933 275.208L347.324 279.482C347.324 279.482 346.456 280.748 345.115 282.648C344.405 283.598 343.615 284.627 342.747 285.814C341.801 286.923 340.775 288.11 339.828 289.297C338.723 290.406 337.697 291.514 336.672 292.543C335.646 293.493 334.699 294.443 333.831 295.234C332.095 296.738 330.911 297.767 330.911 297.767L326.019 291.672Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M295.561 306.237C295.561 306.237 295.877 306.158 296.508 305.999C297.139 305.841 297.928 305.683 298.954 305.366C299.98 305.05 301.164 304.812 302.347 304.337C302.978 304.1 303.61 303.941 304.241 303.704C304.872 303.466 305.503 303.229 306.214 302.992C306.845 302.754 307.555 302.517 308.107 302.279C308.739 302.042 309.37 301.725 309.922 301.488C311.106 301.013 312.211 300.379 313.157 299.984C314.104 299.509 314.814 299.113 315.367 298.796C315.919 298.48 316.235 298.321 316.235 298.321L320.022 305.05C320.022 305.05 319.707 305.208 319.075 305.604C318.523 305.92 317.655 306.395 316.629 306.87C315.604 307.345 314.42 308.058 313.079 308.532C312.447 308.849 311.737 309.087 311.027 309.403C310.317 309.72 309.607 309.957 308.896 310.195C308.186 310.432 307.476 310.749 306.766 310.986C306.056 311.224 305.346 311.461 304.636 311.699C303.294 312.174 301.953 312.49 300.848 312.807C299.743 313.124 298.796 313.282 298.165 313.44C297.534 313.598 297.139 313.678 297.139 313.678L295.561 306.237Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M261.79 305.366C261.79 305.366 262.105 305.445 262.736 305.604C263.289 305.762 264.157 305.92 265.183 306.158C265.656 306.237 266.208 306.395 266.84 306.554C267.392 306.633 268.023 306.791 268.654 306.87C269.286 306.949 269.917 307.108 270.627 307.187C271.337 307.266 271.968 307.345 272.679 307.424L273.704 307.583C274.02 307.583 274.415 307.662 274.73 307.662C275.44 307.741 276.072 307.741 276.703 307.82C277.965 307.899 279.228 307.899 280.254 307.899C281.279 307.899 282.147 307.82 282.779 307.82C283.41 307.82 283.726 307.82 283.726 307.82L284.041 315.498C284.041 315.498 283.647 315.498 283.015 315.498C282.305 315.498 281.358 315.577 280.254 315.577C279.07 315.498 277.729 315.577 276.308 315.498C275.598 315.419 274.888 315.419 274.099 315.34C273.704 315.34 273.31 315.261 272.994 315.261L271.89 315.102C271.101 315.023 270.39 314.944 269.601 314.865C268.812 314.786 268.102 314.628 267.392 314.548C266.682 314.39 265.972 314.311 265.34 314.232C264.709 314.073 264.078 313.994 263.525 313.836C262.421 313.598 261.474 313.361 260.843 313.203C260.211 313.044 259.817 312.965 259.817 312.965L261.79 305.366Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M232.12 289.139C232.12 289.139 233.146 290.01 234.724 291.435C235.513 292.068 236.539 292.86 237.565 293.651C238.591 294.443 239.774 295.234 240.879 296.026C242.063 296.738 243.246 297.53 244.351 298.163C245.456 298.796 246.56 299.429 247.428 299.904C248.375 300.379 249.164 300.775 249.717 301.013C250.269 301.329 250.585 301.408 250.585 301.408L247.428 308.453C247.428 308.453 247.034 308.295 246.481 307.978C245.85 307.662 244.982 307.266 243.956 306.712C242.931 306.237 241.747 305.525 240.485 304.812C239.222 304.1 237.96 303.229 236.618 302.437C235.356 301.567 234.093 300.696 232.909 299.825C231.805 298.955 230.7 298.163 229.832 297.371C228.096 295.867 226.913 294.838 226.913 294.838L232.12 289.139Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M376.993 224.231C376.993 224.231 377.23 225.893 377.387 228.743C377.624 231.593 377.703 235.709 377.466 240.616C377.23 245.524 376.519 251.302 375.099 257.318C373.758 263.334 371.706 269.588 368.944 275.604C366.262 281.619 362.948 287.319 359.318 292.306C355.688 297.292 351.901 301.567 348.429 305.05C347.561 305.92 346.693 306.712 345.904 307.504C345.115 308.295 344.247 308.928 343.537 309.641C342.037 310.986 340.617 312.015 339.512 312.886C338.96 313.361 338.408 313.757 338.013 314.074C337.54 314.39 337.145 314.628 336.829 314.865C336.198 315.34 335.883 315.578 335.883 315.578L328.386 304.733C328.386 304.733 328.702 304.496 329.254 304.179C329.491 304.021 329.886 303.783 330.28 303.467C330.675 303.15 331.069 302.833 331.622 302.438C332.569 301.646 333.831 300.775 335.094 299.588C335.725 299.034 336.435 298.48 337.145 297.767C337.855 297.134 338.565 296.422 339.354 295.63C342.353 292.622 345.746 288.902 348.823 284.548C351.901 280.195 354.82 275.287 357.108 270.142C359.476 264.997 361.212 259.535 362.395 254.31C363.579 249.086 364.21 244.178 364.447 239.904C364.605 235.629 364.526 232.067 364.368 229.614C364.21 227.16 363.973 225.735 363.973 225.735L376.993 224.231Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M345.667 163.201C345.667 163.201 346.377 163.914 347.64 165.101C348.902 166.288 350.638 168.109 352.69 170.246C353.637 171.354 354.741 172.621 355.846 173.887C356.872 175.233 358.055 176.658 359.16 178.162C361.29 181.249 363.579 184.573 365.473 188.056C367.445 191.539 369.102 195.18 370.523 198.663C371.154 200.405 371.864 202.067 372.416 203.729C372.969 205.392 373.521 206.896 373.837 208.32C374.231 209.745 374.626 211.091 374.862 212.278C375.099 213.466 375.336 214.495 375.573 215.365C375.73 216.236 375.888 216.869 375.967 217.344C376.046 217.819 376.125 218.057 376.125 218.057L371.548 218.848C371.548 218.848 371.469 218.611 371.469 218.136C371.391 217.661 371.233 217.028 371.075 216.236C370.917 215.444 370.68 214.415 370.444 213.307C370.128 212.199 369.812 210.933 369.418 209.508C369.023 208.162 368.55 206.658 367.998 205.075C367.445 203.492 366.814 201.909 366.183 200.246C364.762 197.001 363.263 193.518 361.369 190.194C359.555 186.869 357.424 183.703 355.373 180.774C354.347 179.349 353.242 178.003 352.216 176.658C351.19 175.391 350.165 174.283 349.218 173.175C347.245 171.117 345.667 169.375 344.404 168.267C343.221 167.159 342.511 166.447 342.511 166.447L345.667 163.201Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M228.648 317.794C228.648 317.794 228.412 317.636 228.017 317.398C227.623 317.161 227.07 316.844 226.439 316.369C225.808 315.894 225.019 315.419 224.23 314.865C223.835 314.548 223.441 314.311 222.967 313.994C222.573 313.678 222.178 313.361 221.705 313.044C220.916 312.411 220.048 311.778 219.259 311.145C218.47 310.511 217.838 309.957 217.207 309.403C216.023 308.374 215.234 307.741 215.234 307.741L218.154 304.496C218.154 304.496 218.943 305.129 220.048 306.079C220.6 306.554 221.231 307.108 221.941 307.741C222.652 308.295 223.441 308.928 224.23 309.562C224.624 309.878 225.019 310.195 225.413 310.432C225.808 310.749 226.202 310.986 226.597 311.224C227.386 311.778 228.096 312.253 228.648 312.649C229.28 313.124 229.753 313.44 230.148 313.599C230.542 313.757 230.7 313.994 230.7 313.994L228.648 317.794Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M324.52 329.746C324.52 329.746 324.283 329.905 323.731 330.063C323.257 330.3 322.547 330.617 321.679 330.934C320.022 331.725 317.734 332.517 315.446 333.387C314.262 333.783 313.157 334.179 312.053 334.496C310.948 334.891 309.922 335.208 309.054 335.366C307.318 335.841 306.135 336.158 306.135 336.158L305.109 332.279C305.109 332.279 306.214 331.963 307.95 331.488C308.817 331.25 309.764 330.934 310.79 330.617C311.816 330.3 312.921 329.905 314.025 329.509C316.235 328.638 318.444 327.847 320.022 327.134C320.811 326.817 321.521 326.501 321.995 326.263C322.468 326.026 322.705 325.947 322.705 325.947L324.52 329.746Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M352.453 310.432C352.453 310.432 351.585 311.303 350.244 312.569C349.533 313.203 348.744 313.836 347.876 314.627C347.008 315.34 346.062 316.211 345.115 316.923C344.168 317.635 343.221 318.427 342.274 319.139C341.327 319.852 340.459 320.406 339.749 320.96C338.96 321.514 338.408 321.91 337.934 322.227C337.461 322.543 337.224 322.701 337.224 322.701L335.015 319.298C335.015 319.298 335.251 319.139 335.725 318.823C336.119 318.506 336.751 318.11 337.461 317.635C338.171 317.161 339.039 316.527 339.907 315.894C340.775 315.182 341.722 314.469 342.59 313.757C343.537 313.044 344.405 312.253 345.272 311.54C346.14 310.828 346.93 310.195 347.561 309.561C348.823 308.374 349.691 307.503 349.691 307.503L352.453 310.432Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M372.732 283.202C372.732 283.202 372.574 283.519 372.337 283.915C372.101 284.39 371.706 285.023 371.233 285.815C370.759 286.606 370.286 287.556 369.655 288.506C369.023 289.456 368.392 290.485 367.761 291.593C367.13 292.622 366.419 293.651 365.788 294.601C365.157 295.551 364.526 296.422 363.973 297.134C362.869 298.559 362.08 299.588 362.08 299.588L358.923 297.055C358.923 297.055 359.633 296.105 360.738 294.759C361.291 294.047 361.843 293.176 362.474 292.305C363.105 291.435 363.816 290.485 364.368 289.456C364.999 288.427 365.63 287.477 366.183 286.527C366.735 285.577 367.209 284.706 367.682 283.915C368.076 283.123 368.471 282.49 368.708 282.015C368.944 281.54 369.102 281.303 369.102 281.303L372.732 283.202Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M383.148 250.906C383.148 250.906 382.911 252.094 382.674 253.914C382.516 254.785 382.28 255.893 382.043 257.001C381.806 258.11 381.569 259.297 381.254 260.484C380.623 262.859 379.991 265.234 379.439 266.975C379.123 267.846 378.887 268.558 378.729 269.112C378.571 269.587 378.492 269.904 378.492 269.904L374.626 268.479C374.626 268.479 374.705 268.242 374.862 267.687C375.02 267.213 375.257 266.5 375.494 265.629C376.046 263.967 376.677 261.672 377.23 259.376C377.545 258.268 377.703 257.081 378.019 255.972C378.255 254.864 378.492 253.914 378.571 253.044C378.887 251.302 379.045 250.115 379.045 250.115L383.148 250.906Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M382.595 216.948C382.595 216.948 382.832 218.136 383.069 219.956C383.227 220.827 383.305 221.935 383.463 223.043C383.621 224.151 383.779 225.418 383.858 226.605C383.937 227.793 384.016 229.059 384.094 230.167C384.094 231.276 384.173 232.384 384.173 233.334C384.252 235.154 384.173 236.421 384.173 236.421H380.149C380.149 236.421 380.228 235.233 380.149 233.492C380.149 232.621 380.07 231.592 380.07 230.484C379.991 229.376 379.912 228.188 379.834 227.08C379.755 225.893 379.597 224.706 379.439 223.677C379.281 222.568 379.202 221.539 379.044 220.669C378.729 218.927 378.571 217.74 378.571 217.74L382.595 216.948Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M371.154 184.89C371.154 184.89 371.312 185.128 371.548 185.603C371.785 186.077 372.18 186.711 372.574 187.581C373.363 189.244 374.547 191.381 375.415 193.677C377.387 198.109 378.887 202.779 378.887 202.779L375.099 204.046C375.099 204.046 373.679 199.534 371.785 195.26C370.917 193.122 369.812 190.985 369.023 189.402C368.629 188.61 368.234 187.977 367.998 187.502C367.761 187.027 367.603 186.79 367.603 186.79L371.154 184.89Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M350.086 158.293C350.086 158.293 350.954 159.164 352.295 160.431C353.636 161.697 355.294 163.439 356.951 165.18C357.819 166.051 358.529 167.001 359.318 167.871C360.028 168.742 360.738 169.534 361.29 170.246C362.395 171.671 363.184 172.7 363.184 172.7L359.949 175.154C359.949 175.154 359.239 174.204 358.134 172.858C357.582 172.146 356.872 171.433 356.24 170.563C355.53 169.771 354.82 168.821 353.952 167.951C352.374 166.209 350.717 164.547 349.454 163.359C348.192 162.172 347.324 161.301 347.324 161.301L350.086 158.293Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M334.541 146.658C334.541 146.658 335.567 147.291 337.145 148.241C337.934 148.716 338.802 149.349 339.749 149.982C340.696 150.616 341.722 151.328 342.668 152.04C344.562 153.544 346.535 155.048 347.876 156.236C349.297 157.423 350.165 158.215 350.165 158.215L347.482 161.223C347.482 161.223 346.614 160.431 345.272 159.323C343.931 158.135 342.116 156.711 340.222 155.286C339.275 154.573 338.329 153.94 337.461 153.307C336.514 152.674 335.725 152.04 335.014 151.645C333.515 150.695 332.568 150.061 332.568 150.061L334.541 146.658Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M303.057 133.913C303.057 133.913 307.871 134.942 312.447 136.446C314.814 137.159 317.024 138.108 318.76 138.742C319.628 139.058 320.338 139.375 320.811 139.612C321.285 139.85 321.6 139.929 321.6 139.929L320.022 143.649C320.022 143.649 319.786 143.57 319.312 143.333C318.839 143.174 318.207 142.779 317.339 142.541C315.682 141.908 313.552 141.037 311.264 140.404C306.845 138.9 302.189 137.95 302.189 137.95L303.057 133.913Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M269.286 132.093C269.286 132.093 270.469 131.934 272.284 131.776C273.231 131.697 274.257 131.618 275.361 131.539C276.466 131.539 277.729 131.459 278.912 131.459C280.096 131.38 281.358 131.459 282.463 131.459C283.568 131.459 284.672 131.459 285.619 131.539C287.434 131.697 288.618 131.776 288.618 131.776L288.302 135.813C288.302 135.813 287.119 135.734 285.383 135.576C284.515 135.496 283.489 135.496 282.384 135.496C281.279 135.496 280.096 135.417 278.912 135.496C277.729 135.496 276.545 135.576 275.44 135.576C274.336 135.655 273.31 135.734 272.442 135.813C270.706 135.892 269.522 136.051 269.522 136.051L269.286 132.093Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M230.621 151.882C230.621 151.882 230.937 151.644 231.568 151.328C232.199 150.932 233.146 150.457 234.409 149.745C235.592 149.032 237.17 148.32 238.906 147.449C239.774 146.974 240.721 146.657 241.747 146.182C242.773 145.787 243.798 145.233 244.903 144.837C249.322 143.016 254.688 141.354 260.527 140.167C266.366 138.9 272.678 138.188 279.07 138.109C285.461 138.029 291.774 138.583 297.692 139.613C303.61 140.642 308.975 142.225 313.473 143.808C314.578 144.204 315.682 144.599 316.708 144.995C317.734 145.391 318.681 145.866 319.549 146.182C321.364 146.895 322.863 147.686 324.125 148.32C324.757 148.636 325.309 148.874 325.782 149.111C326.256 149.349 326.65 149.586 326.966 149.745C327.597 150.14 327.992 150.299 327.992 150.299L324.204 157.027C324.204 157.027 323.889 156.869 323.257 156.552C322.942 156.394 322.626 156.156 322.153 155.919C321.679 155.681 321.206 155.444 320.653 155.127C319.47 154.573 318.128 153.861 316.471 153.148C315.682 152.832 314.814 152.436 313.867 152.04C312.921 151.723 311.974 151.328 310.948 150.932C306.845 149.428 301.874 148.003 296.429 147.053C290.985 146.103 285.145 145.549 279.306 145.628C273.467 145.708 267.628 146.42 262.184 147.528C256.818 148.636 251.847 150.219 247.823 151.882C246.797 152.278 245.85 152.673 244.903 153.069C243.956 153.465 243.088 153.861 242.299 154.256C240.721 155.048 239.301 155.681 238.196 156.394C237.091 157.027 236.223 157.502 235.592 157.818C234.961 158.135 234.724 158.373 234.724 158.373L230.621 151.882Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M327.913 131.301C327.913 131.301 328.386 131.539 329.254 131.935C330.122 132.33 331.385 132.964 332.805 133.676C334.304 134.388 335.962 135.417 337.776 136.367C339.591 137.396 341.406 138.584 343.3 139.771C345.115 141.038 346.93 142.225 348.587 143.491C350.244 144.758 351.743 145.945 353.005 146.974C355.451 149.111 357.108 150.536 357.108 150.536L351.98 156.236C351.98 156.236 350.401 154.89 348.113 152.911C346.93 151.961 345.509 150.853 344.01 149.666C342.432 148.557 340.775 147.37 339.118 146.183C337.382 145.074 335.646 143.966 333.989 143.016C332.332 142.067 330.754 141.196 329.412 140.483C328.071 139.771 326.887 139.217 326.098 138.821C325.309 138.425 324.836 138.188 324.836 138.188L327.913 131.301Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M207.344 316.686C207.344 316.686 206.397 315.736 204.582 313.994C204.109 313.519 203.636 313.124 203.083 312.57C202.531 312.015 201.978 311.382 201.347 310.749C200.716 310.116 200.006 309.403 199.375 308.612C198.664 307.82 197.954 306.949 197.244 306.079C196.85 305.604 196.455 305.208 196.06 304.733C195.666 304.258 195.271 303.783 194.877 303.229C194.088 302.2 193.22 301.171 192.431 299.984C191.642 298.796 190.774 297.609 189.906 296.342C189.038 295.076 188.249 293.73 187.381 292.305C183.988 286.685 180.674 280.036 177.912 272.437C175.15 264.838 173.178 256.289 172.152 247.107C171.678 242.516 171.442 237.767 171.599 232.938C171.599 230.484 171.836 228.11 171.994 225.577C172.073 224.31 172.231 223.123 172.389 221.856C172.467 221.223 172.546 220.59 172.625 219.956C172.704 219.323 172.862 218.69 172.941 218.057C174.519 208.083 177.517 198.03 182.094 188.452C184.303 183.624 186.986 179.033 189.985 174.521C192.983 170.088 196.297 165.813 199.848 161.856C203.478 157.898 207.344 154.177 211.447 150.774C215.629 147.37 219.89 144.283 224.467 141.512C233.541 136.051 243.247 132.014 252.952 129.401L254.767 128.927C255.398 128.768 255.951 128.689 256.582 128.531C257.765 128.293 259.028 127.977 260.211 127.739C262.658 127.343 265.025 126.868 267.471 126.631C272.284 125.998 277.019 125.76 281.595 125.76C290.827 125.839 299.507 127.027 307.319 129.006C315.13 130.985 322.074 133.597 327.992 136.446C329.491 137.159 330.912 137.871 332.253 138.584C333.595 139.296 334.857 140.088 336.12 140.721C337.303 141.433 338.487 142.146 339.591 142.858C340.144 143.175 340.696 143.57 341.17 143.887C341.643 144.204 342.195 144.599 342.669 144.916C343.616 145.629 344.563 146.262 345.43 146.816C346.298 147.449 347.009 148.082 347.719 148.636C348.429 149.191 349.139 149.745 349.691 150.22C350.323 150.695 350.796 151.169 351.27 151.565C353.163 153.228 354.189 154.098 354.189 154.098L352.374 156.156C352.374 156.156 351.348 155.286 349.534 153.702C349.06 153.307 348.587 152.832 347.955 152.357C347.324 151.882 346.693 151.407 345.983 150.853C345.273 150.299 344.563 149.745 343.695 149.111C342.827 148.557 341.959 147.924 341.012 147.212C340.538 146.895 340.065 146.578 339.591 146.183C339.118 145.866 338.566 145.549 338.013 145.154C336.909 144.52 335.804 143.729 334.62 143.096C333.437 142.383 332.174 141.75 330.833 140.958C329.491 140.246 328.15 139.613 326.73 138.9C320.969 136.13 314.262 133.597 306.608 131.618C299.033 129.718 290.512 128.531 281.595 128.452C277.097 128.452 272.521 128.689 267.786 129.243C265.419 129.481 263.131 129.956 260.764 130.351C259.58 130.589 258.397 130.826 257.213 131.143L255.398 131.539L253.662 132.014C244.193 134.467 234.725 138.425 225.887 143.808C221.153 146.658 216.971 149.745 212.868 152.99C208.843 156.315 205.135 159.956 201.584 163.835C198.112 167.713 194.877 171.829 191.957 176.183C189.117 180.537 186.513 185.048 184.303 189.719C179.885 199.059 176.965 208.875 175.387 218.611L175.071 220.431C174.992 221.065 174.914 221.619 174.835 222.252C174.677 223.439 174.519 224.627 174.44 225.893C174.282 228.268 174.046 230.643 174.046 233.017C173.888 237.767 174.203 242.358 174.598 246.87C175.624 255.814 177.596 264.126 180.2 271.566C182.883 279.007 186.118 285.419 189.432 290.881C190.3 292.226 191.089 293.572 191.878 294.759C192.746 295.947 193.535 297.134 194.325 298.321C195.114 299.43 195.982 300.459 196.771 301.488C197.165 301.963 197.56 302.438 197.875 302.912C198.27 303.387 198.664 303.783 198.98 304.258C199.69 305.129 200.4 305.92 201.11 306.712C201.821 307.504 202.452 308.137 203.083 308.77C203.714 309.403 204.267 310.037 204.819 310.591C205.371 311.145 205.845 311.62 206.318 312.015C208.054 313.678 209.001 314.628 209.001 314.628L207.344 316.686Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M275.44 121.09C275.44 121.09 275.993 121.09 276.94 121.011C277.887 121.011 279.228 120.932 280.885 120.932C282.542 121.011 284.436 121.011 286.487 121.09C287.513 121.169 288.539 121.248 289.644 121.327C290.196 121.407 290.748 121.407 291.301 121.486C291.853 121.565 292.405 121.644 292.958 121.644C294.062 121.802 295.167 121.882 296.193 122.04C297.298 122.198 298.323 122.356 299.349 122.515C300.375 122.673 301.322 122.831 302.269 122.99C303.216 123.148 304.083 123.385 304.873 123.544C306.451 123.86 307.792 124.177 308.739 124.415C309.686 124.652 310.159 124.81 310.159 124.81L308.187 132.251C308.187 132.251 307.713 132.093 306.845 131.855C305.977 131.618 304.715 131.301 303.216 130.985C302.426 130.826 301.637 130.668 300.769 130.43C299.901 130.272 298.955 130.114 298.008 129.955C297.061 129.797 296.114 129.639 295.088 129.481C294.062 129.401 293.037 129.243 292.09 129.085C291.616 129.006 291.064 129.006 290.59 128.926C290.117 128.926 289.565 128.847 289.091 128.847C288.065 128.768 287.119 128.689 286.172 128.61C284.278 128.531 282.463 128.531 280.964 128.452C279.465 128.452 278.123 128.531 277.255 128.531C276.387 128.531 275.835 128.61 275.835 128.61L275.44 121.09Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M224.151 135.972C224.151 135.972 224.624 135.734 225.492 135.259C226.36 134.784 227.544 134.072 229.043 133.359C230.542 132.647 232.199 131.697 234.093 130.905C235.04 130.51 235.987 130.035 237.013 129.639C238.038 129.243 239.064 128.847 240.09 128.452C241.116 128.056 242.142 127.66 243.167 127.343C244.193 127.027 245.219 126.71 246.166 126.394C248.138 125.76 249.953 125.285 251.531 124.81C253.11 124.336 254.451 124.098 255.398 123.861C256.345 123.623 256.897 123.544 256.897 123.544L258.475 131.064C258.475 131.064 258.002 131.143 257.134 131.38C256.266 131.539 255.003 131.855 253.504 132.251C252.005 132.647 250.269 133.122 248.454 133.676C247.507 133.993 246.639 134.309 245.613 134.626C244.667 134.942 243.72 135.338 242.773 135.655C241.826 136.051 240.879 136.367 239.932 136.763C238.985 137.159 238.117 137.555 237.249 137.95C235.513 138.663 233.856 139.534 232.515 140.246C231.095 140.879 229.99 141.512 229.201 141.987C228.412 142.462 227.938 142.7 227.938 142.7L224.151 135.972Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M185.171 172.541C185.171 172.541 186.434 170.721 188.328 168.03C189.275 166.684 190.458 165.18 191.721 163.597C192.983 162.014 194.482 160.351 195.903 158.689C197.402 157.106 198.901 155.523 200.321 154.019C201.821 152.594 203.162 151.248 204.425 150.14C206.95 148.003 208.607 146.578 208.607 146.578L213.42 152.594C213.42 152.594 211.842 153.94 209.553 155.919C208.449 156.948 207.107 158.214 205.766 159.56C204.425 160.905 203.004 162.409 201.584 163.913C200.243 165.497 198.901 167 197.718 168.504C196.534 170.008 195.429 171.433 194.561 172.7C192.825 175.233 191.642 176.895 191.642 176.895L185.171 172.541Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M167.102 223.044C167.102 223.044 167.18 222.489 167.259 221.54C167.338 220.59 167.496 219.244 167.812 217.582C168.127 215.919 168.364 214.02 168.838 212.041C169.074 211.012 169.311 209.983 169.548 208.954C169.784 207.925 170.1 206.816 170.337 205.787C170.652 204.758 170.889 203.65 171.205 202.621C171.52 201.592 171.836 200.563 172.152 199.613C172.783 197.634 173.493 195.814 174.045 194.31C174.598 192.727 175.15 191.46 175.545 190.589C175.939 189.719 176.176 189.165 176.176 189.165L183.198 192.252C183.198 192.252 182.962 192.727 182.646 193.518C182.252 194.31 181.778 195.497 181.226 197.001C180.673 198.426 180.042 200.088 179.49 201.988C179.174 202.938 178.859 203.888 178.622 204.838C178.306 205.787 178.07 206.816 177.833 207.766C177.596 208.795 177.28 209.745 177.044 210.695C176.807 211.645 176.649 212.674 176.413 213.624C175.939 215.524 175.702 217.265 175.466 218.769C175.229 220.273 175.071 221.54 174.992 222.41C174.913 223.281 174.834 223.835 174.834 223.835L167.102 223.044Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M173.888 276.157C173.888 276.157 173.73 275.603 173.335 274.733C172.941 273.862 172.546 272.516 172.073 270.933C171.836 270.141 171.52 269.271 171.284 268.4C171.047 267.45 170.731 266.5 170.495 265.55C170.258 264.521 169.942 263.492 169.705 262.463C169.469 261.434 169.232 260.326 168.995 259.297C168.916 258.743 168.759 258.189 168.68 257.714C168.601 257.16 168.522 256.606 168.364 256.131C168.206 255.102 167.97 253.994 167.812 252.965C167.496 250.906 167.338 249.007 167.102 247.344C166.944 245.682 166.865 244.336 166.786 243.387C166.707 242.437 166.707 241.883 166.707 241.883L174.361 241.487C174.361 241.487 174.361 241.962 174.44 242.912C174.519 243.782 174.598 245.049 174.755 246.632C174.913 248.136 175.15 249.957 175.466 251.856C175.623 252.806 175.781 253.756 175.939 254.785C176.018 255.26 176.097 255.814 176.176 256.289L176.491 257.793C176.728 258.822 176.965 259.772 177.123 260.801C177.359 261.751 177.596 262.701 177.912 263.651C178.148 264.601 178.385 265.471 178.622 266.342C178.859 267.213 179.174 268.004 179.411 268.717C179.884 270.221 180.279 271.408 180.595 272.2C180.91 273.07 181.068 273.545 181.068 273.545L173.888 276.157Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M204.03 320.406C204.03 320.406 202.451 318.902 200.084 316.606C198.901 315.419 197.638 314.073 196.218 312.569C194.876 311.065 193.456 309.324 192.036 307.662C190.694 305.92 189.353 304.179 188.09 302.516C186.907 300.854 185.802 299.271 184.934 297.846C184.066 296.421 183.356 295.313 182.804 294.443C182.251 293.651 182.015 293.176 182.015 293.176L188.643 289.297C188.643 289.297 188.88 289.772 189.353 290.485C189.826 291.276 190.537 292.305 191.326 293.651C192.115 294.917 193.219 296.421 194.324 298.005C195.429 299.588 196.691 301.171 197.954 302.754C199.295 304.337 200.558 305.92 201.899 307.345C203.24 308.77 204.424 310.036 205.529 311.145C207.738 313.282 209.237 314.707 209.237 314.707L204.03 320.406Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M218.233 271.962C218.233 271.962 218.391 272.279 218.707 272.754C219.022 273.308 219.496 274.02 220.048 274.891C220.6 275.762 221.31 276.712 222.021 277.82C222.81 278.849 223.678 279.957 224.467 281.065C225.414 282.094 226.282 283.203 227.15 284.153C228.018 285.102 228.885 285.973 229.596 286.765C231.095 288.189 232.121 289.139 232.121 289.139L226.992 294.839C226.992 294.839 225.887 293.81 224.23 292.147C223.441 291.356 222.494 290.327 221.547 289.298C220.6 288.189 219.575 287.002 218.628 285.894C217.681 284.627 216.734 283.44 215.866 282.332C215.077 281.145 214.288 280.036 213.657 279.086C213.025 278.137 212.552 277.266 212.157 276.712C211.763 276.158 211.605 275.841 211.605 275.841L218.233 271.962Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M332.253 178.082C332.253 178.082 331.543 177.449 330.201 176.341C329.886 176.024 329.491 175.708 329.097 175.391C328.702 175.075 328.229 174.679 327.676 174.283C327.203 173.887 326.651 173.491 326.019 173.016C325.388 172.621 324.757 172.146 324.126 171.671C318.681 167.871 310.317 163.201 299.27 160.431C293.747 159.006 287.592 158.214 281.122 158.135C277.886 158.135 274.493 158.293 271.1 158.768C269.365 158.927 267.707 159.243 265.972 159.56C265.104 159.718 264.236 159.956 263.368 160.114L262.105 160.431L260.843 160.747C253.978 162.568 247.113 165.417 240.8 169.296C237.565 171.196 234.567 173.412 231.647 175.787C228.728 178.162 226.045 180.853 223.441 183.623C220.916 186.473 218.549 189.481 216.497 192.568C214.446 195.734 212.552 198.98 210.974 202.384C207.817 209.112 205.608 216.236 204.582 223.281L204.346 224.627L204.188 225.972C204.109 226.843 203.951 227.714 203.872 228.584C203.793 230.326 203.556 232.067 203.635 233.809C203.556 237.212 203.714 240.616 204.03 243.862C204.74 250.352 206.16 256.368 208.133 261.751C211.999 272.516 217.444 280.432 221.784 285.419C222.336 286.052 222.81 286.685 223.283 287.239C223.757 287.793 224.23 288.268 224.703 288.743C225.177 289.218 225.571 289.614 225.966 290.01C226.36 290.406 226.755 290.722 227.071 291.039C228.333 292.305 229.043 292.939 229.043 292.939L227.228 294.997C227.228 294.997 226.518 294.284 225.177 293.018C224.861 292.701 224.467 292.384 224.072 291.91C223.678 291.514 223.283 291.039 222.81 290.564C222.336 290.089 221.863 289.535 221.31 288.981C220.837 288.427 220.285 287.793 219.732 287.16C215.314 281.936 209.632 273.704 205.608 262.622C203.635 257.081 202.136 250.827 201.347 244.099C201.031 240.774 200.795 237.292 200.953 233.729C200.953 231.988 201.11 230.167 201.268 228.347C201.347 227.476 201.505 226.526 201.584 225.656L201.742 224.31L201.978 222.964C203.083 215.682 205.371 208.32 208.607 201.354C210.264 197.872 212.236 194.468 214.367 191.222C216.497 187.977 219.022 184.89 221.547 181.961C224.23 179.112 226.992 176.341 230.069 173.808C233.146 171.354 236.224 169.059 239.538 167.08C246.166 163.122 253.189 160.114 260.29 158.293L261.632 157.898L262.973 157.581C263.841 157.423 264.709 157.185 265.656 157.027C267.471 156.71 269.207 156.394 270.943 156.235C274.415 155.76 277.886 155.602 281.279 155.602C287.986 155.681 294.378 156.473 300.059 157.977C311.501 160.826 320.18 165.655 325.783 169.613C326.493 170.088 327.124 170.563 327.755 171.038C328.387 171.513 328.939 171.908 329.491 172.383C330.044 172.779 330.517 173.175 330.99 173.491C331.464 173.808 331.78 174.204 332.174 174.52C333.594 175.708 334.305 176.341 334.305 176.341L332.253 178.082Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M324.757 186.394C324.757 186.394 324.126 185.84 322.942 184.89C322.626 184.653 322.311 184.336 321.995 184.099C321.601 183.782 321.206 183.465 320.811 183.149C320.338 182.832 319.943 182.436 319.391 182.04C318.839 181.645 318.286 181.328 317.734 180.853C313.079 177.608 305.898 173.65 296.508 171.275C291.774 170.088 286.566 169.375 280.964 169.296C278.202 169.296 275.282 169.375 272.442 169.771C271.021 169.93 269.522 170.246 268.023 170.484C267.313 170.642 266.524 170.8 265.814 170.959L264.709 171.196L263.604 171.513C257.765 173.017 251.926 175.471 246.482 178.795C243.72 180.457 241.195 182.357 238.67 184.336C236.145 186.394 233.857 188.69 231.647 191.064C229.517 193.518 227.465 196.051 225.65 198.743C223.914 201.434 222.257 204.204 220.916 207.133C218.233 212.912 216.339 218.927 215.392 225.022L215.235 226.131L215.077 227.239C214.998 227.951 214.919 228.743 214.84 229.455C214.761 230.959 214.603 232.463 214.603 233.888C214.524 236.817 214.682 239.666 214.919 242.516C215.55 248.057 216.734 253.281 218.391 257.793C221.705 266.975 226.36 273.704 230.069 278.057C230.542 278.611 230.937 279.086 231.41 279.561C231.805 280.036 232.278 280.432 232.673 280.828C233.067 281.224 233.383 281.619 233.699 281.936C234.014 282.253 234.33 282.569 234.646 282.807C235.75 283.836 236.303 284.469 236.303 284.469L234.488 286.527C234.488 286.527 233.857 285.973 232.752 284.865C232.436 284.548 232.121 284.311 231.805 283.915C231.489 283.598 231.095 283.202 230.7 282.728C230.306 282.332 229.832 281.857 229.438 281.382C229.043 280.907 228.57 280.353 228.096 279.799C224.23 275.366 219.417 268.242 215.945 258.743C214.209 253.994 212.946 248.611 212.315 242.833C211.999 239.904 211.842 236.975 211.92 233.888C211.92 232.384 212.078 230.801 212.157 229.297C212.236 228.505 212.315 227.714 212.394 227.001L212.552 225.814L212.71 224.627C213.656 218.373 215.629 212.041 218.391 206.025C219.811 203.017 221.468 200.088 223.283 197.318C225.177 194.547 227.307 191.856 229.517 189.323C231.805 186.869 234.251 184.494 236.855 182.278C239.459 180.141 242.142 178.162 244.982 176.5C250.664 173.096 256.739 170.484 262.815 168.901L263.92 168.584L265.103 168.346C265.893 168.188 266.603 167.951 267.392 167.871C268.891 167.634 270.469 167.317 271.968 167.159C274.967 166.763 277.965 166.605 280.885 166.605C286.724 166.684 292.168 167.397 297.061 168.663C306.845 171.117 314.341 175.312 319.233 178.637C319.865 179.033 320.417 179.428 320.969 179.824C321.522 180.22 321.995 180.616 322.468 180.932C322.942 181.249 323.336 181.645 323.731 181.882C324.126 182.199 324.441 182.515 324.757 182.753C325.94 183.782 326.572 184.336 326.572 184.336L324.757 186.394Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M336.829 173.016C336.829 173.016 336.04 172.304 334.541 171.117C334.147 170.8 333.752 170.404 333.279 170.088C332.805 169.692 332.332 169.296 331.779 168.9C331.227 168.505 330.675 168.03 329.965 167.555C329.333 167.08 328.623 166.605 327.834 166.051C327.44 165.813 327.124 165.497 326.729 165.259C326.335 165.022 325.94 164.784 325.467 164.468C324.599 163.913 323.731 163.359 322.784 162.805C321.837 162.251 320.811 161.697 319.786 161.143C318.76 160.589 317.655 160.035 316.55 159.481C312.053 157.343 306.687 155.285 300.69 153.781C294.693 152.277 287.986 151.407 280.964 151.328C277.413 151.328 273.783 151.486 270.075 151.961C268.26 152.119 266.366 152.515 264.472 152.832C263.525 152.99 262.578 153.227 261.71 153.465L260.29 153.781L258.87 154.177C251.374 156.156 243.957 159.243 237.013 163.438C233.541 165.497 230.227 167.95 226.992 170.563C223.835 173.175 220.837 176.104 218.075 179.111C215.313 182.199 212.788 185.444 210.5 188.848C208.291 192.331 206.16 195.813 204.503 199.534C201.031 206.895 198.664 214.653 197.481 222.252L197.244 223.677L197.086 225.101C197.007 226.051 196.849 227.001 196.77 227.951C196.613 229.851 196.455 231.751 196.455 233.571C196.297 237.291 196.534 240.933 196.928 244.495C197.717 251.54 199.295 258.11 201.347 263.967C203.477 269.825 206.002 274.891 208.606 279.165C209.317 280.194 209.869 281.302 210.579 282.252C211.21 283.202 211.92 284.152 212.552 285.023C213.183 285.894 213.814 286.685 214.445 287.477C214.761 287.872 215.077 288.268 215.313 288.664C215.629 289.06 215.945 289.376 216.181 289.693C216.734 290.406 217.286 291.039 217.838 291.672C218.391 292.305 218.943 292.78 219.417 293.334C219.89 293.809 220.363 294.284 220.758 294.759C221.153 295.155 221.547 295.551 221.942 295.867C223.362 297.213 224.072 297.925 224.072 297.925L222.257 299.983C222.257 299.983 221.468 299.271 220.048 297.846C219.653 297.53 219.259 297.134 218.864 296.659C218.47 296.184 217.996 295.709 217.444 295.234C216.97 294.68 216.418 294.126 215.866 293.572C215.313 292.939 214.761 292.305 214.13 291.593C213.814 291.276 213.499 290.88 213.183 290.485C212.867 290.089 212.552 289.693 212.236 289.297C211.605 288.506 210.974 287.635 210.263 286.764C209.632 285.814 208.922 284.865 208.291 283.915C207.581 282.886 206.949 281.857 206.239 280.748C203.556 276.316 200.874 271.012 198.743 264.996C196.534 258.98 194.956 252.173 194.167 244.891C193.772 241.249 193.614 237.45 193.693 233.65C193.693 231.751 193.851 229.772 194.009 227.793C194.088 226.843 194.245 225.814 194.324 224.864L194.482 223.36L194.719 221.856C195.981 213.94 198.349 205.946 201.978 198.347C203.714 194.547 205.924 190.906 208.212 187.344C210.579 183.782 213.262 180.457 216.024 177.291C218.943 174.125 221.942 171.196 225.256 168.425C228.57 165.734 231.963 163.28 235.592 161.064C242.773 156.71 250.427 153.544 258.16 151.486L259.58 151.09L261 150.773C261.947 150.536 262.894 150.299 263.92 150.14C265.814 149.824 267.786 149.428 269.68 149.269C273.468 148.795 277.255 148.636 280.885 148.636C288.223 148.715 295.088 149.586 301.322 151.169C307.476 152.752 313 154.81 317.655 157.027C318.839 157.581 319.943 158.135 321.048 158.689C322.074 159.243 323.1 159.876 324.126 160.431C325.072 160.985 326.019 161.618 326.887 162.172C327.361 162.409 327.755 162.726 328.15 162.964C328.544 163.28 328.939 163.518 329.333 163.755C330.122 164.309 330.833 164.784 331.464 165.259C332.095 165.734 332.726 166.209 333.279 166.684C333.831 167.159 334.383 167.555 334.857 167.95C335.33 168.346 335.725 168.742 336.119 169.059C337.618 170.325 338.408 171.038 338.408 171.038L336.829 173.016Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M208.527 239.508C208.527 239.508 208.527 239.824 208.606 240.458C208.685 241.091 208.685 241.962 208.843 242.991C209.001 244.02 209.08 245.207 209.316 246.553C209.395 247.186 209.553 247.898 209.632 248.532C209.711 248.848 209.711 249.244 209.79 249.561L210.027 250.59C210.184 251.302 210.342 251.935 210.5 252.648C210.658 253.281 210.816 253.993 211.052 254.627C211.21 255.26 211.368 255.893 211.526 256.447C211.684 257.001 211.92 257.555 212.078 258.03C212.394 259.059 212.631 259.851 212.867 260.405C213.104 260.959 213.183 261.276 213.183 261.276L206.002 264.046C206.002 264.046 205.845 263.651 205.608 263.096C205.371 262.463 205.055 261.592 204.74 260.484C204.582 259.93 204.345 259.376 204.188 258.743C204.03 258.11 203.793 257.397 203.635 256.764C203.477 256.052 203.241 255.339 203.083 254.627C202.925 253.914 202.767 253.123 202.609 252.41L202.373 251.302C202.294 250.906 202.215 250.511 202.215 250.194C202.057 249.482 201.978 248.69 201.82 247.978C201.584 246.553 201.505 245.207 201.347 244.099C201.189 242.991 201.189 241.962 201.11 241.328C201.031 240.695 201.031 240.299 201.031 240.299L208.527 239.508Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M214.524 206.183C214.524 206.183 214.366 206.5 214.13 207.054C213.893 207.608 213.498 208.4 213.183 209.35C212.867 210.3 212.315 211.408 211.999 212.674C211.762 213.307 211.605 213.941 211.368 214.574C211.131 215.207 210.973 215.92 210.816 216.553C210.658 217.265 210.421 217.899 210.263 218.532C210.105 219.165 209.948 219.877 209.869 220.511C209.553 221.777 209.395 222.965 209.237 223.994C209.08 225.023 209.001 225.893 208.922 226.527C208.843 227.16 208.843 227.476 208.843 227.476L201.189 226.606C201.189 226.606 201.268 226.21 201.347 225.577C201.426 224.943 201.505 223.914 201.741 222.806C201.978 221.698 202.136 220.352 202.451 218.928C202.609 218.215 202.767 217.503 202.925 216.79C203.083 216.078 203.319 215.286 203.477 214.574C203.714 213.862 203.872 213.07 204.109 212.358C204.345 211.645 204.582 210.933 204.819 210.22C205.213 208.875 205.766 207.608 206.16 206.5C206.555 205.392 206.949 204.521 207.186 203.888C207.423 203.255 207.58 202.938 207.58 202.938L214.524 206.183Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M235.04 179.27C235.04 179.27 234.014 180.141 232.436 181.565C231.647 182.278 230.779 183.149 229.832 184.019C228.885 184.969 227.939 185.998 226.992 186.948C226.124 188.056 225.177 189.085 224.309 190.035C223.52 191.064 222.731 192.014 222.099 192.885C220.916 194.626 220.127 195.734 220.127 195.734L213.735 191.46C213.735 191.46 214.603 190.193 215.945 188.294C216.655 187.344 217.444 186.315 218.312 185.127C219.259 184.019 220.285 182.832 221.231 181.645C222.336 180.536 223.362 179.428 224.388 178.399C225.414 177.449 226.36 176.499 227.228 175.708C228.964 174.204 230.148 173.175 230.148 173.175L235.04 179.27Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M265.498 164.626C265.498 164.626 265.182 164.705 264.551 164.864C263.92 165.022 263.131 165.18 262.105 165.497C261.079 165.814 259.896 166.051 258.712 166.526C258.081 166.763 257.45 166.922 256.818 167.159C256.187 167.397 255.556 167.634 254.846 167.872C254.214 168.109 253.504 168.347 252.952 168.584C252.321 168.822 251.689 169.138 251.137 169.376C249.954 169.851 248.849 170.484 247.902 170.88C246.955 171.355 246.245 171.75 245.693 172.067C245.14 172.384 244.825 172.542 244.825 172.542L241.037 165.814C241.037 165.814 241.353 165.655 241.984 165.26C242.536 164.943 243.404 164.468 244.43 163.993C245.456 163.518 246.639 162.806 247.981 162.331C248.612 162.014 249.322 161.777 250.032 161.46C250.743 161.143 251.453 160.906 252.163 160.668C252.873 160.431 253.583 160.114 254.293 159.877C255.004 159.639 255.714 159.402 256.424 159.164C257.765 158.69 259.107 158.373 260.211 158.056C261.316 157.74 262.263 157.581 262.894 157.423C263.525 157.265 263.92 157.186 263.92 157.186L265.498 164.626Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M299.349 165.576C299.349 165.576 299.033 165.497 298.402 165.338C297.85 165.18 296.982 165.022 295.956 164.784C295.482 164.705 294.93 164.547 294.299 164.389C293.746 164.309 293.115 164.151 292.484 164.072C291.853 163.993 291.221 163.834 290.511 163.755C289.801 163.676 289.17 163.597 288.46 163.518L287.434 163.36C287.118 163.36 286.724 163.28 286.408 163.28C285.698 163.201 285.067 163.201 284.435 163.122C283.173 163.043 281.91 163.043 280.885 163.043C279.859 163.043 278.991 163.122 278.36 163.122C277.728 163.122 277.413 163.122 277.413 163.122L277.097 155.444C277.097 155.444 277.492 155.444 278.123 155.444C278.833 155.444 279.78 155.365 280.885 155.365C282.068 155.444 283.41 155.365 284.83 155.444C285.54 155.523 286.25 155.523 287.039 155.602C287.434 155.602 287.828 155.681 288.144 155.681L289.249 155.84C290.038 155.919 290.748 155.998 291.537 156.077C292.326 156.156 293.036 156.315 293.746 156.394C294.457 156.552 295.167 156.631 295.798 156.71C296.429 156.869 297.061 156.948 297.613 157.106C298.718 157.344 299.664 157.581 300.296 157.739C300.927 157.898 301.321 157.977 301.321 157.977L299.349 165.576Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M328.939 181.724C328.939 181.724 327.913 180.853 326.335 179.428C325.546 178.795 324.52 178.003 323.494 177.212C322.468 176.42 321.285 175.629 320.18 174.837C318.997 174.125 317.813 173.333 316.708 172.7C315.604 172.067 314.499 171.434 313.631 170.959C312.684 170.484 311.895 170.088 311.343 169.85C310.79 169.534 310.475 169.455 310.475 169.455L313.631 162.41C313.631 162.41 314.025 162.568 314.578 162.885C315.209 163.201 316.077 163.597 317.103 164.151C318.129 164.626 319.312 165.338 320.575 166.051C321.837 166.763 323.1 167.634 324.441 168.426C325.704 169.296 326.966 170.167 328.15 171.038C329.254 171.908 330.359 172.7 331.227 173.492C332.963 174.996 334.147 176.025 334.147 176.025L328.939 181.724Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M184.145 246.711C184.145 246.711 183.908 245.049 183.751 242.199C183.514 239.35 183.435 235.234 183.672 230.326C183.908 225.418 184.619 219.64 186.039 213.624C187.38 207.608 189.432 201.355 192.194 195.339C194.876 189.323 198.191 183.624 201.82 178.637C205.45 173.65 209.237 169.375 212.709 165.893C213.577 165.022 214.445 164.23 215.234 163.439C216.023 162.647 216.891 162.014 217.602 161.301C219.101 159.956 220.521 158.927 221.626 158.056C222.178 157.581 222.73 157.185 223.125 156.869C223.598 156.552 223.993 156.315 224.309 156.077C224.94 155.602 225.255 155.365 225.255 155.365L232.752 166.209C232.752 166.209 232.436 166.447 231.884 166.763C231.647 166.922 231.252 167.159 230.858 167.476C230.463 167.792 230.069 168.109 229.516 168.505C228.57 169.296 227.307 170.167 226.045 171.354C225.413 171.908 224.703 172.463 223.993 173.175C223.283 173.808 222.573 174.521 221.784 175.312C218.785 178.32 215.471 182.04 212.315 186.394C209.237 190.748 206.318 195.655 204.03 200.801C201.662 205.946 199.926 211.408 198.743 216.632C197.559 221.856 196.928 226.764 196.691 231.038C196.533 235.313 196.612 238.875 196.77 241.329C196.928 243.783 197.165 245.207 197.165 245.207L184.145 246.711Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M215.392 307.741C215.392 307.741 214.682 307.028 213.42 305.841C212.157 304.654 210.421 302.833 208.37 300.696C207.423 299.588 206.318 298.321 205.214 297.055C204.188 295.709 203.004 294.284 201.899 292.78C199.769 289.693 197.481 286.368 195.587 282.886C193.614 279.403 191.957 275.762 190.537 272.279C189.906 270.537 189.196 268.875 188.643 267.213C188.091 265.55 187.538 264.046 187.223 262.622C186.828 261.197 186.434 259.851 186.197 258.664C185.96 257.476 185.724 256.447 185.487 255.577C185.329 254.706 185.171 254.073 185.092 253.598C185.013 253.123 184.935 252.885 184.935 252.885L189.511 252.094C189.511 252.094 189.59 252.331 189.59 252.806C189.669 253.281 189.827 253.914 189.985 254.706C190.142 255.497 190.379 256.527 190.616 257.635C190.931 258.743 191.247 260.009 191.642 261.434C192.036 262.78 192.51 264.284 193.062 265.867C193.614 267.45 194.246 269.033 194.877 270.696C196.297 273.941 197.796 277.424 199.69 280.748C201.505 284.073 203.635 287.239 205.687 290.168C206.713 291.593 207.817 292.938 208.843 294.284C209.869 295.551 210.895 296.659 211.842 297.767C213.814 299.825 215.392 301.567 216.655 302.675C217.839 303.783 218.549 304.495 218.549 304.495L215.392 307.741Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M332.49 153.148C332.49 153.148 332.726 153.307 333.121 153.544C333.515 153.782 334.068 154.098 334.699 154.573C335.33 155.048 336.119 155.523 336.908 156.077C337.303 156.394 337.697 156.631 338.171 156.948C338.565 157.265 338.96 157.581 339.433 157.898C340.222 158.531 341.09 159.164 341.879 159.798C342.668 160.431 343.3 160.985 343.931 161.539C345.115 162.568 345.904 163.201 345.904 163.201L342.984 166.447C342.984 166.447 342.195 165.813 341.09 164.864C340.538 164.389 339.907 163.835 339.197 163.201C338.486 162.647 337.697 162.014 336.908 161.381C336.514 161.064 336.119 160.747 335.725 160.51C335.33 160.193 334.936 159.956 334.541 159.718C333.752 159.164 333.042 158.689 332.49 158.294C331.858 157.819 331.385 157.502 330.99 157.344C330.596 157.106 330.438 156.948 330.438 156.948L332.49 153.148Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M236.618 141.196C236.618 141.196 236.855 141.038 237.407 140.879C237.881 140.642 238.591 140.325 239.459 140.009C241.116 139.217 243.404 138.425 245.692 137.555C246.876 137.159 247.981 136.763 249.085 136.446C250.19 136.051 251.216 135.734 252.084 135.576C253.82 135.101 255.003 134.784 255.003 134.784L256.029 138.663C256.029 138.663 254.924 138.979 253.189 139.454C252.321 139.692 251.374 140.009 250.348 140.325C249.322 140.642 248.217 141.038 247.113 141.433C244.903 142.304 242.694 143.096 241.116 143.808C240.327 144.125 239.617 144.441 239.143 144.679C238.67 144.916 238.433 144.995 238.433 144.995L236.618 141.196Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M208.685 160.51C208.685 160.51 209.553 159.639 210.894 158.373C211.605 157.74 212.394 157.106 213.262 156.315C214.13 155.602 215.076 154.732 216.023 154.019C216.97 153.307 217.917 152.515 218.864 151.803C219.811 151.09 220.679 150.536 221.389 149.982C222.178 149.428 222.73 149.032 223.204 148.716C223.677 148.399 223.914 148.241 223.914 148.241L226.123 151.644C226.123 151.644 225.887 151.803 225.413 152.119C225.019 152.436 224.387 152.832 223.677 153.307C222.967 153.782 222.099 154.415 221.231 155.048C220.363 155.761 219.416 156.473 218.469 157.185C217.523 157.898 216.655 158.689 215.787 159.402C214.919 160.114 214.13 160.747 213.498 161.381C212.236 162.568 211.368 163.439 211.368 163.439L208.685 160.51Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M188.406 187.661C188.406 187.661 188.564 187.344 188.801 186.948C189.038 186.473 189.432 185.84 189.905 185.049C190.379 184.257 190.852 183.307 191.484 182.357C192.115 181.407 192.746 180.378 193.377 179.27C194.009 178.241 194.719 177.212 195.35 176.262C195.981 175.312 196.613 174.442 197.165 173.729C198.27 172.304 199.059 171.275 199.059 171.275L202.215 173.808C202.215 173.808 201.505 174.758 200.4 176.104C199.848 176.816 199.295 177.687 198.664 178.558C198.033 179.429 197.323 180.378 196.77 181.407C196.139 182.436 195.508 183.386 194.955 184.336C194.403 185.286 193.93 186.157 193.456 186.948C193.062 187.74 192.667 188.373 192.43 188.848C192.194 189.323 192.036 189.561 192.036 189.561L188.406 187.661Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M177.991 220.036C177.991 220.036 178.227 218.848 178.464 217.028C178.622 216.157 178.859 215.049 179.095 213.941C179.332 212.832 179.569 211.645 179.884 210.458C180.516 208.083 181.147 205.708 181.699 203.967C182.015 203.096 182.252 202.384 182.409 201.83C182.567 201.355 182.646 201.038 182.646 201.038L186.434 202.384C186.434 202.384 186.355 202.621 186.197 203.175C186.039 203.65 185.802 204.363 185.566 205.233C185.013 206.896 184.382 209.191 183.83 211.487C183.514 212.595 183.356 213.782 183.041 214.89C182.804 215.999 182.567 216.949 182.488 217.819C182.173 219.561 182.015 220.748 182.015 220.748L177.991 220.036Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M178.543 253.993C178.543 253.993 178.306 252.806 178.069 250.986C177.912 250.115 177.833 249.007 177.675 247.898C177.517 246.79 177.359 245.524 177.28 244.336C177.201 243.149 177.123 241.883 177.044 240.774C177.044 239.666 176.965 238.558 176.965 237.608C176.886 235.787 176.965 234.521 176.965 234.521H180.989C180.989 234.521 180.91 235.708 180.989 237.45C180.989 238.321 181.068 239.35 181.068 240.458C181.147 241.566 181.226 242.753 181.305 243.861C181.384 245.049 181.541 246.236 181.699 247.265C181.857 248.373 181.936 249.402 182.094 250.273C182.409 252.015 182.567 253.202 182.567 253.202L178.543 253.993Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M189.906 286.052C189.906 286.052 189.748 285.814 189.511 285.339C189.274 284.865 188.88 284.231 188.485 283.361C187.696 281.698 186.513 279.561 185.645 277.265C183.672 272.833 182.173 268.163 182.173 268.163L185.96 266.896C185.96 266.896 187.381 271.408 189.274 275.682C190.142 277.82 191.247 279.957 192.036 281.54C192.431 282.332 192.825 282.965 193.062 283.44C193.299 283.915 193.456 284.152 193.456 284.152L189.906 286.052Z" fill="#35FFFF" fill-opacity="0.3" />
                      <path d="M210.973 312.648C210.973 312.648 210.106 311.778 208.764 310.511C207.423 309.245 205.766 307.503 204.109 305.762C203.241 304.891 202.53 303.941 201.741 303.07C201.031 302.2 200.321 301.408 199.769 300.696C198.664 299.271 197.875 298.242 197.875 298.242L201.11 295.788C201.11 295.788 201.82 296.738 202.925 298.084C203.477 298.796 204.188 299.508 204.819 300.379C205.529 301.171 206.239 302.121 207.107 302.991C208.685 304.733 210.342 306.395 211.605 307.582C212.867 308.77 213.735 309.64 213.735 309.64L210.973 312.648Z" fill="#35FFFF" fill-opacity="0.3" />
                    </g>
                    <mask id="mask0_365_1515" style={{ "mask-type": "luminance" }} maskUnits="userSpaceOnUse" x="183" y="135" width="196" height="196">
                      <path d="M281.122 330.934C334.985 330.934 378.65 287.13 378.65 233.096C378.65 179.062 334.985 135.259 281.122 135.259C227.258 135.259 183.593 179.062 183.593 233.096C183.593 287.13 227.258 330.934 281.122 330.934Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_365_1515)">
                      <path d="M319.628 357.609C302.269 318.506 289.802 275.92 272.048 237.133C269.68 231.988 271.338 225.26 275.914 222.093C280.412 218.927 286.172 220.352 288.539 225.576C307.003 265.788 319.707 310.036 338.092 350.327M280.254 231.276C298.402 270.933 311.027 314.469 328.939 354.206M304.952 344.153C291.38 310.353 280.096 274.812 265.025 241.962C260.685 232.384 263.526 220.194 271.969 214.257C280.412 208.32 291.143 210.932 295.483 220.51C314.105 261.038 326.809 305.683 345.431 346.211M339.749 311.224C343.853 321.593 348.035 331.884 352.69 341.857M303.137 361.567C287.04 324.047 274.967 283.836 258.081 246.949C251.769 233.017 255.635 215.365 267.866 206.737C280.096 198.109 296.114 201.75 302.506 215.603C313.158 238.875 321.917 263.492 330.991 287.952M254.925 260.643C253.662 257.714 252.321 254.785 251.059 251.935C242.773 233.65 247.429 210.695 263.526 199.296C279.623 187.898 301.164 192.41 309.449 210.695C328.15 251.381 340.933 296.263 359.634 336.95M294.536 362.834C283.963 337.741 275.046 311.461 265.183 285.814M285.777 363.467C271.338 328.242 259.817 291.039 244.036 256.764C233.778 234.046 238.986 206.025 259.028 191.935C279.07 177.845 306.214 182.99 316.472 205.708C331.859 239.35 343.3 275.841 357.346 310.432M254.215 184.89C278.123 168.03 311.264 173.65 323.416 200.8C341.801 241.012 354.505 285.181 372.89 325.393M271.416 349.773C260.212 320.327 250.033 290.01 237.092 261.751C227.623 240.537 228.886 215.761 241.274 197.951M369.339 295.63C372.496 303.466 375.731 311.224 379.124 318.902M267.629 362.992C255.004 330.934 244.273 297.609 230.069 266.738C216.024 235.075 221.548 197.476 249.165 178.003C276.94 158.452 316.314 164.309 330.438 195.893C343.142 223.518 353.085 253.044 364.053 281.936M331.464 180.616C333.753 183.703 335.725 187.185 337.382 190.985C355.215 229.851 367.682 272.516 385.042 311.619M232.042 292.384C229.201 285.419 226.203 278.453 223.126 271.645C207.265 235.55 212.473 193.518 243.878 171.275C268.97 153.623 302.9 153.623 323.889 172.225M258.239 361.726C251.532 344.311 245.298 326.58 238.591 309.166M248.612 359.747C238.039 331.804 228.333 303.308 216.103 276.553C198.349 235.946 202.926 189.719 238.197 164.784C273.784 139.692 326.73 145.391 344.405 185.998C361.764 223.835 374.074 265.234 390.723 303.546M230.701 335.287C223.915 317.002 217.05 298.875 209.08 281.461C189.59 236.342 193.141 186.077 232.2 158.531C271.732 130.668 331.859 135.971 351.349 181.09C366.025 213.07 377.072 247.582 390.171 280.669M369.024 201.196C379.992 228.743 389.539 257.397 400.823 284.706M199.138 182.753C205.135 171.196 213.894 160.906 225.887 152.515C269.365 121.802 337.146 126.393 358.371 176.183C360.423 180.616 362.396 185.127 364.289 189.639M228.412 352.939C220.127 330.38 211.921 307.82 202.058 286.369C188.565 254.785 184.54 221.46 194.404 193.597M286.724 125.206C320.26 124.889 351.901 139.296 365.394 171.275C380.465 204.046 391.67 239.587 405.242 273.466M191.326 281.698C172.468 230.326 175.387 177.608 219.18 146.737C233.462 136.684 250.269 129.955 267.392 126.947M217.76 347.794C210.816 329.034 203.794 310.274 195.587 292.384M206.319 340.907C200.637 325.788 194.719 310.828 188.091 296.342C163.63 237.292 161.894 176.737 212.158 141.275C263.605 104.942 347.877 107.317 372.338 166.288C383.7 191.064 392.854 217.344 402.559 243.387M175.703 167.001C182.41 155.444 191.879 144.995 204.662 136.05C260.212 96.868 353.321 97.6595 379.361 161.38C391.512 187.819 401.139 216.078 411.554 243.703M193.772 331.171C189.827 321.039 185.645 310.986 181.147 301.25C164.183 259.851 156.45 218.531 167.891 184.257" stroke="url(#paint0_linear_365_1515)" stroke-width="3.7647" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <circle cx="278.5" cy="232.5" r="215.5" stroke="#3464FD" stroke-width="4" />
                    <line y1="-2" x2="52" y2="-2" transform="matrix(-0.5 0.866025 0.866025 0.5 385 84)" stroke="#3464FD" stroke-width="4" />
                    <circle cx="44" cy="44" r="44" transform="matrix(-1 0 0 1 452 2)" fill="#00012F" stroke="#3464FD" stroke-width="4" />
                    <circle cx="30" cy="30" r="30" transform="matrix(-1 0 0 1 438 16)" fill="#3464FD" />
                    <path d="M414.192 60C413.967 57.7656 414.988 55.3723 418.087 54.7553C416.748 54.3159 415.99 53.4651 415.952 52.2965C415.915 51.184 416.411 50.3613 417.384 49.8097C417.525 49.7349 417.712 49.5666 417.712 49.4357C417.731 47.7249 417.731 46.014 417.731 44.2284C416.888 44.2284 416.064 44.2564 415.241 44.219C414.754 44.191 414.473 44.3312 414.267 44.78C414.061 45.2287 413.78 45.6401 413.518 46.0888C412.919 45.7429 412.357 45.4157 411.796 45.0978C411.328 44.8361 410.616 45.2381 410.616 45.7803C410.616 46.4347 410.616 47.0798 410.616 47.781C410.026 47.781 409.465 47.781 408.856 47.781C408.856 48.3793 408.847 48.9402 408.866 49.4918C408.866 49.5853 408.978 49.7068 409.071 49.7536C410.195 50.3332 410.747 51.2494 410.588 52.4928C410.429 53.7175 409.652 54.4467 408.444 54.7553C411.356 55.2975 412.619 57.5412 412.367 60C409.465 60 406.553 60 403.651 60C403.324 57.99 404.316 55.3629 407.555 54.7553C406.572 54.5122 405.87 53.9793 405.524 53.0351C405.074 51.8197 405.58 50.4641 406.759 49.8564C407.059 49.6975 407.152 49.5292 407.143 49.2114C407.124 48.7626 407.134 48.3139 407.134 47.8184C406.553 47.8184 406.001 47.8184 405.374 47.8184C405.374 47.1078 405.374 46.4441 405.374 45.7896C405.374 45.2474 404.672 44.8454 404.194 45.1072C403.642 45.425 403.09 45.7429 402.472 46.0982C402.181 45.5933 401.863 45.0978 401.601 44.5836C401.461 44.3032 401.283 44.2284 400.974 44.2284C400.085 44.2471 399.205 44.2377 398.25 44.2377C398.25 44.593 398.25 44.9202 398.25 45.2381C398.25 46.5937 398.24 47.9492 398.259 49.3048C398.259 49.4544 398.353 49.6788 398.474 49.7442C399.551 50.3145 400.122 51.184 400.01 52.3993C399.888 53.6708 399.102 54.428 397.857 54.7553C400.993 55.3723 402.004 57.7843 401.779 60C398.877 60 395.966 60 393.063 60C392.717 57.9432 393.756 55.3536 396.967 54.7459C396.031 54.5309 395.366 54.0354 394.992 53.2033C394.43 51.9506 394.926 50.4922 396.162 49.8471C396.443 49.6975 396.527 49.5386 396.527 49.2394C396.518 47.2013 396.518 45.1539 396.518 43.1159C396.518 42.9289 396.518 42.7513 396.518 42.5082C397.8 42.5082 399.045 42.5082 400.365 42.5082C400.169 42.1436 400.019 41.8631 399.85 41.5359C400.412 41.2087 400.974 40.8815 401.536 40.5543C401.985 40.2925 401.985 39.4417 401.536 39.18C400.983 38.8621 400.431 38.5442 399.841 38.1983C400.712 36.6838 401.582 35.188 402.472 33.6454C403.071 33.9913 403.642 34.3279 404.222 34.6551C404.662 34.9075 405.374 34.4962 405.383 33.982C405.383 33.3275 405.383 32.6825 405.383 32C407.134 32 408.847 32 410.625 32C410.625 32.6357 410.625 33.2902 410.625 33.9352C410.625 34.5055 411.328 34.9075 411.824 34.627C412.376 34.3092 412.928 33.9913 413.528 33.6454C414.398 35.1599 415.269 36.6558 416.167 38.1983C415.578 38.5349 414.997 38.8621 414.426 39.1987C414.033 39.4324 414.042 40.2831 414.436 40.5169C414.997 40.8534 415.559 41.1713 416.158 41.5265C415.99 41.8351 415.83 42.1249 415.643 42.4801C416.954 42.4801 418.18 42.4801 419.491 42.4801C419.491 42.7045 419.491 42.8821 419.491 43.0598C419.491 45.0885 419.5 47.1078 419.481 49.1366C419.481 49.4731 419.547 49.6788 419.884 49.8658C420.895 50.4267 421.344 51.3429 421.204 52.4835C421.073 53.5306 420.464 54.2317 419.472 54.615C419.341 54.6618 419.21 54.6992 419.051 54.7459C421.887 55.2694 423.245 57.4571 422.964 59.9907C420.034 60 417.132 60 414.192 60ZM410.607 39.8905C410.616 38.4227 409.427 37.226 407.976 37.226C406.553 37.226 405.364 38.4227 405.355 39.8531C405.346 41.3302 406.516 42.4988 407.986 42.4988C409.437 42.4895 410.597 41.3396 410.607 39.8905Z" fill="white" />
                    <circle cx="44" cy="44" r="44" transform="matrix(-0.5 -0.866025 -0.866025 0.5 555 241)" fill="#00012F" stroke="#3464FD" stroke-width="4" />
                    <circle cx="30" cy="30" r="30" transform="matrix(-0.5 -0.866025 -0.866025 0.5 536 236)" fill="#3464FD" />
                    <line y1="-2" x2="52" y2="-2" transform="matrix(-1 -5.56119e-08 -5.56119e-08 1 451 223.976)" stroke="#3464FD" stroke-width="4" />
                    <g clip-path="url(#clip0_365_1515)">
                      <path d="M479 240C479 239.395 479 238.819 479 238.204C480.252 238.204 481.493 238.204 482.765 238.204C482.765 236.36 482.765 234.564 482.765 232.729C481.904 232.729 481.053 232.729 480.091 232.729C481.954 229.997 483.766 227.352 485.618 224.639C487.471 227.342 489.273 229.987 491.135 232.7C490.194 232.7 489.343 232.7 488.452 232.7C488.452 234.545 488.452 236.34 488.452 238.165C489.703 238.165 490.925 238.165 492.176 238.165C492.176 231.48 492.176 224.824 492.176 218.11C491.325 218.11 490.474 218.11 489.463 218.11C491.335 215.368 493.148 212.723 495 210.01C496.842 212.703 498.655 215.348 500.507 218.061C499.576 218.061 498.715 218.061 497.834 218.061C497.834 224.795 497.834 231.47 497.834 238.165C499.075 238.165 500.297 238.165 501.558 238.165C501.558 236.37 501.558 234.584 501.558 232.749C500.707 232.749 499.846 232.749 498.845 232.749C500.717 230.007 502.529 227.352 504.382 224.639C506.224 227.332 508.026 229.967 509.889 232.69C508.967 232.69 508.126 232.69 507.255 232.69C507.255 234.535 507.255 236.331 507.255 238.175C508.487 238.175 509.728 238.175 511 238.175C511 238.809 511 239.385 511 240C500.347 240 489.693 240 479 240Z" fill="white" />
                    </g>
                    <circle cx="408" cy="429.033" r="44" transform="rotate(180 408 429.033)" fill="#00012F" stroke="#3464FD" stroke-width="4" />
                    <circle cx="408" cy="429" r="30" transform="rotate(180 408 429)" fill="#3464FD" />
                    <line x1="383.268" y1="392.033" x2="357.268" y2="347" stroke="#3464FD" stroke-width="4" />
                    <path d="M412.666 436.544C409.543 436.544 406.448 436.544 403.316 436.544C403.316 436.478 403.306 436.375 403.316 436.262C403.363 435.709 403.1 435.372 402.622 435.1C399.377 433.292 397.408 430.536 396.873 426.872C396.085 421.549 399.105 416.535 404.104 414.698C410.255 412.439 416.998 415.86 418.827 422.139C420.262 427.059 418.152 432.345 413.678 434.941C412.694 435.522 412.722 435.55 412.666 436.544ZM402.941 424.276C401.825 424.369 401.45 424.594 401.44 425.222C401.431 425.841 401.806 426.085 402.95 426.206C403.222 426.853 403.475 427.481 403.747 428.128C403.044 429.018 402.941 429.421 403.353 429.861C403.785 430.311 404.207 430.218 405.116 429.505C405.763 429.777 406.392 430.03 407.039 430.302C407.151 431.436 407.367 431.83 407.977 431.801C408.999 431.755 408.952 430.949 408.952 430.321C409.636 430.03 410.255 429.777 410.884 429.515C411.812 430.218 412.215 430.33 412.609 429.908C413.313 429.149 412.694 428.615 412.262 428.156C412.544 427.462 412.806 426.834 413.059 426.206C414.138 426.15 414.56 425.906 414.56 425.288C414.56 425.082 414.494 424.772 414.354 424.697C413.941 424.473 413.481 424.332 413.003 424.154C412.778 423.62 412.516 422.992 412.253 422.355C412.956 421.539 413.078 421.071 412.656 420.649C412.516 420.508 412.29 420.405 412.094 420.358C411.503 420.227 411.231 420.752 410.903 420.986C410.218 420.705 409.599 420.443 408.961 420.19C408.886 419.102 408.661 418.718 408.052 418.69C407.423 418.653 407.179 419.027 407.029 420.199C406.373 420.471 405.745 420.724 405.107 420.996C404.254 420.283 403.794 420.171 403.381 420.621C403.241 420.771 403.081 421.033 403.128 421.183C403.259 421.624 403.485 422.036 403.691 422.495C403.475 422.992 403.213 423.61 402.941 424.276Z" fill="white" />
                    <path d="M408.042 438.361C409.233 438.361 410.415 438.361 411.606 438.361C412.347 438.361 412.703 438.717 412.694 439.458C412.684 440.217 412.722 440.995 412.609 441.744C412.412 443.01 411.315 443.947 410.03 443.975C408.689 444.012 407.339 444.003 405.998 443.975C404.535 443.938 403.353 442.719 403.316 441.257C403.297 440.629 403.306 440.011 403.316 439.383C403.325 438.736 403.691 438.371 404.338 438.371C405.566 438.352 406.804 438.361 408.042 438.361Z" fill="white" />
                    <path d="M397.089 415.128C397.23 414.96 397.389 414.613 397.652 414.491C397.905 414.379 398.317 414.397 398.552 414.538C398.918 414.753 399.208 415.1 399.48 415.438C399.771 415.803 399.696 416.3 399.368 416.618C399.049 416.928 398.561 417.003 398.214 416.712C397.755 416.337 397.192 415.991 397.089 415.128Z" fill="white" />
                    <path d="M418.977 415.223C418.836 415.522 418.78 415.747 418.649 415.907C418.423 416.179 418.161 416.441 417.889 416.666C417.495 417.003 416.97 416.966 416.623 416.619C416.276 416.272 416.238 415.738 416.576 415.354C416.829 415.063 417.092 414.735 417.42 414.567C417.683 414.426 418.105 414.398 418.367 414.51C418.63 414.613 418.78 414.979 418.977 415.223Z" fill="white" />
                    <path d="M397.914 436.15C397.736 436.009 397.379 435.859 397.267 435.597C397.154 435.335 397.173 434.904 397.323 434.65C397.52 434.304 397.867 434.013 398.195 433.751C398.561 433.451 399.058 433.516 399.386 433.835C399.715 434.163 399.79 434.66 399.48 435.025C399.086 435.485 398.749 436.028 397.914 436.15Z" fill="white" />
                    <path d="M418.986 435.26C418.78 435.513 418.63 435.86 418.367 435.982C418.124 436.094 417.692 436.085 417.467 435.944C417.092 435.71 416.754 435.373 416.52 434.998C416.379 434.763 416.36 434.323 416.501 434.098C416.651 433.854 417.017 433.648 417.317 433.611C417.87 433.536 418.874 434.604 418.986 435.26Z" fill="white" />
                    <path d="M394.379 426.169C394.21 426.169 394.032 426.178 393.863 426.169C393.375 426.122 393 425.719 393 425.241C393 424.754 393.366 424.351 393.863 424.313C394.191 424.285 394.519 424.294 394.847 424.313C395.41 424.332 395.813 424.726 395.813 425.241C395.813 425.756 395.41 426.15 394.857 426.178C394.697 426.178 394.538 426.169 394.379 426.169Z" fill="white" />
                    <path d="M421.575 426.169C421.406 426.169 421.228 426.178 421.059 426.169C420.562 426.122 420.196 425.719 420.196 425.241C420.196 424.754 420.562 424.351 421.059 424.313C421.387 424.295 421.715 424.295 422.043 424.313C422.597 424.332 423 424.726 423 425.251C423 425.766 422.597 426.16 422.043 426.188C421.884 426.178 421.734 426.169 421.575 426.169Z" fill="white" />
                    <path d="M411.193 425.213C411.184 423.432 409.758 422.036 407.958 422.045C406.204 422.055 404.797 423.479 404.797 425.241C404.797 427.022 406.213 428.437 408.005 428.428C409.796 428.428 411.202 427.003 411.193 425.213Z" fill="white" />
                    <path d="M411.193 425.213C411.203 427.012 409.796 428.427 408.014 428.437C406.223 428.437 404.807 427.031 404.807 425.25C404.807 423.479 406.214 422.064 407.967 422.054C409.768 422.036 411.193 423.432 411.193 425.213Z" fill="white" />
                    <circle cx="44" cy="44" r="44" transform="matrix(1 0 0 -1 126 473.033)" fill="#00012F" stroke="#3464FD" stroke-width="4" />
                    <circle cx="30" cy="30" r="30" transform="matrix(1 0 0 -1 140 459)" fill="#3464FD" />
                    <line y1="-2" x2="52" y2="-2" transform="matrix(0.5 -0.866025 -0.866025 -0.5 193 391.033)" stroke="#3464FD" stroke-width="4" />
                    <path d="M170.286 437.332C169.517 437.482 168.89 437.266 168.346 436.845C166.5 435.429 164.663 434.005 162.845 432.562C162.395 432.205 161.842 431.812 161.673 431.324C161.523 430.884 161.842 430.284 161.973 429.759C162.442 427.922 162.929 426.085 163.369 424.249C163.463 423.864 163.585 423.696 164.007 423.724C164.625 423.761 165.244 423.733 165.872 423.733C165.459 424.37 165.028 424.942 164.691 425.561C164.353 426.198 164.091 426.873 164.278 427.622C164.4 428.129 164.71 428.475 165.197 428.663C166.472 429.169 167.587 428.906 168.543 427.969C168.843 427.679 169.105 427.388 169.555 427.398C169.583 427.398 169.621 427.379 169.639 427.36C170.258 426.845 170.698 427.201 171.195 427.622C172.91 429.075 174.663 430.481 176.368 431.943C176.809 432.327 177.165 432.824 177.521 433.293C177.643 433.452 177.746 433.714 177.709 433.892C177.652 434.136 177.502 434.398 177.306 434.548C177.062 434.736 176.79 434.642 176.565 434.408C175.525 433.349 174.475 432.309 173.426 431.259C173.369 431.203 173.313 431.146 173.257 431.09C172.891 430.734 172.563 430.697 172.282 430.978C171.992 431.259 172.02 431.596 172.376 431.952C173.369 432.946 174.363 433.939 175.356 434.933C175.487 435.064 175.656 435.158 175.787 435.251C175.272 436.057 174.578 436.151 173.997 435.57C173.069 434.642 172.142 433.714 171.214 432.786C170.98 432.552 170.708 432.468 170.408 432.627C170.127 432.777 170.033 433.049 170.127 433.349C170.174 433.499 170.305 433.639 170.427 433.752C171.195 434.53 171.973 435.298 172.741 436.076C173.163 436.498 173.191 436.657 172.873 436.995C172.554 437.332 172.039 437.351 171.711 437.032C171.233 436.563 170.764 436.085 170.286 435.607C169.977 435.298 169.677 434.98 169.358 434.68C169.03 434.361 168.674 434.333 168.412 434.595C168.149 434.858 168.159 435.223 168.477 435.542C169.058 436.151 169.677 436.742 170.286 437.332Z" fill="white" />
                    <path d="M185 427.51C185 429.291 185 431.071 185 432.852C185 433.545 184.85 433.705 184.147 433.705C183.05 433.705 181.963 433.705 180.867 433.705C180.304 433.705 180.089 433.508 179.939 432.983C178.974 429.694 177.849 426.47 176.387 423.367C176.171 422.917 176.274 422.571 176.799 422.43C178.233 422.065 179.686 421.69 181.148 421.437C182.141 421.268 183.163 421.277 184.175 421.231C184.803 421.202 184.99 421.409 184.99 422.027C185 423.855 185 425.682 185 427.51Z" fill="white" />
                    <path d="M155 426.264C155 424.502 155 422.74 155 420.968C155 420.125 155.159 419.947 155.975 420.012C157.755 420.153 159.545 420.265 161.27 420.828C162.498 421.231 162.704 421.578 162.357 422.974C161.645 425.804 160.895 428.625 160.164 431.456C160.127 431.606 160.089 431.756 160.052 431.906C159.958 432.271 159.724 432.468 159.349 432.468C158.112 432.468 156.884 432.477 155.647 432.468C155.178 432.468 155 432.234 155 431.69C155 429.881 155 428.072 155 426.264Z" fill="white" />
                    <path d="M178.599 432.149C176.565 429.956 174.119 428.307 171.945 426.348C171.804 426.226 171.654 426.104 171.523 425.973C171.12 425.561 170.661 425.533 170.155 425.72C169.658 425.898 169.152 426.029 168.674 426.245C168.449 426.339 168.243 426.535 168.084 426.732C167.456 427.529 166.8 427.782 166.022 427.519C165.647 427.398 165.506 427.182 165.656 426.816C165.844 426.376 165.975 425.87 166.275 425.523C167.043 424.68 167.859 423.846 168.74 423.124C169.527 422.477 170.492 422.449 171.448 422.796C172.788 423.283 174.129 423.78 175.459 424.305C175.619 424.361 175.75 424.577 175.816 424.745C176.575 426.704 177.315 428.663 178.055 430.622C178.252 431.137 178.421 431.643 178.599 432.149Z" fill="white" />
                    <circle cx="60.1051" cy="224.895" r="44" transform="rotate(-60 60.1051 224.895)" fill="#00012F" stroke="#3464FD" stroke-width="4" />
                    <circle cx="59.9808" cy="225.019" r="30" transform="rotate(-60 59.9808 225.019)" fill="#3464FD" />
                    <line x1="104.514" y1="221.976" x2="156.514" y2="221.976" stroke="#3464FD" stroke-width="4" />
                    <path d="M65.8061 220.6C65.8061 221.593 65.8061 222.512 65.8061 223.421C65.8061 223.889 65.7967 224.358 65.8061 224.827C65.8155 225.455 66.1716 225.839 66.7152 225.848C67.2682 225.858 67.6805 225.436 67.6899 224.817C67.6993 224.039 67.6899 223.252 67.6899 222.474C67.6899 221.134 67.6899 219.784 67.6899 218.444C67.6899 217.704 67.3056 217.31 66.5746 217.31C64.4659 217.31 62.3572 217.31 60.2485 217.31C59.5737 217.31 59.1519 217.685 59.1519 218.257C59.1519 218.838 59.5549 219.194 60.2485 219.194C61.6074 219.203 62.957 219.194 64.4097 219.194C64.2503 219.372 64.166 219.485 64.0629 219.588C61.5418 222.109 59.0301 224.63 56.4996 227.132C56.3497 227.282 56.1154 227.423 55.9092 227.423C53.5381 227.441 51.1576 227.432 48.7864 227.432C48.6927 227.432 48.6084 227.423 48.4678 227.413C48.4678 227.235 48.4678 227.085 48.4678 226.935C48.4678 221.687 48.4678 216.439 48.4678 211.19C48.4678 210.3 48.7771 210 49.6861 210C57.718 210 65.7499 210 73.7817 210C74.6815 210 75.0001 210.319 75.0001 211.2C75.0001 219.241 75.0001 227.291 75.0001 235.333C75.0001 236.204 74.6815 236.523 73.8192 236.523C68.5709 236.523 63.3225 236.523 58.0741 236.523C57.9242 236.523 57.7649 236.523 57.5868 236.523C57.5774 236.336 57.5587 236.186 57.5587 236.036C57.5587 233.758 57.5493 231.471 57.5681 229.194C57.5681 228.988 57.643 228.716 57.7836 228.575C60.3609 225.979 62.9476 223.402 65.5343 220.815C65.5905 220.759 65.6655 220.712 65.8061 220.6Z" fill="white" />
                    <path d="M54.2502 229.419C52.6195 231.04 51.0544 232.577 49.5173 234.161C49.283 234.405 49.0581 234.808 49.0862 235.127C49.1425 235.895 50.0328 236.195 50.6326 235.698C50.9231 235.455 51.1668 235.173 51.4386 234.911C52.6945 233.655 53.9597 232.39 55.2156 231.134C55.3187 231.031 55.4311 230.928 55.6092 230.769C55.6186 231.012 55.6373 231.181 55.6373 231.34C55.6373 233.777 55.6373 236.214 55.6373 238.651C55.6373 239.738 55.3655 240 54.2784 240C51.5886 240 48.9082 240 46.2184 240C45.3187 240 45 239.681 45 238.791C45 236.026 45 233.262 45 230.497C45 229.728 45.3093 229.372 46.059 229.372C48.702 229.353 51.3355 229.363 53.9784 229.372C54.0347 229.363 54.0909 229.391 54.2502 229.419Z" fill="white" />
                    <circle cx="170" cy="46" r="44" fill="#00012F" stroke="#3464FD" stroke-width="4" />
                    <circle cx="170" cy="46" r="30" fill="#3464FD" />
                    <line x1="194.732" y1="83" x2="220.732" y2="128.033" stroke="#3464FD" stroke-width="4" />
                    <path d="M169.975 63C168.53 63 167.341 61.9676 167.255 60.5391C167.218 59.9629 166.998 59.6748 166.496 59.3987C164.29 58.1863 162.109 56.9378 159.928 55.7014C159.658 55.5453 159.475 55.5093 159.168 55.6894C157.894 56.4576 156.142 56.0135 155.382 54.765C154.61 53.4926 155.039 51.836 156.387 51.0797C156.742 50.8756 156.852 50.6716 156.852 50.2874C156.84 47.7425 156.84 45.2096 156.852 42.6647C156.852 42.3285 156.803 42.1125 156.436 41.9204C155.1 41.2482 154.622 39.6036 155.333 38.3191C156.056 36.9986 157.747 36.4824 159.058 37.2387C159.499 37.4908 159.769 37.4308 160.149 37.2027C162.342 35.9422 164.535 34.6818 166.741 33.4333C167.047 33.2653 167.157 33.0732 167.169 32.7371C167.218 31.1405 168.37 30.0121 169.902 30.0001C171.458 29.9881 172.622 31.1285 172.671 32.7371C172.683 33.0852 172.818 33.2653 173.112 33.4333C175.391 34.7058 177.67 35.9903 179.937 37.2867C180.231 37.4548 180.439 37.4788 180.758 37.2867C182.118 36.4944 183.809 36.9386 184.569 38.2471C185.353 39.5916 184.851 41.2121 183.429 41.9924C183.27 42.0765 183.111 42.3405 183.111 42.5206C183.086 45.1376 183.086 47.7665 183.111 50.3834C183.111 50.5995 183.307 50.8876 183.503 51.0077C184.912 51.812 185.414 53.4446 184.63 54.777C183.883 56.0375 182.118 56.4816 180.795 55.6774C180.464 55.4733 180.268 55.5453 179.986 55.7014C177.805 56.9498 175.624 58.1863 173.418 59.3987C172.941 59.6628 172.745 59.9629 172.708 60.5031C172.598 61.9676 171.421 63 169.975 63ZM168.174 58.2583C169.387 57.394 170.6 57.418 171.789 58.2583C174.252 56.8658 176.69 55.4973 179.116 54.0928C179.288 53.9967 179.41 53.6966 179.422 53.4806C179.447 52.3882 179.925 51.5839 180.893 51.0197C181.077 50.9116 181.26 50.6475 181.26 50.4555C181.285 47.8385 181.285 45.2216 181.26 42.5926C181.26 42.3886 181.089 42.1245 180.905 42.0164C179.937 41.4282 179.447 40.6119 179.435 39.4955C179.435 39.2914 179.275 39.0033 179.104 38.9073C176.788 37.5748 174.46 36.2544 172.12 34.9579C171.96 34.8739 171.654 34.8739 171.495 34.9699C170.478 35.5341 169.498 35.5341 168.481 34.9579C168.334 34.8739 168.052 34.8498 167.905 34.9339C165.528 36.2303 163.175 37.5388 160.835 38.8713C160.675 38.9673 160.541 39.2314 160.528 39.4235C160.504 40.5519 160.05 41.4162 159.021 41.9804C158.862 42.0765 158.703 42.3285 158.703 42.5086C158.678 45.1736 158.678 47.8265 158.703 50.4915C158.703 50.6595 158.85 50.8996 158.997 50.9837C160.05 51.5599 160.541 52.4122 160.528 53.5886C160.528 53.7447 160.639 53.9847 160.773 54.0568C163.224 55.4613 165.699 56.8538 168.174 58.2583Z" fill="white" />
                    <path d="M169.056 53.2527C167.304 52.2683 165.662 51.356 164.045 50.4076C163.824 50.2876 163.591 49.9755 163.591 49.7594C163.555 47.8507 163.567 45.942 163.567 43.9253C164.204 44.2854 164.768 44.5855 165.319 44.9096C166.434 45.5339 167.549 46.1581 168.64 46.8063C168.823 46.9144 169.032 47.1545 169.032 47.3345C169.068 49.2552 169.056 51.1879 169.056 53.2527Z" fill="white" />
                    <path d="M170.894 53.2525C170.894 51.98 170.894 50.8276 170.894 49.6752C170.894 48.9309 170.882 48.1986 170.906 47.4544C170.919 47.2623 170.992 46.9742 171.127 46.8902C172.842 45.8938 174.57 44.9335 176.359 43.9131C176.384 44.1652 176.408 44.3332 176.408 44.5013C176.408 46.0979 176.396 47.6944 176.42 49.291C176.433 49.8792 176.212 50.2634 175.685 50.5515C174.117 51.4278 172.573 52.3161 170.894 53.2525Z" fill="white" />
                    <path d="M164.461 42.3526C165.736 41.6203 166.949 40.9361 168.15 40.2518C170.22 39.0874 169.706 39.0754 171.789 40.2518C172.989 40.9241 174.178 41.6083 175.44 42.3286C175.281 42.4486 175.158 42.5327 175.036 42.6047C173.492 43.481 171.936 44.3573 170.38 45.2216C170.196 45.3177 169.889 45.3897 169.73 45.3057C167.99 44.3453 166.275 43.361 164.461 42.3526Z" fill="white" />
                    <defs>
                      <linearGradient id="paint0_linear_365_1515" x1="177.364" y1="310.408" x2="385.677" y2="164.346" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#ECCCFF" />
                        <stop offset="1" stop-color="#CCFFED" />
                      </linearGradient>
                      <clipPath id="clip0_365_1515">
                        <rect width="32" height="30" fill="white" transform="translate(479 210)" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
              </div>
              <div className="digi3">
                <div className="dif dif4">
                  <h3>Synergy Creation</h3>
                </div>
                <div className="dif dif5">
                  <h3>Build Competitive</h3>
                  <h3> Advantage -</h3>
                  <h3>Positioning</h3>
                </div>
                <div className="dif dif6">
                  <h3>Create Solution</h3>
                  <h3>accelerators</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="ourPoint_section">
          <div className="ourPoint_container">
            <div className="ourPoint_content">
              <div className="ourPoint_top">
                <h2>
                  our Point <span>of Views</span>
                </h2>
              </div>
              <div className="ourPoint_down">
                <div className="card">
                  <img src="./images/ofview.png" alt="" />
                  <div className="ourPoint_detail">
                    <h2>
                      For <br />
                      Developers
                    </h2>
                    <p>Build privacy-centric solutions with open standards</p>
                    <button>
                      <span>Read more</span>
                    </button>
                  </div>
                </div>
                <div className="card">
                  <div>
                    <img src="./images/ofview.png" alt="" />
                    <div className="ourPoint_detail">
                      <h2>
                        For <br />
                        Developers
                      </h2>
                      <p>Build privacy-centric solutions with open standards</p>
                      <button>
                        <span>Read more</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div>
                    <img src="./images/ofview.png" alt="" />
                    <div className="ourPoint_detail">
                      <h2>
                        For <br />
                        Developers
                      </h2>
                      <p>Build privacy-centric solutions with open standards</p>
                      <button>
                        <span>Read more</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sight_btn">
                <button><span>Explore all Blogs</span>
                  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4 13.0967L0 11.6967L9.6 2.09668H1V0.0966797H13V12.0967H11V3.49668L1.4 13.0967Z" fill="#3464FD" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="feel_free">
          <div className="feel_touch">
            <div className="touch_flex">
              <div className="touch_left">
                <div className="touch_sing">
                  <h3>Feel free to</h3>
                  <h3>get in touch</h3>
                  <h3 className='conting'>contact</h3>
                  <h3>With us</h3>
                </div>
              </div>
              <div className="touch_right">
                <form action="">
                  <div className="contact_soft">
                    <div className="input_filed">
                      <label htmlFor="">First name*</label>
                      <input type="text" placeholder='Your name' />
                    </div>
                    <div className="input_filed input_field1">
                      <label htmlFor="">Last name*</label>
                      <input type="text" placeholder='Last name' />
                    </div>
                  </div>
                  <div className="contact_soft">
                    <div className="input_filed">
                      <label htmlFor="">Preferred Method of contact*</label>
                      <select name="" id="">
                        <option value="">Please  select</option>
                        <option value="">Please  select</option>
                      </select>
                    </div>
                    <div className="input_filed input_field1">
                      <label htmlFor="">How did you here about us?</label>
                      <select name="" id="">
                        <option value="">Please  select</option>
                        <option value="">Please  select</option>
                      </select>
                    </div>
                  </div>
                  <div className="contact_soft">
                    <div className="input_filed">
                      <label htmlFor="">How can we help you?</label>
                      <textarea placeholder='Your message here' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                  </div>
                  <div className="checkbox">
                    <input className='ch' type="checkbox" />
                    <span>I have read and agree to DigitalMNR Privacy Policy.*</span>
                  </div>
                  <div className="ct_btn">
                    <button><span>Submit</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z" fill="#1869FF" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    </>
  );
}
