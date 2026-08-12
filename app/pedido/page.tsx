"use client";

import { SidebarNav } from "@/components/ds/sidebar-nav";
import { UsersTable } from "@/components/users-table";
import { PedidoSurface } from "@/components/pedido/pedido-surface";
import { mockUsers } from "@/lib/mock-users";

/**
 * /pedido — same USUARIOS backdrop as /usuarios, but the morphing FAB opens
 * the Nuevo Pedido panel (U01–U03) instead of Nuevo Usuario.
 */
export default function PedidoPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNav active="pedidos" />

      <main className="relative flex-1 p-8">
        <div className="flex items-center justify-between pb-6">
          <h1 className="text-[24px] font-semibold tracking-[0.4px]">USUARIOS</h1>
          {/* Reserves space for the morphing surface (fixed) */}
          <div className="h-20 w-20" aria-hidden />
        </div>

        <UsersTable users={mockUsers} />
      </main>

      <PedidoSurface />
    </div>
  );
}
