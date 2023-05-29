"use client"
import { useState } from "react";
import Image from 'next/image';
import Script from 'next/script'

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import performances1 from '../../../../public/assets/works/items/1.jpg'
import performances2 from '../../../../public/assets/works/items/2.jpg'
import performances3 from '../../../../public/assets/works/items/3.jpg'
import performances4 from '../../../../public/assets/works/items/4.jpg'
import performances5 from '../../../../public/assets/works/items/5.jpg'
import performances6 from '../../../../public/assets/works/items/6.jpg'
import performances7 from '../../../../public/assets/works/items/7.jpg'
import performances8 from '../../../../public/assets/works/items/8.jpg'
import performances9 from '../../../../public/assets/works/items/9.jpg'

const BaskervvilleFont = Baskervville({ subsets: ['latin'],   style: ['normal', 'italic'], weight: "400" })

const CrimsonFont = Crimson_Text({ subsets: ['latin'], weight: "400" })

export default function Transcendence() {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    return (
        <div className="performances-container">
            <h2 className={CrimsonFont.className} style={{ textAlign: 'center', marginBottom: '30px'}}>The item series</h2>
            <div className="performances">
                <div className="item" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 1})
                }}>
                    <Image
                        alt="transcendence-1"
                        src={performances1}
                    />
                    <p>The scarf</p>
                </div>
                <div className="item" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 2})
                }}>
                    <Image
                        alt="transcendence-2"
                        src={performances2}
                    />
                    <p>The pointed hat</p>
                </div>
                <div className="item" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 3})
                }}>
                    <Image
                        alt="transcendence-3"
                        src={performances3}
                    />
                    <p>The dress</p>
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
                    <p>The Prada</p>
                </div>
                <div className="item" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 5})
                }}>
                    <Image
                        alt="transcendence-2"
                        src={performances5}
                    />
                    <p>The mask</p>
                </div>
                <div className="item" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 6})
                }}>
                    <Image
                        alt="transcendence-3"
                        src={performances6}
                    />
                    <p>The Robe</p>
                </div>
            </div>
            <div className="performances">
                <div className="item portrait" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 7})
                }}>
                    <Image
                        alt="transcendence-1"
                        src={performances7}
                    />
                    <p>The Bathingsuit</p>
                </div>
                <div className="item portrait" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 8})
                }}>
                    <Image
                        alt="transcendence-2"
                        src={performances8}
                    />
                    <p>The crown</p>
                </div>
                <div className="item portrait" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 9})
                }}>
                    <Image
                        alt="transcendence-3"
                        src={performances9}
                    />
                    <p>The veil</p>
                </div>
            </div>

            <div className={`description ${BaskervvilleFont.className}`}>
                <p className="body" style={{ display: 'flex', justifyContent: 'center'}}>
                    <br /><br />
                    Photographs taken between 2017 - 2020, where the handcrafted textile item has been the muse.<br /><br />
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
                        String(performances7.src),
                        String(performances8.src),
                        String(performances9.src),
                    ]}
                    type="image"
                    slide={lightboxController.slide}
                />
                <p></p>

            </div>
        </div>
    )
}
