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

import { ApiextensionsV1beta1WebhookClientConfig } from './apiextensionsV1beta1WebhookClientConfig';

/**
* CustomResourceConversion describes how to convert different versions of a CR.
*/
export class V1beta1CustomResourceConversion {
    /**
    * `strategy` specifies the conversion strategy. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the CR. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information is needed for this option.
    */
    'strategy': string;
    'webhookClientConfig'?: ApiextensionsV1beta1WebhookClientConfig;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "strategy",
            "baseName": "strategy",
            "type": "string"
        },
        {
            "name": "webhookClientConfig",
            "baseName": "webhookClientConfig",
            "type": "ApiextensionsV1beta1WebhookClientConfig"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1CustomResourceConversion.attributeTypeMap;
    }
}

