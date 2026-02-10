import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['customer'] };

export const customerDescription: INodeProperties[] = [
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
				action: 'Get a customer',
				description: 'Retrieve customer information by ID',
				routing: {
					request: { method: 'GET', url: '/v1/customers' },
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many customers',
				description: 'Retrieve a paginated list of many customers',
				routing: {
					request: { method: 'GET', url: '/v1/customers/list' },
				},
			},
			{
				name: 'Create Billing Portal',
				value: 'createBilling',
				action: 'Create a billing portal link',
				description: 'Generate a customer portal link for managing billing',
				routing: {
					request: { method: 'POST', url: '/v1/customers/billing' },
				},
			},
		],
		default: 'get',
	},
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: { ...showFor, operation: ['get'] } },
		description: 'The ID of the customer to retrieve',
		routing: {
			send: { type: 'query', property: 'id' },
		},
	},
	{
		displayName: 'Customer ID',
		name: 'billingCustomerId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: { ...showFor, operation: ['createBilling'] } },
		description: 'The ID of the customer for the billing portal',
		routing: {
			send: { type: 'body', property: 'customer_id' },
		},
	},
];
