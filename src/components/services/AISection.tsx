import ServiceDetail from "./ServiceDetail";
import { services } from "@/data/services";

// Thin, named wrapper around the shared ServiceDetail renderer — keeps the
// services/ folder structure explicit per section while avoiding duplicated
// markup across four near-identical layouts.
export default function AISection() {
  const service = services.find((s) => s.id === "ai")!;
  return <ServiceDetail service={service} index={0} />;
}
