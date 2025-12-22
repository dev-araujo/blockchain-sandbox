import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { TransactionsList } from "@/components/txns-list";
import { AddressBalance } from "@/components/address-balance";
import { Suspense } from "react";

function AddressBalanceSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-md border-gray-800 bg-gray-900/50 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="h-6 w-6 bg-gray-700 rounded" />
        <div className="h-6 w-28 bg-gray-700 rounded" />
      </div>
      <div className="flex items-center gap-4 text-gray-400">
        <div className="h-4 w-px bg-gray-700" />
        <div className="h-4 w-24 bg-gray-700 rounded" />
        <div className="h-4 w-24 bg-gray-700 rounded" />
      </div>
    </div>
  );
}

export default async function Activity({
  params,
}: {
  params: Promise<{ address: string }>;
}) {
  const { address } = await params;

  return (
    <main className="flex flex-col p-8 gap-8">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <h1 className="text-3xl font-bold break-all text-center md:text-left">
          {address}
        </h1>
        <Link
          href={`https://explorer.hiro.so/address/${address}`}
          target="_blank"
          className="rounded-lg flex gap-1 bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
        >
          <ExternalLinkIcon className="h-4 w-4" />
          View on Hiro
        </Link>
      </div>

      <Suspense fallback={<AddressBalanceSkeleton />}>
        <AddressBalance address={address} />
      </Suspense>

      <TransactionsList address={address} />
    </main>
  );
}