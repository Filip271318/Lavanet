import { AptosAccount, AptosClient, FaucetClient, CoinClient, getAddressFromAccountOrAddress } from "aptos";
// @ts-ignore
import test from "@playwright/test"


test('Gets account balance', async ({ page }) => {

  aptosClient: AptosClient;

  const NODE_URL = "https://g.w.lavanet.xyz:443/gateway/apt1/rest/bafd799bac8eeca56c8485a3bd8c46a0";
  const FAUCET_URL = "https://g.w.lavanet.xyz:443/gateway/apt1/rest/bafd799bac8eeca56c8485a3bd8c46a0";

  const client = new AptosClient(NODE_URL);
  const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);

  const coinClient = new CoinClient(client);

  const filip = new AptosAccount();
  faucetClient.fundAccount(filip.address(), 100_000_000);

  const coinType = "0x1::aptos_coin::AptosCoin";
  const typeTag = `0x1::coin::CoinStore<${coinType}>`;
  const address = getAddressFromAccountOrAddress(filip);
  // @ts-ignore
  const accountResource = await this.aptosClient.getAccountResource(address, typeTag);
});