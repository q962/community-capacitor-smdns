export declare type CallbackId = string;

export declare type DiscoverServicesCbArgs = {
  onServiceFound?: (name: string, host?: string, port?: number) => void;
  onServiceLost?: (name: string, host?: string, port?: number) => void;
};

export interface smdnsPluginWrapper {
  discoverServices(
    type: string,
    cb: DiscoverServicesCbArgs,
  ): Promise<CallbackId>;
}
