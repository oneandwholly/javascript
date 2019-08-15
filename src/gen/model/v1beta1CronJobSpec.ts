/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1beta1JobTemplateSpec } from './v1beta1JobTemplateSpec';

/**
* CronJobSpec describes how the job execution will look like and when it will actually run.
*/
export class V1beta1CronJobSpec {
    /**
    * Specifies how to treat concurrent executions of a Job. Valid values are: - \"Allow\" (default): allows CronJobs to run concurrently; - \"Forbid\": forbids concurrent runs, skipping next run if previous run hasn\'t finished yet; - \"Replace\": cancels currently running job and replaces it with a new one
    */
    'concurrencyPolicy'?: string;
    /**
    * The number of failed finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
    */
    'failedJobsHistoryLimit'?: number;
    'jobTemplate': V1beta1JobTemplateSpec;
    /**
    * The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron.
    */
    'schedule': string;
    /**
    * Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones.
    */
    'startingDeadlineSeconds'?: number;
    /**
    * The number of successful finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 3.
    */
    'successfulJobsHistoryLimit'?: number;
    /**
    * This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false.
    */
    'suspend'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "concurrencyPolicy",
            "baseName": "concurrencyPolicy",
            "type": "string"
        },
        {
            "name": "failedJobsHistoryLimit",
            "baseName": "failedJobsHistoryLimit",
            "type": "number"
        },
        {
            "name": "jobTemplate",
            "baseName": "jobTemplate",
            "type": "V1beta1JobTemplateSpec"
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "string"
        },
        {
            "name": "startingDeadlineSeconds",
            "baseName": "startingDeadlineSeconds",
            "type": "number"
        },
        {
            "name": "successfulJobsHistoryLimit",
            "baseName": "successfulJobsHistoryLimit",
            "type": "number"
        },
        {
            "name": "suspend",
            "baseName": "suspend",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1CronJobSpec.attributeTypeMap;
    }
}

