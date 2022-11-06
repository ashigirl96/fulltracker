import { Suspense, useCallback } from 'react'

import { supabase } from '@/lib/susbase/client'

export function Auth() {
  const handleLogin = useCallback(async () => {
    try {
      const { error, data } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })
      if (error) throw error
      console.log(JSON.stringify(data))
    } catch (e) {
      alert(e.error_description || e.message)
    }
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </Suspense>
  )
}
