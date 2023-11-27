import Image from 'next/image';
import Link from "next/link";

import performances1 from '../../../public/assets/performances/trasncendence-1.jpg'
import performances2 from '../../../public/assets/performances/transcendence-2.jpg'
import performances3 from '../../../public/assets/performances/transcendence-3.jpg'
import performances4 from '../../../public/assets/performances/transcendence-4.jpg'
import performances5 from '../../../public/assets/performances/transcendence-5.jpg'
import performances6 from '../../../public/assets/performances/transcendence-6.jpg'
import crescentMoon from '../../../public/assets/performances/crescent-moon/video-thumbnail.jpg'
import bioAspen from '../../../public/assets/performances/crescent-moon/bio-aspen/principal.jpg'

export default function Performances() {
  return (
      <div className="performances-container">
          <div className="performances">
              <Link href="performances/merging-costume-voice-transcendence/konstfack">
                  <div className="item">
                      <Image
                          alt="transcendence-1"
                          src={performances1}
                      />
                      <h3>A merging of Costumes, Voice & Transcendence <br />at Vita havet, Konstfack</h3>
                  </div>
              </Link>
              <Link href="performances/merging-costume-voice-transcendence/panncentralen">
                  <div className="item">
                      <Image
                          alt="transcendence-2"
                          src={performances2}
                      />
                      <h3>A merging of Costumes, Voice & Transcendence <br />at Panncentralen , Gustavsbergskonsthall </h3>
                  </div>
              </Link>
              <Link href="performances/merging-costume-voice-transcendence/fashion-for-good">
              <div className="item">
                  <Image
                      alt="transcendence-3"
                      src={performances3}
                  />
                  <h3>A merging of Costumes, Voice & Transcendence <br />at Fashion for good Museum  </h3>
              </div>
              </Link>
          </div>
          <div className="performances">
              <Link href="performances/her">
                  <div className="item">
                      <Image
                          alt="transcendence-1"
                          src={performances4}
                      />
                      <h3>Her <br />at Not Quite</h3>
                  </div>
              </Link>
              <Link href="performances/her/ranas">
                  <div className="item">
                      <Image
                          alt="transcendence-2"
                          src={performances5}
                      />
                      <h3>Her <br />at Rånäs slott</h3>
                  </div>
              </Link>
              <Link href="performances/him">
                  <div className="item">
                      <Image
                          alt="transcendence-3"
                          src={performances6}
                      />
                      <h3>Him <br />at Dotdotdot</h3>
                  </div>
              </Link>
          </div>
          <div className="performances">
              <Link href="performances/waiting-for-crescent-moon">
                  <div className="item">
                      <Image
                          alt="transcendence-3"
                          src={crescentMoon}
                      />
                      <h3><br />Waiting for the crescent moon</h3>
                  </div>
              </Link>
              <Link href="performances/waiting-for-crescent-moon/bio-aspen">
                  <div className="item">
                      <Image
                          alt="transcendence-3"
                          src={bioAspen}
                      />
                      <h3>Waiting for the crescent moon <br />at Bio Aspen</h3>
                  </div>
              </Link>
                  <div className="item" />
          </div>
          <br /><br /><br />
          </div>
  )
}
