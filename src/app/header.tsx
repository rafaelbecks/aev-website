"use client"

import { useState } from "react";
import Link from 'next/link';

export default function Header() {

  const [showSubMenu, setShowSubMenu] = useState(false)
  return (
        <div className="header">
          <nav>
            <ul>
              <li>
                  <Link href="/about">About</Link></li>
            </ul>
            <ul onClick={() => {
                setShowSubMenu(!showSubMenu)
            }}
            >
              <li
              >Art</li>
                {showSubMenu && (
                    <div className="submenu">
                        <ul>
                            <li>Works</li>
                            <li>Exhibitions</li>
                            <li>Collaborations</li>
                        </ul>
                    </div>
                )}
            </ul>
          </nav>
        </div>
  )
}
