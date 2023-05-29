"use client"
import { useState } from "react";
import Image from 'next/image';
import Script from 'next/script'

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import principal from '../../../../public/assets/works/lay/principal.jpg'
import performances1 from '../../../../public/assets/works/lay/1.jpg'
import performances2 from '../../../../public/assets/works/lay/2.jpg'
import performances3 from '../../../../public/assets/works/lay/3.jpg'

const BaskervvilleFont = Baskervville({ subsets: ['latin'],   style: ['normal', 'italic'], weight: "400" })

const CrimsonFont = Crimson_Text({ subsets: ['latin'], weight: "400" })

export default function Her() {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

  return (
      <div className="performances-container">
          <h2 className={CrimsonFont.className} style={{ textAlign: 'center', marginBottom: '30px'}}>Lay</h2>
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
                      src={principal}
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
                  Lay is a woodenbox with a thai silk print placed inside of it. On top of the box lies fresch chrysanthemum flowers. <br /> Shown at Vita havet, Konstfack during the group exhibition ”Yellow” 2019. <br />Dimensions: 175 x 80 x 50 cm
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
