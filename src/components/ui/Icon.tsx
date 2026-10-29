import {
  MapPin, Mic, BookOpen, Shield, CircleHelp, Download, Star, ShieldAlert, Camera, Briefcase, Users,
  BarChart3, Volume2, Clock, Plane, Sun, Flame, Menu, X, ChevronLeft, ChevronRight, ChevronDown, Mail, Search,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types";

const ICONS: Record<IconName, LucideIcon> = {
  pin: MapPin, mic: Mic, book: BookOpen, shield: Shield, question: CircleHelp, download: Download,
  star: Star, alert: ShieldAlert, camera: Camera, briefcase: Briefcase, people: Users, chart: BarChart3,
  speaker: Volume2, clock: Clock, plane: Plane, sun: Sun, flame: Flame, mail: Mail, search: Search, menu: Menu, x: X,
  left: ChevronLeft, right: ChevronRight, chev: ChevronDown,
};

interface IconProps { name: IconName; size?: number; color?: string; className?: string }

export default function Icon({ name, size = 26, color = "#2A1F4D", className }: IconProps) {
  const Cmp = ICONS[name];
  return <Cmp size={size} color={color} strokeWidth={2} aria-hidden="true" className={className} />;
}
