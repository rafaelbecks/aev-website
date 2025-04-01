"use client"
import { useState } from "react";
import Image from 'next/image';
import Script from 'next/script'
import Link from "next/link";

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import putadeamor from '../../../../public/assets/collaborations/puta/putadeamor.jpg'

import performances1 from '../../../../public/assets/collaborations/puta/handen.jpg'
import performances2 from '../../../../public/assets/collaborations/puta/handen2.jpg'
import performances3 from '../../../../public/assets/collaborations/puta/handen3.jpg'
import crescentMoon from '../../../../public/assets/performances/crescent-moon/video-thumbnail.jpg'
import bioAspen from '../../../../public/assets/performances/crescent-moon/bio-aspen/principal.jpg'
import hdk from '../../../../public/assets/collaborations/puta/handen3.jpg'

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
              setLightboxController({toggler: !lightboxController.toggler, slide: 4})
          }}>
              <Image
                  alt="transcendence-3"
                  src={putadeamor}
              />
          </div>
          <div className="performances">
              <Link href="performances/waiting-for-crescent-moon">
                  <div className="item">
                      <Image
                          alt="transcendence-3"
                          src={crescentMoon}
                      />
                  </div>
              </Link>
              <Link href="performances/hdk">
                  <div className="item">
                      <Image
                          alt="transcendence-3"
                          src={hdk}
                      />
                  </div>
              </Link>
              <Link href="performances/waiting-for-crescent-moon/bio-aspen">
                  <div className="item">
                      <Image
                          alt="transcendence-3"
                          src={bioAspen}
                      />
                  </div>
              </Link>
          </div>

            <div className={`description ${BaskervvilleFont.className}`}>
                <p className="body">
                  In 2022, Varhaugvik invited Becerra to collaborate on the music for Waiting for the Crescent Moon, a performance that involved developing a color-tracking software for generating music from textiles. This collaboration later led to the release of a vinyl record and multiple
                  performances. Building on this collaboration, they are now exploring a new project called “Puta de Amor”.
                  <p></p>
                  Rafael Becerra (1993) is a Venezuelan musician and creative technologist based in Stockholm. His work blends electronic textures with acoustic instruments, exploring generative ideas while keeping human expression as the main character. He builds both software and hardware for his practice, using custom tools, traditional instruments, and synthesizers.

                  <br /><br />
                  <a href="https://waitingforthecrescentmoon.bandcamp.com/album/waiting-for-the-crescent-moon" target="_blank">Waiting for the Crescent Moon Vinyl</a><br />
                  <a href="https://open.spotify.com/intl-es/album/17xKlJhzp4hqle0uRsscjq?si=am_T3dCNTFaWbM_mvuwCOg" target="_blank">Spotify</a><br /><br />

                </p>
                <FsLightbox
                    toggler={lightboxController.toggler}
                    sources={[
                        String(performances1.src),
                        String(performances2.src),
                        String(performances3.src),
                        String(putadeamor.src)
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
