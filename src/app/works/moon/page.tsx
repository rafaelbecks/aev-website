"use client"
import { useState } from "react";
import Image from 'next/image';
import Script from 'next/script'

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import performances1 from '../../../../public/assets/works/moon/1.jpg'
import performances2 from '../../../../public/assets/works/moon/2.jpg'
import performances3 from '../../../../public/assets/works/moon/3.jpg'

const BaskervvilleFont = Baskervville({ subsets: ['latin'],   style: ['normal', 'italic'], weight: "400" })

const CrimsonFont = Crimson_Text({ subsets: ['latin'], weight: "400" })

export default function Transcendence() {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    return (
        <div className="performances-container">
            <h2 className={CrimsonFont.className} style={{ textAlign: 'center', marginBottom: '30px'}}>Moon</h2>
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
                <p className="body" style={{ display: 'flex', justifyContent: 'center'}}>
                    <br /><br />
                    A series of photographs taken during autumn 2022.<br />
                    Portraying my mother in various layers of textile, handcrafted by me.<br /><br />
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
