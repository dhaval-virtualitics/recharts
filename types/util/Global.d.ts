export interface GlobalConfig {
    isSsr?: boolean;
}
export type GlobalConfigKeys = 'isSsr';
export declare const Global: {
    isSsr: boolean;
    get: (key: 'isSsr') => boolean;
    set: (key: GlobalConfigKeys | GlobalConfig, value?: any) => void;
};
