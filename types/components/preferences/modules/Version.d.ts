import React from "react";
export interface SystemVersion {
    ai: string;
    hardware: string;
    reconstruction: string;
    software: string;
}
type versionProps = {
    version?: any;
};
declare const ApplicationsVersion: React.FC<versionProps>;
export default ApplicationsVersion;
