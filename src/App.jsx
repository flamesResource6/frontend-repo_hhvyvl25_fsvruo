import { useState, useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { Smile, Sparkles, Rocket, Mail, Github, Instagram, Wand2 } from 'lucide-react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-gray-800 ring-1 ring-black/5 shadow-sm">
      <Sparkles size={14} /> {children}
    </span>
  )
}

function ProjectCard({ title, tags = [], desc, img, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group rounded-2xl overflow-hidden bg-white/70 ring-1 ring-black/5 backdrop-blur-xl hover:shadow-xl transition-shadow">
      <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
        <img src={img} alt={title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((t) => (
            <span key={t} className="text-[10px] uppercase tracking-wide bg-black text-white px-2 py-0.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </a>
  )
}

export default function App() {
  const [hoverHero, setHoverHero] = useState(false)

  const projects = useMemo(() => [
    {
      title: 'Meme-ify My Face.exe',
      tags: ['meme', 'filter', 'funny'],
      desc: 'Filter pack yang bikin foto jadi vibes "mukamu kok jpeg 144p".',
      img: 'https://images.unsplash.com/photo-1601933470928-c1b9c4787a5b?q=80&w=1200&auto=format&fit=crop',
      link: 'https://instagram.com/grecio.exe'
    },
    {
      title: 'TikTok Transition Pack',
      tags: ['transition', 'edit', 'pack'],
      desc: 'Preset transisi yang mantul-mantul biar videomu auto FYP.',
      img: 'https://images.unsplash.com/photo-1520975922203-b46f52b8505a?q=80&w=1200&auto=format&fit=crop',
      link: 'https://instagram.com/grecio.exe'
    },
    {
      title: 'Thumbnail Killer 3000',
      tags: ['thumbnail', 'clickbait'],
      desc: 'Template thumbnail lucu + bold typography biar CTR meledak.',
      img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
      link: 'https://instagram.com/grecio.exe'
    },
  ], [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF7FF] via-[#F4F7FF] to-white text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/50 bg-white/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-extrabold text-lg">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-blue-500 text-white">
              <Wand2 size={18} />
            </span>
            <span className="tracking-tight">Grecio.exe</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#contact" className="hover:text-black">Contact</a>
            <a href="#contact" className="ml-2 rounded-lg bg-black text-white px-3 py-1.5 font-semibold hover:scale-[1.03] active:scale-100 transition-transform">Hire Me</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-28 sm:pt-32">
        <div className="absolute inset-0 -z-0 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-200/40 via-blue-200/30 to-transparent pointer-events-none" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge>Editor .exe vibes</Badge>
              <Badge>Playful • Meme • Tech</Badge>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              Grecio Ubaidah Rohman
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Selamat datang di studio editting.exe paling gokil. Aku bikin video, preset, dan desain dengan sentuhan meme lucu namun tetep high quality. Klik-klik aja, santai tapi tajam.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-4 py-2 font-semibold hover:scale-[1.02] active:scale-100 transition">
                <Rocket size={18} /> Lihat Karya
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold ring-1 ring-black/10 hover:bg-gray-50">
                <Mail size={18} /> Kontak Cepat
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-gray-600 ml-2">
                <Smile size={16} /> @Grecio.exe
              </span>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white/60 backdrop-blur-xl">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
              onMouseEnter={() => setHoverHero(true)}
              onMouseLeave={() => setHoverHero(false)}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 to-transparent" />
            <div className={`pointer-events-none absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold ${hoverHero ? 'bg-black text-white' : 'bg-white text-gray-800'} transition-colors`}>interactive</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold">Tentang Gue</h2>
            <p className="mt-3 text-gray-700">
              Nama gue <strong>Grecio Ubaidah Rohman</strong> — content editor yang doyan
              nambahin bumbu meme biar hasilnya bukan cuma estetik, tapi juga bikin senyum tipis.
              Tools favorit: Premiere, After Effects, CapCut Pro, dan kadang-kadang Paint buat nostalgia.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {[
                'Cut + Beat Sync',
                'Color Pop',
                'Text Kinetik',
                'Sound FX Kocak',
              ].map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-black" /> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gradient-to-br from-purple-100 to-blue-100">
              <img
                src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop"
                alt="studio"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <Badge>Grecio.exe</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Projek Pilihan</h2>
            <a href="#contact" className="text-sm font-semibold hover:underline">Butuh style ini?</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Mari Kolab ✉️</h2>
            <p className="mt-3 text-gray-700">
              Ceritain kebutuhanmu. Balas cepat, vibes santai, hasil rapi.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <a
                className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-3 py-2 font-semibold"
                href="mailto:hello@grecio.exe"
              >
                <Mail size={16} /> Email
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-lg bg-white ring-1 ring-black/10 px-3 py-2 font-semibold"
                href="https://instagram.com/grecio.exe" target="_blank" rel="noreferrer"
              >
                <Instagram size={16} /> @Grecio.exe
              </a>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl bg-white/70 backdrop-blur-xl ring-1 ring-black/5 p-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="text-sm">
                <span className="block mb-1 font-medium">Nama</span>
                <input className="w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Nama kamu" />
              </label>
              <label className="text-sm">
                <span className="block mb-1 font-medium">Email</span>
                <input type="email" className="w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="email@domain.com" />
              </label>
              <label className="text-sm sm:col-span-2">
                <span className="block mb-1 font-medium">Pesan</span>
                <textarea rows={4} className="w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Mau edit apa nih?" />
              </label>
            </div>
            <button className="mt-4 w-full rounded-lg bg-black text-white px-4 py-2 font-semibold hover:scale-[1.01] active:scale-100 transition">Kirim</button>
            <p className="mt-3 text-xs text-gray-500">Atau DM aja di Instagram: @Grecio.exe</p>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-gray-500">
        Made with fun by Grecio.exe • Stay silly, stay sharp.
      </footer>
    </div>
  )
}
