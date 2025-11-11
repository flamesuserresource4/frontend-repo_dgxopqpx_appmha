export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} K.V. Revanth. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/kodukula-venkat-revanth-9ab052265" target="_blank" rel="noreferrer" className="hover:text-gray-900">LinkedIn</a>
          <a href="https://github.com/Hike414" target="_blank" rel="noreferrer" className="hover:text-gray-900">GitHub</a>
          <a href="mailto:iam.kvrevanth@gmail.com" className="hover:text-gray-900">Email</a>
        </div>
      </div>
    </footer>
  )
}
