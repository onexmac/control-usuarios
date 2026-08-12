// Mock data for the Nuevo Pedido panel (Bodega tab → OBRAS groups).
// Mirrors the redesigned reference: items grouped per obra (A05 / A06),
// draggable between obras, ctrl/option-drag duplicates.

export type PedidoItem = {
  id: string;
  nombre: string;
  /** Shows the outlined AGREGAR VARIANTE pill next to the name. */
  hasVariante: boolean;
  /** Detail line revealed on expand. */
  codigo: string;
  inventario: string;
  cantidad: number;
  unidad: string;
};

export type Obra = {
  id: string;
  /**
   * null = box created but no obra assigned yet (U09) — the card header
   * shows the green "OBRA +" button instead of the código chip (U10).
   */
  codigo: string | null;
  items: PedidoItem[];
};

/** Códigos handed out by the OBRA+ button, in order. */
export const obraCodigos = ["A05", "A06", "A07", "A08", "A09"];

/**
 * Detail shown when the assigned código chip is hovered (expands into a
 * tooltip). Keyed by código so nothing needs to be threaded through obra
 * creation — the chip just looks it up.
 */
export type ObraMeta = { proyecto: string; ref: string; lote: string };

export const obraMeta: Record<string, ObraMeta> = {
  A05: { proyecto: "Valle Novarum", ref: "VN-A.05", lote: "Santorini Az" },
  A06: { proyecto: "Valle Novarum", ref: "VN-A.06", lote: "Santorini Az" },
  A07: { proyecto: "Alto Palermo", ref: "AP-A.07", lote: "Toscana Gr" },
  A08: { proyecto: "Alto Palermo", ref: "AP-A.08", lote: "Toscana Gr" },
  A09: { proyecto: "Bosque Real", ref: "BR-A.09", lote: "Provenza Vd" },
};

export const varilla = (
  id: string,
  hasVariante: boolean,
): PedidoItem => ({
  id,
  nombre: "Varilla",
  hasVariante,
  codigo: "MAT01-145",
  inventario: "1200 INV",
  cantidad: 0,
  unidad: "UND",
});

export const mockObras: Obra[] = [
  {
    id: "obra-1",
    codigo: "A05",
    items: [
      varilla("acc-1", true),
      varilla("acc-2", false),
      varilla("acc-3", true),
      varilla("acc-4", false),
    ],
  },
  {
    id: "obra-2",
    codigo: "A06",
    items: [varilla("acc-5", true)],
  },
];
