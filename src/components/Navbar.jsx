import { Menu } from 'lucide-react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Arsenal' },
  { href: '#experience', label: 'Experience' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-black/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-gray-900 text-lg">K.V. Revanth</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 text-gray-700">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
