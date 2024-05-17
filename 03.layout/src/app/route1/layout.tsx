export default function Route1Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <div style={{ border: 'solid blue' }}>
        <h2>src/app/route1/layout.tsxのレイアウト</h2>
        {children} 
    </div>
  )
}
