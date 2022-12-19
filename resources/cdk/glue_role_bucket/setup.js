#!/usr/bin/env node
"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupStack = void 0;
// Purpose
//
// Defines an AWS CloudFormation stack that creates the following:
//
//  * An Amazon Simple Storage Service (Amazon S3) bucket.
//  * An AWS Identity and Access Management (IAM) role that can be assumed by AWS Glue,
//    grants permission to read from and write to the bucket, and attaches the
//    AWSGlueServiceRole managed policy.
//
require("source-map-support/register");
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_iam_1 = require("aws-cdk-lib/aws-iam");
const aws_s3_1 = require("aws-cdk-lib/aws-s3");
class SetupStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const glue = new aws_iam_1.ServicePrincipal('glue.amazonaws.com');
        const glue_service_role = new aws_iam_1.Role(this, 'AWSGlueServiceRole-DocExample', {
            roleName: 'AWSGlueServiceRole-DocExample',
            assumedBy: glue,
            managedPolicies: [aws_iam_1.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSGlueServiceRole')]
        });
        let bucket = new aws_s3_1.Bucket(this, 'doc-example-glue', {
            removalPolicy: aws_cdk_lib_1.RemovalPolicy.DESTROY
        });
        bucket.grantReadWrite(glue_service_role);
        new aws_cdk_lib_1.CfnOutput(this, 'BucketName', { value: bucket.bucketName });
        new aws_cdk_lib_1.CfnOutput(this, 'RoleName', { value: glue_service_role.roleName });
    }
}
exports.SetupStack = SetupStack;
const stackName = 'doc-example-glue-scenario-stack';
const app = new aws_cdk_lib_1.App();
new SetupStack(app, stackName);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHFFQUFxRTtBQUNyRSxzQ0FBc0M7OztBQUV0QyxVQUFVO0FBQ1YsRUFBRTtBQUNGLGtFQUFrRTtBQUNsRSxFQUFFO0FBQ0YsMERBQTBEO0FBQzFELHVGQUF1RjtBQUN2Riw4RUFBOEU7QUFDOUUsd0NBQXdDO0FBQ3hDLEVBQUU7QUFFRix1Q0FBcUM7QUFFckMsNkNBQTZFO0FBQzdFLGlEQUEwRTtBQUMxRSwrQ0FBMEM7QUFFMUMsTUFBYSxVQUFXLFNBQVEsbUJBQUs7SUFDbkMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLElBQUksR0FBRyxJQUFJLDBCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFeEQsTUFBTSxpQkFBaUIsR0FBUyxJQUFJLGNBQUksQ0FBQyxJQUFJLEVBQUUsK0JBQStCLEVBQUU7WUFDOUUsUUFBUSxFQUFFLCtCQUErQjtZQUN6QyxTQUFTLEVBQUUsSUFBSTtZQUNmLGVBQWUsRUFBRSxDQUFDLHVCQUFhLENBQUMsd0JBQXdCLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUM3RixDQUFDLENBQUE7UUFFRixJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDaEQsYUFBYSxFQUFFLDJCQUFhLENBQUMsT0FBTztTQUNyQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFekMsSUFBSSx1QkFBUyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUE7UUFDN0QsSUFBSSx1QkFBUyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQTtJQUN0RSxDQUFDO0NBQ0Y7QUFwQkQsZ0NBb0JDO0FBRUQsTUFBTSxTQUFTLEdBQUcsaUNBQWlDLENBQUE7QUFFbkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxpQkFBRyxFQUFFLENBQUM7QUFFdEIsSUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxyXG5cclxuLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcblxyXG4vLyBQdXJwb3NlXHJcbi8vXHJcbi8vIERlZmluZXMgYW4gQVdTIENsb3VkRm9ybWF0aW9uIHN0YWNrIHRoYXQgY3JlYXRlcyB0aGUgZm9sbG93aW5nOlxyXG4vL1xyXG4vLyAgKiBBbiBBbWF6b24gU2ltcGxlIFN0b3JhZ2UgU2VydmljZSAoQW1hem9uIFMzKSBidWNrZXQuXHJcbi8vICAqIEFuIEFXUyBJZGVudGl0eSBhbmQgQWNjZXNzIE1hbmFnZW1lbnQgKElBTSkgcm9sZSB0aGF0IGNhbiBiZSBhc3N1bWVkIGJ5IEFXUyBHbHVlLFxyXG4vLyAgICBncmFudHMgcGVybWlzc2lvbiB0byByZWFkIGZyb20gYW5kIHdyaXRlIHRvIHRoZSBidWNrZXQsIGFuZCBhdHRhY2hlcyB0aGVcclxuLy8gICAgQVdTR2x1ZVNlcnZpY2VSb2xlIG1hbmFnZWQgcG9saWN5LlxyXG4vL1xyXG5cclxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xyXG5pbXBvcnQge0NvbnN0cnVjdH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcclxuaW1wb3J0IHtBcHAsIENmbk91dHB1dCwgUmVtb3ZhbFBvbGljeSwgU3RhY2ssIFN0YWNrUHJvcHN9IGZyb20gJ2F3cy1jZGstbGliJztcclxuaW1wb3J0IHtSb2xlLCBTZXJ2aWNlUHJpbmNpcGFsLCBNYW5hZ2VkUG9saWN5fSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWlhbVwiO1xyXG5pbXBvcnQge0J1Y2tldH0gZnJvbSBcImF3cy1jZGstbGliL2F3cy1zM1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNldHVwU3RhY2sgZXh0ZW5kcyBTdGFjayB7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFja1Byb3BzKSB7XHJcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcclxuXHJcbiAgICBjb25zdCBnbHVlID0gbmV3IFNlcnZpY2VQcmluY2lwYWwoJ2dsdWUuYW1hem9uYXdzLmNvbScpO1xyXG5cclxuICAgIGNvbnN0IGdsdWVfc2VydmljZV9yb2xlOiBSb2xlID0gbmV3IFJvbGUodGhpcywgJ0FXU0dsdWVTZXJ2aWNlUm9sZS1Eb2NFeGFtcGxlJywge1xyXG4gICAgICByb2xlTmFtZTogJ0FXU0dsdWVTZXJ2aWNlUm9sZS1Eb2NFeGFtcGxlJyxcclxuICAgICAgYXNzdW1lZEJ5OiBnbHVlLFxyXG4gICAgICBtYW5hZ2VkUG9saWNpZXM6IFtNYW5hZ2VkUG9saWN5LmZyb21Bd3NNYW5hZ2VkUG9saWN5TmFtZSgnc2VydmljZS1yb2xlL0FXU0dsdWVTZXJ2aWNlUm9sZScpXVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgYnVja2V0ID0gbmV3IEJ1Y2tldCh0aGlzLCAnZG9jLWV4YW1wbGUtZ2x1ZScsIHtcclxuICAgICAgcmVtb3ZhbFBvbGljeTogUmVtb3ZhbFBvbGljeS5ERVNUUk9ZXHJcbiAgICB9KTtcclxuICAgIGJ1Y2tldC5ncmFudFJlYWRXcml0ZShnbHVlX3NlcnZpY2Vfcm9sZSk7XHJcblxyXG4gICAgbmV3IENmbk91dHB1dCh0aGlzLCAnQnVja2V0TmFtZScsIHt2YWx1ZTogYnVja2V0LmJ1Y2tldE5hbWV9KVxyXG4gICAgbmV3IENmbk91dHB1dCh0aGlzLCAnUm9sZU5hbWUnLCB7dmFsdWU6IGdsdWVfc2VydmljZV9yb2xlLnJvbGVOYW1lfSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0YWNrTmFtZSA9ICdkb2MtZXhhbXBsZS1nbHVlLXNjZW5hcmlvLXN0YWNrJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5cclxubmV3IFNldHVwU3RhY2soYXBwLCBzdGFja05hbWUpO1xyXG4iXX0=