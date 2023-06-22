export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[360] text-center leading-relaxed ">
        You haven{`'`}t created any memory yet.{` `}
        <a href="" className="underline hover:text-gray-50">
          Create now!
        </a>
      </p>
    </div>
  )
}
