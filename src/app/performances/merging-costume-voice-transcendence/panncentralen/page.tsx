"use client"
import { useState } from "react";
import Image from 'next/image';
import Script from 'next/script'

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import performances1 from '../../../../../public/assets/performances/transcendence/panncentralen/1.jpg'
import performances2 from '../../../../../public/assets/performances/transcendence/panncentralen/2.jpg'
import performances3 from '../../../../../public/assets/performances/transcendence/panncentralen/3.jpg'
import performances4 from '../../../../../public/assets/performances/transcendence/panncentralen/4.jpg'
import performances5 from '../../../../../public/assets/performances/transcendence/panncentralen/5.jpg'
import performances6 from '../../../../../public/assets/performances/transcendence/panncentralen/6.jpg'

const BaskervvilleFont = Baskervville({ subsets: ['latin'],   style: ['normal', 'italic'], weight: "400" })

const CrimsonFont = Crimson_Text({ subsets: ['latin'], weight: "400" })

export default function Transcendence() {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

  return (
      <div className="performances-container">
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
              <p className="body" style={{ display: 'flex', justifyContent: 'center'}}>
                  A merging of Costumes, Voice & Transendence performed at Panncentralen <br />
                  during the group exhbition ”Masters of Craft” at Gustavsbergs Konsthall, 2020.
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
