import type { INodeProperties } from 'n8n-workflow';

const showFor = {
	operation: ['create'],
	resource: ['checkout'],
};

export const checkoutCreateDescription: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showFor },
		description: 'The ID of the product for this checkout session',
		routing: {
			send: {
				type: 'body',
				property: 'product_id',
			},
		},
	},
	{
		displayName: 'Success URL',
		name: 'successUrl',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showFor },
		description: 'URL to redirect the customer after successful payment',
		routing: {
			send: {
				type: 'body',
				property: 'success_url',
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
				displayName: 'Request ID',
				name: 'requestId',
				type: 'string',
				default: '',
				description: 'Unique idempotency key for this checkout request',
				routing: {
					send: {
						type: 'body',
						property: 'request_id',
					},
				},
			},
			{
				displayName: 'Customer Email',
				name: 'customerEmail',
				type: 'string',
				default: '',
				description: 'Pre-fill the customer email on the checkout page',
				placeholder: 'name@email.com',
				routing: {
					send: {
						type: 'body',
						property: 'customer_email',
					},
				},
			},
			{
				displayName: 'Discount Code',
				name: 'discountCode',
				type: 'string',
				default: '',
				description: 'Apply a discount code to the checkout session',
				routing: {
					send: {
						type: 'body',
						property: 'discount_code',
					},
				},
			},
		],
	},
];
