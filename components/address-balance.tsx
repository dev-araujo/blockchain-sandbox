import {
  fetchAddressBalance,
  type AddressBalanceResponse,
} from "@/lib/fetch-address-balance";
import { CoinsIcon } from "lucide-react";

interface AddressBalanceProps {
  address: string;
}

function formatStx(amountMicroStx: string | number) {
  const amount = Number(amountMicroStx) / 1_000_000;
  return amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  });
}

export async function AddressBalance({ address }: AddressBalanceProps) {
  let balance: AddressBalanceResponse | null = null;
  let error: string | null = null;

  try {
    balance = await fetchAddressBalance(address);
  } catch (e) {
    error = "Falha ao buscar balanço.";
    console.error(e);
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!balance) {
    return null;
  }

  const stxBalance = balance.stx ? formatStx(balance.stx.balance) : "0";
  const ftCount = Object.keys(balance.fungible_tokens).length;
  const nftCount = Object.keys(balance.non_fungible_tokens).length;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-md border-gray-800 bg-gray-900/50">
      <div className="flex items-center gap-3">
        <CoinsIcon className="h-6 w-6 text-blue-400" />
        <h2 className="text-xl font-semibold">{stxBalance} STX</h2>
      </div>
      <div className="flex items-center gap-4 text-gray-400">
        <span className="text-sm hidden sm:inline">|</span>
        <span className="text-sm">{ftCount} Tokens Fungíveis</span>
        <span className="text-sm">{nftCount} Tokens Não-Fungíveis</span>
      </div>
    </div>
  );
}