"use client"
import { useState } from "react";
import Image from 'next/image';
import Script from 'next/script'

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import principal from '../../../../public/assets/works/never-starts/1.jpg'
import performances1 from '../../../../public/assets/works/never-starts/2.jpg'
import performances2 from '../../../../public/assets/works/never-starts/3.jpg'
import performances3 from '../../../../public/assets/works/never-starts/4.jpg'

const BaskervvilleFont = Baskervville({ subsets: ['latin'],   style: ['normal', 'italic'], weight: "400" })

const CrimsonFont = Crimson_Text({ subsets: ['latin'], weight: "400" })

export default function Her() {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

  return (
      <div className="performances-container">
          <h2 className={CrimsonFont.className} style={{ textAlign: 'center', marginBottom: '30px'}}>It never starts, Thus, It never ends</h2>
          <div className="vimeo-container" onClick={() => {
              setLightboxController({toggler: !lightboxController.toggler, slide: 1})
          }}>
              <Image
                  alt="transcendence-3"
                  src={principal}
              />
          </div>


          <div className="performances">
              <div className="item" onClick={() => {
                  setLightboxController({toggler: !lightboxController.toggler, slide: 2})
              }}>
                  <Image
                      alt="transcendence-1"
                      src={performances1}
                  />
              </div>
              <div className="item" onClick={() => {
                  setLightboxController({toggler: !lightboxController.toggler, slide: 3})
              }}>
                  <Image
                      alt="transcendence-2"
                      src={performances2}
                  />
              </div>
              <div className="item" onClick={() => {
                  setLightboxController({toggler: !lightboxController.toggler, slide: 4})
              }}>
                  <Image
                      alt="transcendence-3"
                      src={performances3}
                  />
              </div>
          </div>

          <div className={`description ${BaskervvilleFont.className}`}>
              <p className="body" style={{ display: 'flex', justifyContent: 'center'}}>
                  Self portraits printed on four velvet towels, Installed in sandholes on the Ljugarn beach, Gotland 2023
                  <br />
                  <br />
                  <br />
                  <br />
              </p>

              <FsLightbox
                  toggler={lightboxController.toggler}
                  sources={[
                      String(principal.src),
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
