import { Auth } from '@/components/Auth'
import { useGetSession } from '@/lib/susbase/useSession'

export default function Home() {
  const { session } = useGetSession()
  return (
    <div>
      Hello
      <Auth />
      {session && session.user && session.user.id}
    </div>
  )
}
