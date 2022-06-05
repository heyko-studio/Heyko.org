import React from 'react'
import Link from 'next/link'
import username from '../functions/get_username';
import password from '../functions/get_password';
import { User } from './Icons';
import styles from '../styles/Navbar.module.css'
import { useState } from 'react'
import Avatar from "../components/Avatar"

function NavBar() {
  const [userDatas, setUserDatas] = useState()
  function ErrorBanner() {
    const old_name = "heyko.fr"
    if (typeof window === 'undefined') return
    if (window.location.hostname === old_name) {
      const new_location = window.location.href.split(old_name).join('heyko.org')
      return <div className="ErrorBannerSwitchDomain contnainer">
        <p className="ErrorBannerSwitchDomain text">We are changing our domain name. heyko.fr -{">"} heyko.org. </p>
        <a href={new_location}><button className="ErrorBannerSwitchDomain button">Switch</button></a>
      </div>
    }
  }

  (username && password && !userDatas) ? fetch(`https://backend.heyko.fr/requests/get_user_main_datas`, {method: 'POST',headers: { 'Content-Type': 'application/json' },body: `{"username":"${username}", "password":"${password}"}`})
  .then(response => response.json())
  .then(data => {
    setUserDatas(data)
  }) : null

  return (
    <>
      <header id="navbar" className={`${styles.topbar} ${styles.container} shadow`}>
        <label>
          <input type="checkbox" />
          <span className={styles.menu}> <span className={styles.hamburger}></span> </span>
          <ul>
              <Link href="/">
                <li> 
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </li>
              </Link>
            
              <Link href="/about">
                <li> 
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About
                </li>
              </Link>
              <Link href={userDatas && userDatas.admin ? `https://admin.heyko.fr/?${username}?${password}` : "contacts"}>
                <li> 
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {userDatas && userDatas.admin ? "Admin" : "Contacts"}
                </li>
              </Link>
              <Link href={userDatas ? "/profile" : "/signup"}>
                <li> 
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                  {userDatas ? "Profile" : "Sign up"}
                </li>
              </Link>
          </ul>
        </label>
        {
        !userDatas ? <Link href="/login"><button style={{marginRight:"20px"}} className={"button view NavBar_Profile_Button " + styles.right}>Login</button></Link>
        : <Link href="/profile">
          <button style={{marginRight:"20px"}} className={"button view NavBar_Profile_Button " + styles.right}>Profile</button>
        </Link>
        }
        <div className={styles.avatarContainer}>
          {
          !userDatas ? User(("Global Icon Medium " + styles.profileIconPlaceholder)) : <Link href="/profile"><div className={styles.avatar}>
              <Avatar customId={"navbarAvatar"} actions={userDatas.user_image && JSON.parse(userDatas.user_image)} width={500} height={500} />
            </div>
            </Link>
          }
        </div>
      </header>
      {ErrorBanner()}
      <br></br>
      <br></br>
      <br></br>
    </>
  )
}

export default NavBar