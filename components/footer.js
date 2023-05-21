import Link from 'next/link'
import React from 'react'
import styles from "../styles/Foot.module.css"
import FooterSub from './home/footersub'
import FooterBottom from './home/footerBottom'

const Footer = () => {
  return (
    <div className='bg-[#f3f0ee] pb-16 ' >
      <div className='flex justify-between pt-16 pb-20 border-b-2 md:px-36' >
        <div>
           <FooterSub/>
        </div>
        <div className='flex space-x-20' >
            <div className='flex flex-col space-y-2' >
                <p className={styles.linkhead} >About us</p>
                <Link href={""}>
                    <div className={styles.links} >
                        FAQs
                    </div>
                </Link>
                <Link href={""}>
                    <div className={styles.links} >
                        Blog
                    </div>
                </Link>
                <Link href={""}>
                    <div className={styles.links} >
                        Media Center
                    </div>
                </Link>
                <Link href={""}>
                    <div className={styles.links} >
                        Fintern
                    </div>
                </Link>
            </div>
            <div className='flex flex-col space-y-2' >
                <p className={styles.linkhead} >legal</p>
                <Link href={""}>
                    <div className={styles.links} >
                        Privacy notice
                    </div>
                </Link>
                <Link href={""}>
                    <div className={styles.links} >
                        Terms of use
                    </div>
                </Link>
            </div>
            <div className='flex flex-col space-y-2' >
                <p className={styles.linkhead} >help</p>
                <Link href={""}>
                    <div className={styles.links} >
                        Contact us
                    </div>
                </Link>
                <Link href={""}>
                    <div className={styles.links} >
                        Complaints
                    </div>
                </Link>
                <Link href={""}>
                    <div className={styles.links} >
                        Money Troubles
                    </div>
                </Link>
               
            </div>
        </div>
      </div>
      <FooterBottom/>
    </div>
  )
}

export default Footer
