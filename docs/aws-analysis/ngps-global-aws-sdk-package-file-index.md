# ngps-global AWS SDK Package to File Index

## Purpose
Detailed mapping of each AWS SDK package to files that import or require it.

## Snapshot
- Analysis date: 2026-04-06
- Scope: ngps-global/
- Exclusions: node_modules, .git, yarn.lock, package-lock.json, pnpm-lock.yaml

## @aws-sdk/client-api-gateway (4 files)
- src/awsSdkClientManager.js
- src/utility_functions/aws_sdk_utils/apigwUtilities.js
- tests/engine/regression_tests/utils/awsRequestParams.js
- tests/engine/unit_tests/lambdas/usagePlanMonitoringLambda/usagePlanMonitoringLambda.test.js

## @aws-sdk/client-apigatewayv2 (1 files)
- scripts/getLastDeployedVersion.js

## @aws-sdk/client-cloudwatch-logs (7 files)
- scripts/helpers/cloudWatchLogger.js
- src/awsSdkClientManager.js
- src/cloudWatchLogArchiver/streams/ExportJobEnrichment.js
- src/cloudWatchLogArchiver/streams/GetLogGroups.js
- src/cloudWatchLogArchiver/streams/LogGroupTagEnrichment.js
- src/cloudWatchLogArchiver/utils/CloudWatchExporter.js
- tests/engine/unit_tests/cloudWatchLogArchiver/cloudWatchEvaluationLambda.test.js

## @aws-sdk/client-dynamodb (24 files)
- scripts/addInstantWinPrizeToParticipations.js
- scripts/addVoucherToUser.js
- scripts/addVouchersExpirationState.js
- scripts/archiveWinningMoments.js
- scripts/changePrizeImageLink.js
- scripts/changeUserType.js
- scripts/countActivePrizes.js
- scripts/dynamodbBatchWriteItems.js
- scripts/dynamodbCleanserScript.js
- scripts/dynamodbMigrateTables.js
- scripts/exportTablesEC2script.js
- scripts/removeVouchersFromUser.js
- scripts/repopulateClaimedDigitalCodes.js
- scripts/retrieveParticipationDataFromObjects.js
- scripts/streamScripts/loadParticipations.js
- scripts/streamScripts/ttlUpdater/s3Harvester.js
- scripts/streamScripts/ttlUpdater/setTTLForConfigRecords.js
- scripts/updateCountry.js
- scripts/updateExpiryOfVouchers.js
- scripts/updatePrizesCountersScript.js
- scripts/updatePrizesWithWinningMoments.js
- src/awsSdkClientManager.js
- src/dataExport/exportTables.js
- tests/engine/testsUtils.js

## @aws-sdk/client-elasticache (2 files)
- src/middlewares/fetchECReplicationGroup.js
- tests/engine/unit_tests/lambdas/leaderBoard/leaderboardProcessor.test.js

## @aws-sdk/client-kinesis (2 files)
- src/awsSdkClientManager.js
- src/dataExport/aepExportUtilsV2.js

## @aws-sdk/client-lambda (14 files)
- src/awsSdkClientManager.js
- src/utility_functions/aws_sdk_utils/lambdaUtilities.js
- tests/engine/unit_tests/lambdas/acceptReservedVoucherLambda/acceptReservedVoucher.test.js
- tests/engine/unit_tests/lambdas/arbiter/arbiter.test.js
- tests/engine/unit_tests/lambdas/currencyReducerLambda/currencyReducerLambda.test.js
- tests/engine/unit_tests/lambdas/emailSendLambda/emailSend.test.js
- tests/engine/unit_tests/lambdas/externalServices/receiptScanner.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/bulkPrizeUpload/bulkPrizeUpload.test.js
- tests/engine/unit_tests/lambdas/instantWinCostEntryLambda/instantWinCostEntryLambda.test.js
- tests/engine/unit_tests/lambdas/instantWinLambda/instantWinLambda.test.js
- tests/engine/unit_tests/lambdas/loyalty/referralRewards.test.js
- tests/engine/unit_tests/lambdas/prizeRedeemAndTransactionLambda/prizeRedeem.test.js
- tests/engine/unit_tests/lambdas/promoEntryLambda/promoEntryLambda.test.js
- tests/engine/unit_tests/lambdas/rejectReservedVoucherLambda/rejectReservedVoucher.test.js

## @aws-sdk/client-rekognition (2 files)
- src/awsSdkClientManager.js
- src/utility_functions/aws_sdk_utils/rekognitionUtilities.js

## @aws-sdk/client-s3 (71 files)
- scripts/copyFilesToS3.js
- scripts/countActivePrizes.js
- scripts/exportTablesEC2script.js
- scripts/participationAddInstantWinFalse.js
- scripts/renameFileInS3.js
- scripts/restoreArchivedFilesInS3.js
- scripts/retrieveParticipationDataFromObjects.js
- scripts/streamScripts/ttlUpdater/s3Harvester.js
- scripts/uploadConfigurationsScript.js
- scripts/uploadFilesToS3.js
- src/awsSdkClientManager.js
- src/dataExport/exportTables.js
- src/middlewares/dataExportTransformerCaching.js
- src/middlewares/fetchAepFilterSchema.js
- src/middlewares/fetchS3Config.js
- src/middlewares/utils.js
- src/utility_functions/aws_sdk_utils/s3Utilities.js
- tests/engine/regression_tests/utils/utils.js
- tests/engine/testsUtils.js
- tests/engine/unit_tests/lambdas/acceptReservedVoucherLambda/acceptReservedVoucher.test.js
- tests/engine/unit_tests/lambdas/ageCheckerLambda/ageCheckerLambda.test.js
- tests/engine/unit_tests/lambdas/arbiter/arbiter.test.js
- tests/engine/unit_tests/lambdas/captchaCheckerLambda/captchaCheckerLambda.test.js
- tests/engine/unit_tests/lambdas/codeBurnerLambda/codeBurnerLambda.test.js
- tests/engine/unit_tests/lambdas/configurationMetadataExporertLambda.js/configurationMetadataExporterLambda.test.js
- tests/engine/unit_tests/lambdas/consumerBlockinglambda/consumerBlockinglambda.test.js
- tests/engine/unit_tests/lambdas/currencyExpiryEvaluation/currencyExpiryEvaluation.test.js
- tests/engine/unit_tests/lambdas/currencyReducerLambda/currencyReducerLambda.test.js
- tests/engine/unit_tests/lambdas/dataExporterLambda/dataExportingLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesBulkUploadLambda/digitalCodesBulkUploadLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesQueryByUserLambda/digitalCodesQueryByUserLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesQueryByUserLambdaV2/digitalCodesQueryByUserLambdaV2.test.js
- tests/engine/unit_tests/lambdas/digitalCodesQueryLambda/digitalCodesQueryLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesRedeemLambda/digitalCodesRedeemLambda.test.js
- tests/engine/unit_tests/lambdas/downloadReplicationLambda/downloadReplicationLambda.test.js
- tests/engine/unit_tests/lambdas/emailSendLambda/emailSend.test.js
- tests/engine/unit_tests/lambdas/expirationWalletLambda/expirationWalletLambda.test.js
- tests/engine/unit_tests/lambdas/externalServices/receiptScanner.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/bulkPrizeUpload/bulkPrizeUpload.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/csvCodesUpload.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/uploadReplication.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/winningMomentsUpload.test.js
- tests/engine/unit_tests/lambdas/instantWinCostEntryLambda/instantWinCostEntryLambda.test.js
- tests/engine/unit_tests/lambdas/instantWinLambda/instantWinLambda.test.js
- tests/engine/unit_tests/lambdas/instantWinPrizeLimitsCheckerLambda/instantWinPrizeLimitsCheckerLambda.test.js
- tests/engine/unit_tests/lambdas/leaderBoard/leaderboardProcessor.test.js
- tests/engine/unit_tests/lambdas/listTransactionsByUserLambda/listTransactionsByUserLambda.test.js
- tests/engine/unit_tests/lambdas/lotteryExporterLambda/lotteryExporterLambda.test.js
- tests/engine/unit_tests/lambdas/loyalty/referralRewards.test.js
- tests/engine/unit_tests/lambdas/participationLimitCheckerLambda/participationLimitCheckerLambda.test.js
- tests/engine/unit_tests/lambdas/pincodeHistoryLambda/pincodeHistoryLambda.test.js
- tests/engine/unit_tests/lambdas/pincodeOriginValidityCheckerLambda/pincodeOriginValidityCheckerLambda.test.js
- tests/engine/unit_tests/lambdas/prizeCheckerLambda/prizeCheckerLambda.test.js
- tests/engine/unit_tests/lambdas/prizeDrawExporterLambda/prizeDrawExporterLambda.test.js
- tests/engine/unit_tests/lambdas/prizeQueryLambda/prizeQueryLambda.test.js
- tests/engine/unit_tests/lambdas/prizeRecordProcessor/prizeRecordProcessor.test.js
- tests/engine/unit_tests/lambdas/prizeRedeemAndTransactionLambda/prizeRedeem.test.js
- tests/engine/unit_tests/lambdas/promoEntryLambda/promoEntryLambda.test.js
- tests/engine/unit_tests/lambdas/promoPeriodCheckerLambda/promoPeriodCheckerTest.js
- tests/engine/unit_tests/lambdas/rejectReservedVoucherLambda/rejectReservedVoucher.test.js
- tests/engine/unit_tests/lambdas/rejectWinningMomentLambda/rejectWinningMoment.test.js
- tests/engine/unit_tests/lambdas/uploadImage/uploadImageLambda.test.js
- tests/engine/unit_tests/lambdas/winningMomentsGeneratorLambda/winningMomentsGeneratorLambda.test.js
- tests/engine/unit_tests/lambdas/winningMomentsUploadLambda/winnningMomentsUpload.test.js
- tests/engine/unit_tests/lambdas/winningMomentsValidationLambda/winnningMomentsValidation.test.js
- tests/engine/unit_tests/lambdas/winningMomentsValidationLambdaFromInteg/winningMomentsValidationLambda.test.js
- tests/engine/unit_tests/mockUtils/mockUtils.js
- tests/engine/unit_tests/utilities/middlewares/arbiterMiddlewareTests.test.js
- tests/engine/unit_tests/utilities/utilityFunctions/getBucketLifecycleConfig/getBucketLifecycleConfig.test.js
- tests/engine/unit_tests/utilities/utilityFunctions/getConfiguration/getConfiguration.test.js
- tests/engine/unit_tests/utilities/utilityFunctions/setBucketLifecycleConfig/setBucketLifecycleConfig.test.js

## @aws-sdk/client-scheduler (3 files)
- src/awsSdkClientManager.js
- src/utility_functions/aws_sdk_utils/schedulerUtilities.js
- tests/engine/unit_tests/lambdas/leaderBoard/leaderboardExpiryScheduleCreationTest.test.js

## @aws-sdk/client-ses (4 files)
- src/awsSdkClientManager.js
- src/utility_functions/aws_sdk_utils/sesUtilities.js
- tests/engine/unit_tests/lambdas/emailSendLambda/emailSend.test.js
- tests/engine/unit_tests/lambdas/notificationProcessorLambda/notificationProcessorLambda.test.js

## @aws-sdk/client-sns (4 files)
- src/awsSdkClientManager.js
- src/utility_functions/aws_sdk_utils/snsUtilities.js
- tests/engine/unit_tests/lambdas/configParticipationAlarmLambda/configParticipationAlarmLambda.test.js
- tests/engine/unit_tests/lambdas/usagePlanMonitoringLambda/usagePlanMonitoringLambda.test.js

## @aws-sdk/client-sqs (21 files)
- scripts/uploadBigChunkOfVouchers.js
- src/awsSdkClientManager.js
- src/cloudWatchLogArchiver/streams/SQSPublish.js
- src/messageServiceTrigger.js
- src/utility_functions/aws_sdk_utils/sqsUtilities.js
- src/utility_functions/fileUploadUtils.js
- tests/engine/unit_tests/database/digitalCodesTable/changeStatus/sendCodesToSQS.test.js
- tests/engine/unit_tests/lambdas/codeBurnerLambda/codeBurnerLambda.test.js
- tests/engine/unit_tests/lambdas/currencyExpiryEvaluation/currencyExpiryEvaluation.test.js
- tests/engine/unit_tests/lambdas/digitalCodesBulkUploadLambda/digitalCodesBulkUploadLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesExpirationLambda/digitalCodesExpirationLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesStatusUpdater/digitalCodesStatusUpdater.test.js
- tests/engine/unit_tests/lambdas/digitalCodesUploadLambda/digitalCodesUploadLambda.test.js
- tests/engine/unit_tests/lambdas/externalServices/receiptScanner.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/csvCodesUpload.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/uploadReplication.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/winningMomentsUpload.test.js
- tests/engine/unit_tests/lambdas/messageServiceTriggerLambda/messageServiceTriggerLambda.test.js
- tests/engine/unit_tests/lambdas/pincodeOriginValidityCheckerLambda/pincodeOriginValidityCheckerLambda.test.js
- tests/engine/unit_tests/lambdas/winningMomentsExpiratorLambda/winningMomentsExpiratorLambda.test.js
- tests/engine/unit_tests/lambdas/winningMomentsUploadLambda/winnningMomentsUpload.test.js

## @aws-sdk/client-ssm (9 files)
- src/awsSdkClientManager.js
- src/utility_functions/aws_sdk_utils/ssmUtilities.js
- tests/engine/unit_tests/lambdas/captchaCheckerLambda/captchaCheckerLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesQueryByUserLambda/digitalCodesQueryByUserLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesQueryByUserLambdaV2/digitalCodesQueryByUserLambdaV2.test.js
- tests/engine/unit_tests/lambdas/prizeDrawExporterLambda/prizeDrawExporterLambda.test.js
- tests/engine/unit_tests/lambdas/promoEntryLambda/promoEntryLambda.test.js
- tests/engine/unit_tests/lambdas/uploadImage/uploadImageLambda.test.js
- tests/engine/unit_tests/lambdas/winningMomentsGeneratorLambda/winningMomentsGeneratorLambda.test.js

## @aws-sdk/client-sts (2 files)
- src/messageServiceTrigger.js
- tests/engine/unit_tests/lambdas/messageServiceTriggerLambda/messageServiceTriggerLambda.test.js

## @aws-sdk/credential-providers (6 files)
- scripts/copyFilesToS3.js
- scripts/countActivePrizes.js
- scripts/helpers/credentials.js
- scripts/restoreArchivedFilesInS3.js
- scripts/streamScripts/ttlUpdater/setTTLForConfigRecords.js
- tests/engine/regression_tests/utils/awsRequestParams.js

## @aws-sdk/lib-dynamodb (91 files)
- scripts/addInstantWinPrizeToParticipations.js
- scripts/addVoucherToUser.js
- scripts/addVouchersExpirationState.js
- scripts/archiveWinningMoments.js
- scripts/changePrizeImageLink.js
- scripts/changeUserType.js
- scripts/countActivePrizes.js
- scripts/dynamodbBatchWriteItems.js
- scripts/dynamodbCleanserScript.js
- scripts/dynamodbMigrateTables.js
- scripts/exportTablesEC2script.js
- scripts/removeVouchersFromUser.js
- scripts/repopulateClaimedDigitalCodes.js
- scripts/retrieveParticipationDataFromObjects.js
- scripts/streamScripts/loadParticipations.js
- scripts/streamScripts/ttlUpdater/s3Harvester.js
- scripts/streamScripts/ttlUpdater/setTTLForConfigRecords.js
- scripts/updateCountry.js
- scripts/updateExpiryOfVouchers.js
- scripts/updatePrizesCountersScript.js
- scripts/updatePrizesWithWinningMoments.js
- src/awsSdkClientManager.js
- src/dataExport/exportTables.js
- src/database/dbUtilities.js
- src/userMigration/cdsMigrationUtils.js
- tests/engine/testsUtils.js
- tests/engine/unit_tests/database/clientsSignature/clientsSignatureTable.test.js
- tests/engine/unit_tests/database/currencyAllocationRuleDatabase/currencyAllocationRuleDatabase.test.js
- tests/engine/unit_tests/database/currencyTable/currencyTable.test.js
- tests/engine/unit_tests/database/digitalCodesTable/changeStatus/changeStatus.test.js
- tests/engine/unit_tests/database/digitalCodesTable/changeStatus/sendCodesToSQS.test.js
- tests/engine/unit_tests/database/expirationWallet/expirationWalletTable.test.js
- tests/engine/unit_tests/database/miscellaneousValuesTable/miscellaneousValuesTable.test.js
- tests/engine/unit_tests/database/participationDatabase/participationDatabase.test.js
- tests/engine/unit_tests/database/participationPincodesDatabase/participationPincodesDatabase.test.js
- tests/engine/unit_tests/database/participationPincodesTable/participationPincodesTable.test.js
- tests/engine/unit_tests/database/userRoles/userRolesTable.test.js
- tests/engine/unit_tests/database/voucherNotificationTable/voucherNotificationTable.test.js
- tests/engine/unit_tests/lambdas/EmailTemplatesProviderLambda/EmailTemplatesProviderLambda.test.js
- tests/engine/unit_tests/lambdas/acceptReservedVoucherLambda/acceptReservedVoucher.test.js
- tests/engine/unit_tests/lambdas/addGdprRequestLambda/addGdprRequestLambda.test.js
- tests/engine/unit_tests/lambdas/arbiter/arbiter.test.js
- tests/engine/unit_tests/lambdas/codeBurnerLambda/codeBurnerLambda.test.js
- tests/engine/unit_tests/lambdas/consumerBlockinglambda/consumerBlockinglambda.test.js
- tests/engine/unit_tests/lambdas/currencyExpiryEvaluation/currencyExpiryEvaluation.test.js
- tests/engine/unit_tests/lambdas/currencyReducerLambda/currencyReducerLambda.test.js
- tests/engine/unit_tests/lambdas/dataExporterLambda/dataExportingLambda.test.js
- tests/engine/unit_tests/lambdas/databaseOperationsHandler/databaseOperationsHandler.test.js
- tests/engine/unit_tests/lambdas/digitalCodesBulkUploadLambda/digitalCodesBulkUploadLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesExpirationLambda/digitalCodesExpirationLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesQueryByUserLambda/digitalCodesQueryByUserLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesQueryByUserLambdaV2/digitalCodesQueryByUserLambdaV2.test.js
- tests/engine/unit_tests/lambdas/digitalCodesQueryLambda/digitalCodesQueryLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesRedeemLambda/digitalCodesRedeemLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesRemoverLambda/digitalCodesRemoverLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesUploadLambda/digitalCodesUploadLambda.test.js
- tests/engine/unit_tests/lambdas/downloadReplicationLambda/downloadReplicationLambda.test.js
- tests/engine/unit_tests/lambdas/emailSendLambda/emailSend.test.js
- tests/engine/unit_tests/lambdas/expirationWalletLambda/expirationWalletLambda.test.js
- tests/engine/unit_tests/lambdas/externalServices/receiptScanner.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/bulkPrizeUpload/bulkPrizeUpload.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/csvCodesUpload.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/uploadReplication.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/winningMomentsUpload.test.js
- tests/engine/unit_tests/lambdas/instantWinCostEntryLambda/instantWinCostEntryLambda.test.js
- tests/engine/unit_tests/lambdas/instantWinLambda/instantWinLambda.test.js
- tests/engine/unit_tests/lambdas/instantWinPrizeLimitsCheckerLambda/instantWinPrizeLimitsCheckerLambda.test.js
- tests/engine/unit_tests/lambdas/listTransactionsByUserLambda/listTransactionsByUserLambda.test.js
- tests/engine/unit_tests/lambdas/lotteryExporterLambda/lotteryExporterLambda.test.js
- tests/engine/unit_tests/lambdas/loyalty/referralRewards.test.js
- tests/engine/unit_tests/lambdas/notificationProcessorLambda/notificationProcessorLambda.test.js
- tests/engine/unit_tests/lambdas/participationLimitCheckerLambda/participationLimitCheckerLambda.test.js
- tests/engine/unit_tests/lambdas/pincodeHistoryLambda/pincodeHistoryLambda.test.js
- tests/engine/unit_tests/lambdas/pincodeOriginValidityCheckerLambda/pincodeOriginValidityCheckerLambda.test.js
- tests/engine/unit_tests/lambdas/prizeCheckerLambda/prizeCheckerLambda.test.js
- tests/engine/unit_tests/lambdas/prizeCounterCheckerLambda/prizeCounterCheckerLambda.test.js
- tests/engine/unit_tests/lambdas/prizeDrawExporterLambda/prizeDrawExporterLambda.test.js
- tests/engine/unit_tests/lambdas/prizeQueryLambda/prizeQueryLambda.test.js
- tests/engine/unit_tests/lambdas/prizeRecordProcessor/prizeRecordProcessor.test.js
- tests/engine/unit_tests/lambdas/prizeRedeemAndTransactionLambda/prizeRedeem.test.js
- tests/engine/unit_tests/lambdas/promoEntryLambda/promoEntryLambda.test.js
- tests/engine/unit_tests/lambdas/promoPeriodCheckerLambda/promoPeriodCheckerTest.js
- tests/engine/unit_tests/lambdas/rejectReservedVoucherLambda/rejectReservedVoucher.test.js
- tests/engine/unit_tests/lambdas/rejectWinningMomentLambda/rejectWinningMoment.test.js
- tests/engine/unit_tests/lambdas/winningMomentsExpiratorLambda/winningMomentsExpiratorLambda.test.js
- tests/engine/unit_tests/lambdas/winningMomentsGeneratorLambda/winningMomentsGeneratorLambda.test.js
- tests/engine/unit_tests/lambdas/winningMomentsUploadLambda/winnningMomentsUpload.test.js
- tests/engine/unit_tests/lambdas/winningMomentsValidationLambda/winnningMomentsValidation.test.js
- tests/engine/unit_tests/utilities/blockedUsersUtilities/blockedUsersUtilities.test.js
- tests/engine/unit_tests/utilities/configAuthorizer/configAuthorizer.test.js
- tests/engine/unit_tests/utilities/prize/prizeUtils.test.js

## @aws-sdk/lib-storage (1 files)
- src/utility_functions/aws_sdk_utils/s3Utilities.js

## @aws-sdk/s3-request-presigner (1 files)
- src/utility_functions/aws_sdk_utils/s3Utilities.js

## @aws-sdk/util-dynamodb (8 files)
- src/archivedDataTransformer.js
- src/dataExport/aepExportLambdaV2.js
- src/dataExport/participationExportToAEP.js
- src/email/notifications/notificationProcessor.js
- src/leaderboard/leaderboardProcessor.js
- src/middlewares/dataExportTransformerCaching.js
- src/prizes/prizeRecordProcessor.js
- src/prizes/redisPrizeCacheManagerLambda.js

## @aws-sdk/util-retry (3 files)
- scripts/streamScripts/loadParticipations.js
- scripts/streamScripts/ttlUpdater/s3Harvester.js
- src/userMigration/cdsMigrationUtils.js

## @aws-sdk/util-stream-node (14 files)
- tests/engine/testsUtils.js
- tests/engine/unit_tests/lambdas/configurationMetadataExporertLambda.js/configurationMetadataExporterLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesBulkUploadLambda/digitalCodesBulkUploadLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesQueryByUserLambda/digitalCodesQueryByUserLambda.test.js
- tests/engine/unit_tests/lambdas/digitalCodesQueryByUserLambdaV2/digitalCodesQueryByUserLambdaV2.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/bulkPrizeUpload/bulkPrizeUpload.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/csvCodesUpload.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/uploadReplication.test.js
- tests/engine/unit_tests/lambdas/fileUploadListenerLambda/winningMomentsUpload.test.js
- tests/engine/unit_tests/lambdas/instantWinCostEntryLambda/instantWinCostEntryLambda.test.js
- tests/engine/unit_tests/lambdas/instantWinLambda/instantWinLambda.test.js
- tests/engine/unit_tests/lambdas/prizeDrawExporterLambda/prizeDrawExporterLambda.test.js
- tests/engine/unit_tests/lambdas/prizeRecordProcessor/prizeRecordProcessor.test.js
- tests/engine/unit_tests/mockUtils/mockUtils.js
