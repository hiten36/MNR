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

      <div className="my-t">
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
      </div>

      <div className='main_home'>
        <div className="banner_main hidden" style={{ display: 'none' }}>
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

                </div>
              </div>
              <div className="service_flex_main mty">
                <div className="hone_left">

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

                </div>
              </div>
              <button className='see_all'>See all</button>
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
              </div>
              <div className="work_rig">

              </div>
            </div>
          </div>
        </div>
        {/* ====================================================yaha ek section ayega============ */}
        <div className="why_digital">
          <div className="why_dig_home">
            <h2>WHY <span>DIGITALMnR</span></h2>
            <div className="digi_flex mt-10">
              <div className="digi_left">
                <div className="digi_box">
                  <h3>/01</h3>

                  <div class="test bg-[#FFFFFF] rounded-full h-1 ">
                    <div class="bg-[#ECE370] h-1 rounded-full" style={{ width: "45%" }}></div>
                  </div>

                  <p>Strong Technology <br /> background</p>

                </div>
                <div className="digi_box">
                  <h3>/03</h3>

                  <div class="test bg-[#FFFFFF] rounded-full h-1 ">
                    <div class="bg-[#ECE370] h-1 rounded-full" style={{ width: "45%" }}></div>
                  </div>

                  <p>more than the sum of its parts <br /> Value creation Philosophy</p>

                </div>
                <div className="digi_box">
                  <h3>/05</h3>

                  <div class="test bg-[#FFFFFF] rounded-full h-1 ">
                    <div class="bg-[#ECE370] h-1 rounded-full" style={{ width: "45%" }}></div>
                  </div>

                  <p>Synergy Creation</p>

                </div>
                <div className="digi_box">
                  <h3>/07</h3>

                  <div class="test bg-[#FFFFFF] rounded-full h-1 ">
                    <div class="bg-[#ECE370] h-1 rounded-full" style={{ width: "45%" }}></div>
                  </div>

                  <p>Create Solution <br /> accelerators </p>

                </div>
              </div>
              <div className="digi_right">
                <div className="digi_box">
                  <h3>/02</h3>

                  <div class="test bg-[#FFFFFF] rounded-full h-1 ">
                    <div class="bg-[#ECE370] h-1 rounded-full" style={{ width: "45%" }}></div>
                  </div>

                  <p>Experience working in <br /> Hyperscale's ecosystem</p>

                </div>
                <div className="digi_box">
                  <h3>/04</h3>

                  <div class="test bg-[#FFFFFF] rounded-full h-1 ">
                    <div class="bg-[#ECE370] h-1 rounded-full" style={{ width: "45%" }}></div>
                  </div>

                  <p>Value creation for Selling</p>

                </div>
                <div className="digi_box">
                  <h3>/06</h3>

                  <div class="test bg-[#FFFFFF] rounded-full h-1 ">
                    <div class="bg-[#ECE370] h-1 rounded-full" style={{ width: "45%" }}></div>
                  </div>

                  <p>Experience working in <br /> Hyperscale's ecosystem</p>

                </div>
                <div className="digi_box">
                  <h3>/08</h3>

                  <div class="test bg-[#FFFFFF] rounded-full h-1 ">
                    <div class="bg-[#ECE370] h-1 rounded-full" style={{ width: "45%" }}></div>
                  </div>

                  <p>Value creation for Selling</p>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="blog_home">
          <div className="blog_home_flex">
            <div className="blog_flex">
              <h2>BLOG</h2>
              <button><span>View All Blogs</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z" fill="white" />
                </svg>
              </button>
            </div>
            <div className="digital_cards mt-14">
              <div className="digital_card">
                <Splide
                  className=" w-full"
                  aria-label="Our Services"
                  options={{
                    perPage: 3,
                    perMove: 1,
                    autoplay: true,
                    pauseOnHover: true,
                    type: "loop",
                    interval: 1600,
                    drag: true,
                  }}
                >
                  <SplideSlide>
                    <div className="digital_box">
                      <div className="digital_img">
                        <img src="./images/blog1.png" alt="" />
                      </div>
                      <div className="digital_content">
                        <hr />
                        <h5>DIGITAL</h5>
                        <div></div>
                        <h5>Apr 21, 2020</h5>
                      </div>
                      <div className="digital_para">
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="digital_box">
                      <div className="digital_img">
                        <img src="./images/blog2.png" alt="" />
                      </div>
                      <div className="digital_content">
                        <hr />
                        <h5>DIGITAL</h5>
                        <div></div>
                        <h5>Apr 21, 2020</h5>
                      </div>
                      <div className="digital_para">
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="digital_box">
                      <div className="digital_img">
                        <img src="./images/blog3.png" alt="" />
                      </div>
                      <div className="digital_content">
                        <hr />
                        <h5>DIGITAL</h5>
                        <div></div>
                        <h5>Apr 21, 2020</h5>
                      </div>
                      <div className="digital_para">
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="digital_box">
                      <div className="digital_img">
                        <img src="./images/blog1.png" alt="" />
                      </div>
                      <div className="digital_content">
                        <hr />
                        <h5>DIGITAL</h5>
                        <div></div>
                        <h5>Apr 21, 2020</h5>
                      </div>
                      <div className="digital_para">
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="digital_box">
                      <div className="digital_img">
                        <img src="./images/blog2.png" alt="" />
                      </div>
                      <div className="digital_content">
                        <hr />
                        <h5>DIGITAL</h5>
                        <div></div>
                        <h5>Apr 21, 2020</h5>
                      </div>
                      <div className="digital_para">
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="digital_box">
                      <div className="digital_img">
                        <img src="./images/blog3.png" alt="" />
                      </div>
                      <div className="digital_content">
                        <hr />
                        <h5>DIGITAL</h5>
                        <div></div>
                        <h5>Apr 21, 2020</h5>
                      </div>
                      <div className="digital_para">
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
        </div> */}

        <div className="contact_main">
          <div className="contact_home">
            <div className="conatct_home_flex">
              <div className="contact_left">
                <div className="contact_in_box">
                  <h3>Contact Information</h3>
                  <p className='say'>Say somthing to start to live chat</p>
                  <div className="saying mt-10">
                    <div className="saying_box">
                      <div className="say_left">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 15.2276C15.3438 15.2276 15.638 15.0986 15.8828 14.8404C16.1276 14.5823 16.25 14.2719 16.25 13.9094C16.25 13.5469 16.1276 13.2366 15.8828 12.9785C15.638 12.7203 15.3438 12.5913 15 12.5913C14.6562 12.5913 14.362 12.7203 14.1172 12.9785C13.8724 13.2366 13.75 13.5469 13.75 13.9094C13.75 14.2719 13.8724 14.5823 14.1172 14.8404C14.362 15.0986 14.6562 15.2276 15 15.2276ZM15 21.8185C13.3229 20.3136 12.0703 18.9158 11.2422 17.6251C10.4141 16.3344 10 15.1397 10 14.0413C10 12.3935 10.5026 11.0808 11.5078 10.1032C12.513 9.12554 13.6771 8.63672 15 8.63672C16.3229 8.63672 17.487 9.12554 18.4922 10.1032C19.4974 11.0808 20 12.3935 20 14.0413C20 15.1397 19.5859 16.3344 18.7578 17.6251C17.9297 18.9158 16.6771 20.3136 15 21.8185Z" fill="white" />
                          <circle cx="15" cy="15" r="14.5" stroke="white" />
                        </svg>
                      </div>
                      <div className="say_right">
                        <p>
                          Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>
                      </div>
                    </div>
                    <div className="saying_box">
                      <div className="say_left">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15" cy="15" r="14.5" stroke="white" />
                          <path d="M9.9 19.7992C9.66 19.7992 9.45 19.7092 9.27 19.5292C9.09 19.3492 9 19.1392 9 18.8992V11.0992C9 10.8592 9.09 10.6492 9.27 10.4692C9.45 10.2892 9.66 10.1992 9.9 10.1992H20.1C20.34 10.1992 20.55 10.2892 20.73 10.4692C20.91 10.6492 21 10.8592 21 11.0992V18.8992C21 19.1392 20.91 19.3492 20.73 19.5292C20.55 19.7092 20.34 19.7992 20.1 19.7992H9.9ZM15 15.2692L20.1 11.9242V11.0992L15 14.3692L9.9 11.0992V11.9242L15 15.2692Z" fill="white" />
                        </svg>
                      </div>
                      <div className="say_right">
                        <p>
                          Lorem Ipsum has been the industry
                        </p>
                      </div>
                    </div>
                    <div className="saying_box">
                      <div className="say_left">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15" cy="15" r="14.5" stroke="white" />
                          <path d="M19.2031 19.7992C18.1187 19.7992 17.0409 19.5326 15.9698 18.9992C14.8987 18.4659 13.9365 17.7726 13.0831 16.9192C12.2298 16.0659 11.5365 15.1037 11.0031 14.0326C10.4698 12.9614 10.2031 11.8837 10.2031 10.7992C10.2031 10.6303 10.2609 10.4881 10.3765 10.3726C10.492 10.257 10.6342 10.1992 10.8031 10.1992H12.6698C12.7942 10.1992 12.9031 10.2414 12.9965 10.3259C13.0898 10.4103 13.1498 10.5237 13.1765 10.6659L13.5365 12.3459C13.5542 12.4703 13.552 12.5837 13.5298 12.6859C13.5076 12.7881 13.4609 12.8748 13.3898 12.9459L12.0565 14.2926C12.5542 15.1192 13.112 15.8392 13.7298 16.4526C14.3476 17.0659 15.0476 17.5859 15.8298 18.0126L17.0965 16.7059C17.1853 16.6081 17.2876 16.5392 17.4031 16.4992C17.5187 16.4592 17.6342 16.4526 17.7498 16.4792L19.3365 16.8259C19.4698 16.8526 19.5809 16.9192 19.6698 17.0259C19.7587 17.1326 19.8031 17.257 19.8031 17.3992V19.1992C19.8031 19.3681 19.7453 19.5103 19.6298 19.6259C19.5142 19.7414 19.372 19.7992 19.2031 19.7992Z" fill="white" />
                        </svg>
                      </div>
                      <div className="say_right">
                        <p>
                          425-274-6360
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="social_link">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.7676 19.6011C12.7676 17.1598 12.7676 14.7186 12.7676 12.2335C13.4864 12.2335 14.1989 12.2335 14.9176 12.2335C15.0301 11.3759 15.1364 10.5684 15.2426 9.72336C14.4176 9.72336 13.6051 9.72336 12.8176 9.72336C12.8176 8.99723 12.7801 8.30241 12.8301 7.61385C12.8614 7.21323 13.1926 6.96284 13.6176 6.94406C14.1676 6.91902 14.7176 6.9378 15.3114 6.9378C15.3114 6.18664 15.3176 5.49182 15.3051 4.797C15.3051 4.74692 15.2114 4.64676 15.1614 4.64676C14.1801 4.60921 13.1926 4.42768 12.2176 4.74066C11.0989 5.10372 10.4301 5.89244 10.2676 7.0317C10.1551 7.8392 10.1989 8.67173 10.1739 9.49175C10.1739 9.55435 10.1676 9.61068 10.1551 9.7171C9.5739 9.7171 9.00515 9.7171 8.4364 9.7171C8.01765 9.7171 8.01765 9.7171 8.01765 10.1428C8.01765 10.8188 8.01765 11.4948 8.01765 12.221C8.74265 12.221 9.44265 12.221 10.1614 12.221C10.1614 14.8438 10.1614 17.4165 10.1614 19.983C6.33015 20.2459 1.15515 17.4666 0.155148 11.7327C-0.832352 6.09901 3.0114 1.02242 8.3489 0.139804C14.0739 -0.805406 19.0364 3.16322 19.8676 8.39005C20.7989 14.2679 16.6739 18.6622 12.7676 19.6011Z" fill="white" />
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 20C8.3875 20 6.76875 20 5.15625 20C2.60625 20 0.625 18.4125 0.0875 15.925C0.0125 15.5813 0.00625 15.225 0.00625 14.8687C0 11.625 0 8.3875 0 5.15C0 2.60625 1.60625 0.60625 4.0875 0.0875C4.41875 0.01875 4.76875 0.00625 5.1125 0.00625C8.36875 0 11.6313 0 14.8875 0C17.3937 0 19.4125 1.6375 19.9125 4.09375C19.975 4.40625 19.9937 4.7375 19.9937 5.05625C20 8.35 20 11.6375 19.9937 14.9312C19.9937 17.4062 18.3188 19.4375 15.8938 19.9188C15.5688 19.9813 15.2312 19.9937 14.9 19.9937C13.2687 20.0063 11.6375 20 10 20ZM18.3125 10.0063C18.3125 8.25625 18.3312 6.50625 18.3062 4.75625C18.2812 3.18125 16.825 1.70625 15.25 1.69375C11.75 1.66875 8.25625 1.66875 4.75625 1.69375C3.1625 1.70625 1.7 3.18125 1.69375 4.78125C1.675 8.25625 1.675 11.7375 1.69375 15.2125C1.70625 16.825 3.16875 18.3 4.78125 18.3062C8.25625 18.3312 11.7375 18.3312 15.2125 18.3062C16.8438 18.2937 18.2875 16.825 18.3125 15.1875C18.3312 13.4625 18.3125 11.7313 18.3125 10.0063Z" fill="white" />
                      <path d="M10.0251 5.00005C12.7751 5.01255 15.0126 7.2688 15.0001 10.0251C14.9876 12.7751 12.7313 15.0126 9.97505 15.0001C7.22505 14.9876 4.98755 12.7313 5.00005 9.97505C5.01255 7.22505 7.2688 4.98755 10.0251 5.00005ZM9.98755 13.3188C11.8438 13.3251 13.3126 11.8688 13.3251 10.0126C13.3313 8.1563 11.8751 6.68755 10.0188 6.67505C8.16255 6.6688 6.6938 8.12505 6.6813 9.9813C6.6688 11.8438 8.1313 13.3126 9.98755 13.3188Z" fill="white" />
                      <path d="M15.4047 5.81958C14.6985 5.81958 14.1735 5.28208 14.1797 4.56333C14.186 3.88208 14.736 3.33208 15.411 3.33208C16.086 3.32583 16.6735 3.91333 16.6672 4.58833C16.6672 5.27583 16.1047 5.81958 15.4047 5.81958Z" fill="white" />
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.8516 19.9687C15.8516 18.9284 15.8594 17.9116 15.8516 16.8948C15.8359 15.307 15.8594 13.7113 15.7734 12.1235C15.6641 10.0039 14.1016 9.65189 12.6641 10.129C11.9609 10.3637 11.5938 10.9346 11.4141 11.623C11.3203 11.9984 11.25 12.3895 11.25 12.7806C11.2344 15.0254 11.2344 17.2624 11.2344 19.5072C11.2344 19.6636 11.2344 19.8122 11.2344 19.9921C9.84375 19.9921 8.48438 19.9921 7.10156 19.9921C7.10156 15.5494 7.10156 11.1302 7.10156 6.67184C8.40625 6.67184 9.70312 6.67184 11.0469 6.67184C11.0469 7.25064 11.0469 7.8138 11.0469 8.40825C11.3984 8.03281 11.6875 7.65737 12.0391 7.36014C13.1328 6.43719 14.4297 6.18689 15.8047 6.37461C16.4766 6.46847 17.1562 6.64837 17.7656 6.93777C18.8672 7.454 19.4219 8.45518 19.6719 9.60496C19.8438 10.4028 19.9609 11.224 19.9766 12.0375C20.0156 14.603 19.9922 17.1763 19.9922 19.7418C19.9922 19.8044 19.9844 19.8748 19.9766 19.9687C18.6172 19.9687 17.2578 19.9687 15.8516 19.9687Z" fill="white" />
                      <path d="M0.34375 6.66406C1.71875 6.66406 3.05469 6.66406 4.42969 6.66406C4.42969 11.1068 4.42969 15.5417 4.42969 20C3.07031 20 1.72656 20 0.34375 20C0.34375 15.5651 0.34375 11.1302 0.34375 6.66406Z" fill="white" />
                      <path d="M4.78129 2.40907C4.77348 3.73876 3.69535 4.84161 2.39848 4.84943C1.08598 4.84161 -0.0077709 3.71529 4.15953e-05 2.36996C0.0078541 1.06375 1.08598 0 2.39067 0C3.73442 0 4.7891 1.06375 4.78129 2.40907Z" fill="white" />
                    </svg>

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.82374 15.1258C4.79883 14.8023 3.84267 14.4069 2.99275 13.7383C2.63653 13.4579 2.29282 13.1344 1.98034 12.7894C1.57413 12.3436 1.71162 11.7685 2.25532 11.5816C2.42405 11.5241 2.59279 11.4738 2.82402 11.3947C2.69278 11.294 2.60529 11.2221 2.51779 11.1574C1.11793 10.2372 0.299252 8.85694 0.0117789 7.04529C-0.0694635 6.54206 0.280504 6.15385 0.724212 6.2473C0.936692 6.29044 1.13667 6.36952 1.3929 6.4486C1.30541 6.17541 1.22417 5.95255 1.16167 5.71531C0.780457 4.32063 0.880448 2.98346 1.57413 1.73257C1.93035 1.08555 2.4303 1.09274 2.76152 1.76132C3.83017 3.91804 5.32378 5.50683 7.35484 6.39827C8.05478 6.7074 8.77346 6.9087 9.49839 6.9734C9.56713 6.32638 9.57963 5.70093 9.71087 5.10424C10.1483 3.16319 11.1295 1.74694 12.8481 1.13587C13.8292 0.783609 14.7979 0.869878 15.7353 1.34436C15.9415 1.45219 16.0978 1.43063 16.2853 1.32279C16.9789 0.920201 17.6851 0.53918 18.3788 0.136592C18.66 -0.0287563 18.935 -0.0790798 19.185 0.186916C19.4037 0.409777 19.4162 0.726096 19.2412 1.14306C18.96 1.80446 18.6725 2.46585 18.3663 3.18476C18.7038 3.156 18.985 3.12725 19.2725 3.09849C19.5412 3.06973 19.7787 3.14881 19.9162 3.42919C20.0662 3.72394 19.9974 3.99712 19.8474 4.27031C19.6099 4.69446 19.36 5.11143 19.16 5.54996C19.06 5.76564 19.0038 6.0532 19.0288 6.28325C19.4537 9.84184 18.685 13.005 16.7352 15.8088C15.1604 18.0661 13.1168 19.3314 10.6545 19.7843C9.02969 20.0791 7.40484 20.0647 5.77999 19.7843C4.36762 19.5399 2.99275 19.1589 1.69912 18.4472C1.36165 18.2674 1.04918 18.023 0.74921 17.7642C0.442989 17.5054 0.349247 17.1675 0.461737 16.8584C0.599224 16.4989 0.874198 16.4342 1.18667 16.4198C2.00534 16.3767 2.83027 16.3623 3.64269 16.2473C4.43012 16.1395 5.14255 15.7441 5.82374 15.1258ZM3.5052 17.7786C3.49895 17.7786 3.5677 17.8145 3.63019 17.8361C4.82383 18.2674 6.04871 18.5119 7.2986 18.5909C9.06093 18.7132 10.7858 18.5406 12.4544 17.8217C14.2229 17.0597 15.5041 15.6219 16.4977 13.8246C17.6539 11.7469 18.1288 9.4752 17.8851 7.01653C17.8039 6.20417 17.6351 5.37743 18.1976 4.6729C18.2038 4.65852 18.1976 4.62976 18.1913 4.57944C17.9976 4.60101 17.7976 4.61538 17.6039 4.64414C17.3227 4.69446 17.0602 4.6729 16.8727 4.38533C16.679 4.09058 16.7477 3.81021 16.879 3.51546C17.0602 3.10568 17.2352 2.68871 17.4476 2.19267C17.0539 2.41553 16.7227 2.57369 16.4102 2.77498C16.0978 2.97628 15.8291 2.93314 15.5041 2.7606C15.0854 2.54493 14.6292 2.34364 14.1792 2.31488C12.4856 2.19986 11.2732 3.63048 10.8795 5.29116C10.7108 5.99569 10.717 6.7074 10.8045 7.42631C10.892 8.13803 10.6545 8.43997 10.0546 8.39684C9.61713 8.36808 9.17967 8.33213 8.75471 8.24586C6.12371 7.69231 4.0114 6.1826 2.4303 3.70956C2.37406 3.62329 2.31156 3.54421 2.20532 3.40762C2.01159 4.6729 2.27407 5.71531 2.949 6.62114C3.13649 6.87275 3.26147 7.13156 3.13024 7.46945C2.999 7.79295 2.75527 7.90079 2.4678 7.90798C2.14908 7.91517 1.83036 7.90798 1.4054 7.90798C1.67412 8.34651 1.86786 8.72753 2.11783 9.05104C2.70528 9.82027 3.46771 10.266 4.31138 10.5536C4.6176 10.6542 4.88632 10.7908 4.93007 11.2006C4.97381 11.6175 4.73009 11.826 4.45511 11.9986C4.17389 12.1783 3.89267 12.3508 3.59269 12.5377C3.66769 12.6024 3.73018 12.66 3.79892 12.7103C4.82383 13.4364 5.95497 13.803 7.13611 14.0115C7.38609 14.0546 7.57357 14.1984 7.64856 14.4644C7.72356 14.7304 7.67981 14.982 7.50483 15.1977C6.92988 15.9022 6.31744 16.5564 5.54251 16.9446C4.87382 17.2825 4.16139 17.5198 3.5052 17.7786Z" fill="white" />
                    </svg>

                  </div>
                </div>
              </div>
              <div className="contact_right">
                <div className="contact_form">
                  <h3>Feel free to get in touch contact with us.</h3>
                  <form action="">
                    <div className="contact_input flex">
                      <div className='w-full w-tier w-tier1'>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
                        <input type="text" id="first_name" class="block w-full p-2.5" required />
                      </div>
                      <div className='w-full w-tier w-tier1'>
                        <label for="last_name" class="block mb-2 text-sm font-medium">Last name</label>
                        <input type="text" id="last_name" class="block w-full p-2.5" required />
                      </div>

                    </div>
                    <div className="contact_input flex">
                      <div className='w-full w-tier'>
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Preferred Method of Contact*</label>
                        <select id="countries" class=" block w-full p-2.5">
                          <option selected>Please Select</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>
                      <div className='w-full w-tier'>
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">How did you hear about us?*</label>
                        <select id="countries" class=" block w-full p-2.5">
                          <option selected>Please Select</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>

                    </div>
                    <div className="contact_input flex">
                      <div className='w-full w-tier'>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">How can we help you?</label>
                        <input type="text" id="first_name" class="block w-full p-2.5" placeholder='Write your message..' required />
                      </div>
                    </div>
                    <div class="flex items-center ting">
                      <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I have read and agree to One North's Privacy Policy.*</label>
                    </div>
                    <div className="contact_btn">
                      <button><span>Sumbit</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 14L5.75313 12.775L10.6531 7.875H0V6.125H10.6531L5.75313 1.225L7 0L14 7L7 14Z" fill="white" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </>
  );
}
