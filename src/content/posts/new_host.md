---
title: New Host, ID Verification, & Nav Changes
published: 2022-11-22
draft: false
description:
  In the last week or so, I've done some major updates to things around here.
tags: [site update, hosting]
category: Tech
---

Whew. I've been a busy bee. In the last week or so, I've done some major updates
to things around here. First, I created an
[Author's Note](https://www.enigmalea.quest/authorsnote) to use for my AO3
works. It's something I've been debating on for a while, but basically, I wanted
to be able to update ONE place, rather than having to update all the works I've
ever published in case my social media changes.

Ironically, I did this _last_ Saturday, before Elon Musk tried to explode
twitter, so the potential benefits were reaped almost immediately.

However, in order for this to be as beneficial as I wanted, I realized I might
eventually move off [neocities](https://neocities.org), if only because I will
likely want to add some more complex services to the site eventually - like
forms. I was enticed (pretty easily), by [Netlify's](https://nelify.com) form
service, as well as [Netlify CMS](https://netlifycms.org). I've been looking for
an easy way to update my blog without having to break out VSCode, and I think I
found it. I haven't set CMS up yet, but it's been filed as an issue on my
github.

So, a few days ago, I purchase a domain and a few days after that moved my
hosting to Netlify. But I didn't stop there.

<!--truncate-->

The Author's Note page also made me realize I didn't like my navigation system.
The more I wrote on it the more I wished I could add jumplinks and the more
frustrated I was that I couldn't find somewhere to generate them that made
sense. I grumbled in frustration at moble, screeched in horror at all of my
design attempts and finally settled on removing the sidebar and putting all my
main navigation, including my social links, in the top bar on desktop/hamburger
menu on mobile.

I'm not super happy with this solution, as I think it moves me back toward the
default docuaruaus layout, rather than the customized one I had before, but a
better solutions hasn't presented itself.

I have plans to add a jumplinks component, for really long pages (I'm looking at
you [Exchange Letter](https://www.enigmalea.quest/letter)), but I'm still in the
planning stages; yet another issue that's been filed on the github.

I also joined a Mastodon instance, and their verificaion uses
[XFN's `rel="me"`](https://microformats.org/wiki/rel-me) approach to verifying
identity. So I added a link to my Mastodon and updated all of my social links to
include this property. Adding the reference on all of my profiles is on my to do
list.

Lastly, I completed the following list of minor updates:

- Updated this blog to include descriptive titles
- updated all references to neocities to my domain
- created a redirect on my neocities to the domain
- various CSS tweaks to streamlin styling
- updates to pages to reflect new information (i.e. change in host, etc)
- removed as many twitter references as I could, in case the site goes down
  (i.e. linking to my commission artist's kofi instead of her twitter.)
