import { useEffect } from 'react'
import ScrollToTop from './../components/ScrollToTop';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  useEffect(() => {
    const Waves = require('node-waves')
    setTimeout(() => {
      Waves.init()
      Waves.attach('.btn-dark', ['waves-button', 'waves-float', 'waves-light'])
      Waves.attach('.btn', ['waves-button', 'waves-float', 'waves-light'])
      Waves.attach('.slide-button .btn', [
        'waves-button',
        'waves-float',
        'waves-light',
      ])
    }, 1000)
  }, [])
  
  return (
    <>
      <div className="beny_tm_all_wrap">
        <ScrollToTop />
        {children}
      </div>
    </>
  )
}
