import type {
	IHookFunctions,
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

export class CreemTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Creem Trigger',
		name: 'creemTrigger',
		icon: 'file:../../icons/creem.svg',
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["event"]}}',
		description: 'Listen for Creem webhook events like checkout completions and subscription changes',
		defaults: {
			name: 'Creem Trigger',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'creemApi',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Event',
				name: 'event',
				type: 'options',
				required: true,
				default: 'checkout.completed',
				options: [
					{
						name: 'Checkout Completed',
						value: 'checkout.completed',
						description: 'Triggered when a payment is successful',
					},
					{
						name: 'Dispute Created',
						value: 'dispute.created',
						description: 'Triggered when a chargeback is opened',
					},
					{
						name: 'Refund Created',
						value: 'refund.created',
						description: 'Triggered when a refund is processed',
					},
					{
						name: 'Subscription Active',
						value: 'subscription.active',
						description: 'Triggered when a new subscription is created',
					},
					{
						name: 'Subscription Canceled',
						value: 'subscription.canceled',
						description: 'Triggered when a subscription is canceled',
					},
					{
						name: 'Subscription Expired',
						value: 'subscription.expired',
						description: 'Triggered when a subscription period ends without renewal',
					},
					{
						name: 'Subscription Paid',
						value: 'subscription.paid',
						description: 'Triggered when a recurring payment is processed',
					},
					{
						name: 'Subscription Paused',
						value: 'subscription.paused',
						description: 'Triggered when a subscription is paused',
					},
					{
						name: 'Subscription Trialing',
						value: 'subscription.trialing',
						description: 'Triggered when a trial starts',
					},
					{
						name: 'Subscription Updated',
						value: 'subscription.update',
						description: 'Triggered when a subscription is modified',
					},
				],
				description: 'The Creem event to listen for',
			},
		],
		usableAsTool: true,
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				return false;
			},
			async create(this: IHookFunctions): Promise<boolean> {
				return true;
			},
			async delete(this: IHookFunctions): Promise<boolean> {
				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const body = this.getBodyData() as { eventType?: string; object?: object };
		const event = this.getNodeParameter('event') as string;

		if (body.eventType !== event) {
			return { noWebhookResponse: true };
		}

		return {
			workflowData: [this.helpers.returnJsonArray(body)],
		};
	}
}
