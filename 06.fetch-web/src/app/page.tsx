export default async function Home() {
  // キャッシュする（デフォルト）
  const res = await fetch('http://localhost:3000/api/items');  
  // キャッシュしない
  // const res = await fetch('http://localhost:3000/api/items', { cache: 'no-store'});
  // キャッシュは1秒間有効
  // const res = await fetch('http://localhost:3000/api/items', { next: { revalidate: 1 }, });
  // 任意のタイミングでキャッシュを更新できるタグ
  // const res = await fetch('http://localhost:3000/api/items', { next: { tags: ['tagName'] } });

  const items: { id: number; name: string }[] = await res.json();

  return (
    <main>
      <div>
        {items.map(item => {
          return (
            <div key={item.id}>{item.name}</div>
          )
        })}
      </div>
    </main>
  );
}
