import Link from "next/link";
import { Service } from "@/types/service";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`#${service.id}`}
      className="group flex flex-col rounded-lg border border-border bg-white p-8 transition-colors duration-200 hover:border-accent/40"
    >
      <h3 className="text-lg font-semibold text-ink">{service.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.shortDescription}</p>
      <span className="mt-6 inline-flex items-center text-sm font-medium text-accent">
        Learn more
        <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
