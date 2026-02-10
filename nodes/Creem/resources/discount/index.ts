import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['discount'] };

export const discountDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showFor },
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a discount code',
				description: 'Create a promotional discount code',
				routing: {
					request: { method: 'POST', url: '/v1/discounts' },
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a discount code',
				description: 'Retrieve discount code details',
				routing: {
					request: { method: 'GET', url: '/v1/discounts' },
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a discount code',
				description: 'Permanently delete a discount code',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/v1/discounts/{{$parameter.discountId}}/delete',
					},
				},
			},
		],
		default: 'get',
	},
	{
		displayName: 'Discount ID',
		name: 'discountId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: { ...showFor, operation: ['get', 'delete'] } },
		description: 'The ID of the discount code',
		routing: {
			send: { type: 'query', property: 'id' },
		},
	},
	{
		displayName: 'Product ID',
		name: 'discountProductId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: { ...showFor, operation: ['create'] } },
		description: 'The product ID to apply this discount to',
		routing: {
			send: { type: 'body', property: 'product_id' },
		},
	},
	{
		displayName: 'Discount Type',
		name: 'discountType',
		type: 'options',
		options: [
			{ name: 'Percentage', value: 'percentage' },
			{ name: 'Fixed Amount', value: 'fixed' },
		],
		default: 'percentage',
		required: true,
		displayOptions: { show: { ...showFor, operation: ['create'] } },
		description: 'Whether the discount is a percentage or fixed amount',
		routing: {
			send: { type: 'body', property: 'type' },
		},
	},
	{
		displayName: 'Amount',
		name: 'discountAmount',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: { show: { ...showFor, operation: ['create'] } },
		description: 'Discount amount (percentage 0-100, or fixed amount in cents)',
		routing: {
			send: { type: 'body', property: 'amount' },
		},
	},
];
