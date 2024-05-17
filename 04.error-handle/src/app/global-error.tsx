'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>global-error.tsx</h2>
        <h3>{error.message}</h3>
      </body>
    </html>
  )
}