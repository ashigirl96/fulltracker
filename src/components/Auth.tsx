// import { useCallback, useState } from 'react'
//
// import { useBoolean } from '@/hooks/useBoolean'
// import { supabase } from '@/lib/susbase/client'
//
// export function Auth() {
//   const { value: loading, setValue: setLoading } = useBoolean(false)
//   const [email, setEmail] = useState('')
//
//   const handleLogin = useCallback(async (email) => {
//     try {
//       setLoading(true)
//       const { error } = await supabase.auth.signInWithOtp({ email })
//       if (error) throw error
//     } catch (e) {
//       alert(e.error_description || e.message)
//     } finally {
//       setLoading(false)
//     }
//   }, [])
// }

export function Auth() {
  return 1
}
