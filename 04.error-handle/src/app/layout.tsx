export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
      // throw new Error('Root Layout Error');
  return (
    <html lang="en">
      <body>
        <h1>root layout</h1>
        {children}
      </body>
    </html>
  );
}
