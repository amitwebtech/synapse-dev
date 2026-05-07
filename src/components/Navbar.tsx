import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 liquid-glass px-8 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-heading text-2xl font-bold tracking-widest text-cyan text-glow-cyan">
          SYNAPSE.DEV
        </Link>
        <div className="flex gap-8 font-medium">
          <Link href="/resources" className="hover:text-cyan transition-colors">Resources</Link>
          <Link href="/courses" className="hover:text-emerald transition-colors">Courses</Link>
          <Link href="/login" className="px-4 py-2 liquid-glass rounded-md hover:bg-white/5 transition-colors border-cyan/30">
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}
