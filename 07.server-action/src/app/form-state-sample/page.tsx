'use client';

import { plusData } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function FormStateSample() {
  const [state, formAction] = useFormState(plusData, 0);
  return (
    <div>
      <h2>form-state-sample</h2>
      <form action={formAction}>
        {state}
        <button>＋</button>
      </form>
    </div>
  );
}
