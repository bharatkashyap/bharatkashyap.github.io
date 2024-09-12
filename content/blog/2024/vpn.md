---
title: 'How to: Roll your own VPN'
description: 'Guarding your wires'
date: '2024-01-09'
---

A VPN (Virtual Private Network) is a modern-day necessity given the connected nature of the world today and the amount of travel we indulge in. I've used a number of VPN services over the years, but a few months ago – in a moment of instinctive genius – I decided to search for "open-source VPN" and came across Wireguard: [https://www.wireguard.com/](https://www.wireguard.com/)

I was immediately sold and decided to try and set it up via a Digital Ocean droplet I use for hobbyist purposes like these.

## The prerequisites

1. Your own server (through which to redirect traffic) – this costs as low as $3-$4 a month.

## The process

I followed a bunch of guides at the time, but I think this [Digital Ocean tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-wireguard-on-ubuntu-20-04) does a great job of putting most of what I did together.

## The outcome

I was unsure about whether this would turn out to be more expensive than buying a VPN service. A few months in, I'm happy to report that it's barely even moved the needle on my usual server bill, which means that it's almost free. I'm not a heavy VPN user anyway, but for the limited usage I do have, it has been a fantastically economical proposition.

The limited drawbacks I can list are the following:

1. **Additional effort:** To initiate a VPN session, I now need to run a shell command on my client and server:

```bash
sudo wg-quick up wg0
```

2. **Cross-device support:** You can set Wireguard up on your phone as well, but it requires additional configuration – instead of a simple UI that works across devices

If you're interested in setting up a peer on your phone as well, Wireguard does a good job of documenting how to do that: [https://wireguard.how/client/ios/](https://wireguard.how/client/ios/) – although I haven't done that yet.

_Bonus_: The phrase "Roll your own" comes from cigarettes that one is supposed to "roll" themselves, instead of buying packs of pre-rolled ones.
