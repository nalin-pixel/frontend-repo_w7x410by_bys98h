import { motion } from 'framer-motion'

const looks = [
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505200063771-362dc2f0b88d?q=80&w=1600&auto=format&fit=crop',
]

export default function Lookbook() {
  return (
    <section id="lookbook" className="relative bg-slate-950 py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Lookbook</h2>
          <p className="mt-2 text-slate-300/80">Scenes from the city. Pieces in motion.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {looks.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img src={src} alt="Look" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
