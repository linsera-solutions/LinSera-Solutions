import ServiceDetail from "./ServiceDetail";
import { services } from "@/data/services";

export default function WebSection() {
  const service = services.find((s) => s.id === "web")!;
  return <ServiceDetail service={service} index={2} />;
}
