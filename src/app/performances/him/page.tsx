"use client"
import { useState } from "react";
import Image from 'next/image';
import Script from 'next/script'

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import performances1 from '../../../../public/assets/performances/him/1.jpg'
import performances2 from '../../../../public/assets/performances/him/2.jpg'
import performances3 from '../../../../public/assets/performances/him/3.jpg'

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
                  <iframe src="https://player.vimeo.com/video/409701965?h=2ddbdadb34&title=0&byline=0&portrait=0"
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
              <p className="principal">
                  The performance ”Him” is a solo verison of the performance ”Her”. In this performance I use a vocal loop pedal and a Harmonium. I use the weight of textile sand bags to create a standing chord. The apron dress is in three parts. The pat- tern is made with pictures taken by me at the Blue lagoon in Gotland. I have printed them on paper and then poured water on to create a watercolour effect, using the print pigments.Then I let it dry and transfer it on fabric by a heat press. Performed during the group exhibition ” Sexy food” curated by Dotdotdot. During Sthlm craft week 2019.<br /><br />
              </p>
              <FsLightbox
                  toggler={lightboxController.toggler}
                  sources={[
                      String(performances1.src),
                      String(performances2.src),
                      String(performances3.src)
                  ]}
                  type="image"
                  slide={lightboxController.slide}
              />
              <p></p>

          </div>
      </div>
  )
}
