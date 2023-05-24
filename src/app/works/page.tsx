import Image from 'next/image';
import Link from "next/link";

import performances1 from '../../../public/assets/works/works1.jpg'
import performances2 from '../../../public/assets/works/works2.jpg'
import performances3 from '../../../public/assets/works/works3.jpg'
import performances4 from '../../../public/assets/works/works4.jpg'
import performances5 from '../../../public/assets/works/works5.jpg'
import performances6 from '../../../public/assets/works/works6.jpg'

export default function Works() {
  return (
      <div className="performances-container">
          <div className="performances">
              <Link href="works/moon">
                  <div className="item">
                      <Image
                          alt="transcendence-1"
                          src={performances1}
                      />
                      <h3>Moon <br />photographs</h3>
                  </div>
              </Link>
              <Link href="works/arien">
                  <div className="item">
                      <Image
                          alt="transcendence-2"
                          src={performances2}
                      />
                      <h3>Arién series,<br />fruit sculptures</h3>
                  </div>
              </Link>
              <Link href="works/georgina">
                  <div className="item">
                      <Image
                          alt="transcendence-3"
                          src={performances3}
                      />
                      <h3>Georgina,<br />mixed media</h3>
                  </div>
              </Link>
          </div>
          <div className="performances">
              <Link href="works/lay">
                  <div className="item">
                      <Image
                          alt="transcendence-1"
                          src={performances4}
                      />
                      <h3>Lay,<br />mixed media</h3>
                  </div>
              </Link>
                  <div className="item">
                      <Image
                          alt="transcendence-2"
                          src={performances5}
                      />
                      <h3>Campion series,<br />Wearable collection</h3>
                  </div>
              <Link href="works/items">
                  <div className="item">
                      <Image
                          alt="transcendence-3"
                          src={performances6}
                      />
                      <h3>The item series,<br />photographs</h3>
                  </div>
              </Link>
          </div>
      </div>
  )
}
