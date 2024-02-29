# BattleShip Setup

This project just includes setting up the ships for a game of battle ship.
The user can place their ships manually or click the randomize button to have the ships placed randomly. 
The ships cannot overlap or go off the side of the board.

## Design for in prod
![image](https://github.com/almayberry/BattleShip/assets/109940587/6f3f06b1-2b39-47e4-97a6-43820bcddf8a)
One thing to consider here is that the game modals are stored in memory so we would need to  make sure the load balancer directs the users to the same service every time. 

## Modals and service layout 
![image](https://github.com/almayberry/BattleShip/assets/109940587/2cd11191-3dc0-461b-b233-530073e72afd)

## Prod considerations
### Kubernetes
- Automate scaling, load balancing, security, and provisioning containers
- Links all hosts through a single dashboard/ command line
- Reliability: if one node goes down system stays up

### Cloud Services 
- Monitoring, logging, and automated testing
- Data storage
- Security: cloud compliance and data protection

### Load Balancing 
- Static (round robin, hash based) - designed for low fluctuation in incoming load
  - Pros: less complicated, predictable, lower overhead
  - Cons: inflexible, risk overload, limited fault tolerance
- Dynamic (least connection, least response time) - designed for high fluctuation in incoming load
  - Pros: adaptability, optimal resource utilization, scalability
  - Cons: complex, computational overhead, configuration challenges
- Handle denial of service attacks

### Security 
- Identity service to verify users
- User receives a token with a limited life span to be used for all requests.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


