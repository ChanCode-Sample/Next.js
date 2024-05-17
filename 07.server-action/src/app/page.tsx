'use client';

import { createData } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function Home() {
  const [state, formAction] = useFormState(createData, 0);
  return (
    <div>
      <form action={formAction}>
        {state}
        <button>＋</button>
      </form>
    </div>
  );
}
