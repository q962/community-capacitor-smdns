import { WebPlugin, registerPlugin } from '@capacitor/core';

import type { smdnsPlugin, DiscoverServicesNotify } from './definitions';

type DiscoverServicesArgType = {
  onServiceFound?: {
    name: string;
    host?: string;
    port?: number;
  };
  onServiceLost?: {
    name: string;
    host?: string;
    port?: number;
  };
};

class smdnsWebPlugin extends WebPlugin {
  discoverServices(
    options: { type: string },
    cb: (result: DiscoverServicesNotify) => void,
  ) {
    void options, cb;
  }
}

const smdns = registerPlugin<smdnsWebPlugin>('smdns', {
  web: () => new smdnsWebPlugin(),
});

class smdnsWeb implements smdnsPlugin {
  async discoverServices(type: string, cb: DiscoverServicesNotify) {
    return smdns.discoverServices({ type }, (arg: DiscoverServicesArgType) => {
      if (cb.onServiceFound && arg.onServiceFound) {
        cb.onServiceFound(
          arg.onServiceFound.name,
          arg.onServiceFound.host,
          arg.onServiceFound.port,
        );
        return;
      }

      if (cb.onServiceLost && arg.onServiceLost) {
        cb.onServiceLost(
          arg.onServiceLost.name,
          arg.onServiceLost.host,
          arg.onServiceLost.port,
        );
        return;
      }
    });
  }
}

export default new smdnsWeb();
