import type { LucideIcon } from "lucide-react";
import { Shield, BarChart3, Cloud, Lock, Scale, MonitorPlay, Scan, Users } from "lucide-react";

export const serviceIconMap = {
  Shield,
  BarChart3,
  Cloud,
  Lock,
  Scale,
  MonitorPlay,
  Scan,
  Users,
} satisfies Record<string, LucideIcon>;

export type ServiceIconName = keyof typeof serviceIconMap;

export function mapServicesWithIcons<T extends { icon: string }>(
  services: T[]
): Array<Omit<T, "icon"> & { icon: LucideIcon }> {
  return services.map((service) => {
    const icon =
      serviceIconMap[service.icon as ServiceIconName] ?? serviceIconMap.Shield;

    return {
      ...service,
      icon,
    } as Omit<T, "icon"> & { icon: LucideIcon };
  });
}
