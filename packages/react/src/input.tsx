import { useState } from "react";

export function Input() {
  const [a, setA] = useState("");
  return <input onChange={(e) => setA(e.target.value)} />;
}
