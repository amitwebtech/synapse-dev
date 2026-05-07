import Link from 'next/link'

// Server Component for data fetching
async function getResources() {
  // Absolute URL required for SSR fetches in Next.js App Router
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/resources`, {
    cache: 'no-store'
  })
  if (!res.ok) return []
  const json = await res.json()
  return json.data
}

export default async function ResourcesPage() {
  const resources = await getResources()

  return (
    <div className="max-w-7xl mx-auto px-8 py-12 flex gap-8">
      {/* Sidebar Filters */}
      <aside className="w-64 flex-shrink-0 liquid-glass p-6 rounded-xl h-fit sticky top-28">
        <h3 className="font-heading text-lg mb-6 text-cyan uppercase">Filters</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm text-gray-400 mb-2">Category</h4>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" className="accent-cyan" /> Source Codes</label>
              <label className="flex items-center gap-2"><input type="checkbox" className="accent-cyan" /> Dev Library</label>
            </div>
          </div>
        </div>
      </aside>

      {/* Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res: any) => (
          <Link href={`/resources/${res.id}`} key={res.id} className="liquid-glass p-6 rounded-xl flex flex-col hover:border-emerald/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold px-2 py-1 bg-white/5 rounded text-cyan">{res.category}</span>
              <span className="text-sm font-bold text-emerald">{res.isPremium ? `$${res.price}` : 'FREE'}</span>
            </div>
            <h3 className="font-bold text-lg mb-2">{res.title}</h3>
            <p className="text-sm text-gray-400 mb-4 flex-grow">{res.description}</p>
            <div className="flex gap-2 flex-wrap mt-auto">
              {res.techStack.map((tech: string) => (
                <span key={tech} className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
            }
