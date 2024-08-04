/**
 * TODO: This Map is not clean. Fix this locales repeat.
 *
 * # Error Code String Mapper
 *
 * Gets Error number from api response and prepare proper error string base-on
 * locales.
 *
 * Key type is number and value is string, but important note is that string
 * value. At this version, string values defined only key of localization.
 *
 * ## Realistic Format
 * * You can parse and split a semantic string from following format:
 *
 * `errors.<ErrorType>.<Category>.<Sub-categories>.<Message>`
 *
 * @example
 *
 * "error": {
 *  "system": {
 *      calibration": "Calibration Quality is low {Error_code}"
 *   }
 * }
 *
 * "error.system.calibration": "Calibration Quality is low {Error_code}"
 *
 * @example
 * toast.show(t(ErrorCodeStringMapper[response.data.error_number]), "warning");
 */
export const ErrorCodeStringMapper: Readonly<{ [key: number]: string }> = {
  1  : "errors.exception.baseErrors.coreCrash",
  2  : "errors.exception.baseErrors.badRequest",
  3  : "errors.exception.baseErrors.healthCheck", 
  4  : "errors.exception.baseErrors.resultImage",
  5  : "errors.exception.baseErrors.passwordChange", 
  101: "errors.systemError.calibration.stability.sectionStability1",
  102: "errors.systemError.calibration.stability.sectionStability2",
  103: "errors.systemError.calibration.stability.sectionStability3",
  104: "errors.systemError.calibration.depth.sectionDepth1",
  105: "errors.systemError.calibration.depth.sectionDepth2",
  106: "errors.systemError.calibration.depth.sectionDepth3",
  107: "errors.systemError.calibration.date.outDated",
  201: "errors.systemError.clutter.clutterQualitySection1",
  202: "errors.systemError.clutter.clutterQualitySection2",
  203: "errors.systemError.clutter.clutterQualitySection3",
  301: "errors.systemError.section.powerSection1",
  302: "errors.systemError.section.powerSection2",
  303: "errors.systemError.section.powerSection3",
  401: "errors.systemError.calibration.imgQuality.badImg",
  501: "errors.systemError.position.postureViolated",
  601: "errors.systemError.motor.motorHoming",
  602: "errors.systemError.motor.disconnection",
  701: "errors.systemError.disk.diskLimit",
  801: "errors.exception.hardwareDisconnect.initConnection",
  802: "errors.exception.hardwareDisconnect.packetLoss",
  803: "errors.exception.hardwareDisconnect.sendingCmdFailed",
  804: "errors.exception.hardwareDisconnect.receivingCmdFailed",
  805: "errors.exception.hardwareDisconnect.invalidBuffer",
  806: "errors.exception.hardwareDisconnect.simulatorFailed",
  // Shutting down
  807: "errors.exception.hardwareDisconnect.ACPowerInitFailed",
  808: "errors.exception.hardwareDisconnect.ACPowerCmdFailed",
  809: "errors.exception.hardwareDisconnect.fingerprint",
  901: "errors.exception.memory.initDll",
  902: "errors.exception.memory.nnInput",
  903: "errors.exception.memory.maskNetwork",
  904: "errors.exception.memory.maskReduction",
  905: "errors.exception.memory.pytorchRes",
  906: "errors.exception.memory.healthMetrics",
  907: "errors.exception.memory.startThread",
  908: "errors.exception.memory.reconstruct",
  909: "errors.exception.memory.fetchReconstructed",
  910: "errors.exception.memory.memBlock",
  911: "errors.exception.memory.imgMetrics",
  912: "errors.exception.memory.secMetrics",
  913: "errors.exception.memory.gpuDispose",
  914: "errors.exception.memory.directBitmap",
  915: "errors.exception.memory.censorApply",
  916: "errors.exception.memory.processCalibration",
  917: "errors.exception.memory.getCalibrationMetrics",
  918: "errors.exception.memory.poseEstimationNetwork",
  1001: "errors.exception.fileSystem.readCalibrationOrClutter",
  1002: "errors.exception.fileSystem.ldAIModel",
  1003: "errors.exception.fileSystem.mkDir",
  1004: "errors.exception.fileSystem.mkLogFile",
  1005: "errors.exception.fileSystem.dllHeaders",
  1006: "errors.exception.fileSystem.diskImageSave",
  1007: "errors.exception.fileSystem.cpFile",
  1008: "errors.exception.fileSystem.wrFaultRates",
  1009: "errors.exception.fileSystem.readClutterMetrics",
  1010: "errors.exception.fileSystem.wrSectionMetrics",
  1011: "errors.exception.fileSystem.saveHolo",
  1013: "errors.exception.fileSystem.clientNotFound", 
  1101: "errors.exception.core.socketTimeout",
  1102: "errors.exception.core.startProcess",
  1103: "errors.exception.core.pyInitFailed",
  1104: "errors.exception.core.pyNotResponding", 
  1201: "errors.systemError.auth.authFailed",
  1202: "errors.systemError.auth.expToken",
  1203: "errors.systemError.auth.reqToken",
  1204: "errors.systemError.auth.InvToken",
  1205: "errors.systemError.auth.AccessDenied",
  1301: "errors.systemError.auth.fingerprint.unAuthorized",
  1302: "errors.systemError.auth.fingerprint.timeout",
  1303: "errors.systemError.auth.fingerprint.register.databaseOverflow",
  1304: "errors.systemError.auth.fingerprint.failed",
  1401: "errors.radioactive.background.zero",
  1402: "errors.radioactive.background.low",
  1403: "errors.radioactive.background.high",
  1404: "errors.radioactive.gamma.low",
  1405: "errors.radioactive.gamma.high",
  1406: "errors.radioactive.temperature.low",
  1407: "errors.radioactive.temperature.high",
  1408: "errors.radioactive.gamma.fluctuation.high",
  1409: "errors.radioactive.util.fail",
  1410: "errors.radioactive.util.maintenance",
  1411: "errors.radioactive.util.reply",
  1412: "errors.radioactive.network.connection",
  1413: "errors.radioactive.network.ack",
  1414: "errors.radioactive.csv",
  2001: "userModifications.userForm.errors.format.national",
  2002: "userModifications.userForm.errors.format.phone",
  2003: "userModifications.userForm.errors.format.email",
  2101: "userModifications.userForm.errors.duplication.username",
  2102: "userModifications.userForm.errors.duplication.email",
  2103: "userModifications.userForm.errors.duplication.nationalCode",
  2104: "userModifications.userForm.errors.duplication.personalCode",
  2105: "userModifications.userForm.errors.duplication.phone",
  2106: "settings.userPreferences.edit.password.toasts.exists",
};
