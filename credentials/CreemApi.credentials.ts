import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CreemApi implements ICredentialType {
	name = 'creemApi';

	displayName = 'Creem API';

	icon: Icon = 'file:../icons/creem.svg';

	documentationUrl = 'https://docs.creem.io/api-reference/introduction';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description:
				'Your Creem API key. Find it in the Developers section of your Creem dashboard.',
		},
		{
			displayName: 'Environment',
			name: 'environment',
			type: 'options',
			options: [
				{
					name: 'Production',
					value: 'production',
				},
				{
					name: 'Test',
					value: 'test',
				},
			],
			default: 'production',
			description: 'Whether to use the production or test API environment',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': '={{$credentials?.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL:
				'={{$credentials?.environment === "test" ? "https://test-api.creem.io" : "https://api.creem.io"}}',
			url: '/v1/products/search',
			method: 'GET',
		},
	};
}
