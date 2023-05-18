"use client"
import { useState } from "react";
import Image from 'next/image';
import Script from 'next/script'

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import performances1 from '../../../../public/assets/performances/trasncendence-1.jpg'
import performances2 from '../../../../public/assets/performances/details/2.jpg'
import performances3 from '../../../../public/assets/performances/details/3.jpg'
import performances4 from '../../../../public/assets/performances/details/4.jpg'
import performances5 from '../../../../public/assets/performances/details/5.jpg'
import performances6 from '../../../../public/assets/performances/details/6.jpg'

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
                  <iframe src="https://player.vimeo.com/video/408495314?h=2ddbdadb34&title=0&byline=0&portrait=0"
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
              <h2 className={CrimsonFont.className}>A merging of costumes, voice & transendence </h2>
              <p className="principal">
                  A merging of Costumes, Voice & Transcendence is a performance work presenting Costume <br />
                  as the main performer.<br />
                  In this piece The Body is used as a supportive structure and The Voice as an enchanting tool<br />
                  to demand presence.<br />
                  Entering, to create a transcendent experience of textile in a secular art context.<br />
              </p>
              <p className="body">
                  The live performance is 15 min long and is performed by Amanda Elida Varhaugvik on vocals, Elsa Bergman on Bass and Paula Sundberg. It is a fusion of live music and meditative yet instructive movements that showcase the costumes.
                  <br />
                  The Costumes are three ensembles of different qualities of fabric with dyed and hand painted patterns and prints made of my own photographs. Working with photo on textile is one of my main techniques. Usually I use photographs of the recent work I’ve done to create a transference of use. In these costumes I have also used photos of my grandmothers porcelain angel collection, of dead and dried flowers and family pictures from my brothers baptism and my mothers confirmation.
                  <br />
                  The Installation contains three wooden hangers and a faux leather carpet with ribbons. The faux leather carpet activates into a stage during the performance and The wooden hangers are used as supporting structures for the costumes when it is over.
                  <br />
                  <br />
                  Contact me for full lenght video.
                  Documentation by: Felica Sundberg
                  <br />
                  <br />
                  <br />
                  <br />
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
