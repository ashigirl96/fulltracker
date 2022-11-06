import { useEffect, useState } from 'react'

import type { Session } from '@supabase/gotrue-js'

import { Auth } from '@/components/Auth'
import { supabase } from '@/lib/susbase/client'

export default function Home() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    setSession(supabase.auth.getSession())
    supabase.auth.onAuthStateChange((_event, _session) => {
      setSession(_session)
    })
  }, [])
  return (
    <div>
      Hello
      <Auth />
      {session && session.user && session.user.id}
    </div>
  )
}
