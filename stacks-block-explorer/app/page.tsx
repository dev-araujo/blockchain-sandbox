"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStacks } from "@/hooks/use-stacks";

export default function Home() {
  const { userData } = useStacks();
  const router = useRouter();
  
  const ADDRESS_WALLET_MOCK = "SP3WCFX1JC1PMMFD1XZZCCVSS88TBJV3A8JFPD4XZ";

  useEffect(() => {
    if (userData) {
      router.push(`/${userData.profile.stxAddress.mainnet}`);
    } else {
      router.push(`/${ADDRESS_WALLET_MOCK}`);
    }
  }, [userData, router]);

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <span>Carregando dados da conta...</span>
    </main>
  );
}