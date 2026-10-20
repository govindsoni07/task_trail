import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function App() {
  const [status, setStatus] = useState("checking...");

  const check = () =>
    fetch(`${import.meta.env.VITE_API_URL}/api/health/`)
      .then((r) => r.json())
      .then((d) => setStatus(d.status))
      .catch(() => setStatus("backend not reachable"));

  useEffect(() => { check(); }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Task Trail</h1>
      <p>API status: {status}</p>
      <Button onClick={check}>Check again</Button>
    </main>
  );
}