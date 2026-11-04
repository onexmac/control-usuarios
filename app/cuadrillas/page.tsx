import type { Metadata } from "next";
import { Tablero } from "@/components/cuadrillas/tablero";

export const metadata: Metadata = {
  title: "Cuadrillas por maestro",
  description: "Asignación de cuadrillas a maestros de obra — Losa Flotante",
};

export default function Page() {
  return <Tablero />;
}
