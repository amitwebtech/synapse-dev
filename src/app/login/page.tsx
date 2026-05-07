export default function Login() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="liquid-glass p-8 rounded-2xl w-full max-w-md border-emerald/20">
        <h2 className="font-heading text-2xl text-center mb-8 uppercase text-emerald">System Access</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Developer ID (Email)</label>
            <input 
              type="email" 
              className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-emerald transition-colors liquid-glass"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Passphrase</label>
            <input 
              type="password" 
              className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-emerald transition-colors liquid-glass"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-emerald/20 hover:bg-emerald/30 border border-emerald/50 text-emerald font-bold py-3 rounded-md transition-all uppercase tracking-widest mt-4"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  )
}
