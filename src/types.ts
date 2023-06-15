import sites from './sites.json';

export type BTCPWA = {
  name: string;
  url: string;
  icon: string;
  description: string;
  tags: string[];
  npub: string;
  lnurl: string;
  repo: string;
  screenshots: [string, string, string, string, string];
};

export type BTCPWAList = typeof sites;
