/// <reference types="react" />
type MomentHeaderProps = {
    clearAlarmsMethod?: any;
    featureSetting?: any;
    Direction?: any;
    alarmMessages?: any;
    accountingInfo?: any;
    ChangeLanguageComponent?: any;
};
/**
 * # Moment Header
 *
 * Main header, all pages contains this `row` header. This component demonstrate
 * **DateTime** and change language **dropdown**.
 *
 * ## Functionalities
 *
 * - {@link supportedLanguage}: Add another locale inside of this list
 * - {@link toggleDrawer}: Toggling @Mui drawer
 * - {@link momentUI}: Show now DateTime
 * - {@link settingsDrawerList}: Demonstrate list of `ListItem`
 * - {@link SwitchGender}: Users can apply gender type for operator
 * - {@link alarmsDrawerList}: Demonstrate list of Alarm Messages
 */
declare const MomentHeader: ({ clearAlarmsMethod, featureSetting, Direction, alarmMessages, accountingInfo, ChangeLanguageComponent, }: MomentHeaderProps) => JSX.Element;
export default MomentHeader;
