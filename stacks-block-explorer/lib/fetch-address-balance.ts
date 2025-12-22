export interface AddressBalanceResponse {
  stx: StxBalance;
  fungible_tokens: {
    [k: string]: FtBalance;
  };
  non_fungible_tokens: {
    [k: string]: NftBalance;
  };
  token_offering_locked?: AddressTokenOfferingLocked;
}
export interface StxBalance {
  balance: string;
  total_sent: string;
  total_received: string;
  total_fees_sent: string;
  total_miner_rewards_received: string;

  lock_tx_id: string;

  locked: string;

  lock_height: number;

  burnchain_lock_height: number;

  burnchain_unlock_height: number;
}
export interface FtBalance {
  balance: string;
  total_sent: string;
  total_received: string;
}
export interface NftBalance {
  count: string;
  total_sent: string;
  total_received: string;
}

export interface AddressTokenOfferingLocked {
  total_locked: string;

  total_unlocked: string;
  unlock_schedule: AddressUnlockSchedule[];
}

export interface AddressUnlockSchedule {
  amount: string;
  block_height: number;
}

export async function fetchAddressBalance(
  address: string,
): Promise<AddressBalanceResponse> {
  const url = `https://api.hiro.so/extended/v1/address/${address}/balances`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address transactions");
  }

  const data = await response.json();
  return data as AddressBalanceResponse;
}
