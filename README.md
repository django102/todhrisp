# todhrisp

## Folder Structure
- api-gateway: This is the API gateway. This is where all requests to the backend will come through, and these requests are routed to the other individual services
- payments: Handles bill payments
- wallets: Handles wallet creation and management
- transfers: Handles transfers between wallets, and from wallets to bank accounts


## Endpoints
- Create User: `<baseUrl>/user/create`
- User Login: `<baseUrl>/user/login`

&nbsp;

- Create Wallet: `<baseUrl>/wallet/create`