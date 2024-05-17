import styles from './sytles.module.css';

export default function Route1Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <section className={styles.section1}>
                <h1>Route1 Layout</h1>
                {children}
            </section>
        </div>
    );
}
