import Image from 'next/image';

import works1 from '../../public/assets/work1.jpg'
import hero from '../../public/assets/amanda-hero.jpg'
export default function Home() {
  return (
      <>
          <div className="hero">
              <Image
                  alt="Amanda"
                  src={hero}
                  layout='fill'
                  objectFit='cover'
              />
              <h1>Amanda Elida Varhaugvik</h1>
          </div>
          <div className="works">
              <div className="grid-element">
                  <Image
                      alt="transcendence"
                      src={works1}
                  />
                  <h3>A merging of Costumes, Voice & Transcendence</h3>
              </div>
              <div className="grid-element">
                  <Image
                      alt="transcendence"
                      src={works1}
                  />
                  <h3>A merging of Costumes, Voice & Transcendence</h3>
              </div>
              <div className="grid-element">
                  <Image
                      alt="transcendence"
                      src={works1}
                  />
                  <h3>A merging of Costumes, Voice & Transcendence</h3>
              </div>
          </div>
      </>
  )
}
