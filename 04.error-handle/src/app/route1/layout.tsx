import { notFound } from "next/navigation";

export default function Route1Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    // throw new Error('Route1 Layout Error');
    // notFound();

    return (
        <div>
            <h1>route1 layout</h1>
            {children}
        </div>
    );
  }
  