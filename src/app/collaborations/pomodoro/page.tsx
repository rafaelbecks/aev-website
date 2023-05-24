"use client"
import { useState } from "react";
import Image from 'next/image';
import Script from 'next/script'

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import performances1 from '../../../../public/assets/collaborations/pomodoro/1.jpg'
import performances2 from '../../../../public/assets/collaborations/pomodoro/2.jpg'
import performances3 from '../../../../public/assets/collaborations/pomodoro/3.jpg'

const BaskervvilleFont = Baskervville({ subsets: ['latin'],   style: ['normal', 'italic'], weight: "400" })

const CrimsonFont = Crimson_Text({ subsets: ['latin'], weight: "400" })

export default function Transcendence() {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

  return (
      <div className="performances-container">

          <div className="vimeo-container">
              <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                  <iframe src="https://player.vimeo.com/video/669395950?h=2ddbdadb34&title=0&byline=0&portrait=0"
                          style={{
                              position: 'absolute', top: 0, left: 0, width: "100%", height: '100%'}}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
              </div>
              <Script src="https://player.vimeo.com/api/player.js" ></Script>
          </div>


          <div className="performances">
              <div className="item" onClick={() => {
                  setLightboxController({toggler: !lightboxController.toggler, slide: 1})
              }}>
                  <Image
                      alt="transcendence-1"
                      src={performances1}
                  />
              </div>
              <div className="item" onClick={() => {
                  setLightboxController({toggler: !lightboxController.toggler, slide: 2})
              }}>
                  <Image
                      alt="transcendence-2"
                      src={performances2}
                  />
              </div>
              <div className="item" onClick={() => {
                  setLightboxController({toggler: !lightboxController.toggler, slide: 3})
              }}>
                  <Image
                      alt="transcendence-3"
                      src={performances3}
                  />
              </div>
          </div>

          <div className={`description ${BaskervvilleFont.className}`}>
              <p className="body">
                  <i>Á Cue : Pomdoro</i> is a performance piece that I created together with the artist John Claesson.
                  The performance took place outside in a tunnel in Stockholm, under a winter night. During one year we created costumes together that was meant to be used as tools to generate ritualistic experiences. Accomponating the performance was also the saxophone player Julia Sztralek who stood in the crowd, playing out her impressions of the performance. <br /><br />
              </p>
              <FsLightbox
                  toggler={lightboxController.toggler}
                  sources={[
                      String(performances1.src),
                      String(performances2.src),
                      String(performances3.src),
                  ]}
                  type="image"
                  slide={lightboxController.slide}
              />
              <p></p>

          </div>
      </div>
  )
}
