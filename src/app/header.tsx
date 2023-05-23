"use client"

import {useEffect, useState} from "react";
import Link from 'next/link';

export default function Header() {

  const [showSubMenu, setShowSubMenu] = useState(false)

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if((event.target as Element).className === 'art-menu') return
            setShowSubMenu(false)
        })
    }, [])
  return (
        <div className="header">
          <nav>
            <ul>
              <li>
                  <Link href="/about">About</Link></li>
            </ul>
              <ul>
                  <li>
                      <Link href="/">AEV</Link></li>
              </ul>
            <ul onClick={() => {
                setShowSubMenu(!showSubMenu)
            }}
            >
              <li className="art-menu"
              >Art</li>
                {showSubMenu && (
                    <div className="submenu">
                        <ul>
                            <Link href="/performances"><li>Performances</li></Link>
                            <Link href="/works"><li>Works</li></Link>
                            <Link href="/collaborations"><li>Collaborations</li></Link>
                        </ul>
                    </div>
                )}
            </ul>
          </nav>
        </div>
  )
}
