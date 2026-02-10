import type { INodeProperties } from 'n8n-workflow';
import { productCreateDescription } from './create';
import { productGetDescription } from './get';

const showFor = {
	resource: ['product'],
};

export const productDescription: INodeProperties[] = [
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
				action: 'Create a product',
				description: 'Create a new product for one-time payments or subscriptions',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/products',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a product',
				description: 'Retrieve product details by ID',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/products',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many products',
				description: 'Search and list products',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/products/search',
					},
				},
			},
		],
		default: 'getAll',
	},
	...productCreateDescription,
	...productGetDescription,
];
