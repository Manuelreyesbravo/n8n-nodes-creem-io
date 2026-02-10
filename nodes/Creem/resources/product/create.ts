import type { INodeProperties } from 'n8n-workflow';

const showFor = {
	operation: ['create'],
	resource: ['product'],
};

export const productCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showFor },
		description: 'The name of the product',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Price (Cents)',
		name: 'price',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: { show: showFor },
		description: 'Price in cents (e.g., 1000 = $10.00)',
		routing: {
			send: {
				type: 'body',
				property: 'price',
			},
		},
	},
	{
		displayName: 'Billing Type',
		name: 'billingType',
		type: 'options',
		options: [
			{ name: 'One-Time', value: 'one_time' },
			{ name: 'Recurring', value: 'recurring' },
		],
		default: 'one_time',
		required: true,
		displayOptions: { show: showFor },
		description: 'Whether this product is a one-time payment or a subscription',
		routing: {
			send: {
				type: 'body',
				property: 'billing_type',
			},
		},
	},
	{
		displayName: 'Currency',
		name: 'currency',
		type: 'string',
		default: 'usd',
		required: true,
		displayOptions: { show: showFor },
		description: 'Three-letter ISO currency code (e.g., usd, eur)',
		routing: {
			send: {
				type: 'body',
				property: 'currency',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showFor },
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description of the product',
				routing: {
					send: { type: 'body', property: 'description' },
				},
			},
			{
				displayName: 'Billing Period',
				name: 'billingPeriod',
				type: 'options',
				options: [
					{ name: 'Monthly', value: 'month' },
					{ name: 'Yearly', value: 'year' },
				],
				default: 'month',
				description: 'Billing period for recurring products',
				routing: {
					send: { type: 'body', property: 'billing_period' },
				},
			},
		],
	},
];
