import Link from 'next/link'

export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[360] text-center leading-relaxed ">
        You haven{`'`}t created any memory yet.{` `}
        <Link href="/memories/new" className="underline hover:text-gray-50">
          Create now!
        </Link>
      </p>
    </div>
  )
}
