export const homeFaqs = [
  { question: 'What does Augwell Technologies build?', answer: 'Augwell Technologies builds custom web and mobile applications, customer portals, e-commerce platforms, and business intelligence tools. We also build and run our own software products, with a growing portfolio designed to solve different business needs.' },
  { question: 'Can I use an existing product instead of commissioning software?', answer: 'Yes, when one of our existing products fits your needs. Explore our products and projects, or tell us about your workflow so we can help you assess the fit. If your requirements need a different approach, we can discuss a custom build.' },
  { question: 'How much does a custom software project cost?', answer: 'The cost depends on the features, integrations, design, and delivery requirements. Send us a brief describing your users, the problem, and any budget or deadline. We can then discuss the scope and prepare a quotation.' },
  { question: 'How long will my project take?', answer: 'Timelines depend on the scope and complexity. We discuss priorities and delivery milestones during scoping, so the proposed timeline reflects your actual requirements.' },
  { question: 'Do you provide support after launch?', answer: 'Yes. Maintenance, updates, and technical support are available. We can discuss the support your software needs as part of your project scope.' },
  { question: 'How do I start a project with Augwell?', answer: 'Book a discovery call, submit a request for quotation, or email info@augwelltech.com. Share what you want to build, who will use it, and any budget or timeline you have in mind. We respond within 24 hours.' },
];

export const faqGroups = [
  {
    id: 'services-products', title: 'Services & products', description: 'Find the right starting point for your business.',
    items: [
      homeFaqs[0], homeFaqs[1],
      { question: 'Do you also offer websites, SEO, branding, and 3D work?', answer: 'Yes. Business websites, search engine optimization, branding and design, and 3D modeling and visualization are available alongside software development or as a separate brief. Tell us what you need so we can discuss the scope.' },
      { question: 'Where can I see examples of your work?', answer: 'Our Products page brings together website projects and in-house products. You can open the available project links to explore the work, including commerce platforms, a nonprofit website, and software demos.' },
    ],
  },
  {
    id: 'project-planning', title: 'Planning your project', description: 'Understand the scope, cost, and next steps.',
    items: [
      homeFaqs[2], homeFaqs[3],
      { question: 'What should I include in a project brief?', answer: 'Describe the problem you want to solve, who will use the software, and the features or workflows that matter most. Include existing tools, integrations, and any budget or deadline you have in mind. You do not need a finished specification to start a conversation.' },
      homeFaqs[5],
    ],
  },
  {
    id: 'delivery-support', title: 'Delivery & support', description: 'Know what happens after you get in touch.',
    items: [
      { question: 'What does the development process look like?', answer: 'We start by discussing your users, workflows, and goals. We then define the features, integrations, and delivery milestones. During the build, we review the solution against your requirements and plan testing, handover, launch, and any ongoing support.' },
      homeFaqs[4],
      { question: 'Does submitting a quotation request book a meeting?', answer: 'Submitting the quotation form sends your project details and opens the booking calendar. You then choose and confirm a meeting time. Sending your brief alone does not book a meeting.' },
      { question: 'How quickly will you respond to my enquiry?', answer: 'We respond within 24 hours. Use the contact form for a question or support request, the quotation form for a project brief, or email info@augwelltech.com.' },
    ],
  },
];
