import NodeCache from "node-cache";
export const cachePackageUse = new NodeCache({ stdTTL: 6000, checkperiod: 1200 });
