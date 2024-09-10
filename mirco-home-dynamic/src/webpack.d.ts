declare module 'webpack/runtime/get' {
    const get: (module: string) => Promise<any>;
    export default get;
}

declare global {
    interface Window {
        [key: string]: any; // Dynamic remote container declaration
    }
}
