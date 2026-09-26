import { BedDouble, BedSingle, Users, MapPin, Flame, Utensils, Bus, Droplets, Car, Wifi, Compass, IndianRupee, HeartHandshake, Clock, Phone, ShieldCheck, LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = { BedDouble, BedSingle, Users, MapPin, Flame, Utensils, Bus, Droplets, Car, Wifi, Compass, IndianRupee, HeartHandshake, Clock, Phone, ShieldCheck };

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? BedDouble;
  return <C className={className} />;
}
