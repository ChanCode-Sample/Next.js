import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'sample-title',
  description: 'This is description'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div style={{ border: 'solid red' }}>
          <h1>src/app/layout.tsxのレイアウト（ルートレイアウト）</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
