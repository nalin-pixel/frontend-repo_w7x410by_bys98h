import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.3)_45%,rgba(2,6,23,0.8)_80%)]" />

      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-blue-200/80">Streetwear / 2025</p>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Solane
            </h1>
            <p className="mt-4 text-lg text-slate-200/90">
              Minimal silhouettes. Urban energy. Built for motion.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#collections" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                Shop the Drop
              </a>
              <a href="#lookbook" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                View Lookbook
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
