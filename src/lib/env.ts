export function required(x: string | undefined) {
  if (x === undefined) {
    throw new Error('Env var is required')
  }
  return x
}

export const SUPABASE_URL = required(process.env.NEXT_PUBLIC_SUPABASE_URL)
export const SUPABASE_ANON_KEY = required(
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
)
