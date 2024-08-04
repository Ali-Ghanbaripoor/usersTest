/// <reference types="react" />
type radioactiveStateProps = {
    api?: any;
    radioactiveStatus?: any;
    radioactiveStatusLoading?: any;
};
/**
 * Radioactive module
 *
 * With this module you can check power state of "Radioactive" and you can turn
 * it off or on.
 *
 * __NOTE__: Users without token can't use this section.
 */
declare const RadioactiveState: ({ api, radioactiveStatus, radioactiveStatusLoading, }: radioactiveStateProps) => JSX.Element;
export default RadioactiveState;
