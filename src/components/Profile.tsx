import { getUser } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'

export function Profile() {
  const { name, avatarUrl } = getUser()
  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <p className="max-w-[150px] text-sm leading-snug">
        {name}
        <Link
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-300"
        >
          Logout
        </Link>
      </p>
    </div>
  )
}
