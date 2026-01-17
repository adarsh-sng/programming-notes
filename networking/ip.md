A home network vs “the internet” is basically two different routing worlds: inside your house you use private addresses, and outside your house the rest of the internet only knows your router’s public address, so direct inbound connections usually don’t know which device inside should receive them. This is why terms like NAT, port-forwarding, “relay”, and binding to `0.0.0.0` matter.[3]

## IP addresses and ports
- An **IP address** identifies a machine/interface on a network so packets can be routed to it.[3]
- A **port** identifies *which program* on that machine should receive the data (e.g., web servers often use port 80/443, your custom TCP app might use 5000).[3]
- A TCP connection is uniquely identified by `(source IP, source port, destination IP, destination port)`, so the IP gets you to the right machine and the port gets you to the right app.[3]

## LAN vs internet
- A **LAN (Local Area Network)** is your local network (like devices on the same Wi‑Fi/router).[2]
- The **internet** is the global network; routers move packets between networks based on routable/public IP addresses.[2]
- Many home LANs use “private IP ranges” (like `192.168.x.x`, `10.x.x.x`) that are meant to work only inside private networks and are not directly routed on the public internet.[3]

## NAT (Network Address Translation)
**NAT** is what your home router typically does: it lets many private-LAN devices share one public internet IP by rewriting addresses as traffic passes through the router.[2][3]
For outbound connections (your laptop opening YouTube), the router replaces your device’s private source IP with the router’s public IP and tracks the mapping so replies come back to the right internal device.[1][3]
This tracking is often done by also translating/using **ports** (PAT/NAPT), so multiple internal connections can coexist through one public IP.[3]

## Why inbound fails (default)
If someone on the internet tries to connect *into* your home network, the packet arrives at your router’s **public IP**, but the router often has **no mapping** telling it which internal device should receive that brand-new inbound connection.[3]
In that case, the router typically drops/rejects it (and many setups also have firewall rules doing the same), which is why “many home routers block inbound connections by default” is a common practical outcome.[3]

## Port forwarding (making inbound work)
**Port forwarding** is a router configuration that says: “If an incoming connection hits my public IP on port P, send it to internal device IP A on port Q.”[2]
This creates a deterministic rule so an inbound TCP connection can reach the correct computer/app inside your LAN instead of being dropped as “unknown destination.”[2][3]

## Relay service (avoiding inbound)
A **relay** is a publicly reachable server that *both* of your devices connect out to (outbound connections usually work through NAT), and then the relay forwards data between them.[3]
This avoids needing port forwarding, but adds an extra hop and requires running/using a third-party server.[3]

## 127.0.0.1 vs 0.0.0.0 (binding/listening)
When a server program “binds” (attaches) to an address, it’s choosing which network interface(s) it will accept connections on.[11]
- `127.0.0.1` is **loopback**: it means “this same computer only”; other machines cannot reach it because packets never leave the host.[11]
- `0.0.0.0` means “listen on **all IPv4 interfaces** on this machine” (Wi‑Fi, Ethernet, etc.), so other computers on the LAN can connect using your LAN IP (like `192.168.1.10`).[11]

If you share your exact setup (same Wi‑Fi vs different networks, and which OS), the right option (LAN direct vs port-forwarding vs relay) can be picked and mapped to concrete steps.

[1](https://www.geeksforgeeks.org/computer-networks/network-address-translation-nat/)
[2](https://www.cisco.com/site/us/en/learn/topics/networking/what-is-network-address-translation-nat.html)
[3](https://en.wikipedia.org/wiki/Network_address_translation)
[4](https://www.fortinet.com/resources/cyberglossary/network-address-translation)
[5](https://www.techtarget.com/searchnetworking/definition/Network-Address-Translation-NAT)
[6](https://www.zenarmor.com/docs/network-basics/what-is-nat)
[7](https://www.uninets.com/blog/what-is-nat-network-address-translation)
[8](https://www.antaira.com/Whitepaper-Introduction-to-Network-Address-Translation)
[9](https://www.youtube.com/watch?v=FTUV0t6JaDA)
[10](https://www.youtube.com/watch?v=PJi6pDfUNcM)
[11](https://nodejs.org/api/net.html)