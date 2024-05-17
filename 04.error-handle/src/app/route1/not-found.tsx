import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>route1 Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}