import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src="https://cdn.pixabay.com/video/2020/03/19/33948-400922896_large.mp4" type="video/mp4" />
      </video>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <h1 className="font-heading text-5xl md:text-8xl font-black mb-4 tracking-tighter text-glow-cyan uppercase">
          Welcome to Synapse.dev
        </h1>
        <h2 className="font-heading text-2xl md:text-4xl text-emerald text-glow-emerald mb-12 uppercase">
          Evolve Your Code
        </h2>
        
        {/* 3D Tilt Grid (Simplified CSS implementation for structural clarity) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full perspective-1000">
          {[
            { title: 'Source Codes', link: '/resources?cat=code' },
            { title: 'Full Projects', link: '/resources?cat=projects' },
            { title: 'Master Courses', link: '/courses' },
            { title: 'Dev Library', link: '/resources?cat=library' },
          ].map((item) => (
            <Link 
              key={item.title} 
              href={item.link}
              className="liquid-glass p-8 rounded-xl text-center hover:-translate-y-2 hover:border-cyan/50 transition-all duration-300 transform-gpu"
            >
              <h3 className="font-heading text-xl font-bold uppercase">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
            }
