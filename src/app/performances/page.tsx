import Image from 'next/image';
import Link from "next/link";

import performances1 from '../../../public/assets/performances/trasncendence-1.jpg'
import performances2 from '../../../public/assets/performances/transcendence-2.jpg'
import performances3 from '../../../public/assets/performances/transcendence-3.jpg'
import performances4 from '../../../public/assets/performances/transcendence-4.jpg'
import performances5 from '../../../public/assets/performances/transcendence-5.jpg'
import performances6 from '../../../public/assets/performances/transcendence-6.jpg'

export default function Performances() {
  return (
      <div className="performances-container">
          <div className="performances">
              <Link href="performances/merging-costume-voice-transcendence">
                  <div className="item">
                      <Image
                          alt="transcendence-1"
                          src={performances1}
                      />
                      <h3>A merging of Costumes, Voice & Transcendence <br />at Vita havet, Konstfack</h3>
                  </div>
              </Link>
              <div className="item">
                  <Image
                      alt="transcendence-2"
                      src={performances2}
                  />
                  <h3>A merging of Costumes, Voice & Transcendence <br />at Panncentralen , Gustavsbergskonsthall </h3>
              </div>
              <div className="item">
                  <Image
                      alt="transcendence-3"
                      src={performances3}
                  />
                  <h3>A merging of Costumes, Voice & Transcendence <br />at Fashion for good Museum  </h3>
              </div>
          </div>
          <div className="performances">
              <div className="item">
                  <Image
                      alt="transcendence-1"
                      src={performances4}
                  />
                  <h3>Her <br />at Not Quite</h3>
              </div>
              <div className="item">
                  <Image
                      alt="transcendence-2"
                      src={performances5}
                  />
                  <h3>Her <br />at Rånäs slott</h3>
              </div>
              <div className="item">
                  <Image
                      alt="transcendence-3"
                      src={performances6}
                  />
                  <h3>Him <br />at Dotdotdot</h3>
              </div>
          </div>
      </div>
  )
}
