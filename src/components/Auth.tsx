import { Suspense, useCallback } from 'react'

import { supabase } from '@/lib/susbase/client'

export function Auth() {
  const handleLogin = useCallback(async () => {
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    if (error) {
      alert(error.message)
    }
    console.log(JSON.stringify(data))
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </Suspense>
  )
}
