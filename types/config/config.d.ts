/**
 * # In-app config
 *
 * Server config, some default style sizing, window server and other constant
 * config values.
 *
 * @constant
 */
declare const config: {
    server: {
        requestLifeCycleTimeout: number;
        axiosTimeout: number;
    };
    i18n: {
        locales: readonly ["en", "fa", "ar"];
    };
    toast: {
        autoCloseTime: number;
        limit: number;
    };
    style: {
        separations: {
            date: string;
            time: string;
            empty: string;
        };
        fieldLimits: {
            username: {
                min: number;
                max: number;
            };
            passwd: {
                min: number;
                max: number;
            };
        };
        maxWidth: string;
        imageFlickTransition: string;
        backgroundColor: string;
        results: {
            blurCensor: string;
            blurCensorBackgroundColor: string;
        };
        drawerSize: string;
        modelSize: {
            width: string;
            height: string;
        };
        resultImgSize: {
            width: string;
            height: string;
        };
        resultFilter: {
            row: number;
            col: number;
            buttonTileSize: {
                width: string;
                height: string;
            };
        };
        customerSelfieImgSize: {
            width: string;
            height: string;
        };
        leadingIconSize: string;
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            disabled: string;
            active: string;
            brown: {
                500: string;
                600: string;
                700: string;
            };
            status: {
                filler: string;
                danger: "#b71c1c";
                caution: "#ff9800";
                warning: "#ffeb3b";
                neutral: "#1e88e5";
                safe: "#2e7d32";
            };
        };
    };
    system: {
        version: string;
        timeout: number;
        fingerprintAuth: {
            timeout: number;
        };
    };
};
export default config;
