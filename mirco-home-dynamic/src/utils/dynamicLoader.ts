export const loadRemoteComponent = async (scope: string, module: string) => {
    // Initialize the sharing scope (shared modules like react, etc.)
    //@ts-ignore
    await __webpack_init_sharing__('default');
    //@ts-ignore
    const container = window[scope]; // Get the container loaded on the window object
    if (!container) throw new Error(`Remote scope ${scope} not found on window.`);
    //@ts-ignore
    await container.init(__webpack_share_scopes__.default); // Initialize the container
    const factory = await container.get(module); // Get the module factory
    return factory(); // Get the actual module
};

export const loadRemoteScript = (url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
    });
};
