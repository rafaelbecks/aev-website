"use client"
import { useState } from "react";
import Image from 'next/image';
import Script from 'next/script'

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import principal from '../../../../public/assets/performances/her/principal.jpg'
import performances1 from '../../../../public/assets/performances/her/1.jpg'
import performances2 from '../../../../public/assets/performances/her/2.jpg'
import performances3 from '../../../../public/assets/performances/her/3.jpg'
import performances4 from '../../../../public/assets/performances/her/4.jpg'
import performances5 from '../../../../public/assets/performances/her/5.jpg'
import performances6 from '../../../../public/assets/performances/her/5.jpg'
import PlayIcon from "@/app/performances/her/icons";

const BaskervvilleFont = Baskervville({ subsets: ['latin'],   style: ['normal', 'italic'], weight: "400" })

const CrimsonFont = Crimson_Text({ subsets: ['latin'], weight: "400" })

export default function Her() {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

  return (
      <div className="performances-container">

          <div className="vimeo-container">
              <Image
                  alt="transcendence-3"
                  src={principal}
              />
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
                      src={principal}
                  />
                  <PlayIcon />
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
          <div className="performances">
              <div className="item" onClick={() => {
                  setLightboxController({toggler: !lightboxController.toggler, slide: 4})
              }}>
                  <Image
                      alt="transcendence-1"
                      src={performances4}
                  />
              </div>
              <div className="item" onClick={() => {
                  setLightboxController({toggler: !lightboxController.toggler, slide: 5})
              }}>
                  <Image
                      alt="transcendence-2"
                      src={performances5}
                  />
              </div>
              <div className="item" onClick={() => {
                  setLightboxController({toggler: !lightboxController.toggler, slide: 6})
              }}>
                  <Image
                      alt="transcendence-3"
                      src={performances2}
                  />
              </div>
          </div>


          <div className={`description ${BaskervvilleFont.className}`}>
              <h2 className={CrimsonFont.className}>Her</h2>
              <p className="body">
                  The performance ” Her”  is 30 minutes long and is performed by me on vocals and a fan organ together with my mother Siv Varhaugvik on Shimes. In this work I use my textile creations as a tool for creating sound. Hand dyed silk bags filled with sand are placed as weights on the fan organs keys, this creates a standing chord that fills the room. On top of this ongoing audio, I record vocals loops that grow together with the fan organ and become a musical piece that accompanies the textiles and the rituals we perform.                  <br />
                  <br />
                  <br />
                  Performed at the arthall Not Quite in Fengerfors, 2019.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
              </p>

              <FsLightbox
                  toggler={lightboxController.toggler}
                  sources={[
                      String(performances1.src),
                      <iframe
                          key={'iframe'}
                          src="https://player.vimeo.com/video/382749855"
                          width="1920px"
                          height="1080px"
                          frameBorder="0"
                          allow="autoplay; fullscreen"
                          allowFullScreen
                      />,
                      String(performances3.src),
                      String(performances4.src),
                      String(performances5.src),
                      String(performances6.src),
                  ]}
                  type="image"
                  slide={lightboxController.slide}
              />
              <p></p>

          </div>
      </div>
  )
}
