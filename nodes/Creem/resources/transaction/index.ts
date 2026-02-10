import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['transaction'] };

export const transactionDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showFor },
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get a transaction',
				description: 'Retrieve a transaction by ID',
				routing: {
					request: { method: 'GET', url: '/v1/transactions' },
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many transactions',
				description: 'Search and retrieve payment transactions',
				routing: {
					request: { method: 'GET', url: '/v1/transactions/search' },
				},
			},
		],
		default: 'getAll',
	},
	{
		displayName: 'Transaction ID',
		name: 'transactionId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: { ...showFor, operation: ['get'] } },
		description: 'The ID of the transaction to retrieve',
		routing: {
			send: { type: 'query', property: 'id' },
		},
	},
];
