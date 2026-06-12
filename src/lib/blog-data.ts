export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; heading?: string; items: string[] }
  | { type: "callout"; text: string };

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured: boolean;
  color: string;
  content: ContentBlock[];
}

export const posts: BlogPost[] = [
  {
    slug: "saas-outbound-machine-20-demos-per-month",
    category: "SaaS Lead Generation",
    title: "How to Build a SaaS Outbound Machine That Books 20+ Demos Per Month",
    excerpt:
      "Most SaaS companies rely on inbound alone. Here's how to build an outbound system that consistently generates qualified product demos without burning out your SDRs.",
    readTime: "8 min read",
    date: "28 May 2026",
    featured: true,
    color: "#2563EB",
    content: [
      {
        type: "paragraph",
        text: "Most SaaS companies treat outbound as an afterthought. They post on LinkedIn, run a few sporadic email campaigns, and then wonder why inbound is the only thing moving the needle. The truth is, a well-built outbound system can reliably generate 20 or more qualified demo requests every month — but it requires treating outbound like a product, not a task.",
      },
      {
        type: "heading",
        text: "Why most SaaS outbound underperforms",
      },
      {
        type: "paragraph",
        text: "The failure usually happens at the ICP stage. SaaS teams define their ideal customer in broad strokes — 'mid-market companies' or 'operations teams' — and then blast generic messages to a list of 2,000 contacts. The response rate is 1%, the meetings are poor quality, and the SDRs lose motivation quickly.",
      },
      {
        type: "heading",
        text: "Step 1: Define your ICP with surgical precision",
      },
      {
        type: "paragraph",
        text: "Your ICP should answer these six questions: What industry vertical do they operate in? What is their headcount range? What is their revenue band? Who is the economic buyer? What problem triggers a buying conversation? What does bad look like — who should you exclude?",
      },
      {
        type: "list",
        heading: "Attributes that sharpen your ICP for SaaS outbound:",
        items: [
          "Tech stack indicators (tools they use that signal your buyers)",
          "Hiring signals (job posts for roles that use your product category)",
          "Funding stage and growth trajectory",
          "Existing tooling gaps identified through job descriptions",
          "Revenue band and employee count at the department level",
        ],
      },
      {
        type: "heading",
        text: "Step 2: Build a multi-touch sequence that earns a reply",
      },
      {
        type: "paragraph",
        text: "A single cold email gets ignored. A 6-8 touch sequence across email and LinkedIn, spaced intelligently over 21 days, creates familiarity. The sequence should follow a clear arc: introduce the problem, establish credibility, offer evidence, make a specific ask, and — only after all else fails — let them go gracefully.",
      },
      {
        type: "callout",
        text: "The goal of each touch isn't to close a deal — it's to earn enough attention to get the next one read. Write for one person, not a segment.",
      },
      {
        type: "heading",
        text: "Step 3: LinkedIn outreach that actually books demos",
      },
      {
        type: "paragraph",
        text: "LinkedIn works best as a warm-up channel, not a primary one. Connect with targets before emailing them. Engage with their content. Reference something specific in your connection request. The warm connection dramatically improves email open rates when you follow up within 48 hours of connecting.",
      },
      {
        type: "heading",
        text: "The metrics that tell you it's working",
      },
      {
        type: "list",
        items: [
          "Open rate above 45% — if lower, fix subject lines or deliverability",
          "Reply rate above 5% — if lower, fix messaging or ICP match",
          "Meeting rate above 1% of contacts touched — track from first email to booked demo",
          "Show rate above 80% — if lower, qualification is too loose",
          "Demo-to-close rate above 25% — if lower, lead quality needs review",
        ],
      },
      {
        type: "paragraph",
        text: "Building an outbound machine takes 60-90 days to reach steady state. The first 30 days are about testing ICP hypotheses. Days 31-60 are about fixing the sequence based on reply data. By day 90, you should know your unit economics and be scaling what works.",
      },
    ],
  },
  {
    slug: "construction-companies-win-commercial-contracts-2026",
    category: "Construction Marketing",
    title: "7 Ways Construction Companies Can Win More Commercial Contracts in 2026",
    excerpt:
      "The commercial construction market is competitive. These seven outreach strategies will help you reach procurement managers and property developers at the right moment.",
    readTime: "6 min read",
    date: "21 May 2026",
    featured: true,
    color: "#10B981",
    content: [
      {
        type: "paragraph",
        text: "Commercial construction has always been relationship-driven — but the way those relationships are built has changed. In 2026, procurement teams are oversubscribed, developer pipelines are tighter, and the contractors winning the best work are the ones who show up before a tender is even issued. Here are seven proven strategies for getting there.",
      },
      {
        type: "heading",
        text: "1. Target procurement managers directly, not general inboxes",
      },
      {
        type: "paragraph",
        text: "Generic emails to 'info@' or 'enquiries@' are dead. Procurement managers at property developers and asset management firms have specific names, roles, and LinkedIn profiles. Use Sales Navigator or targeted research to find the person who actually controls the contractor shortlist — then contact them directly with a relevant, credible approach.",
      },
      {
        type: "heading",
        text: "2. Lead with portfolio evidence, not price",
      },
      {
        type: "paragraph",
        text: "In your first outreach, don't mention price. Lead with a case study or project outcome that closely mirrors the type of work your target is likely to commission. Procurement teams shortlist contractors who demonstrate they've done it before, not contractors who claim they can. Show specific project types, sectors, and scale.",
      },
      {
        type: "heading",
        text: "3. Follow planning applications in your target region",
      },
      {
        type: "paragraph",
        text: "Planning portal data is publicly available and updated weekly. Every approved planning application represents a future project. By monitoring these approvals in your target geography, you can identify developers before they go to tender — sometimes 12-18 months ahead. This gives you time to build the relationship before competitors are even aware of the opportunity.",
      },
      {
        type: "heading",
        text: "4. Time your outreach to the project development cycle",
      },
      {
        type: "paragraph",
        text: "Reaching out during planning is ideal. Reaching out during procurement is late. The best contractors are introduced to developers at RIBA Stages 0-2, not Stage 4. Understanding where a project sits in the development lifecycle helps you approach with relevant value at the right moment rather than competing on price when the brief is already fixed.",
      },
      {
        type: "heading",
        text: "5. Build relationships before opportunities arise",
      },
      {
        type: "paragraph",
        text: "Most of the best commercial construction work never goes to open tender. It's awarded to contractors who are already known and trusted. Consistent, low-pressure relationship-building with 20-30 target developers — not 2,000 mass contacts — generates far better results than broad campaigns. One coffee meeting with the right person is worth 100 cold emails.",
      },
      {
        type: "heading",
        text: "6. Leverage framework agreements and approved supplier lists",
      },
      {
        type: "paragraph",
        text: "Many large developers, housing associations, and local authorities procure through frameworks. Getting onto an approved supplier list requires effort upfront but unlocks a stream of direct opportunities without open competition. Identify which frameworks your ideal clients use and invest in the application process — it pays dividends over multiple years.",
      },
      {
        type: "heading",
        text: "7. Use LinkedIn to identify developers actively building their team",
      },
      {
        type: "paragraph",
        text: "When a developer or asset manager starts hiring project managers, quantity surveyors, or site supervisors, it's a strong signal that active development is underway. Monitoring this hiring activity on LinkedIn gives you a buying signal you can act on quickly with a relevant, well-timed outreach.",
      },
      {
        type: "callout",
        text: "The companies winning the most commercial work in 2026 are not the ones with the best brochures. They're the ones who show up first, bring evidence, and build relationships before the brief exists.",
      },
    ],
  },
  {
    slug: "modern-lead-qualification-framework-beyond-bant",
    category: "Lead Qualification",
    title: "BANT Is Dead — Use This Modern Lead Qualification Framework Instead",
    excerpt:
      "BANT served its purpose, but today's B2B buyers are more complex. Here's the qualification model we use to filter out time-wasters and identify genuine opportunities.",
    readTime: "7 min read",
    date: "14 May 2026",
    featured: false,
    color: "#F59E0B",
    content: [
      {
        type: "paragraph",
        text: "BANT — Budget, Authority, Need, Timing — was developed by IBM in the 1960s. It worked in an era of simpler sales cycles and slower-moving procurement. Today, B2B buying committees have an average of 6-10 stakeholders, budgets are fluid, and 'timing' is often dictated by internal politics rather than stated need. Qualifying against BANT alone misses too much.",
      },
      {
        type: "heading",
        text: "What's wrong with BANT in practice",
      },
      {
        type: "paragraph",
        text: "The biggest problem with BANT is that it's retrospective. SDRs ask about budget after a prospect has already engaged — but the most valuable buyers often haven't allocated budget yet because they haven't yet decided they have a problem worth solving. Filtering these prospects out means losing your best long-term opportunities.",
      },
      {
        type: "heading",
        text: "The modern qualification reality",
      },
      {
        type: "paragraph",
        text: "Modern B2B buying is consensus-driven, research-heavy, and triggered by business events rather than sales cycles. The signals that matter now include organisational change (new leadership, restructuring), strategic triggers (funding rounds, expansion), operational pain (visible in job postings, press, or LinkedIn activity), and competitive displacement (known problems with current providers).",
      },
      {
        type: "heading",
        text: "The framework SAHR MEDIA uses",
      },
      {
        type: "list",
        heading: "Our qualification criteria maps six dimensions:",
        items: [
          "Problem fit — do they have the problem our client solves, and is it actively felt?",
          "Stakeholder access — can we reach the economic buyer, not just a gatekeeper?",
          "Urgency signal — is there a trigger event driving action (funding, growth, pain)?",
          "Decision process — do we understand how they buy and who approves?",
          "Budget proximity — is budget confirmed, likely, or speculative?",
          "Exclusion criteria — does anything disqualify them (competitor lock-in, wrong size, wrong geography)?",
        ],
      },
      {
        type: "callout",
        text: "A lead with a clear problem, accessible stakeholders, and a known trigger event is more valuable than one with confirmed budget but no urgency. Qualification should surface the former, not just the latter.",
      },
      {
        type: "heading",
        text: "How to implement this in practice",
      },
      {
        type: "paragraph",
        text: "Qualification shouldn't happen in one conversation. It happens across multiple touchpoints — an opening email that surfaces problem awareness, a discovery call that probes urgency and process, and reference checks that validate stakeholder access. Each interaction should either advance the qualification picture or eliminate the prospect cleanly.",
      },
      {
        type: "heading",
        text: "What proper qualification looks like at delivery",
      },
      {
        type: "paragraph",
        text: "When a lead is delivered to a sales team properly qualified, it comes with: a summary of the business problem and why it's urgent, the name and title of the decision-maker engaged, an indication of budget proximity, knowledge of the evaluation process, and any known objections or competitive landscape. That's the information a sales rep needs to walk into a first meeting and close.",
      },
    ],
  },
  {
    slug: "cold-email-sequences-that-get-replies-2026",
    category: "Appointment Setting",
    title: "Cold Email Sequences That Actually Get Replies in 2026",
    excerpt:
      "Spam filters are smarter. Inboxes are fuller. Here's how to write cold email sequences that stand out, get opened, and generate genuine responses.",
    readTime: "10 min read",
    date: "7 May 2026",
    featured: false,
    color: "#8B5CF6",
    content: [
      {
        type: "paragraph",
        text: "Cold email isn't dying — bad cold email is dying. The teams that treat their outreach like marketing copy are struggling. The teams that write like a trusted colleague are booking more meetings than ever. The difference isn't technology; it's thinking.",
      },
      {
        type: "heading",
        text: "The fundamentals haven't changed — the execution has",
      },
      {
        type: "paragraph",
        text: "Every effective cold email still does the same three things: it establishes why you're writing to this specific person, it surfaces a problem they're likely experiencing, and it makes a single, specific, low-friction ask. What's changed is the bar for personalisation, the tolerance for generic messaging, and the sophistication of spam filters that penalise bulk-sending behaviour.",
      },
      {
        type: "heading",
        text: "Subject lines: the only job is to earn the open",
      },
      {
        type: "list",
        heading: "Subject line formats that consistently outperform:",
        items: [
          "Question using their company name or context: 'Quick question about [Company]'s SDR team'",
          "Specificity signals: '[Competitor] to [Company]: a quick thought'",
          "Relevance to a recent trigger: 'Re: [Company]'s expansion into [City]'",
          "Honest curiosity: 'Introductions — outbound for [industry] teams'",
        ],
      },
      {
        type: "heading",
        text: "Email 1: The opener",
      },
      {
        type: "paragraph",
        text: "Your opening email should be under 100 words. Identify one specific, relevant reason you're reaching out (their industry, a job posting, a recent news item). State the problem you solve in one sentence. Include a single piece of social proof — a named client or a specific outcome. Make your ask explicit: a 20-minute call, a specific question, or permission to share something relevant.",
      },
      {
        type: "heading",
        text: "Email 2: The value add (Day 3-4)",
      },
      {
        type: "paragraph",
        text: "Don't follow up with 'just checking in'. That's a waste of both parties' time. Instead, add value: share a relevant case study, a useful insight specific to their industry, or a short question that creates genuine dialogue. The goal of email 2 is to demonstrate that this is a relationship worth having, not just another pitch.",
      },
      {
        type: "heading",
        text: "Email 3: The perspective shift (Day 8-10)",
      },
      {
        type: "paragraph",
        text: "By email 3, take a different angle. If your first two emails led with outcomes, lead now with a story. Reference a challenge a similar company faced and how they solved it. This reframes the conversation from 'sales pitch' to 'relevant experience'.",
      },
      {
        type: "callout",
        text: "Silence is data. If someone hasn't replied after 5 touches, they're probably not a fit right now — not forever. Keep the door open and revisit in 90 days with a fresh signal.",
      },
      {
        type: "heading",
        text: "Deliverability: the invisible ceiling",
      },
      {
        type: "list",
        items: [
          "Use a separate sending domain for outbound (not your primary domain)",
          "Warm up new domains over 4-6 weeks before volume sending",
          "Keep daily sending volume under 50 per inbox until reputation is established",
          "Maintain bounce rates under 2% — clean lists regularly",
          "Avoid spam trigger words in subject lines: free, guarantee, urgent",
        ],
      },
    ],
  },
  {
    slug: "linkedin-connection-requests-that-convert",
    category: "Sales Development",
    title: "How to Write LinkedIn Connection Requests That Convert at 40%+",
    excerpt:
      "Most LinkedIn requests get ignored because they're generic. This breakdown shows you the exact message structure we use to achieve consistently high acceptance rates.",
    readTime: "5 min read",
    date: "30 Apr 2026",
    featured: false,
    color: "#EC4899",
    content: [
      {
        type: "paragraph",
        text: "The default LinkedIn connection request says 'I'd like to connect with you on LinkedIn.' It gets accepted about 15% of the time by strangers. A well-crafted note, sent to the right person at the right time, converts at 40% or higher. The difference is specificity, relevance, and the absence of a sales pitch.",
      },
      {
        type: "heading",
        text: "Why most requests fail",
      },
      {
        type: "paragraph",
        text: "Most connection requests fail for one of three reasons: they contain an immediate pitch, they're generic with no reference to the recipient, or they ask for something before establishing any reason to give it. Decision-makers review dozens of connection requests weekly. Anything that smells like a sales funnel gets ignored.",
      },
      {
        type: "heading",
        text: "The anatomy of a high-converting request",
      },
      {
        type: "list",
        items: [
          "Specific reference — mention something real from their profile, content, or company",
          "Shared context — a mutual connection, industry, challenge, or event",
          "Clear reason for reaching out — one sentence, no pitch",
          "No ask — the connection itself is the ask. Save the conversation for after.",
        ],
      },
      {
        type: "callout",
        text: "Example: 'Hi [Name], saw your post on construction procurement last week — the point about framework timing was spot on. We work with a few contractors in [region] and I thought it would be good to connect. No pitch, just thought it useful to be in each other's networks.'",
      },
      {
        type: "heading",
        text: "Research before you reach out",
      },
      {
        type: "paragraph",
        text: "Spend 2-3 minutes on each prospect before sending a connection request. Look for: a recent post or comment you can genuinely reference, a job change or promotion in the last 90 days, a shared connection you could mention, or a company announcement relevant to your value proposition. Any one of these gives you a hook.",
      },
      {
        type: "heading",
        text: "What to do after they connect",
      },
      {
        type: "paragraph",
        text: "Wait 24 hours before sending a follow-up message. Thank them briefly for connecting, then share something of value — an insight, a resource, a relevant question — before any commercial ask. The connection is not the conversion; it's the start of a conversation. Treat it accordingly.",
      },
      {
        type: "heading",
        text: "Scaling personalisation without losing quality",
      },
      {
        type: "paragraph",
        text: "Personalisation at scale means creating message templates for each specific buyer persona, trigger event, or industry cluster — not one generic message sent to thousands. For SaaS, you might have separate templates for VP Sales, CTO, and Head of RevOps. For construction, separate messages for procurement managers, project directors, and asset managers. Personalise the variable fields, keep the structure consistent.",
      },
    ],
  },
  {
    slug: "hidden-cost-of-unqualified-leads",
    category: "B2B Growth",
    title: "The Hidden Cost of Unqualified Leads (And How to Stop Paying It)",
    excerpt:
      "Unqualified leads don't just waste time — they demoralize your sales team and skew your pipeline data. Here's the financial case for investing in lead qualification.",
    readTime: "9 min read",
    date: "22 Apr 2026",
    featured: false,
    color: "#0EA5E9",
    content: [
      {
        type: "paragraph",
        text: "When a business talks about lead generation costs, they usually mean the cost per lead. But this misses the most significant cost entirely: what happens after the lead is generated. A poorly qualified lead doesn't just fail to convert — it consumes time, distorts pipeline data, and erodes the confidence of the sales team that has to chase it.",
      },
      {
        type: "heading",
        text: "The real cost breakdown",
      },
      {
        type: "paragraph",
        text: "Consider a mid-market SaaS company with 5 SDRs each earning £45,000 per year. Each SDR touches 60-80 leads per month. If 50% of those leads are unqualified — wrong company size, no buying intent, wrong decision-maker — that's 150-200 SDR-hours wasted every month chasing dead ends. At a blended cost of approximately £25/hour, that's £3,750-£5,000 in direct time cost per month. Before you count the management overhead, the reporting noise, or the opportunity cost of not chasing real prospects.",
      },
      {
        type: "heading",
        text: "The morale cost is invisible but real",
      },
      {
        type: "paragraph",
        text: "High-performing sales reps leave for one of two reasons: they feel they can't succeed, or they feel they're wasting their talent. An unqualified lead pipeline creates both conditions simultaneously. When SDRs make 30 calls and get 27 'not interested' replies, they adjust their expectations downwards — and that pessimism starts to infect their approach to the other 3. The right reps on the right leads will outperform the best reps on poor leads every time.",
      },
      {
        type: "callout",
        text: "Pipeline accuracy compounds. If 40% of your active pipeline is leads that will never close, your revenue forecasting is structurally wrong. Leadership makes hiring, spending, and strategic decisions on bad data.",
      },
      {
        type: "heading",
        text: "How to calculate your current qualification waste",
      },
      {
        type: "list",
        items: [
          "Track the number of leads that reach meeting stage but fail to progress after two calls",
          "Identify the lead source and qualification stage of deals lost in the last 90 days",
          "Calculate the average SDR hours per lead from first contact to disqualification",
          "Multiply by your blended SDR cost and compare to the cost of upstream qualification",
        ],
      },
      {
        type: "heading",
        text: "What proper qualification actually costs",
      },
      {
        type: "paragraph",
        text: "Proper lead qualification — whether done in-house or via a specialist — typically costs £30-£80 per qualified lead depending on segment complexity and verification depth. For most SaaS and construction companies, this is 3-5x less than the internal cost of chasing an unqualified lead through a full sales cycle. The economics are clear: pay to qualify upfront, or pay three times as much to discover the problem at the back end.",
      },
    ],
  },
  {
    slug: "saas-demo-to-close-rate-fix",
    category: "SaaS Lead Generation",
    title: "Why Your SaaS Demo-to-Close Rate Is Low (And How to Fix It)",
    excerpt:
      "A low demo-to-close rate is often a lead quality problem, not a sales problem. Here's how to diagnose the issue and plug the leak in your pipeline.",
    readTime: "7 min read",
    date: "15 Apr 2026",
    featured: false,
    color: "#2563EB",
    content: [
      {
        type: "paragraph",
        text: "A healthy SaaS demo-to-close rate sits between 25% and 35% for a well-qualified pipeline. If yours is below 15%, the instinct is to improve the demo itself — better slides, better storytelling, more objection handling training. But in most cases, the problem is upstream. Poor-quality demos don't close because they should never have been booked.",
      },
      {
        type: "heading",
        text: "Demo-to-close benchmarks by segment",
      },
      {
        type: "list",
        items: [
          "SMB (companies under 50 employees): 30-40% with a tight ICP",
          "Mid-market (50-500 employees): 20-30% with good qualification",
          "Enterprise (500+ employees): 10-20% due to longer cycles and committee buying",
          "Below 15% at any segment: likely a lead quality or ICP alignment problem",
        ],
      },
      {
        type: "heading",
        text: "5 signs it's a lead quality problem",
      },
      {
        type: "list",
        items: [
          "Prospects consistently say they're 'just exploring' with no clear trigger",
          "The demo attendee has no budget authority or approval influence",
          "Company size or tech stack doesn't match your target ICP",
          "Time-to-close keeps extending — deals that should close in 30 days take 90+",
          "Demos frequently attract competitors, researchers, or consultants",
        ],
      },
      {
        type: "heading",
        text: "5 signs it's a sales execution problem",
      },
      {
        type: "list",
        items: [
          "Demos run over time and feel like feature tours, not business conversations",
          "Discovery happens during the demo rather than before it",
          "Objections are met with more features, not with questions",
          "There is no clear next step agreed by the end of the call",
          "Follow-up is inconsistent or lacks specificity",
        ],
      },
      {
        type: "callout",
        text: "The fastest way to improve demo quality is to improve the qualification before booking. A 30-minute pre-demo qualification call that confirms ICP fit, stakeholder access, and trigger event will raise your show rate, your engagement level, and your close rate simultaneously.",
      },
      {
        type: "heading",
        text: "Fixing lead quality upstream",
      },
      {
        type: "paragraph",
        text: "If lead quality is the problem, the fix is adding a qualification step before any demo is booked. This can be a short discovery call, a qualification form with minimum threshold criteria, or a human review process that scores each lead against your ICP before it reaches the calendar. The goal is simple: every demo should be with a person who has a genuine problem, real authority, and active interest in solving it.",
      },
    ],
  },
  {
    slug: "linkedin-find-property-developers-tendering",
    category: "Construction Marketing",
    title: "How to Use LinkedIn to Find Property Developers Actively Tendering",
    excerpt:
      "Property developers and procurement managers are active on LinkedIn — but you need to know where to look. This guide shows you the exact search and outreach process.",
    readTime: "6 min read",
    date: "8 Apr 2026",
    featured: false,
    color: "#10B981",
    content: [
      {
        type: "paragraph",
        text: "LinkedIn is the most underused prospecting tool in the construction industry. Most contractors use it passively — posting project photos, accepting connections, occasionally browsing. But with the right search methodology, LinkedIn Sales Navigator can surface property developers who are actively planning, funding, or commissioning work right now.",
      },
      {
        type: "heading",
        text: "Setting up your Sales Navigator filters",
      },
      {
        type: "list",
        items: [
          "Industry: Real Estate, Construction, Architecture — filter by company type",
          "Company size: target 10-200 employees for mid-tier developers; 200+ for institutional funds",
          "Seniority level: Director, VP, C-Suite for economic buyers; Manager for procurement contacts",
          "Job title keywords: Development Director, Project Director, Procurement Manager, Asset Manager",
          "Geography: your target region or national if you work nationally",
        ],
      },
      {
        type: "heading",
        text: "Reading the buying signals",
      },
      {
        type: "paragraph",
        text: "The most valuable signals on LinkedIn come from activity, not just profiles. A developer who is posting about a planning approval is 6-18 months away from a tender. One who is hiring a project manager or quantity surveyor is 3-9 months away. One who just posted about a site acquisition is 12-24 months out. Each signal maps to a different type of outreach and a different conversation.",
      },
      {
        type: "heading",
        text: "Building your target list methodically",
      },
      {
        type: "paragraph",
        text: "Don't try to reach 500 developers at once. Build a focused list of 40-60 target companies in your sector and geography. For each company, identify 2-3 contacts at different seniority levels — the economic buyer, the procurement contact, and the operational contact. This gives you multiple entry points and better resilience if one contact doesn't respond.",
      },
      {
        type: "callout",
        text: "Quality beats quantity in construction outreach. One meaningful conversation with the right developer is worth more than 100 connection requests to the wrong contacts.",
      },
      {
        type: "heading",
        text: "Timing your outreach to project stages",
      },
      {
        type: "paragraph",
        text: "The ideal time to introduce your business to a developer is before they issue a brief. At planning stage, you're a helpful contact who knows the sector. At RIBA Stage 2, you're a contractor worth considering. At Stage 4 (technical design), you're a commodity competing on price. The earlier you appear, the more influence you have over whether you're on the shortlist.",
      },
      {
        type: "heading",
        text: "What to say when you reach out",
      },
      {
        type: "paragraph",
        text: "Reference something specific: the planning approval you saw on the portal, the post they made about a new site, or the recent hire they made. Lead with project experience directly relevant to their pipeline. Keep the ask small: a brief introduction call to share what you've built in their sector, not a full pitch meeting. The goal is to be known before the brief exists.",
      },
    ],
  },
  {
    slug: "ai-prospecting-b2b-sales-2026",
    category: "B2B Growth",
    title: "How AI Is Reshaping B2B Prospecting in 2026 — And What It Means for Your SDR Team",
    excerpt:
      "AI tools now touch every stage of the sales funnel. Here's an honest look at what they can do, what they can't replace, and how leading SDR teams are using both.",
    readTime: "8 min read",
    date: "11 Jun 2026",
    featured: true,
    color: "#6366F1",
    content: [
      {
        type: "paragraph",
        text: "Sixty-three percent of sales leaders now say AI makes it easier for them to compete. That figure would have seemed optimistic three years ago. Today, if your SDR team is not using AI to research prospects, surface intent signals, and personalise outreach at scale, you are at a structural disadvantage to the teams that are. But the picture is more nuanced than 'adopt AI or fall behind'. What matters is understanding exactly where AI creates leverage — and where overreliance on it quietly kills reply rates.",
      },
      {
        type: "heading",
        text: "What AI has genuinely changed for prospecting",
      },
      {
        type: "paragraph",
        text: "The highest-leverage AI use cases in prospecting are the ones that automate the time-consuming but low-judgement tasks: scraping company data, identifying technographic signals, drafting first-pass email variations, and flagging trigger events like leadership changes or funding rounds. These tasks used to eat 60-70% of an SDR's day. With AI tooling, that proportion can be compressed to under 30%, freeing meaningful time for the work that still requires a human — research, personalisation, relationship-building, and qualification judgement.",
      },
      {
        type: "heading",
        text: "The three most effective AI use cases for SDR teams right now",
      },
      {
        type: "list",
        items: [
          "Signal aggregation — pulling intent data from job postings, news, funding announcements, and review sites to surface accounts with active buying behaviour",
          "First-draft outreach — generating sequence frameworks that SDRs can edit and personalise, cutting writing time by 60-80% without sacrificing voice",
          "Lead scoring and prioritisation — using model-driven scores to route the highest-probability accounts to senior reps and deprioritise low-fit contacts",
        ],
      },
      {
        type: "heading",
        text: "What AI cannot replace — and where teams are getting this wrong",
      },
      {
        type: "paragraph",
        text: "The failure mode is predictable. Teams adopt AI for outreach generation and promptly send 10,000 emails that feel AI-generated. Deliverability drops, reply rates collapse, and leadership concludes that AI doesn't work in their market. The error was not the tool — it was treating AI output as finished output. AI writes drafts. Humans make them specific. The distinction is not semantic. A prospect who receives an email referencing their exact planning application from last month, or a specific hiring signal you spotted in their job postings, responds at a meaningfully higher rate than one who receives a well-phrased generic message about growth challenges.",
      },
      {
        type: "callout",
        text: "AI handles the volume. Humans handle the insight. The most effective prospecting operations in 2026 are running both in tight coordination — not choosing between them.",
      },
      {
        type: "heading",
        text: "How to structure an AI-augmented SDR workflow",
      },
      {
        type: "list",
        items: [
          "Use AI to build and score your prospect list — let it surface the top 10% of accounts by fit and intent",
          "Use AI to draft the sequence framework — opening hook, value prop, social proof, CTA",
          "Require human review and personalisation before any email is sent — at minimum, one specific, researched detail per contact",
          "Use AI to analyse reply patterns and suggest sequence adjustments after 100+ contacts are touched",
          "Never let AI qualify a lead on its own — qualification requires conversational judgement that no current tool replicates reliably",
        ],
      },
      {
        type: "heading",
        text: "The ICP problem that AI makes more visible",
      },
      {
        type: "paragraph",
        text: "One underappreciated consequence of AI-assisted prospecting is that it amplifies the quality of your ICP definition. If your ICP is sharp, AI tools can find hundreds of well-matched accounts quickly. If your ICP is vague — 'mid-market tech companies' — AI tools generate a lot of noise very fast. Teams that implement AI and see poor results are often discovering, for the first time, how poorly defined their target customer actually is. The tool surfaces the problem it didn't create.",
      },
      {
        type: "paragraph",
        text: "The teams winning with AI in 2026 are not necessarily the ones with the most sophisticated tooling. They are the ones who combined strong ICP clarity with disciplined human oversight of what the AI produces. That combination — precision targeting, AI-assisted scale, human personalisation — is where the real performance uplift lives.",
      },
    ],
  },
  {
    slug: "why-b2b-buyers-think-reps-are-underprepared",
    category: "Sales Development",
    title: "82% of B2B Buyers Think Your Reps Are Underprepared. Here's the Fix.",
    excerpt:
      "Research consistently shows that most B2B buyers leave sales conversations feeling unimpressed by the prep work. This is how sales teams close that gap and what it has to do with lead quality.",
    readTime: "7 min read",
    date: "4 Jun 2026",
    featured: false,
    color: "#DC2626",
    content: [
      {
        type: "paragraph",
        text: "The number is jarring when you see it for the first time: 82% of B2B buyers report that the sales professionals they deal with are underprepared. That is not a small minority of frustrated buyers. It is a structural problem, and it has a direct cost. Buyers who feel a rep has done their homework are five times more likely to engage seriously. Buyers who feel they are receiving a generic pitch from someone who does not understand their business disengage quickly — and often permanently.",
      },
      {
        type: "heading",
        text: "What buyers mean by 'underprepared'",
      },
      {
        type: "list",
        items: [
          "78% said reps could not produce relevant case studies or examples during or after the first conversation",
          "77% felt the rep did not understand their specific business problems or how the product addressed them",
          "75% said the rep arrived without knowledge of their company, industry, or context",
        ],
      },
      {
        type: "paragraph",
        text: "These are not complaints about product knowledge. They are complaints about context. Buyers do not expect reps to have memorised their company handbook. They expect evidence that the rep has spent 20 minutes trying to understand their world before asking for 30 minutes of their time.",
      },
      {
        type: "heading",
        text: "Why this problem compounds with volume",
      },
      {
        type: "paragraph",
        text: "SDR teams reaching out to hundreds of contacts per week face a genuine tension: thorough research takes time, and time is the constraint. The instinct is to optimise for volume at the cost of preparation. The result is predictable — more outreach with worse results. The alternative is not to reduce volume, but to improve the quality of targeting so that every rep hour is spent on a smaller, better-matched set of contacts who warrant the preparation investment.",
      },
      {
        type: "callout",
        text: "Preparation is not a soft skill. It is a conversion lever. A rep who arrives knowing the buyer's recent hiring activity, their competitive context, and a relevant case study will outperform a rep with better closing technique and no context — consistently.",
      },
      {
        type: "heading",
        text: "The five preparation habits that change outcomes",
      },
      {
        type: "list",
        heading: "Before any first call or email, a prepared rep should know:",
        items: [
          "One specific recent development at the prospect's company — a funding round, a hire, a press mention, or a planning approval",
          "The most likely pain point for this buyer persona in this industry, backed by a relevant case study",
          "Who the economic buyer is and who else is likely to be involved in the decision",
          "What the prospect's current solution probably is, and why they might be dissatisfied with it",
          "One genuinely specific reason why this particular prospect is a fit — not a generic ICP match, but something specific",
        ],
      },
      {
        type: "heading",
        text: "The connection between preparation and lead quality",
      },
      {
        type: "paragraph",
        text: "Here is the part that most sales teams miss: preparation is significantly easier when the lead is well-qualified. A rep who receives a lead with a summary of the business problem, the name and title of the economic buyer, and the relevant trigger event can prepare thoroughly in 10 minutes. A rep who receives a name, a company, and a job title starts from scratch. The upstream investment in lead qualification is what makes downstream preparation practical at scale — and that is where the real leverage sits.",
      },
    ],
  },
  {
    slug: "construction-contractor-digital-presence-wins-tenders",
    category: "Construction Marketing",
    title: "How to Build a Construction Contractor's Digital Presence That Wins Work Before Tender",
    excerpt:
      "Most contractors show up at tender stage with a brochure and a price. The ones winning the best work have already built a digital presence that makes them the obvious choice before a brief is issued.",
    readTime: "6 min read",
    date: "27 May 2026",
    featured: false,
    color: "#059669",
    content: [
      {
        type: "paragraph",
        text: "Commercial construction procurement has two modes. The first is open tender: your submission competes against six others and the decision is largely price-driven. The second is invitation-only: the developer already knows who they want, and the tender is a formality. The difference between being in the first mode and the second is almost entirely determined by what happened before the brief was issued. Your digital presence is the mechanism that gets you into the second category.",
      },
      {
        type: "heading",
        text: "Why digital presence matters more in construction than most contractors believe",
      },
      {
        type: "paragraph",
        text: "Before any procurement manager picks up the phone, they look you up. They visit your website, check your LinkedIn profile, search your company name, and read any project coverage they can find. In 2026, that research happens on every prospective contractor — not just new ones. If what they find is a website last updated in 2021, a LinkedIn page with 80 followers, and no documented project portfolio, you have already lost ground before a conversation starts.",
      },
      {
        type: "heading",
        text: "The four elements that make up an effective contractor digital presence",
      },
      {
        type: "list",
        items: [
          "A project portfolio that speaks to procurement managers, not just project managers — outcomes, scale, sector relevance, and named client references where possible",
          "A LinkedIn company page with regular content that demonstrates sector knowledge, not just project photography",
          "A thought leadership presence from senior directors — commentary on planning decisions, procurement trends, or sector challenges that positions your leadership as credible voices",
          "Clear, direct positioning on your website about the types of work you want to win, at what scale, in which sectors, and in which geographies",
        ],
      },
      {
        type: "heading",
        text: "What your website actually needs to do",
      },
      {
        type: "paragraph",
        text: "Most contractor websites are built for the wrong audience. They describe the company, list services in broad strokes, and show photographs of completed projects. What procurement managers actually need to see is evidence that you have done the specific type of work they are commissioning. A residential developer looking for a contractor to deliver 120 units in a particular region wants to see your equivalent projects — delivery scale, approach to programme, and ideally a named reference. That evidence should be immediately accessible, not buried behind a generic project gallery.",
      },
      {
        type: "heading",
        text: "LinkedIn as a prospecting and positioning tool",
      },
      {
        type: "paragraph",
        text: "The most effective use of LinkedIn for construction companies is not broad content marketing. It is targeted relationship-building with a specific list of 40-60 developer and asset manager contacts, combined with a consistent content presence that demonstrates sector authority. When a procurement manager who follows your company page sees a planning application approved for a scheme type you specialise in, and then receives an outreach message from your business development director two weeks later, the context has been set. You are not a cold contact — you are already known.",
      },
      {
        type: "callout",
        text: "Your digital presence is not separate from your business development strategy. It is the warm-up layer that makes every cold contact warmer, every outreach more credible, and every tender submission more competitive.",
      },
      {
        type: "heading",
        text: "The compounding effect",
      },
      {
        type: "paragraph",
        text: "Digital presence compounds in a way that cold outreach alone does not. A project case study published today will be seen by prospective clients for the next five years. A LinkedIn post that demonstrates expertise builds credibility with every developer who reads it, whether they engage with it or not. The contractors who invest in this layer systematically are the ones who, twelve months later, find themselves receiving invitation-only tender opportunities from developers they have never spoken to — purely because their digital presence made the case before anyone picked up the phone.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return posts.slice(0, count);
  return posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .concat(posts.filter((p) => p.slug !== slug && p.category !== post.category))
    .slice(0, count);
}
