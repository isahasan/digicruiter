import Link from 'next/link'
import Image from 'next/image'
import GoogleMap from './GoogleMap';


export default function Footer() {
  return (
    <footer className='footer_section'>
        <div className="footer_top_wraper">
            <div className="footer_top_wraper_img">
                <Image  alt="Footer Top Wave " layout='fill' objectFit='contain' className="footer-top" src="/assets/images/icon/footer-top.svg"/>
            </div>
        </div>
        <div className="nav_container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5  g-0">
            <div className="col">
              <div className="nav_content">
                <div className="navigations">
                    <div className="sc_title_wrapper">
                    <h3 className="sc_title">
                    Menu
                    </h3>
                    </div>
                    <ul className='ft_nav'>
                        <li className="ft_list">
                            <Link className='ft_item' href={`/`}>
                                Home
                            </Link> 
                        </li>
                        <li className="ft_list">
                            <Link className='ft_item' href={`/`}>
                                About
                            </Link> 
                        </li>
                        <li className="ft_list">
                            <Link className='ft_item' href={`/`}>
                                Contact
                            </Link> 
                        </li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="nav_content pe-4">
                <div className="contact_info">
                    <div className="sc_title_wrapper">
                        <h3 className="sc_title">
                        Contact Information
                        </h3>
                    </div>
                    <ul className='ft_nav'>
                        <li className="ft_list">
                            <p className='ft_item'> DigiCruiter</p>
                        </li>
                        <li className="ft_list">
                            <p className='ft_item'> Phone: 88-88-8888</p>
                        </li>
                        <li className="ft_list">
                            <p className='ft_item'> Hotline: 88-88-8888</p>
                        </li>
                        <li className="ft_list">
                            <p className='ft_item'> Fax: 88-88-8888</p>
                        </li>
                        <li className="ft_list">
                            <p className='ft_item'> Email: info@mail.com</p>
                        </li>
                        <li className="ft_list">
                            <p className='ft_item'> Gulshan-1, Dhaka</p>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="nav_content d-flex justify-content-start d-flex justify-content-start justify-content-md-start justify-content-xl-end">
                <div className="ft_location">
                  <div className="sc_title_wrapper ps-3">
                    <h3 className="sc_title">
                    Location Map
                    </h3>
                  </div>
                  <div className='ft_nav'>
                    <GoogleMap/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="nav_content d-flex justify-content-start justify-content-md-start justify-content-xl-center">
                <div className="useful_link">
                    <div className="sc_title_wrapper">
                    <h3 className="sc_title">
                    Useful Links
                    </h3>
                    </div>
                    <ul className='ft_nav'>
                        <li className="ft_list">
                            <Link className='ft_item' href='/'>lorem</Link> 
                        </li>
                        <li className="ft_list">
                            <Link className='ft_item' href='/'>
                            lorem
                            </Link> 
                        </li>
                        <li className="ft_list">
                            <Link className='ft_item' href='/'>
                            lorem
                            </Link> 
                        </li>
                        <li className="ft_list">
                            <Link className='ft_item' href='/'>
                            lorem
                            </Link> 
                        </li>
                        <li className="ft_list">
                            <Link className='ft_item' href='/'>
                            lorem
                            </Link> 
                        </li>
                        <li className="ft_list">
                            <Link className='ft_item' href='/'>
                            lorem
                            </Link> 
                        </li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="social_links">
                <Link className='link_icon' href="https://www.facebook.com/ichridhaka">
                        <Image src="/assets/images/social-img/img-1.svg" layout='fill' objectFit='cover'alt='social-links'/>
                </Link>
                <Link className='link_icon' href="https://bd.linkedin.com/company/ibrahimcardiachospital&researchinstitute">
                        <Image src="/assets/images/social-img/img-2.svg" layout='fill' objectFit='cover'alt='social-links'/>
                </Link>
                <Link className='link_icon' href="https://mobile.twitter.com/cardiacibrahim">
                        <Image src="/assets/images/social-img/img-3.svg" layout='fill' objectFit='cover'alt='social-links'/>
                </Link>
                <Link className='link_icon' href="https://youtube.com/channel/UCwTnGTm6l1ZFDiucxOoDYLw">
                        <Image src="/assets/images/social-img/img-4.svg" layout='fill' objectFit='cover'alt='social-links'/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>© All right Reserved. Designed and developed by 
                        <Link href="https://adndiginet.com/" target="_blank">
                            ADN DigiNet Ltd.
                        </Link> </p>
        </div>
      </footer>
  )
}
