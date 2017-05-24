import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Splash from '../components/splash'
import Footer from './footer'

export default ({ children, title = 'Bill Hefty' }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel="stylesheet" href="/static/styles/vendor/mini-nord.min.css"/>
            <link rel='stylesheet' href='/static/styles/vendor/animate.css' />
            <link rel='stylesheet' href='/static/styles/index.css' />
        </Head>

        <Splash />
        
        <header className='sticky'>
            <label className='drawer-toggle button' htmlFor='navigation-toggle'></label>
            <Link href='/'><a className='logo hidden-sm'><img id='logo-img' src='/static/img/bh_logo_square.jpg' /></a></Link>
            <Link href='/'><a className='button hidden-sm'>Home</a></Link>
            <Link href='/blog'><a className='button pull-right hidden-sm'>Blog</a></Link>
            <Link href='/projects'><a className='button pull-right hidden-sm'>Projects</a></Link>
        </header>
        <input id='navigation-toggle' type='checkbox'></input>
        <nav className='drawer hidden-md hidden-lg'>
            <label className='close' htmlFor='navigation-toggle'></label>
            <br />
            <Link href='/'><a>Home</a></Link>
            <Link href='/projects'><a>Projects</a></Link>
            <Link href='/blog'><a>Blog</a></Link>
        </nav>

        <main>
            { children }
        </main>

        <Footer />
    </div>
)