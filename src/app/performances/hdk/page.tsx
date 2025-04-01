"use client"
import { useState } from "react";
import Image from 'next/image';
import Script from 'next/script'

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import putadeamor from '../../../../public/assets/collaborations/puta/putadeamor.jpg'

import performances1 from '../../../../public/assets/collaborations/puta/handen.jpg'
import performances2 from '../../../../public/assets/collaborations/puta/handen2.jpg'
import performances3 from '../../../../public/assets/collaborations/puta/handen3.jpg'
import performances4 from '../../../../public/assets/collaborations/puta/handen4.jpg'

const BaskervvilleFont = Baskervville({ subsets: ['latin'],   style: ['normal', 'italic'], weight: "400" })

const CrimsonFont = Crimson_Text({ subsets: ['latin'], weight: "400" })

export default function Transcendence() {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    return (
        <div className="performances-container">
          <div className="vimeo-container" onClick={() => {
              setLightboxController({toggler: !lightboxController.toggler, slide: 1})
          }}>
              <Image
                  alt="transcendence-3"
                  src={performances1}
              />
          </div>
            <div className="performances">
                <div className="item" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 2})
                }}>
                    <Image
                        alt="transcendence-1"
                        src={performances2}
                    />
                </div>
                <div className="item" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 3})
                }}>
                    <Image
                        alt="transcendence-2"
                        src={performances3}
                    />
                </div>
                <div className="item" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 4})
                }}>
                    <Image
                        alt="transcendence-3"
                        src={performances4}
                    />
                </div>
            </div>

            <div className={`description ${BaskervvilleFont.className}`}>
              <p className="body">
                <i>Waiting for the Crescent Moon</i> was first presented at Handen Terminalen Konst during the 2023 edition of the Abysse Sound Art Festival.
                <br /><br />
              </p>
                <FsLightbox
                    toggler={lightboxController.toggler}
                    sources={[
                        String(performances1.src),
                        String(performances2.src),
                        String(performances3.src),
                        String(performances4.src)
                    ]}
                    type="image"
                    slide={lightboxController.slide}
                />
                <p></p>
                <p></p>
                <p></p>

            </div>
        </div>
    )
}
