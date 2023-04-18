import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <div className="flex items-center justify-between h-20">
      {/* Site branding */}
      <div className="flex items-center flex-shrink-0 mr-4">
        {/* Logo */}
        <Link href="/" className="block" aria-label="Cruip">
          <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L1.5 7.5v9L12 24l10.5-7.5v-9L12 0zm4.37 16.127a3.275 3.275 0 01-3.219 2.872c-.928 0-1.79-.394-2.401-1.086a3.233 3.233 0 01-.955-2.785V8.672c0-.866.34-1.695.955-2.307.612-.612 1.473-.971 2.401-.971s1.79.359 2.401.971c.615.612.955 1.441.955 2.307v6.844z" />
          </svg>
        </Link>
        <label className="btn-sm text-white bg-purple-600 ml-3"  style={{ fontFamily: ' Monaco' }}>
          IoT Nexus
        </label>
      </div>
      <MobileMenu />
    </div>
  </div>
</header>

  )
}
