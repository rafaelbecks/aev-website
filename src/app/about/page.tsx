import Image from 'next/image';
import works1 from '../../../public/assets/amanda.png'
export default function Home() {
    return (
            <div className="about">
                <div className="info">
                    <div className="portrait">
                        <Image
                            alt="transcendence"
                            src={works1}
                            width={350}
                        />
                    </div>
                </div>
                <div className="bio">
                    <p>
                        I am a Swedish/Norwegian artist based in Stockholm.</p>
                    <p>
                        My work is interdisciplinary, a merging of sound, textile craft and performance art . In the performances, I explore ways to portray costume as the initiator and main actor. For each performance I invite different cultural practitioners to under my guidance interpret the costumes. In collaboration with other musicians I explore ways to work with my voice as an enchanting tool capable of communicating the inexplicable. The voice becomes a bridge between the performance and the audience, inviting them to transcend.
                    </p>
                    <p>
                        I am interested in the idea that my performance art could function as a transcendent threshold in a secular art context. The transcendent threshold is a term originated from the philosophical and art historic concept of the sublime. In Latin, Limen is threshold and Sublime could translate to “stepping onto the threshold”. Both concepts aim at the experience of reaching the limit of ordinary reality.
                    </p>
                    <p>
                        The interest for me lies in the wish to evolve the experience of art and especially the display format for textile craft. I believe that in the best scenario an art experience can hold similar qualities to a transcendent threshold, in the way that it can transport your presence from everyday life into the parallel universe of art.
                    </p>
                    <p>
                        My performance art is balancing on a thin line between a music performance, a fashion show and a sacred ceremony. My craft transitions through several layers of techniques and constantly evolves in formats. I work in a liminal state and I believe that it is in the cross section of fields that art can create a vibrating experience.
                    </p>
                </div>
            </div>
    )
}
