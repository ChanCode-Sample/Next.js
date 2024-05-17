'use client';

import Link from "next/link"
import { useRouter } from "next/navigation";

export default function Home() {
  const id = 99;

  // プログラム的に遷移するためのルートハンドラー
  const router = useRouter();
  const toRoute1 = () => {
    router.push('/route1');
  }

  return (
    <div>
      <div>Home</div>
      <hr></hr>
      {/* 各ページへのLinkコンポーネント */}
      <Link href={'/route1'}>Route1</Link><br />
      <Link href={'/route1/route1-1'}>Route1-1</Link><br />
      <Link href={`/route1/${id}`}>Route1/[id]</Link><br />
      <Link href={'/route2'}>Route2</Link><br />
      <button onClick={toRoute1}>Route1</button>
    </div>
  )
}
