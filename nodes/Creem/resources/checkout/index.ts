import type { INodeProperties } from 'n8n-workflow';
import { checkoutCreateDescription } from './create';
import { checkoutGetDescription } from './get';

const showFor = {
	resource: ['checkout'],
};

export const checkoutDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showFor,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a checkout session',
				description: 'Create a new checkout session for one-time or subscription payments',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/checkouts',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a checkout session',
				description: 'Retrieve details of a checkout session by ID',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/checkouts',
					},
				},
			},
		],
		default: 'create',
	},
	...checkoutCreateDescription,
	...checkoutGetDescription,
];
