import { WebPlugin, registerPlugin } from '@capacitor/core';

import type {
  CallbackId,
  smdnsPluginWrapper,
  DiscoverServicesCbArgs,
} from './definitions';

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

export interface smdnsPlugin {
  discoverServices(
    opt: { type: string },
    cb: (arg: DiscoverServicesArgType) => void,
  ): Promise<CallbackId>;
}

class smdnsWeb extends WebPlugin implements smdnsPlugin {
  async discoverServices(
    opt: { type: string },
    cb: (arg: DiscoverServicesArgType) => void,
  ): Promise<CallbackId> {
    void opt, cb;
    return '';
  }
}

class Wrapper implements smdnsPluginWrapper {
  smdns: smdnsPlugin = registerPlugin<smdnsPlugin>('smdns', {
    web: () => new smdnsWeb(),
  });

  async discoverServices(
    type: string,
    cb: DiscoverServicesCbArgs,
  ): Promise<CallbackId> {
    return this.smdns.discoverServices(
      { type },
      (arg: DiscoverServicesArgType) => {
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
      },
    );
  }
}

export default new Wrapper();
