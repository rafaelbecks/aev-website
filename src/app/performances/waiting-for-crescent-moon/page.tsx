"use client"
import { useState } from "react";
import Image from 'next/image';

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import performances1 from '../../../../public/assets/performances/crescent-moon/1.jpg'
import performances2 from '../../../../public/assets/performances/crescent-moon/2.jpg'
import performances3 from '../../../../public/assets/performances/crescent-moon/3.jpg'
import performances4 from '../../../../public/assets/performances/crescent-moon/4.jpg'
import performances5 from '../../../../public/assets/performances/crescent-moon/5.jpg'
import performances6 from '../../../../public/assets/performances/crescent-moon/6.jpg'
import Script from "next/script";

const BaskervvilleFont = Baskervville({ subsets: ['latin'],   style: ['normal', 'italic'], weight: "400" })

const CrimsonFont = Crimson_Text({ subsets: ['latin'], weight: "400" })

export default function CrescentMoon() {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

  return (
      <div className="performances-container">

          <div className="vimeo-container">
              <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                  <iframe src="https://player.vimeo.com/video/862480862?h=2ddbdadb34&title=0&byline=0&portrait=0"
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
                      src={performances6}
                  />
              </div>
          </div>


          <div className={`description ${BaskervvilleFont.className}`}>
              <h2>Waiting for the crescent moon</h2>
              <p className="body" style={{ display: 'flex', justifyContent: 'center'}}>
                  &ldquo; &rdquo;Waiting for the crescent moon	&ldquo; &rdquo; is a performance work, woven around a meticulously handcrafted textile carpet. Its a crossgenre mythological fairytale drama, materialized through live music, movement, and the very fabric of textile. In this work I invited the Venezuelan software engineer and musician Rafael Becerra.
                  Becerra created a A MIDI color tracking software, specifically developed for the performance. This software operates as a twochannel colorbased notemapping system. A camera is connected to the computer, allowing us to select two colors from the textiles that are then mapped to different virtual instruments, based on their positions within the camera&apos;s field of view. This system helps impart a sense of textile generated melodies. Becerra is wearing a traditional Venezuelan liqui liqui costume integrated with prints of the Norwegian seaside. On top of the textile generated melodies
                  Becerra is playing the cuatro and Varhaugvik is singing.<br /><br />
                  Documentation by: Felica Sundberg<br /><br /><br />
              </p>
              <FsLightbox
                  toggler={lightboxController.toggler}
                  sources={[
                      String(performances1.src),
                      String(performances2.src),
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
