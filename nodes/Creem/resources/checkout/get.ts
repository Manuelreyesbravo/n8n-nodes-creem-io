import type { INodeProperties } from 'n8n-workflow';

const showFor = {
	operation: ['get'],
	resource: ['checkout'],
};

export const checkoutGetDescription: INodeProperties[] = [
	{
		displayName: 'Checkout ID',
		name: 'checkoutId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showFor },
		description: 'The ID of the checkout session to retrieve',
		routing: {
			send: {
				type: 'query',
				property: 'id',
			},
		},
	},
];
