'use client'
import { useState } from 'react'

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 h-96 liquid-glass rounded-xl mb-4 flex flex-col overflow-hidden border border-emerald/20">
          <div className="bg-emerald/10 p-4 border-b border-white/5">
            <h3 className="font-heading text-sm text-emerald">SYNAPSE AI ASSISTANT</h3>
          </div>
          <div className="flex-grow p-4 text-sm text-gray-400 overflow-y-auto">
            <p className="mb-2">System initialized.</p>
            <p>How can I assist with your code today?</p>
          </div>
          <div className="p-3 border-t border-white/5">
            <input 
              type="text" 
              placeholder="Query system..." 
              className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan"
            />
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full liquid-glass flex items-center justify-center hover:bg-white/10 transition-colors border-cyan/30"
      >
        <span className="text-2xl">{isOpen ? '×' : '⚡'}</span>
      </button>
    </div>
  )
}
