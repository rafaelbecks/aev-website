"use client"
import { useState } from "react";
import Image from 'next/image';
import Script from 'next/script'

import {Baskervville, Crimson_Text } from "next/font/google";
import FsLightbox from "fslightbox-react";

import performances1 from '../../../../public/assets/works/campion/1.jpg'
import performances2 from '../../../../public/assets/works/campion/2.jpg'
import performances3 from '../../../../public/assets/works/campion/3.jpg'
import performances4 from '../../../../public/assets/works/campion/4.jpg'
import performances5 from '../../../../public/assets/works/campion/5.jpg'
import performances6 from '../../../../public/assets/works/campion/6.jpg'
import performances7 from '../../../../public/assets/works/campion/7.jpg'
import performances8 from '../../../../public/assets/works/campion/8.jpg'
import performances9 from '../../../../public/assets/works/campion/9.jpg'
import performances10 from '../../../../public/assets/works/campion/10.jpg'
import performances11 from '../../../../public/assets/works/campion/11.jpg'
import performances12 from '../../../../public/assets/works/campion/12.jpg'
import performances13 from '../../../../public/assets/works/campion/13.jpg'
import PlayIcon from "@/app/performances/her/icons";

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
                <div className="item portrait" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 1})
                }}>
                    <Image
                        alt="transcendence-1"
                        src={performances1}
                    />
                    <p>TORERO</p>
                </div>
                <div className="item portrait"  onClick={() => {
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
                    <PlayIcon />
                </div>
            </div>
            <div className="performances">
                <div className="item portrait" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 4})
                }}>
                    <Image
                        alt="transcendence-1"
                        src={performances4}
                    />
                    <p>HERA</p>
                </div>
                <div className="item portrait" onClick={() => {
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
                    <PlayIcon />
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
                    <p>CAMPION</p>
                </div>
                <div className="item portrait" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 8})
                }}>
                    <Image
                        alt="transcendence-2"
                        src={performances8}
                    />
                </div>
                <div className="item" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 9})
                }}>
                    <Image
                        alt="transcendence-3"
                        src={performances9}
                    />
                    <PlayIcon />
                </div>
            </div>
            <div className="performances">
                <div className="item portrait" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 10})
                }}>
                    <Image
                        alt="transcendence-1"
                        src={performances10}
                    />
                    <p>GERMINI</p>
                </div>
                <div className="item portrait" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 11})
                }}>
                    <Image
                        alt="transcendence-2"
                        src={performances11}
                    />
                </div>
                <div className="item" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 12})
                }}>
                    <Image
                        alt="transcendence-3"
                        src={performances12}
                    />
                    <PlayIcon />
                </div>
            </div>
            <div className="performances" style={{ justifyContent: 'center'}}>
                <div className="item" onClick={() => {
                    setLightboxController({toggler: !lightboxController.toggler, slide: 13})
                }}>
                    <Image
                        alt="transcendence-1"
                        src={performances13}
                    />
                </div>
            </div>


            <div className={`description ${BaskervvilleFont.className}`}>
                <br /><br />

                <h2 className={CrimsonFont.className}>Campion series, <br />Wearable collection</h2>
                <br />
                <p className="body" style={{ display: 'flex', justifyContent: 'center'}}>
                    The Campion series are wearable items created from printed plastic canvas. I have created collages from found and arranged photographs. The plastic canvas have been cut into pieces and then braided together with vaxed cotton thread. Each item has a short film assigned.<br /><br /><br />
                </p>
                <FsLightbox
                    toggler={lightboxController.toggler}
                    sources={[
                        String(performances1.src),
                        String(performances2.src),
                        <iframe
                            key={'iframe3'}
                            src="https://player.vimeo.com/video/535542238"
                            width="1920px"
                            height="1080px"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />,
                        String(performances4.src),
                        String(performances5.src),
                        <iframe
                            key={'iframe6'}
                            src="https://player.vimeo.com/video/535536080"
                            width="1920px"
                            height="1080px"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />,

                        String(performances7.src),
                        String(performances8.src),
                        <iframe
                            key={'iframe9'}
                            src="https://player.vimeo.com/video/535537804"
                            width="1920px"
                            height="1080px"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />,
                        String(performances10.src),
                        String(performances11.src),
                        <iframe
                            key={'iframe12'}
                            src="https://player.vimeo.com/video/535537027"
                            width="1920px"
                            height="1080px"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />,
                        String(performances13.src),

                    ]}
                    type="image"
                    slide={lightboxController.slide}
                />
                <p></p>

            </div>
        </div>
    )
}
