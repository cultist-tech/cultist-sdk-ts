import { CultistNftSdk } from "./nft";

const statisticGql = `{
  statistic(id: "_") {
    id
    nftTransferTotal
    nftPayTotal
    nftBurnTotal
    nftTotal
    marketSaleTotal
    marketSaleNearSum
    marketSaleNearFloor
    marketSaleNearTotal
    marketRentTotal
    marketRentNearSum
    marketRentNearFloor
    marketRentNearTotal
    accountTotal
  }
}`;

export type ICultistSdkFetch = (query: string, variables?: object) => Promise<any>;

export class CultistSdk {
    protected fetch: ICultistSdkFetch;
    public nft: CultistNftSdk;

    constructor(fetch: ICultistSdkFetch) {
        this.fetch = fetch;
        this.nft = new CultistNftSdk(fetch);
    }

    public async statistic() {
        return this.fetch(statisticGql, {}).then((res) => res.statistic);
    }
}
