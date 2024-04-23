# todhrisp

## Folder Structure
- api-gateway: This is the API gateway. This is where all requests to the backend will come through, and these requests are routed to the other individual services
- payments: Handles bill payments
- wallets: Handles wallet creation and management
- transfers: Handles transfers between wallets, and from wallets to bank accounts


## Endpoints
- Create User: `POST <baseUrl>/user/create`
- User Login: `POST <baseUrl>/user/login`

&nbsp;

- Create Wallet: `POST <baseUrl>/wallet/create`
- Fund Wallet: `POST <baseUrl>/wallet/fund`
- Get Wallet Balance: `GET <baseUrl>/wallet/balance/:account`