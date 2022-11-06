import { useEffect, useState } from 'react'
import { supabase } from './client'
import { Session } from '@supabase/gotrue-js'

export function useGetSession() {
  const [session, setSession] = useState<Session | null>(null)
  useEffect(() => {
    ;(async () => {
      const data = await supabase.auth.getSession()
      setSession(data.data.session)
    })()
    supabase.auth.onAuthStateChange((_event, _session) => {
      setSession(_session)
    })
  }, [])

  return { session }
}
