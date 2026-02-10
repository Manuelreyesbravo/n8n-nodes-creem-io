# n8n-nodes-creem

This is an n8n community node for [Creem](https://creem.io) — the payment platform built for indie hackers and SaaS companies.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Features

This node provides full access to the Creem API:

### Creem Node (Regular)

| Resource | Operations |
|----------|-----------|
| **Checkout** | Create, Get |
| **Product** | Create, Get, Get Many |
| **Customer** | Get, Get Many, Create Billing Portal |
| **Subscription** | Get, Update, Upgrade, Cancel, Pause, Resume |
| **Transaction** | Get, Get Many |
| **License** | Validate, Activate, Deactivate |
| **Discount** | Create, Get, Delete |

### Creem Trigger Node

Listens for real-time webhook events:

- `checkout.completed` — Payment successful
- `subscription.active` — New subscription created
- `subscription.paid` — Recurring payment processed
- `subscription.trialing` — Trial started
- `subscription.canceled` — Subscription canceled
- `subscription.expired` — Subscription expired
- `subscription.paused` — Subscription paused
- `subscription.update` — Subscription modified
- `refund.created` — Refund processed
- `dispute.created` — Chargeback opened

### AI Agent Compatible

The Creem node has `usableAsTool: true`, making it compatible with n8n's AI Agent for natural language payment operations.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Credentials

You need a Creem API key to use this node:

1. Go to your [Creem dashboard](https://creem.io/dashboard/developers)
2. Navigate to the **Developers** section
3. Copy your API key

The node supports both **Production** and **Test** environments.

## Usage

### Example: Create a checkout session

1. Add the **Creem** node to your workflow
2. Select **Checkout** as the resource
3. Select **Create** as the operation
4. Enter the **Product ID** and **Success URL**
5. Execute the workflow to get a checkout URL

### Example: Listen for payments

1. Add the **Creem Trigger** node
2. Select the event (e.g., `checkout.completed`)
3. Copy the webhook URL and add it to your Creem dashboard
4. Activate the workflow

## Resources

- [Creem API Documentation](https://docs.creem.io/api-reference/introduction)
- [Creem Dashboard](https://creem.io/dashboard)
- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)

## License

[MIT](LICENSE.md)
