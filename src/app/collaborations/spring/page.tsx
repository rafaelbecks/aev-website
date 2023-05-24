"use client"
import { useState } from "react";
import Image from 'next/image';
import Script from 'next/script'

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import performances1 from '../../../../public/assets/collaborations/spring/1.jpg'
import performances2 from '../../../../public/assets/collaborations/spring/2.jpg'
import performances3 from '../../../../public/assets/collaborations/spring/3.jpg'

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
                    <iframe src="https://player.vimeo.com/video/746094486?h=2ddbdadb34&title=0&byline=0&portrait=0"
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
                    <i>I ́ve decided spring is a bore</i> is a multidisciplinary performance I created together with the muscian Feliz Nilsson and the dancer Emma Tolander, for the Culture night in Stockholm 2022.
                    We merged our diffrent practices together and transformed one of the studios in Kulturhuset to reminate a dreamscape in the midst of winters passage into spring. Inspired by the poem <i>”Ja visst gör det ont”</i> by Karin Boye. <br /><br />
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
