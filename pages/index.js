import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '../components/Layout'
import Link from 'next/link'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

// Our Doctors settings_2
const settings = {
  dots: false,
  infinite: false,
  autoplaySpeed: 2000,
  cssEase: 'ease-in-out',
  touchThreshold: 100,
  autoplay: false,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: false,
  verticalSwiping: false,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 766,
      settings: {
        arrows: false,
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
};



  return (
    <>
      <Layout>
        <main className="home_page">
          <section className='hero_section'>
            {/* <Image className='hero_section_img' src={`${process.env.BASE_URL}/storage/${e.image_url}`} alt='content_img'  priority layout='fill' objectFit='contain' /> */}
            <video className='hero_section_video' src="/assets/images/bg-video/v-1.mp4" autoPlay loop />
            <div className="header-banner-wrapper">
              <div className="container">
                <div className="header-banner-content">
                <h1 className="heading">
                  <span>Are <strong>You</strong></span>
                  <br/>
                  <span>The Best?</span>
                </h1>
                <p className="description">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad neque eius explicabo odit quae numquam quos eos expedita, hic harum temporibus distinct</p>
                  <div className="ng-star-inserted">
                    <a className='calltoaction'> FIND A REMOTE FULL-TIME JOB</a>
                    </div>
                  </div>
              </div>
                </div>
          </section>
          <section className="about_section section_padding_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="title mb-4">The Olympics<br/>of work.</h2>
                </div>
                <div className="col-lg-6">
                  <div className="description">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad neque eius explicabo odit quae numquam quos eos expedita, hic harum temporibus distinct</p>
                   <p>It's not easy, but it's worth it.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="about_banner_section section_padding">
            <div className="container">
              <div className="row">
              <div className="about_banner_wrapper">
                <Image className='hero_section_img' src={`/assets/images/bg-video/about-banner.jpg`} alt='content_img'  priority layout='fill' objectFit='cover' />
              </div>
              </div>
            </div>
          </section>
          <section className="our_clint_section section_padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="title mb-4">Our<br/>Clients</h2>
                </div>
                <div className="col-lg-6">
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad neque eius explicabo odit quae numquam quos eos expedita, hic harum temporibus distinct</p>
                    <p>It's not easy, but it's worth it.</p>
                  </div>
                </div>
              </div>
              <div className="row section_padding_top">
              
              <Slider {...settings}>
                  {[1,2,3,4,5,6,7].map((e,i)=>
                    <div className="col" key={i}>
                      <div className="clints_content">
                        <div className="clint_icon_wrapper">
                          <Image className='hero_section_img' src={`/assets/images/clints/${i}.png`} alt='content_img'  fill sizes= "true" />
                        </div>
                      </div>
                    </div>
                  )}
                  </Slider>
              </div>
            </div>
          </section>
          <section className="our_scills_section section_padding">
            <div className="container">
              <div className="row ">
                <div className="col-lg-6">
                  <h2 className="title mb-4">Our <br/>Expertise</h2>
                </div>
                <div className="col-lg-3">
                  <div className="align-content-center d-flex fact flex-wrap bg_Green" >
                    <h3 className="fact-value">10+</h3>
                    <h4 className="fact-name">IOS Developer</h4>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="align-content-center d-flex fact flex-wrap bg_primary" >
                    <h3 className="fact-value">10+</h3>
                    <h4 className="fact-name">Graphycs Designer</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="align-content-center d-flex fact flex-wrap bg_primary" >
                    <h3 className="fact-value">10+</h3>
                    <h4 className="fact-name">React Developer</h4>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="align-content-center d-flex fact flex-wrap bg_Green" >
                    <h3 className="fact-value">10+</h3>
                    <h4 className="fact-name">Laravel Developer </h4>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="align-content-center d-flex fact flex-wrap bg_black" >
                    <h3 className="fact-value">10+</h3>
                    <h4 className="fact-name">Android Developer</h4>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="align-content-center d-flex fact flex-wrap bg_white_green" >
                    <Link href="/" className="calltoaction">Join Our Team</Link>
                  </div>
                </div>
              </div>
              
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
}
