import type { INodeProperties } from 'n8n-workflow';

const showFor = {
	operation: ['get'],
	resource: ['product'],
};

export const productGetDescription: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showFor },
		description: 'The ID of the product to retrieve',
		routing: {
			send: {
				type: 'query',
				property: 'id',
			},
		},
	},
];
