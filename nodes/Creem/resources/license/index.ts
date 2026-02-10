import type { INodeProperties } from 'n8n-workflow';

const showFor = { resource: ['license'] };

export const licenseDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showFor },
		options: [
			{
				name: 'Validate',
				value: 'validate',
				action: 'Validate a license key',
				description: 'Verify if a license key is valid and active',
				routing: {
					request: { method: 'POST', url: '/v1/licenses/validate' },
				},
			},
			{
				name: 'Activate',
				value: 'activate',
				action: 'Activate a license key',
				description: 'Activate a license key for a specific device or instance',
				routing: {
					request: { method: 'POST', url: '/v1/licenses/activate' },
				},
			},
			{
				name: 'Deactivate',
				value: 'deactivate',
				action: 'Deactivate a license key',
				description: 'Remove a device activation from a license key',
				routing: {
					request: { method: 'POST', url: '/v1/licenses/deactivate' },
				},
			},
		],
		default: 'validate',
	},
	{
		displayName: 'License Key',
		name: 'licenseKey',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showFor },
		description: 'The license key to validate, activate, or deactivate',
		routing: {
			send: { type: 'body', property: 'key' },
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: { ...showFor, operation: ['activate'] } },
		description: 'A name to identify this device or instance activation',
		routing: {
			send: { type: 'body', property: 'instance_name' },
		},
	},
	{
		displayName: 'Instance ID',
		name: 'instanceId',
		type: 'string',
		default: '',
		displayOptions: { show: { ...showFor, operation: ['validate', 'deactivate'] } },
		description: 'The instance ID to validate or deactivate',
		routing: {
			send: { type: 'body', property: 'instance_id' },
		},
	},
];
