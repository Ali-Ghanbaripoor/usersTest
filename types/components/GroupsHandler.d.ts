/**
 * # UI Groups Handler
 *
 * Handle view renderer base on user role and view `supportedGroup`.
 *
 * ## Groups
 *
 * - `*` -> All group can see this view
 * - `superuser` -> Only `superuser` can see this view
 * - `admin` -> Only `admin` can see this view
 * - `staff` -> Only `staff` can see this view
 *
 * Also this system can render a view base on multiple role:
 *
 * - `superuser, admin`
 * - `admin, staff`
 *
 * __Note__: supported group must separate with comma | `,` symbol!
 *
 * @module
 */
import * as React from "react";
export declare namespace PrivilegeHandler {
    interface GroupsProps {
        children: React.ReactNode;
        supportedGroup: string;
        currentRole: string;
    }
    /** **Router** Group Handler HOC */
    export const GroupsHandler: React.FC<GroupsProps>;
    /** **Component** Groups Handler HOC */
    export const ComponentGroupsHandler: React.FC<GroupsProps>;
    export {};
}
