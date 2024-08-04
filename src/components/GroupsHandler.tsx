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
import { useTranslation } from "react-i18next";

import { HttpError } from "./ErrorHandler";

export namespace PrivilegeHandler {
  interface GroupsProps {
    children: React.ReactNode;
    supportedGroup: string;
    currentRole: string;
  }

  /** **Router** Group Handler HOC */
  export const GroupsHandler: React.FC<GroupsProps> = ({
    children,
    supportedGroup,
    currentRole,
  }): JSX.Element => {
    const { t } = useTranslation();
    // Check forbidden
    if (supportedGroup !== "*")
      if (!supportedGroup.split(", ").includes(currentRole))
        return <HttpError code={403} t={t} />;

    children = React.Children.toArray(children);

    return <>{children}</>;
  };

  /** **Component** Groups Handler HOC */
  export const ComponentGroupsHandler: React.FC<GroupsProps> = ({
    children,
    currentRole,
    supportedGroup,
  }): JSX.Element => {
    if (supportedGroup !== "*")
      if (!supportedGroup.split(", ").includes(currentRole)) return <></>;

    children = React.Children.toArray(children);

    return <>{children}</>;
  };
}
