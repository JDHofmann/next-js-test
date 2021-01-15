import React from 'react'
import Link from 'next/Link'

const Header = () => (
    <header>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </li>
            <li>
                <Link as="/post/first-post" href="/post/[id]">
                    <a>First Post</a>
                </Link>
            </li>
            <li>
                <Link as="/post/second-post" href="/post/[id]">
                    <a>Second Post</a>
                </Link>
            </li>
            <li>
                <Link as="/article/1" href="/article/[id]">
                    <a>First Article</a>
                </Link>
            </li>
            <li>
                <Link as="/article/2" href="/article/[id]">
                    <a>Second Article</a>
                </Link>
            </li>
            <li>
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </li>
        </ul>
        <style jsx>{`
            header {
                width: 100%;
                padding: 5vh 5vw;
                margin-bottom: 5vw;
                background: #ccc;
                
            }

            header ul {
                display: flex;
                flex-wrap: wrap;
            }
            
            header li {
                padding: 1.5vh 1.5vw;
            }
        `}</style>
    </header>
)

export default Header