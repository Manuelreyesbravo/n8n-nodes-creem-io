import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['subscription'] };

export const subscriptionDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showFor },
		options: [
			{
				name: 'Cancel',
				value: 'cancel',
				action: 'Cancel a subscription',
				description: 'Cancel an active subscription',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/subscriptions/{{$parameter.subscriptionId}}/cancel',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a subscription',
				description: 'Retrieve subscription details by ID',
				routing: {
					request: { method: 'GET', url: '/v1/subscriptions' },
				},
			},
			{
				name: 'Pause',
				value: 'pause',
				action: 'Pause a subscription',
				description: 'Temporarily pause a subscription',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/subscriptions/{{$parameter.subscriptionId}}/pause',
					},
				},
			},
			{
				name: 'Resume',
				value: 'resume',
				action: 'Resume a subscription',
				description: 'Resume a previously paused subscription',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/subscriptions/{{$parameter.subscriptionId}}/resume',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a subscription',
				description: 'Modify subscription details like units or seats',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/subscriptions/{{$parameter.subscriptionId}}',
					},
				},
			},
			{
				name: 'Upgrade',
				value: 'upgrade',
				action: 'Upgrade a subscription',
				description: 'Upgrade a subscription to a different product',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/subscriptions/{{$parameter.subscriptionId}}/upgrade',
					},
				},
			},
		],
		default: 'get',
	},
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showFor },
		description: 'The ID of the subscription',
		routing: {
			send: {
				type: 'query',
				property: 'id',
				propertyInDotNotation: false,
			},
		},
	},
	{
		displayName: 'New Product ID',
		name: 'newProductId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: { ...showFor, operation: ['upgrade'] } },
		description: 'The ID of the product to upgrade to',
		routing: {
			send: { type: 'body', property: 'new_product_id' },
		},
	},
];
