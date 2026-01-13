export declare type DiscoverServicesNotify = {
  onServiceFound?: (name: string, host?: string, port?: number) => void;
  onServiceLost?: (name: string, host?: string, port?: number) => void;
};

export interface smdnsPlugin {
  discoverServices(type: string, cb: DiscoverServicesNotify): void;
}
