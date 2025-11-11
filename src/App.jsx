import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import SkillBadge from './components/SkillBadge'
import Footer from './components/Footer'

const skills = [
  'Linux',
  'Information Security',
  'Penetration Testing',
  'Computer Networks',
  'Cryptography',
  'Web Development',
  'Software Engineering',
  'Cloud Computing',
]

const experiences = [
  {
    role: 'Technical Intern',
    company: 'Trace Networks and Engineering Pvt Ltd.',
    skills: ['Computer Networking', 'Network Security', 'Network Design', 'Network Administration', 'Firewalls'],
  },
  {
    role: 'Student Intern',
    company: 'Bharat Dynamics Limited (BDL)',
    period: 'Feb 2025 – Mar 2025 (India, On-site)',
    topic: 'Unified Network Control Systems',
    skills: ['Computer Networking', 'Network Security', 'Network Design', 'Network Administration', 'Firewalls'],
  },
]

const leadership = [
  { title: 'Chairperson — IEEE Computer Society SNIST', period: 'Mar 2025 – Present' },
  { title: 'President — Cisco Networking Academy SNIST', period: 'Jan 2025 – Present' },
  { title: 'Vice Chair — IEEE Nanotechnology Council', period: 'Mar 2025 – Present' },
  { title: 'Advisory Board — CyberSecurity Club, SNIST', period: 'Mar 2025 – Present' },
]

const projects = [
  { name: 'Cyber Range', desc: 'Virtual cybersecurity simulation platform for training and education', status: 'In Progress' },
  { name: 'Network Analyzer', desc: 'Tool for monitoring and analyzing network traffic', status: 'Completed' },
  { name: 'Linux-Based Firewall System', desc: 'Custom firewall with intrusion detection', status: 'Completed' },
  { name: 'Drone Detection and Neutralization System', desc: 'System to detect and neutralize unauthorized drones', status: 'Completed' },
  { name: 'PicoInject', desc: 'USB-based penetration testing tool', status: 'Completed' },
  { name: 'Hashed Password Cracker', desc: 'Password vulnerability assessment tool', status: 'Completed' },
  { name: 'Auction Alley', desc: 'Secure online auction system with advanced security features', status: 'Completed' },
  { name: 'Leave Management System', desc: 'Role-based access-controlled leave management tool', status: 'Completed' },
]

const education = [
  {
    name: 'B.Tech – Computer Science Engineering (Cybersecurity)',
    place: 'Sreenidhi Institute of Science and Technology — In Progress',
    details: 'Specialized coursework in cybersecurity, network security, and ethical hacking.',
  },
  {
    name: 'Intermediate (MPC)',
    place: 'Narayana Junior College — Completed',
    details: 'Focused on Mathematics, Physics, and Chemistry.',
  },
  {
    name: 'Secondary Education',
    place: 'Army Public School, Bolarum — Completed',
    details: 'Comprehensive education emphasizing science and technology.',
  },
]

const certifications = [
  { name: 'AWS Data Engineering', issuer: 'Amazon Web Services (AWS)', category: 'Cloud Security' },
  { name: 'Palo Alto Cyber Security', issuer: 'Palo Alto Networks', category: 'Network Security' },
  { name: 'Information Security', issuer: 'Infosys Springboard', category: 'Security Fundamentals' },
  { name: 'SQL and Relational Databases', issuer: 'IBM', category: 'Database Security' },
  { name: 'Chatbot Development', issuer: 'Cognitive Classes', category: 'AI/ML Security' },
  { name: 'Prompt Engineering', issuer: 'IBM', category: 'AI Security' },
  { name: 'Software Testing', issuer: 'JP Morgan & Co', category: 'Application Security' },
  { name: 'Power BI', issuer: 'PwC', category: 'Data Analytics' },
]

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />

      <main>
        <Section id="about" title="About">
          <div className="grid md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
            <p>
              I’m a cybersecurity enthusiast focusing on penetration testing and network security. I enjoy building secure systems, uncovering vulnerabilities, and contributing to a safer digital ecosystem.
            </p>
            <p>
              Beyond security, I explore software engineering and cloud computing to create scalable, reliable solutions. I’m driven by curiosity, discipline, and a mission to make technology trustworthy.
            </p>
          </div>
        </Section>

        <Section id="skills" title="Arsenal" subtitle="Tools and domains I work with">
          <div className="flex flex-wrap gap-2">
            {skills.map(s => <SkillBadge key={s} name={s} />)}
          </div>
        </Section>

        <Section id="experience" title="Professional Experience">
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((e, i) => (
              <div key={i} className="rounded-xl border border-black/[0.06] p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-gray-900">{e.role}</h3>
                <p className="text-sm text-gray-700">{e.company}</p>
                {e.period && <p className="text-xs text-gray-500 mt-1">{e.period}</p>}
                {e.topic && <p className="text-xs text-gray-500">Topic: {e.topic}</p>}
                {e.skills && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.skills.map(s => (
                      <span key={s} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="leadership" title="Leadership Roles">
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((l, i) => (
              <div key={i} className="rounded-xl border border-black/[0.06] p-5 bg-white shadow-sm">
                <p className="font-medium text-gray-900">{l.title}</p>
                <p className="text-sm text-gray-500">{l.period}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Security Projects">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="rounded-xl border border-black/[0.06] p-5 bg-white shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{p.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${p.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((ed, i) => (
              <div key={i} className="rounded-xl border border-black/[0.06] p-5 bg-white shadow-sm">
                <p className="font-semibold text-gray-900">{ed.name}</p>
                <p className="text-sm text-gray-700">{ed.place}</p>
                <p className="text-sm text-gray-600 mt-2">{ed.details}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c, i) => (
              <div key={i} className="rounded-xl border border-black/[0.06] p-5 bg-white shadow-sm">
                <p className="font-semibold text-gray-900">{c.name}</p>
                <p className="text-sm text-gray-700">{c.issuer}</p>
                <p className="text-xs text-gray-500 mt-1">{c.category}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid md:grid-cols-2 gap-6">
            <form className="rounded-xl border border-black/[0.06] p-5 bg-white shadow-sm">
              <div className="grid grid-cols-1 gap-4">
                <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Your Name" />
                <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Email" />
                <textarea rows="4" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Message"></textarea>
                <button type="button" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-black transition">
                  Send
                </button>
              </div>
            </form>

            <div className="rounded-xl border border-black/[0.06] p-5 bg-white shadow-sm text-sm text-gray-700">
              <p>Email: <a className="text-blue-600 hover:underline" href="mailto:iam.kvrevanth@gmail.com">iam.kvrevanth@gmail.com</a></p>
              <p>Phone: <a className="text-blue-600 hover:underline" href="tel:+919542908947">+91 95429 08947</a></p>
              <p>LinkedIn: <a className="text-blue-600 hover:underline" href="https://linkedin.com/in/kodukula-venkat-revanth-9ab052265" target="_blank" rel="noreferrer">linkedin.com/in/kodukula-venkat-revanth-9ab052265</a></p>
              <p>GitHub: <a className="text-blue-600 hover:underline" href="https://github.com/Hike414" target="_blank" rel="noreferrer">github.com/Hike414</a></p>
              <p className="mt-3">Location: India</p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
