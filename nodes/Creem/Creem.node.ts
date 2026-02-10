import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { checkoutDescription } from './resources/checkout';
import { productDescription } from './resources/product';
import { customerDescription } from './resources/customer';
import { subscriptionDescription } from './resources/subscription';
import { transactionDescription } from './resources/transaction';
import { licenseDescription } from './resources/license';
import { discountDescription } from './resources/discount';

export class Creem implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Creem',
		name: 'creem',
		icon: 'file:../../icons/creem.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Creem API for payments, subscriptions, and licenses',
		defaults: {
			name: 'Creem',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'creemApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL:
				'={{$credentials?.environment === "test" ? "https://test-api.creem.io" : "https://api.creem.io"}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Checkout',
						value: 'checkout',
					},
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Discount',
						value: 'discount',
					},
					{
						name: 'License',
						value: 'license',
					},
					{
						name: 'Product',
						value: 'product',
					},
					{
						name: 'Subscription',
						value: 'subscription',
					},
					{
						name: 'Transaction',
						value: 'transaction',
					},
				],
				default: 'checkout',
			},
			...checkoutDescription,
			...productDescription,
			...customerDescription,
			...subscriptionDescription,
			...transactionDescription,
			...licenseDescription,
			...discountDescription,
		],
	};
}
