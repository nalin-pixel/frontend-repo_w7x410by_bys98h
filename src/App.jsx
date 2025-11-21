import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Lookbook from './components/Lookbook'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(59,130,246,0.06),transparent),radial-gradient(800px_400px_at_100%_120%,rgba(99,102,241,0.06),transparent)]" />
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Lookbook />
        <CTA />
        <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-center">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Solane. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
