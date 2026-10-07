# Augwell website optimization strategy

## Objective

Make Augwell easier to understand, easier to assess, and easier to contact. Support conventional search and AI discovery with accurate, readable content. Conversion improvement needs to be measured after launch; these changes do not establish a ranking or conversion uplift.

## Positioning and page roles

The site presents two complementary activities: custom software for businesses and a growing portfolio of in-house products. Sellem is one product in that portfolio. Client website and commerce projects provide additional evidence of the work, including the Odura Hope Foundation nonprofit website.

| Page | Role | Main changes |
| --- | --- | --- |
| Homepage | Help a visitor choose a direction | Benefit-led service cards, real product previews, delivery steps, shared FAQs, inquiry CTAs |
| Services | Help a visitor assess fit | Who each offer is for, deliverables, scoping questions, examples, supporting services, clear next steps |
| Products | Show the work | Separate in-house products from website and commerce projects, retain screenshots and video, use verified external links |
| About Us | Explain the business and build trust | Clear purpose, UK/Ghana registration information, custom projects and own products, practical working principles |
| FAQ | Resolve common questions | Twelve answers grouped by services/products, project planning, and delivery/support |
| Quotation | Help a visitor send a useful brief | Compact layout, clearer labels, optional details marked, explanation of the calendar step |
| Contact | Make enquiry routes easy to find | Message form alongside email, discovery call, and project-brief links |

The homepage hero remains unchanged, following the agreed scope of the later homepage update. Websites, SEO, branding, and 3D remain available without dominating the main software offer.

## Conversion approach

- Replace generic promises with concrete problems, deliverables, and examples.
- Put working products and project previews ahead of technology lists or unsupported statistics.
- Use specific actions: scope a build, request a quotation, book a call, or ask a question.
- Answer cost, timeline, support, and product-fit questions before the final CTA.
- Explain the quotation flow accurately: submit details, then choose and confirm a time in Calendly. Submission alone does not book a meeting.
- Keep the existing response commitment of within 24 hours.

Inflated project/client totals and satisfaction claims were removed from the revised homepage, Products, and About Us pages. No replacement review scores, client outcomes, certifications, or delivery guarantees were invented. The About Us registration wording does not assert blanket regulatory compliance.

## Design and usability

Keep the existing blue palette, typography, rounded elements, and light/dark modes. Use solid backgrounds and borders instead of gradients on the revised pages and action buttons. Give headings, descriptions, examples, and actions distinct levels of emphasis.

Use responsive layouts, native expandable FAQs, visible form labels, clear focus states, and standard links. Keep card heights and action placement consistent. Lazy-load portfolio images; let visitors play product video rather than downloading and playing it automatically.

## SEO and AI discovery

The production build prerenders the homepage, Services, FAQ, Products, and About Us pages. Their text, links, and structured data are present in the HTML before JavaScript runs. This improves access for crawlers that do not execute JavaScript.

Each prerendered inner page has its own title, description, canonical URL, and social metadata. Pages use one H1, meaningful section headings, descriptive link text, and accurate product names.

Structured data reflects visible content:

- Service descriptions on Services.
- FAQ questions and matching answers.
- Product/project lists without invented prices, ratings, or availability.
- Organization information on the homepage and About Us.

Shared FAQ data reduces inconsistent answers across pages. The shared portfolio catalog supplies the Products page and homepage previews. Product URLs come from the provided catalog; Foundry Hub has no external link because no public URL has been supplied.

The approach is clear entity information and useful, accessible content. It does not claim special AI ranking rules, guaranteed citations, or rich-result eligibility. Google describes prerendering as useful for JavaScript sites in its [JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

## Functional preservation

The quotation and contact/support forms retain their original validation schemas, field controllers, submitted payloads, endpoint, loading states, reset behavior, and success/error handling. The quotation form retains its Calendly trigger and scheduled-event listener. Those behavioral source blocks were compared against the originals during the form update.

No live form submissions or calendar bookings were needed for verification. External portfolio links use a new tab with `noopener noreferrer`. Navigation still uses the existing React Router routes.

## Deployment behavior

`npm run build` emits prerendered pages and `dist/app.html`, which remains the SPA shell for other routes. Azure Static Web Apps and Vercel routing configs serve the prerendered paths explicitly and use the SPA shell for remaining routes. Another host needs equivalent routing.

These are local changes; no production deployment has been performed.

## Validation and practical limits

Production builds check TypeScript, generate the Vite bundle, and prerender the marketing pages. HTML checks cover headings, structured-data JSON, internal anchors, metadata, public link attributes, omitted Foundry Hub links, and removal of unsupported statistics from revised pages. Browser review was completed for parts of the homepage and Services page; a complete mobile/browser and live submission audit is still separate work.

The build still reports a large main bundle and an outdated Browserslist dataset. The marketing copy work does not resolve those existing performance limitations. The quotation/contact pages are not prerendered because their interactive forms remain client-rendered.

## Measurement after launch

Existing Google Analytics integration receives `homepage_inquiry_click` and `services_inquiry_click` from the new inquiry CTAs. These measure clicks, not completed enquiries or bookings.

After deployment:

1. Establish a baseline for traffic, CTA clicks, quote submissions, and confirmed meetings.
2. Configure and verify completed-enquiry and completed-booking measurement before treating clicks as conversions.
3. Review Search Console indexing and page performance for the updated routes.
4. Check mobile layouts, accessibility, and page speed with the deployed build.
5. Compare qualified enquiry rates by landing page and traffic source. Change one major variable at a time when testing copy or layout.
6. Add future products to the shared catalog with a confirmed name, one-liner, media, and URL; keep drafts and demos clearly described.

The success measure is more qualified enquiries and completed calls from the right visitors, supported by clearer content and fewer obstacles in their path.
