import Link from 'next/link'
import image from '@/assets/images/notfound.png'

export default function NotFound() {
  return (
    <div className="error_page ">
      <div
        className="hero bg-image"
        style={{
          backgroundImage: `url(${image.src})`,
        }}
      >
        <div className="content">
          <div
            className="beny_tm_button color"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Link href="/" className="text-gradient">
              <span className="wrapper">
                <span className="first">BACK TO HOME</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
