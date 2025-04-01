import Image from 'next/image';
import Link from "next/link";

import performances1 from '../../../public/assets/collaborations/1.jpg'
import performances2 from '../../../public/assets/collaborations/2.jpg'
import performances3 from '../../../public/assets/collaborations/3.jpeg'
import currentObsession from '../../../public/assets/collaborations/current-obsession/1.jpg'
import putadeamor from '../../../public/assets/collaborations/puta/putadeamor.jpg'

export default function Collaborations() {
    return (
        <div className="performances-container">
            <div className="performances">
                <Link href="collaborations/pomodoro">
                    <div className="item">
                        <Image
                            alt="transcendence-1"
                            src={performances1}
                        />
                        <h3>Á cue: pomodoro <br />with John Claesson.</h3>
                    </div>
                </Link>
                <Link href="collaborations/spring">
                    <div className="item">
                        <Image
                            alt="transcendence-2"
                            src={performances2}
                        />
                        <h3>I ́ve decided spring is a bore<br />at Kulturhuset</h3>
                    </div>
                </Link>
                <Link href="collaborations/quooriem">
                    <div className="item">
                        <Image
                            alt="transcendence-3"
                            src={performances3}
                        />
                        <h3>Quööriem<br />at Eric Ericssonhallen</h3>
                    </div>
                </Link>
            </div>
            <div className="performances">
                <Link href="collaborations/current-obsession">
                    <div className="item">
                        <Image
                            alt="transcendence-1"
                            src={currentObsession}
                        />
                        <h3>Current Obsession <br />The Placeholder Issue Chapter 1</h3>
                    </div>
                </Link>
                <Link href="collaborations/rafael">
                    <div className="item">
                        <Image
                            alt="transcendence-1"
                            src={putadeamor}
                        />
                        <h3>Collaboration <br />with Rafael Becerra.</h3>
                    </div>
                </Link>
                <div className="performances" />
                <div className="performances" />
                <div className="performances" />
                <div className="performances" />
                <div className="performances" />
                <div className="performances" />
                <div className="performances" />
            </div>
        </div>
    )
}
