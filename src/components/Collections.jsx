import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    title: 'Shadow Cargo Jacket',
    tag: 'Outerwear',
    color: 'Midnight',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Axis Tech Hoodie',
    tag: 'Hoodies',
    color: 'Graphite',
    img: 'https://images.unsplash.com/photo-1521334726092-b509a19597c6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Circuit Wide-Leg',
    tag: 'Pants',
    color: 'Onyx',
    img: 'https://images.unsplash.com/photo-1516470930795-7f4f35d1d9f0?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Collections() {
  return (
    <section id="collections" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_0%,rgba(59,130,246,0.08),transparent),radial-gradient(600px_300px_at_100%_100%,rgba(99,102,241,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">New Arrivals</h2>
            <p className="mt-2 text-slate-300/80">Tech fabrics. Tailored fits. Seasonless forms.</p>
          </div>
          <a href="#" className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 md:inline-flex">
            View all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="rounded-xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-300/70">{p.tag}</p>
                      <h3 className="text-lg font-medium text-white">{p.title}</h3>
                      <p className="text-sm text-slate-400">{p.color}</p>
                    </div>
                    <div className="rounded-lg bg-white/10 p-2 opacity-0 transition group-hover:opacity-100">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
