"use client"
import { useState } from "react";
import Image from 'next/image';
import Script from 'next/script'

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import performances1 from '../../../../public/assets/collaborations/current-obsession/1.png'
import performances2 from '../../../../public/assets/collaborations/current-obsession/2.png'
import performances3 from '../../../../public/assets/collaborations/current-obsession/3.png'
import performances4 from '../../../../public/assets/collaborations/current-obsession/4.png'
import performances5 from '../../../../public/assets/collaborations/current-obsession/5.png'
import performances6 from '../../../../public/assets/collaborations/current-obsession/6.png'

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
                <p className="body">
                    Current Obsession The Placeholder Issue Chapter 1. Body as an Intermediary Object <br />
                    Featuring my work. <br />
                    Purchase: <a href="https://form.jotform.com/223454197943363" target="_blank">https://form.jotform.com/223454197943363</a><br /><br />
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
