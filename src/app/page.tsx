import Image from 'next/image';
import Link from "next/link";

import works1 from '../../public/assets/trascendence.jpg'
import works2 from '../../public/assets/her.jpg'

import hero from '../../public/assets/hero.png'
export default function Home() {
  return (
      <>
          <div className="hero" style={{
              backgroundImage: `url(${hero.src})`,
              // backgroundPositionY: '-235px',
              // backgroundPositionX: '-23px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
          }}>
              <h1>Amanda Elida Varhaugvik</h1>
          </div>
          <div className="works">
              <Link href="performances/merging-costume-voice-transcendence">
                  <div className="grid-element">
                      <Image
                          alt="transcendence"
                          src={works1}
                      />
                      <h3>A merging of Costumes, Voice & Transcendence</h3>
                  </div>
              </Link>
              <Link href="performances/her">
                  <div className="grid-element">
                      <Image
                          alt="transcendence"
                          src={works2}
                      />
                      <h3>Her</h3>
                  </div>
              </Link>
          </div>
      </>
  )
}
