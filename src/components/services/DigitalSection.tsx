import ServiceDetail from "./ServiceDetail";
import { services } from "@/data/services";

export default function DigitalSection() {
  const service = services.find((s) => s.id === "digital")!;
  return <ServiceDetail service={service} index={3} />;
}
