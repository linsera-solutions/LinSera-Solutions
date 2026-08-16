import ServiceDetail from "./ServiceDetail";
import { services } from "@/data/services";

export default function SoftwareSection() {
  const service = services.find((s) => s.id === "software")!;
  return <ServiceDetail service={service} index={1} />;
}
