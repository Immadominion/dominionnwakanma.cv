// Everything on the site comes from this file. Facts were checked on 1 Oct 2026
// against GitHub, pub.dev, Superteam Earn, Colosseum and the live sites.

export const site = {
  name: "Dominion Nwakanma",
  short: "Dominion",
  role: "Mobile and product engineer",
  url: "https://dominionnwakanma.cv",
  email: "immadominion@gmail.com",
  updated: "1 October 2026",
  updatedShort: "Oct 2026",
  links: [
    { label: "X", handle: "@HeIsJoel0x", href: "https://x.com/HeIsJoel0x" },
    { label: "GitHub", handle: "Immadominion", href: "https://github.com/Immadominion" },
    { label: "LinkedIn", handle: "Dominion Nwakanma", href: "https://www.linkedin.com/in/imma-dominion-b4287725a/" },
    { label: "Telegram", handle: "@immadotdev", href: "https://t.me/immadotdev" },
    { label: "Superteam Earn", handle: "HeIsJoel0x", href: "https://superteam.fun/earn/t/HeIsJoel0x" },
    { label: "YouTube", handle: "@immadominion", href: "https://www.youtube.com/@immadominion" },
    { label: "Medium", handle: "@immadominion", href: "https://medium.com/@immadominion" },
  ],
};

export type Link = { label: string; href: string };
export type Stat = { value: string; label: string };

export type Featured = {
  slug: string;
  title: string;
  when: string;
  year: string;
  kind: string;
  summary: string;
  role: string;
  stack: string[];
  proof: { label: string; win?: boolean };
  links: Link[];
  intro: string;
  points: string[];
  stats: Stat[];
  media: "video" | "phone" | "code" | "image";
  code?: { file: string; lines: string[] };
  accent: string; // a tint taken from the product itself
  credit?: string;
};

export const featured: Featured[] = [
  {
    slug: "trimmy",
    title: "Trimmy",
    when: "Aug to Oct 2026",
    year: "2026",
    kind: "App · Flutter · Web",
    summary: "A Wall Street simulation game. Buy a practice stock, explain why, and work up from Rookie to Analyst.",
    role: "Founder. Design, mobile, web, backend, brand and the films.",
    stack: ["Flutter", "React", "TypeScript", "Fastify", "PostgreSQL", "Solana", "Jupiter", "Privy", "After Effects"],
    proof: { label: "Built for Stocklana" },
    links: [
      { label: "trimmy.xyz", href: "https://trimmy.xyz" },
      { label: "Web app", href: "https://app.trimmy.xyz" },
      { label: "Demo and pitch", href: "https://trimmy-submission.vercel.app" },
      { label: "GitHub", href: "https://github.com/Immadominion/trimmy" },
    ],
    intro:
      "Buying a stock keeps getting easier. Knowing what to buy, and why, is still the hard part. Trimmy gives you a desk before it asks you to become an investor.",
    points: [
      "Short, playable workdays. Read the figures, pin the evidence, make the call, then see what you missed. The first 20 assignments ship with the app, and new ones publish through the API.",
      "Practice and real money never look alike: purple for paper trading, green for your wallet, everywhere in the app.",
      "Real trades go through the user's Privy wallet and Jupiter. The server checks each transaction before the user signs and confirms the result on-chain after.",
      "The website is a scroll film: a flythrough of Wall Street's history, from the war debt to the trading floor, built and timed by hand.",
    ],
    stats: [
      { value: "187", label: "commits" },
      { value: "20", label: "workdays at launch" },
      { value: "3", label: "surfaces: app, web, site" },
    ],
    media: "video",
    accent: "#7A5CFF",
  },
  {
    slug: "chumbucket",
    title: "Chumbucket",
    when: "2025 to 2026",
    year: "2026",
    kind: "App · Flutter · Solana",
    summary: "Call a football match with a friend and let the result settle it, on Solana.",
    role: "Lead developer and product owner. The Flutter app, the Arena backend and the brand.",
    stack: ["Flutter", "Dart", "Mobile Wallet Adapter", "TypeScript", "Supabase", "Helius", "TxLINE"],
    proof: { label: "1st place · TxODDS World Cup Hackathon Nigeria", win: true },
    links: [
      { label: "chumbucket.fun", href: "https://www.chumbucket.fun" },
      { label: "Android APK", href: "https://github.com/Immadominion/Chum-Bucket/releases/latest" },
      { label: "App on GitHub", href: "https://github.com/Immadominion/Chum-Bucket" },
      { label: "Arena backend", href: "https://github.com/Immadominion/chumbucket-arena" },
    ],
    intro:
      "It started as a way to lock SOL on a bet with a friend. It grew into social football predictions: follow callers, copy a call, challenge a friend, and let a TxLINE proof settle it instead of an operator.",
    points: [
      "A native Flutter app on Solana Mobile Wallet Adapter. Chumbucket never holds anyone's keys.",
      "The friend picker stays quick and readable past seven friends: a sheet that settles properly, with everyone's status at a glance.",
      "The Arena backend runs on-chain pots and one-on-one challenges settled from TxLINE match proofs, with a Supabase social layer and a Helius indexer.",
      "The original friend-challenge escrow runs on Solana mainnet. The escrow program was built with Ubadineke Prince.",
    ],
    stats: [
      { value: "185", label: "profiles, per project README" },
      { value: "15", label: "funded challenges, per project README" },
      { value: "1st", label: "TxODDS World Cup Nigeria" },
    ],
    media: "phone",
    accent: "#FF3D6E",
  },
  {
    slug: "aiki",
    title: "AiKi",
    when: "Aug to Sep 2026",
    year: "2026",
    kind: "Web · AI agents",
    summary: "A marketplace where people and AI agents get work done together, with wallets, mandates and receipts.",
    role: "Founder and lead engineer. 288 of the 291 commits.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "MCP", "Solidity", "BNB Chain", "ERC-8004", "Remotion"],
    proof: { label: "BNB Chain · Build the Era" },
    links: [
      { label: "useaiki.xyz", href: "https://www.useaiki.xyz" },
      { label: "GitHub", href: "https://github.com/Immadominion/AiKi" },
    ],
    intro:
      "Agents can already do real work. What's missing is a safe way to hire one: give it a budget, say what it may do, and get evidence back. AiKi is that layer.",
    points: [
      "Agent wallets with mandates. The person hiring sets the spending limit and the actions an agent is allowed to take.",
      "Every job ends with evidence and a receipt, kept by a separate evidence service.",
      "An MCP server, so agents can find work and report back from inside their own tools.",
      "The landing page is a 3D city of listed agents. Its scroll pager was tested across browsers, input devices and screen sizes until every chapter fit every screen.",
    ],
    stats: [
      { value: "288", label: "commits" },
      { value: "4", label: "services in production" },
      { value: "1", label: "MCP server" },
    ],
    media: "video",
    accent: "#2F6BFF",
  },
  {
    slug: "blueshift",
    title: "Solana Mobile Mastery",
    when: "2025 to 2026",
    year: "2026",
    kind: "Course · React Native",
    summary: "A five-course path on building for Solana Mobile, written for Blueshift.",
    role: "Author. Curriculum, lessons, challenges and companion apps.",
    stack: ["React Native", "Expo", "Mobile Wallet Adapter", "MDX"],
    proof: { label: "Merged · PR #329" },
    links: [
      { label: "The course", href: "https://learn.blueshift.gg/en/paths/solana-mobile-mastery" },
      { label: "Pull request", href: "https://github.com/blueshift-gg/blueshift-dashboard/pull/329" },
      { label: "Colosseum Codex", href: "https://blog.colosseum.com/agent-hackathon-blueshift-mobile-arcium-alpha/" },
    ],
    intro: "Blueshift teaches Solana through hands-on paths. Mobile didn't have one, so I wrote it.",
    points: [
      "Five courses: mobile fundamentals, wallets, on-chain operations, Mobile Wallet Adapter, and publishing to the Solana dApp Store.",
      "Companion Expo apps for the challenges, after studying more than 20 wallet SDKs to get the details right.",
      "Merged in February 2026 and covered by Colosseum Codex and Superteam Nigeria.",
    ],
    stats: [
      { value: "5", label: "courses" },
      { value: "18 hrs", label: "of material" },
      { value: "58", label: "files merged" },
    ],
    media: "image",
    accent: "#3B82F6",
  },
  {
    slug: "coral-xyz",
    title: "coral_xyz",
    when: "2025 to 2026",
    year: "2026",
    kind: "SDK · Dart",
    summary: "A Dart client for Solana programs. Anchor, Quasar and Pinocchio, through one API.",
    role: "Creator and maintainer.",
    stack: ["Dart", "Flutter", "Solana", "Anchor", "Borsh"],
    proof: { label: "1,159 downloads this year" },
    links: [
      { label: "pub.dev", href: "https://pub.dev/packages/coral_xyz" },
      { label: "GitHub", href: "https://github.com/Immadominion/dart-coral-xyz" },
      { label: "Colosseum Codex", href: "https://blog.colosseum.com/colosseum-codex-block-assembly-marketplace-sanctum-gateway-snipost/" },
    ],
    intro:
      "Flutter apps had no clean way to talk to Solana programs. Each one hand-rolled its own encoding. coral_xyz reads a program's IDL at runtime and gives Dart the same program API TypeScript developers have.",
    points: [
      "One API across Anchor, Quasar and Pinocchio programs.",
      "Borsh encoding, zero-copy account decoding, and PDA derivation straight from the IDL's seeds.",
      "Typed builders: accounts, signers, then rpc, simulate or view. Events decode as they arrive.",
      "A code generator for typed clients, and in-process testing through Quasar SVM bindings.",
    ],
    stats: [
      { value: "9", label: "releases" },
      { value: "1,159", label: "downloads this year" },
      { value: "Codex", label: "featured by Colosseum" },
    ],
    media: "code",
    code: {
      file: "counter.dart",
      lines: [
        "final idl = Idl.fromJson(json);",
        "final program = Program(idl, programId, provider);",
        "",
        "await program.methods['increment']!([])",
        "    .accounts({'counter': counter})",
        "    .rpc();",
        "",
        "final state = await program",
        "    .account['Counter']!.fetch(counter);",
      ],
    },
    accent: "#14F195",
  },
  {
    slug: "dartus",
    title: "Dartus",
    when: "2025 to 2026",
    year: "2026",
    kind: "SDK · Dart · Rust",
    summary: "Walrus decentralized storage for Dart and Flutter, funded by a Walrus Foundation grant.",
    role: "Creator and maintainer. Outside contributors have merged work.",
    stack: ["Dart", "Flutter", "Rust FFI", "Walrus", "Sui"],
    proof: { label: "Walrus Foundation grant" },
    links: [
      { label: "pub.dev", href: "https://pub.dev/packages/dartus" },
      { label: "GitHub", href: "https://github.com/Immadominion/Dartus" },
      { label: "On the Walrus blog", href: "https://blog.walrus.xyz/getting-started-with-dartus/" },
    ],
    intro:
      "Walrus stores large files across a network of nodes. Dartus lets a Flutter app store and read them in a few lines, with three modes depending on how much you want to rely on a server.",
    points: [
      "HTTP mode through publishers and aggregators, for the simplest setup.",
      "Relay mode, and a direct mode that erasure-codes on the device through Rust and signs with the user's own wallet.",
      "Quilts and blob inspection, with a demo app that exercises every feature.",
      "The Walrus Foundation calls it \"a Walrus RFP project built by Dominion\".",
    ],
    stats: [
      { value: "932", label: "downloads this year" },
      { value: "10", label: "GitHub stars" },
      { value: "3", label: "storage modes" },
    ],
    media: "code",
    code: {
      file: "upload.dart",
      lines: [
        "final walrus = WalrusClient(",
        "  publisher: publisherUrl,",
        "  aggregator: aggregatorUrl,",
        ");",
        "",
        "final blob = await walrus.store(bytes, epochs: 5);",
        "final back = await walrus.read(blob.blobId);",
      ],
    },
    accent: "#9AE8F6",
  },
  {
    slug: "plinth",
    title: "Plinth",
    when: "Jun to Jul 2026",
    year: "2026",
    kind: "Web · Fintech · Team",
    summary: "Subscription billing on Nomba's payment rails, for Nigerian businesses.",
    role: "Co-founder. Product, frontend, brand, landing and dashboard. Billing engine by Ubadineke Prince.",
    stack: ["Next.js", "TypeScript", "Three.js", "Mintlify", "PostgreSQL", "Nomba API"],
    proof: { label: "Nomba x DevCareer" },
    links: [
      { label: "useplinth.xyz", href: "https://www.useplinth.xyz" },
      { label: "Dashboard", href: "https://app.useplinth.xyz" },
      { label: "GitHub", href: "https://github.com/ubadineke/plinth" },
    ],
    intro:
      "Stripe Billing doesn't serve Nigeria. Plinth handles subscriptions, invoices and failed payments on local rails, and falls back to a virtual account when a card fails.",
    points: [
      "Brand, site and dashboard, including the 3D bronze scene that plays as you scroll through subscriptions.",
      "Subscriptions, invoices and dunning, explained in docs written for developers.",
      "47 of the 80 commits and 7 merged pull requests.",
    ],
    stats: [
      { value: "47", label: "commits" },
      { value: "7", label: "merged PRs" },
      { value: "2", label: "builders" },
    ],
    media: "video",
    accent: "#0FA37F",
  },
  {
    slug: "hack4futo",
    title: "Hack4FUTO 5.0",
    when: "Feb to Jul 2026",
    year: "2026",
    kind: "Event · Organiser",
    summary: "Convened FUTO's student hackathon and conference, and built the software that ran it.",
    role: "Convener. Sponsorship, programme, website, live voting and an open treasury.",
    stack: ["Next.js", "Node.js", "Server-sent events", "Python", "MCP", "Solana"],
    proof: { label: "Superteam Nigeria grant" },
    links: [
      { label: "hack4futo.org", href: "https://www.hack4futo.org" },
      { label: "Open treasury", href: "https://hack4futo-treasury.vercel.app" },
    ],
    intro:
      "Hack4FUTO is the student hackathon at the Federal University of Technology, Owerri. My teammates and I ran the fifth edition as our way of giving back before we graduated.",
    points: [
      "Raised the sponsorship, including a $5,000 grant from Superteam Nigeria.",
      "600+ students and builders on the day. 14 of the 22 finalist teams built on Solana.",
      "Built the website, a live audience vote over server-sent events, and a public treasury where every expense has a receipt and an on-chain proof.",
      "The treasury has an MCP connector, so spending is logged straight from Claude.",
    ],
    stats: [
      { value: "600+", label: "students and builders" },
      { value: "22", label: "finalist teams" },
      { value: "$5,000", label: "Superteam Nigeria grant" },
    ],
    media: "image",
    accent: "#F5B301",
    credit: "Event photos by DAVEREPORTS.",
  },
  {
    slug: "web3flutter",
    title: "Web3 Flutter HQ",
    when: "Mar to Jun 2026",
    year: "2026",
    kind: "Hub · Next.js",
    summary: "The home for building on Solana with Flutter: docs, SDK guides, and skill files for coding agents.",
    role: "Founder. Design, build and writing.",
    stack: ["Next.js", "TypeScript", "MDX", "Three.js"],
    proof: { label: "Live" },
    links: [{ label: "web3flutter.dev", href: "https://www.web3flutter.dev" }],
    intro:
      "Flutter developers who wanted to build on Solana had to dig through scattered repos. Web3 Flutter HQ puts the SDKs, guides and examples in one place, and serves skill files so coding agents can use them too.",
    points: [
      "Guides for wallets, Anchor programs, the Solana Mobile Stack and DeFi patterns.",
      "A showcase of Flutter apps on Solana from teams across the ecosystem.",
      "Skill files served by API, so Claude Code and other agents can build with the SDKs correctly.",
    ],
    stats: [
      { value: "Docs", label: "SDK guides and examples" },
      { value: "Showcase", label: "Flutter apps on Solana" },
      { value: "API", label: "skill files for coding agents" },
    ],
    media: "video",
    accent: "#4B2BFF",
  },
];

export type Small = {
  slug: string;
  title: string;
  year: string;
  kind: string;
  summary: string;
  href?: string;
  proof?: { label: string; win?: boolean };
};

export const more: Small[] = [
  { slug: "scrolls", title: "Scrolls", year: "2026", kind: "Web · Walrus", summary: "Describe a form, get a link. Responses live on Walrus.", href: "https://www.scrolls.fun" },
  { slug: "reeg", title: "Reeg", year: "2026", kind: "Devtools · Sui", summary: "Version control for environments, not just code.", href: "https://www.reeg.xyz", proof: { label: "Sui Overflow" } },
  { slug: "quivo", title: "Quivo", year: "2026", kind: "Web · MagicBlock", summary: "A live game show for events. Winners paid on-chain at once.", href: "https://www.usequivo.fun", proof: { label: "Solana Blitz v6" } },
  { slug: "aura", title: "Aura", year: "2026", kind: "App · ML", summary: "An ML-driven liquidity agent for Meteora pools.", href: "https://www.useaura.wtf", proof: { label: "3rd · LPAgent", win: true } },
  { slug: "dream", title: "Dream", year: "2026", kind: "App · Flutter", summary: "A mobile perpetuals terminal with copy trading.", href: "https://www.trydream.fun" },
  { slug: "stx", title: "stx", year: "2026", kind: "Rust · Infra", summary: "A Solana transaction control tower. Jito, tips, Yellowstone.", href: "https://stx-alpha.vercel.app" },
  { slug: "canopy", title: "Canopy", year: "2026", kind: "Devtools · Mobile", summary: "Beta testing for Solana Mobile apps, through the dApp Store.", href: "https://canopy-web-kappa.vercel.app" },
  { slug: "throtl", title: "Throtl", year: "2026", kind: "App · Game", summary: "Car racing meets trading. Race the chart.", href: "https://throtl.fun" },
  { slug: "troof", title: "Troof", year: "2026", kind: "Web · AI", summary: "An AI explorer for Sui whose answers come with proofs.", href: "https://www.troof.site", proof: { label: "Tatum x Walrus" } },
  { slug: "factor", title: "Factor Mobile", year: "2026", kind: "App · iOS", summary: "A crypto-to-fiat calculator. Product and release, built with a collaborator.", href: "https://apps.apple.com/us/app/factor-mobile/id6753987530", proof: { label: "App Store" } },
  { slug: "blackwiki", title: "blackwiki.fun", year: "2026", kind: "Data · Solana", summary: "Every $ANSEM airdrop transfer, traced and valued.", href: "https://blackwiki.fun" },
  { slug: "toadwiki", title: "toadwiki.xyz", year: "2026", kind: "Data · Solana", summary: "A public ledger that fails the build if the books don't close.", href: "https://toadwiki.xyz" },
  { slug: "tip", title: "tip", year: "2026", kind: "App · ZK", summary: "A private Starknet wallet on the STRK20 privacy pool.", proof: { label: "STRK20 sprint" } },
  { slug: "gaffer", title: "The Gaffer", year: "2026", kind: "Web · AI", summary: "An AI football manager whose memory lives on Walrus.", href: "https://www.youtube.com/watch?v=uJWIe73eG4w" },
  { slug: "tally", title: "Tally", year: "2026", kind: "App · Anchor", summary: "Tap once and attendance is recorded on-chain. Final-year project.", proof: { label: "Defended" } },
  { slug: "axyn", title: "AxyN", year: "2025", kind: "App · x402", summary: "Find AI agents and pay them per use from your phone.", href: "https://www.youtube.com/watch?v=ffprCV4oWqU" },
  { slug: "bob", title: "Bob, for BAXUS", year: "2025", kind: "Agent · Team", summary: "A whisky marketplace's AI agent and product kit.", href: "https://www.youtube.com/watch?v=aB0Qdys_jPU", proof: { label: "1st · BAXATHON", win: true } },
  { slug: "drdotun", title: "Dr Dotun", year: "2026", kind: "Client · Web", summary: "Portfolio site for a venture capitalist and podcast host.", href: "https://www.drdotun.com" },
];

export type ArchiveRow = { title: string; kind: string; summary: string; proof?: string; win?: boolean; href?: string; slug?: string };
export type ArchiveYear = { year: string; rows: ArchiveRow[]; tail: string };

export const archive: ArchiveYear[] = [
  {
    year: "2026",
    rows: [
      { title: "Trimmy", slug: "trimmy", kind: "App · Flutter · Web", summary: "A Wall Street simulation game.", proof: "Stocklana" },
      { title: "AiKi", slug: "aiki", kind: "Web · Agents · MCP", summary: "People and AI agents getting work done together.", proof: "288 commits" },
      { title: "Chumbucket", slug: "chumbucket", kind: "App · Flutter · Solana", summary: "Football calls with friends, settled on-chain.", proof: "1st · TxODDS WC Nigeria", win: true },
      { title: "Hack4FUTO 5.0", slug: "hack4futo", kind: "Event · Organiser", summary: "Convened the hackathon and built its software.", proof: "Convener" },
      { title: "Solana Mobile Mastery", slug: "blueshift", kind: "Course", summary: "Five courses on Solana Mobile for Blueshift.", proof: "Merged · #329" },
      { title: "Dartus", slug: "dartus", kind: "SDK · Dart", summary: "Walrus storage for Dart and Flutter.", proof: "Walrus grant" },
      { title: "Scrolls", href: "https://www.scrolls.fun", kind: "Web · Walrus", summary: "Forms whose responses live on Walrus.", proof: "Live" },
      { title: "Plinth", slug: "plinth", kind: "Web · Fintech", summary: "Subscription billing on Nomba's rails.", proof: "Nomba x DevCareer" },
      { title: "Quivo", href: "https://www.usequivo.fun", kind: "Web · MagicBlock", summary: "A live game show, paid on-chain.", proof: "Solana Blitz v6" },
      { title: "Reeg", href: "https://www.reeg.xyz", kind: "Devtools · Sui", summary: "Version control for environments.", proof: "Lead · Sui Overflow" },
      { title: "Aura", href: "https://www.useaura.wtf", kind: "App · ML", summary: "An ML liquidity agent for Meteora.", proof: "3rd · LPAgent", win: true },
      { title: "Dream", href: "https://www.trydream.fun", kind: "App · Flutter", summary: "A mobile perpetuals terminal.", proof: "Live" },
      { title: "stx", href: "https://stx-alpha.vercel.app", kind: "Rust · Infra", summary: "A Solana transaction control tower.", proof: "Live" },
      { title: "Canopy", href: "https://canopy-web-kappa.vercel.app", kind: "Devtools · Mobile", summary: "Beta testing for Solana Mobile apps.", proof: "Live" },
      { title: "Web3 Flutter HQ", slug: "web3flutter", kind: "Hub", summary: "Docs, guides and agent skills for Flutter on Solana.", proof: "Live" },
      { title: "Throtl", href: "https://throtl.fun", kind: "App · Game", summary: "A race-the-chart trading game.", proof: "Live" },
      { title: "Troof", href: "https://www.troof.site", kind: "Web · AI", summary: "Verifiable AI answers for Sui.", proof: "Tatum x Walrus" },
      { title: "tip", kind: "App · ZK", summary: "A private Starknet wallet.", proof: "STRK20 sprint" },
      { title: "Plimsoll", href: "https://github.com/Immadominion/plimsoll", kind: "Tool · Dart · MCP", summary: "Know what an XRPL payment will do on Flare before you sign.", proof: "Flare" },
      { title: "Tally", kind: "App · Anchor", summary: "On-chain class attendance. Final-year project.", proof: "Defended" },
      { title: "blackwiki.fun and toadwiki.xyz", href: "https://blackwiki.fun", kind: "Data · Solana", summary: "Public ledgers of two airdrops.", proof: "Live" },
      { title: "Factor Mobile", href: "https://apps.apple.com/us/app/factor-mobile/id6753987530", kind: "App · iOS", summary: "Crypto-to-fiat calculator, built with a collaborator.", proof: "App Store" },
      { title: "Dr Dotun", href: "https://www.drdotun.com", kind: "Client · Web", summary: "Site for a venture capitalist and podcast host.", proof: "Live" },
      { title: "flare_network, light_sdk, bls_dart, tld_parser, zama_fhe", href: "https://pub.dev/publishers", kind: "SDKs · pub.dev", summary: "Dart SDKs for Flare, Light Protocol, BLS, AllDomains and Zama.", proof: "5 packages" },
    ],
    tail: "Roost, The Gaffer, Seal and Sigil, Ọ̀rẹ́, AJO, wdk-flutter, Solana Flutter skill, coral_xyz_codegen, dart-tempo, Fleeker Fun, h4f-vote, rfp-watcher, Greenprint, Godot Solana SDK fixes.",
  },
  {
    year: "2025",
    rows: [
      { title: "coral_xyz", slug: "coral-xyz", kind: "SDK · Dart", summary: "A Dart client for Solana programs.", proof: "1,159 downloads" },
      { title: "BAXATHON", href: "https://bob-whisky-ai-preview.vercel.app", kind: "Hackathon · Team", summary: "An AI agent and product kit for BAXUS.", proof: "1st · team", win: true },
      { title: "jupiter", href: "https://pub.dev/packages/jupiter", kind: "SDK · Dart", summary: "A Dart client for Jupiter's Ultra API.", proof: "299 downloads" },
      { title: "Flutter on Solana", href: "https://www.youtube.com/watch?v=z8bbGEjMFcU", kind: "Teaching · Video", summary: "A video series and a three-day workshop.", proof: "Superteam grant" },
      { title: "Orbit", href: "https://orbit-psi-ten.vercel.app", kind: "Web · Flutter", summary: "Xandeum pNode analytics with a 3D globe.", proof: "Live" },
      { title: "AxyN", href: "https://www.youtube.com/watch?v=ffprCV4oWqU", kind: "App · x402", summary: "Pay AI agents per use from a phone.", proof: "Team" },
      { title: "Sol New mobile", kind: "App · Flutter", summary: "sol.new on a phone: tokens, NFTs, pools.", proof: "Mobile" },
      { title: "Espresso Cash, Celo, Reown", href: "https://github.com/espresso-cash/espresso-cash-public/pull/1731", kind: "Open source", summary: "Android fixes, a Flutter template, a docs fix.", proof: "3 merged" },
      { title: "Solana-Flutter-Scaffold", href: "https://github.com/Immadominion/Solana-Flutter-Scaffold", kind: "Template", summary: "A quick start for Flutter on Solana.", proof: "6 stars" },
    ],
    tail: "Oracle, Crete, GotSOL mobile, Parallel Markets, Squads Dart SDK, SNS Dart SDK, xandeum, vanity_solana, solana_utils, Breeze, Onchain Marriage, Scrolly game jam, Civic Auth bounty (6th), dev.fun jams.",
  },
  {
    year: "2024",
    rows: [
      { title: "Avail Wallet", href: "https://github.com/AvailX/avail-wallet", kind: "Contract · Team", summary: "Wallet features for an Aleo wallet in React and Tauri.", proof: "2 PRs merged" },
      { title: "The Grid API app", kind: "Bounty · Mobile", summary: "A mobile product on The Grid's API.", proof: "1st · Superteam UK", win: true },
      { title: "Certify", href: "https://www.youtube.com/watch?v=Q4azVD1_T8c", kind: "App · Flutter · Rust", summary: "Digital identity for physical goods.", proof: "4 hackathons" },
    ],
    tail: "GDSC Flutter session, Medora, Web3 Journal, Glo wallet docs, an earlier personal site.",
  },
  {
    year: "2023",
    rows: [
      { title: "HNGx internship", href: "https://github.com/hngx-org/brainstorm-ai", kind: "Internship", summary: "Flutter intern on team apps.", proof: "7 PRs merged" },
      { title: "Starr Power Technologies", kind: "Job", summary: "Junior Flutter developer building client apps.", proof: "Jun to Aug" },
    ],
    tail: "InstaKing app, QuePay, TradeHive, Microsoft Learn hackathon entries, a church donations site, a music producer's portfolio, early Flutter apps.",
  },
];

export type Pkg = { name: string; note: string; downloads: number; href: string };
export type PkgGroup = { eco: string; pkgs: Pkg[] };

export const packages: PkgGroup[] = [
  {
    eco: "Solana",
    pkgs: [
      { name: "coral_xyz", note: "Client for Anchor, Quasar and Pinocchio programs", downloads: 1159, href: "https://pub.dev/packages/coral_xyz" },
      { name: "coral_xyz_codegen", note: "Typed clients generated from IDLs", downloads: 304, href: "https://pub.dev/packages/coral_xyz_codegen" },
      { name: "jupiter", note: "Jupiter Ultra API", downloads: 299, href: "https://pub.dev/packages/jupiter" },
      { name: "light_sdk", note: "Light Protocol ZK compression", downloads: 207, href: "https://pub.dev/packages/light_sdk" },
      { name: "vanity_solana", note: "Multi-core vanity addresses", downloads: 196, href: "https://pub.dev/packages/vanity_solana" },
      { name: "solana_utils", note: "Validation and formatting helpers", downloads: 157, href: "https://pub.dev/packages/solana_utils" },
      { name: "tld_parser", note: "AllDomains names like .skr and .bonk", downloads: 141, href: "https://pub.dev/packages/tld_parser" },
    ],
  },
  {
    eco: "Walrus and Sui",
    pkgs: [
      { name: "dartus", note: "Walrus storage, three modes", downloads: 932, href: "https://pub.dev/packages/dartus" },
      { name: "bls_dart", note: "BLS12-381 signatures through Rust", downloads: 479, href: "https://pub.dev/packages/bls_dart" },
    ],
  },
  {
    eco: "Other chains",
    pkgs: [
      { name: "xandeum", note: "Xandeum storage on Solana", downloads: 168, href: "https://pub.dev/packages/xandeum" },
      { name: "zama_fhe", note: "Zama's fhEVM: encrypt, compute, decrypt", downloads: 126, href: "https://pub.dev/packages/zama_fhe" },
      { name: "flare_network", note: "Flare: feeds, FDC, FAssets, smart accounts", downloads: 103, href: "https://pub.dev/packages/flare_network" },
      { name: "flare_network_periphery", note: "164 generated contract bindings", downloads: 100, href: "https://pub.dev/packages/flare_network_periphery" },
    ],
  },
];

export const merged: Link[] = [
  { label: "Blueshift #329", href: "https://github.com/blueshift-gg/blueshift-dashboard/pull/329" },
  { label: "Espresso Cash #1731", href: "https://github.com/espresso-cash/espresso-cash-public/pull/1731" },
  { label: "Celo Composer Flutter #2", href: "https://github.com/celo-org/celo-composer-flutter/pull/2" },
  { label: "Reown Flutter #147", href: "https://github.com/reown-com/reown_flutter/pull/147" },
  { label: "Avail Wallet #116 and #121", href: "https://github.com/AvailX/avail-wallet/pulls?q=is%3Apr+author%3AImmadominion" },
  { label: "Glo Wallet #462", href: "https://github.com/Glo-Foundation/glo-wallet/pull/462" },
];

export type Article = { title: string; href: string; date: string };
export const articles: Article[] = [
  { title: "Forget AWS S3: decentralized storage in Flutter with 12 lines of Dart", href: "https://medium.com/@immadominion/forget-aws-s3-decentralized-storage-in-flutter-with-12-lines-of-dart-8178d0b543d8", date: "Apr 2026" },
  { title: "Solana Pay and Blinks with Flutter", href: "https://medium.com/@immadominion/solana-pay-blinks-with-flutter-practical-api-integration-for-modern-apps-04647f85ace3", date: "Jul 2025" },
  { title: "Flutter on Solana: interacting with Solana programs", href: "https://medium.com/@immadominion/flutter-on-solana-a-complete-guide-to-interacting-with-solana-programs-using-flutter-1e3956c23ff4", date: "Jul 2025" },
  { title: "Building a Flutter todo app with Solana Anchor", href: "https://medium.com/@immadominion/building-a-flutter-todo-app-with-solana-anchor-a-complete-step-by-step-guide-a61d282d5b1b", date: "Jul 2025" },
  { title: "Building a Solana counter app in Flutter", href: "https://medium.com/@immadominion/building-and-interacting-with-a-solana-counter-app-in-flutter-bfbc6a52e287", date: "Jul 2025" },
  { title: "Minting NFTs on Solana with Flutter", href: "https://medium.com/@immadominion/minting-nfts-on-solana-with-flutter-why-and-how-with-real-code-and-metadata-d6560984e25a", date: "Jul 2025" },
  { title: "Solana token swaps in Flutter with the Jupiter API", href: "https://medium.com/@immadominion/solana-token-swaps-in-flutter-using-jupiter-api-1ccc7bec1436", date: "Jul 2025" },
  { title: "Get all Solana wallet tokens in Flutter", href: "https://medium.com/@immadominion/get-all-solana-wallet-tokens-in-flutter-4fdfb717f817", date: "Jul 2025" },
  { title: "How to connect a user's wallet in Flutter on Solana", href: "https://medium.com/@immadominion/how-to-connect-a-users-wallet-in-flutter-on-solana-f4d85f73d683", date: "Jul 2025" },
  { title: "Getting started with Solana on Dart and Flutter", href: "https://medium.com/@immadominion/getting-started-with-solana-on-dart-flutter-d9ade0e5e601", date: "Apr 2025" },
];

export type Video = { id: string; title: string; views: number; when: string };
export const videos: Video[] = [
  { id: "z8bbGEjMFcU", title: "Connecting wallets with Flutter on Solana", views: 130, when: "2025" },
  { id: "_-0w_ao0MAU", title: "Workshop day 1: connect your first wallet", views: 91, when: "2025" },
  { id: "aB0Qdys_jPU", title: "Bob, the BAXUS AI agent", views: 88, when: "2025" },
  { id: "5VQ5A9RlEPs", title: "Using Walrus storage with Flutter", views: 71, when: "2026" },
  { id: "g52rt7ELLjI", title: "Build a voting app with Flutter on Solana", views: 59, when: "2025" },
  { id: "-_4wB1kaThA", title: "Swap tokens in your Flutter app", views: 38, when: "2025" },
  { id: "uJWIe73eG4w", title: "The Gaffer, an AI football manager that remembers you", views: 28, when: "2026" },
  { id: "xqHc5U0V38Q", title: "Fully homomorphic encryption for everyday users", views: 22, when: "2026" },
];

export type Recognition = { what: string; detail: string; when: string; win?: boolean; href?: string };
export const recognition: Recognition[] = [
  { what: "1st place", detail: "TxODDS World Cup Hackathon Nigeria, with Chumbucket", when: "Jul 2026", win: true, href: "https://superteam.fun/earn/t/HeIsJoel0x" },
  { what: "1st place", detail: "BAXATHON for BAXUS, as a team", when: "Jun 2025", win: true, href: "https://superteamnigeria.substack.com/p/built-different-superteamngs-june" },
  { what: "1st place", detail: "Superteam UK: build a product on The Grid API", when: "Jul 2024", win: true, href: "https://superteam.fun/earn/t/HeIsJoel0x" },
  { what: "3rd place", detail: "LPAgent.io API sidetrack, with Aura", when: "May 2026", win: true },
  { what: "Grant", detail: "Walrus Foundation, for Dartus", when: "Dec 2025", href: "https://blog.walrus.xyz/getting-started-with-dartus/" },
  { what: "Grant", detail: "Superteam Nigeria, $5,000 for Hack4FUTO 5.0", when: "2026", href: "https://www.hack4futo.org" },
  { what: "Grant", detail: "Superteam, for the Flutter on Solana workshop", when: "2025" },
  { what: "#49 of 5,921", detail: "Superteam Earn all-time, $20,700 across 50 entries", when: "Oct 2026", href: "https://superteam.fun/earn/t/HeIsJoel0x" },
  { what: "Featured", detail: "Colosseum Codex, for coral_xyz and the Blueshift course", when: "2025 and 2026", href: "https://blog.colosseum.com/agent-hackathon-blueshift-mobile-arcium-alpha/" },
];

export type Talk = { title: string; where: string; when: string; href?: string };
export const talks: Talk[] = [
  { title: "Convener", where: "Hack4FUTO 5.0, Owerri", when: "Jul 2026", href: "https://www.hack4futo.org/about" },
  { title: "Invited speaker: mobile apps and the future of web3", where: "South East Blockchain and Games Week, Owerri", when: "Sep 2026" },
  { title: "Flutter developers and Solana Blinks", where: "FlutterBytes Conference, Lagos (with Daniel Asaboro)", when: "2025", href: "https://sessionize.com/flutterbytes-conference-2025/" },
  { title: "Flutter on Solana, a three-day workshop", where: "Online, with a Superteam grant", when: "May 2025", href: "https://www.youtube.com/watch?v=_-0w_ao0MAU" },
  { title: "Flutter Dissection", where: "GDSC FUTO", when: "Mar 2024" },
];

export type Job = { role: string; org: string; when: string; note: string };
export const jobs: Job[] = [
  { role: "Independent engineer", org: "Open source, Superteam, own products", when: "2024 to now", note: "SDKs, apps and courses, mostly on Solana. 13 packages on pub.dev." },
  { role: "Course author", org: "Blueshift", when: "2025 to 2026", note: "Wrote the Solana Mobile Mastery path." },
  { role: "Mobile frontend developer", org: "Avail Wallet", when: "May to Sep 2024", note: "Wallet features in React, TypeScript and Tauri, in a remote team." },
  { role: "Freelance Flutter developer", org: "Clients", when: "Nov 2023 to Feb 2024", note: "Production apps with Riverpod, Firebase messaging and clean architecture." },
  { role: "Flutter developer intern", org: "HNGx", when: "Aug to Oct 2023", note: "Shipped features in large team apps. 7 merged PRs." },
  { role: "Junior Flutter developer", org: "Starr Power Technologies", when: "Jun to Aug 2023", note: "Client apps on REST APIs. Most Active Worker of the Month, twice." },
];

export const education = {
  degree: "B.Tech, Software Engineering",
  school: "Federal University of Technology, Owerri",
  when: "2026",
};

export const stats: Stat[] = [
  { value: "13", label: "packages on pub.dev" },
  { value: "4,371", label: "downloads this year" },
  { value: "#49", label: "of 5,921 on Superteam Earn" },
  { value: "3", label: "first places" },
  { value: "5", label: "courses for Blueshift" },
];

export const skills = {
  languages: ["Dart", "TypeScript", "Rust", "Python", "Solidity", "Move"],
  mobile: ["Flutter", "React Native", "Expo", "Mobile Wallet Adapter", "Native Android"],
  web: ["Next.js", "React", "Three.js", "Node.js", "Fastify", "PostgreSQL", "Supabase"],
  chains: ["Solana", "Anchor", "Pinocchio", "Sui", "Walrus", "BNB Chain", "Flare", "Starknet"],
  craft: ["Interaction design", "Motion", "After Effects", "Remotion", "Brand"],
};

// Community and volunteering. Roles come from Dominion's own CV (2026);
// Hack4FUTO figures from the Superteam Nigeria tranche update and his CV.
export type Role = { title: string; org: string; when: string; note?: string; href?: string };
export const community: Role[] = [
  { title: "Convener", org: "Hack4FUTO 5.0", when: "2026", note: "2,400+ registrations, 600+ attendees, 100+ teams screened", href: "/work/hack4futo" },
  { title: "Ambassador", org: "Solana AllStars, Nigeria", when: "", note: "Bringing Solana to student developers" },
  { title: "Mobile lead", org: "Google Developer Student Clubs, FUTO", when: "2023 to 2026", note: "Co-lead in 2023, lead from 2024" },
  { title: "Web Master, SIGHT core team", org: "IEEE Student Branch, FUTO", when: "", note: "Executive member" },
  { title: "Student Ambassador", org: "Microsoft Learn", when: "2023" },
  { title: "Workshop host", org: "Flutter on Solana, with a Superteam grant", when: "2025", href: "https://www.youtube.com/watch?v=_-0w_ao0MAU" },
  { title: "Member", org: "Superteam Nigeria", when: "2024 to now", href: "https://superteam.fun/earn/t/HeIsJoel0x" },
];

export const hack4futo = {
  summary:
    "My university's student hackathon. As convener I raised the sponsorship, ran the programme, and built the website, the live audience vote and an open treasury.",
  sponsors: "Superteam Nigeria, Cleva, Poof and the Imo State Ministry of Digital Economy",
};

export type Mention = { title: string; source: string; when: string; href: string };
export const mentions: Mention[] = [
  { title: "Getting started with Dartus", source: "Walrus Foundation", when: "Apr 2026", href: "https://blog.walrus.xyz/getting-started-with-dartus/" },
  { title: "Member wins: a Flutter skill for Solana Mobile", source: "Superteam Nigeria", when: "May 2026", href: "https://superteamnigeria.substack.com/p/superteamng-april-recap" },
  { title: "A new Solana Mobile course on Blueshift", source: "Superteam Nigeria", when: "Mar 2026", href: "https://superteamnigeria.substack.com/p/superteamng-february-recap" },
  { title: "Blueshift's Solana Mobile course", source: "Colosseum Codex", when: "Feb 2026", href: "https://blog.colosseum.com/agent-hackathon-blueshift-mobile-arcium-alpha/" },
  { title: "From 1 to 100: SuperteamNG's 2025 impact report", source: "Superteam Nigeria", when: "Dec 2025", href: "https://klausofnifes.substack.com/p/from-1-to-100-superteamngs-2025-impact" },
  { title: "coral_xyz, Anchor for Dart", source: "Colosseum Codex", when: "Jul 2025", href: "https://blog.colosseum.com/colosseum-codex-block-assembly-marketplace-sanctum-gateway-snipost/" },
  { title: "June wins: BAXATHON winners", source: "Superteam Nigeria", when: "Jul 2025", href: "https://superteamnigeria.substack.com/p/built-different-superteamngs-june" },
  { title: "The Grid bounty, first place", source: "Superteam UK", when: "Sep 2024", href: "https://superteamuk.substack.com/p/superteamuk-monthly-recap-august-b98" },
];

// Short excerpts from public posts, preserving the authors' wording.
// Leo, Alex and Dave responded to the Nous application in October 2026.
// Anmol's post is from October 2025. Roles reflect their profiles when checked.
export type Vouch = { quote: string; name: string; role: string; when: string; href: string };
export const vouches: Vouch[] = [
  { quote: "Me and the @blueshift team can vouch for Joel 🤝🏻", name: "Leo", role: "Member of Technical Staff, Blueshift", when: "Oct 2026", href: "https://x.com/L0STE_/status/2105567848622088481" },
  { quote: "@HeIsJoel0x is the absolute flutter goat", name: "Anmol", role: "Engineer, Jupiter", when: "Oct 2025", href: "https://x.com/0xanmol/status/1981000566924009683" },
  { quote: "Joel is a solid mobile dev in our community", name: "Alex", role: "Developer Activities Facilitator, Superteam Nigeria", when: "Oct 2026", href: "https://x.com/alexfavour/status/2105571155575026004" },
  { quote: "He's the best candidate!!", name: "Dave", role: "Frontend and mobile engineer, Nectar Finance", when: "Oct 2026", href: "https://x.com/itsdavetech/status/2105509571485663564" },
];

export const nousPost = {
  href: "https://x.com/HeIsJoel0x/status/2105495895047344235",
  views: "3,200+",
};

// Plain-language summaries of the role requirements, paired with specific work.
// These are not quotations from the job posts.
export type Fit = { ask: string; proof: string; links?: Link[] };
export const fitMobile: Fit[] = [
  {
    ask: "Production iOS or Android apps",
    proof: "I built Chumbucket's Flutter app and TypeScript backend. Its Android release is public. I also published Factor Mobile on the App Store with a collaborator who wrote most of its code.",
    links: [
      { label: "Chumbucket", href: "/work/chumbucket" },
      { label: "Android release", href: "https://github.com/Immadominion/Chum-Bucket/releases/latest" },
      { label: "Factor Mobile", href: "https://apps.apple.com/us/app/factor-mobile/id6753987530" },
    ],
  },
  {
    ask: "Care for how a phone app feels",
    proof: "Chumbucket's friend picker shows the care I bring to a small screen. The sheet opens, the list moves, and the selected friend comes into focus. The film shows the real Flutter interface running in an iPhone simulator.",
    links: [{ label: "Watch the friend picker", href: "/work/chumbucket" }],
  },
  {
    ask: "Native code and React Native",
    proof: "Flutter is my strongest mobile stack. I wrote Blueshift's five-course Solana Mobile path with React Native and Expo examples. I also fixed Android configuration in Espresso Cash's mobile wallet library. That fix was merged. I am still building depth in Swift and Kotlin.",
    links: [
      { label: "Blueshift course", href: "https://learn.blueshift.gg/en/paths/solana-mobile-mastery" },
      { label: "Merged Android fix", href: "https://github.com/espresso-cash/espresso-cash-public/pull/1731" },
    ],
  },
  {
    ask: "The server behind the app",
    proof: "Chumbucket's backend uses TypeScript, Supabase and Helius. Trimmy's Fastify API and PostgreSQL database serve both its Flutter app and web app. I can follow a feature from the screen to the stored data.",
    links: [
      { label: "Chumbucket backend", href: "https://github.com/Immadominion/chumbucket-arena" },
      { label: "Trimmy", href: "/work/trimmy" },
    ],
  },
  {
    ask: "App releases and developer tools",
    proof: "Alongside publishing Factor Mobile, I wrote Blueshift's lessons on publishing to the Solana dApp Store. I maintain 13 Dart packages, including coral_xyz for Solana programs and Dartus for Walrus storage.",
    links: [
      { label: "coral_xyz", href: "/work/coral-xyz" },
      { label: "Dartus", href: "/work/dartus" },
    ],
  },
  {
    ask: "Interest in AI agents",
    proof: "I built AiKi, where people give AI agents work, a spending limit and rules. I also built an MCP connector that lets me record Hack4FUTO expenses from Claude. I use coding agents in my own work and build tools for them.",
    links: [
      { label: "AiKi", href: "/work/aiki" },
      { label: "Hack4FUTO", href: "/work/hack4futo" },
    ],
  },
];

export const fitProduct: Fit[] = [
  {
    ask: "Build a whole product",
    proof: "I built most of AiKi: the Next.js screens, TypeScript API, database and service that stores proof of completed work. I authored 288 of its 291 commits. Each job has a budget, rules and a receipt.",
    links: [
      { label: "AiKi case study", href: "/work/aiki" },
      { label: "Source code", href: "https://github.com/Immadominion/AiKi" },
    ],
  },
  {
    ask: "Web, mobile and desktop experience",
    proof: "Trimmy's phone and web apps share one API. At Avail Wallet, I contributed wallet features in React, TypeScript and Tauri; two pull requests were merged. My strongest work is on web and mobile.",
    links: [
      { label: "Trimmy", href: "/work/trimmy" },
      { label: "Avail Wallet contributions", href: "https://github.com/AvailX/avail-wallet/pulls?q=is%3Apr+is%3Amerged+author%3AImmadominion" },
    ],
  },
  {
    ask: "TypeScript, Node.js, React, Python and Rust",
    proof: "I use TypeScript, Node.js and React across AiKi and my web work. I wrote Python for Aura's data pipeline and Hack4FUTO's treasury, and Rust for Solana programs and the stx transaction tool. TypeScript and Dart are my deepest languages.",
    links: [{ label: "Full project index", href: "/archive" }],
  },
  {
    ask: "Good product decisions and teamwork",
    proof: "In Trimmy, practice trading and real money use different colours throughout the app. On Plinth, I built the brand, website and billing dashboard. My co-founder Ubadineke Prince built the billing engine.",
    links: [
      { label: "Trimmy", href: "/work/trimmy" },
      { label: "Plinth", href: "/work/plinth" },
    ],
  },
  {
    ask: "AI agents and tool calling",
    proof: "AiKi has an MCP server so agents can find jobs and report their work. Hack4FUTO's treasury connector records expenses from Claude. I also write skill files that help coding agents build Flutter apps on Solana.",
    links: [
      { label: "AiKi", href: "/work/aiki" },
      { label: "Hack4FUTO", href: "/work/hack4futo" },
    ],
  },
  {
    ask: "Open-source work others can inspect",
    proof: "I maintain 13 Dart packages. They had 4,371 downloads in the 52 weeks before 1 October 2026. My work has also been merged into Blueshift, Espresso Cash, Celo, Reown and Avail Wallet.",
    links: [
      { label: "Packages and merged work", href: "/#open-source" },
      { label: "GitHub", href: "https://github.com/Immadominion" },
    ],
  },
];

export const gaps: { title: string; detail: string }[] = [
  { title: "Years of experience", detail: "My professional work began in 2023. That is below your five-year Mobile and seven-year Product requirements. The projects and linked contributions above show what I have built so far." },
  { title: "Native mobile depth", detail: "My strongest mobile work is Flutter, with React Native and Expo teaching work. I do not yet have the depth in Swift or Kotlin that the Mobile role asks for." },
  { title: "Hermes Agent", detail: "I have not used or contributed to Hermes Agent yet. My relevant experience comes from building AiKi and tools for coding agents." },
];

export const firstMonth: { when: string; what: string }[] = [
  { when: "Learn", what: "Run Hermes Agent, learn the codebase, and follow a task across desktop and phone. Check what happens on a weak connection or after an interruption." },
  { when: "Choose", what: "Agree on one small improvement with the team, based on what users need and what I find." },
  { when: "Build", what: "Implement it from the API to the screen, add tests, and review it with the team before release." },
];
