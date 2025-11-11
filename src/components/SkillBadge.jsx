export default function SkillBadge({ name }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 text-xs font-medium">
      {name}
    </span>
  )
}
