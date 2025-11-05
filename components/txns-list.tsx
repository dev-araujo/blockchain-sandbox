"use client";

import {
  fetchAddressTransactions,
  type FetchAddressTransactionsResponse,
} from "@/lib/fetch-address-transactions";
import { TransactionDetail } from "./txn-details";
import { useEffect, useState } from "react";
import { TxnsListSkeleton } from "./txns-list-skeleton";

interface TransactionsListProps {
  address: string;
}

export function TransactionsList({ address }: TransactionsListProps) {
  const [transactions, setTransactions] =
    useState<FetchAddressTransactionsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setTransactions(null);
    setError(null);

    async function getTransactions() {
      try {
        const newTxns = await fetchAddressTransactions({
          address,
        });
        setTransactions(newTxns);
      } catch (e) {
        console.error(e);
        setError(
          "Falha ao carregar transações. A API pode estar indisponível ou limitando as solicitações."
        );
      } finally {
        setIsLoading(false);
      }
    }
    getTransactions();
  }, [address]);

  async function loadMoreTxns() {
    if (!transactions || isLoadingMore) return;
    setIsLoadingMore(true);

    try {
      const newTxns = await fetchAddressTransactions({
        address,
        offset: transactions.offset + transactions.limit,
      });

      setTransactions((prevTxns) => {
        if (!prevTxns) return newTxns;
        return {
          ...newTxns,
          results: [...prevTxns.results, ...newTxns.results],
        };
      });
    } catch (e) {
      console.error(e);
      alert("Erro ao carregar mais transações. Tente novamente mais tarde.");
    } finally {
      setIsLoadingMore(false);
    }
  }

  if (isLoading) return <TxnsListSkeleton />;

  if (error) {
    return (
      <div className="text-center text-red-500 p-8">
        {error}
      </div>
    );
  }

  if (!transactions || transactions.results.length === 0) {
    return (
      <div className="text-center text-gray-500 p-8">
        Nenhuma transação encontrada para este endereço.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col border rounded-md divide-y border-gray-800 divide-gray-800">
        {transactions.results.map((tx) => (
          <div key={tx.tx.tx_id}>
            <TransactionDetail result={tx} />
          </div>
        ))}
      </div>

      {transactions.results.length < transactions.total ? (
        <button
          type="button"
          className="px-4 py-2 rounded-lg w-fit border border-gray-800 mx-auto text-center hover:bg-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={loadMoreTxns}
          disabled={isLoadingMore}
        >
          {isLoadingMore ? "Carregando..." : "Carregar Mais"}
        </button>
      ) : (
        <p className="text-center text-gray-500 text-sm">
          Fim do histórico de transações.
        </p>
      )}
    </div>
  );
}