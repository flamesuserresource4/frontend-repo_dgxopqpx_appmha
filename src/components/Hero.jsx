import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />
              Cybersecurity & Network Penetration Specialist
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              K.V. Revanth
            </h1>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-xl">
              Passionate cybersecurity student specializing in penetration testing and network security. Building secure systems and hunting vulnerabilities to create a safer digital world.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-black transition">View Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-50 transition">Contact</a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="rounded-lg border border-gray-200 bg-white p-3">India</div>
              <a href="mailto:iam.kvrevanth@gmail.com" className="rounded-lg border border-gray-200 bg-white p-3 hover:bg-gray-50">iam.kvrevanth@gmail.com</a>
              <a href="tel:+919542908947" className="rounded-lg border border-gray-200 bg-white p-3 hover:bg-gray-50">+91 95429 08947</a>
              <a href="https://linkedin.com/in/kodukula-venkat-revanth-9ab052265" target="_blank" rel="noreferrer" className="rounded-lg border border-gray-200 bg-white p-3 hover:bg-gray-50">LinkedIn</a>
              <a href="https://github.com/Hike414" target="_blank" rel="noreferrer" className="rounded-lg border border-gray-200 bg-white p-3 hover:bg-gray-50">GitHub</a>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] order-1 lg:order-2">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-black/[0.06] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] bg-white">
              <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-white/70 to-transparent" />
    </section>
  )
}
