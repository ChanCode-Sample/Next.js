export default function Route2Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <section className="border-green-400 border-4">
                <h1>Route2 Layout</h1>
                {children}
            </section>
        </div>
    );
}
