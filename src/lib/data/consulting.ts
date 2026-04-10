import type { PortfolioPageData } from '$lib/types';

export const data: PortfolioPageData = {
	slug: 'consulting',
	title: 'Consulting & Advisory',
	tagline: 'Guidance that connects the dots',
	subtitle:
		'British Council certified agent and counsellor. Combining technical knowledge, operational experience, and people skills to advise on education, digital strategy, and business operations.',
	about:
		"I'm someone who can sit in a room with a developer and a business owner and translate between the two. My background is technical — CS degree, web development, databases — but my work experience has been just as much about people. Counseling students, navigating compliance, advising on processes. I don't have all the answers, but I'm good at asking the right questions and figuring things out together.",
	sections: [
		{ id: 'experience', label: 'Experience' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'certifications', label: 'Education & Certs' },
		{ id: 'contact-cta', label: 'Contact' }
	],
	experience: [
		{
			role: 'Student Counsellor',
			company: "Zakir's Education Service",
			period: 'Jun 2025 — Jan 2026',
			description:
				'Provided one-on-one guidance to students on university admissions, career paths, and educational planning. Acted as a bridge between students and institutions.',
			highlights: [
				'Counseled students on academic and career decisions',
				'Built trusted relationships with students and families',
				'Guided enrollment processes from inquiry to admission'
			]
		},
		{
			role: 'Compliance Executive',
			company: 'M.S. Explorers',
			period: 'Aug 2023 — Feb 2025',
			description:
				'Advised the organization on regulatory compliance, process improvements, and operational best practices. Earned British Council UK Agent & Counsellor certification during this role.',
			highlights: [
				'Provided guidance on meeting regulatory requirements',
				'Achieved British Council UK Agent & Counsellor certification',
				'Supported leadership with documentation and reporting'
			]
		},
		{
			role: 'Assisted Web Developer',
			company: 'Datumotion Ltd UK',
			period: 'Jan 2026 — Present',
			description:
				'Contributing technical expertise to a UK-based company, bridging the gap between technical implementation and business needs.',
			highlights: [
				'Translating business requirements into technical solutions',
				'Advising on web technology choices and approaches',
				'Bringing a cross-disciplinary perspective to development work'
			]
		},
		{
			role: 'Data Analyst',
			company: 'Cero House',
			period: 'Jun 2022 — Oct 2022',
			description:
				'Remote data analyst role providing analytical support and data-driven recommendations to the business.',
			highlights: [
				'Delivered data-driven insights for business decisions',
				'Communicated findings clearly to non-technical stakeholders',
				'Gained early experience in consultative data work'
			]
		}
	],
	skills: [
		{
			name: 'Advisory',
			skills: ['Student Counseling', 'Career Guidance', 'Process Improvement', 'Stakeholder Management']
		},
		{
			name: 'Operations',
			skills: ['Operational Compliance', 'Documentation', 'Regulatory Standards', 'Quality Control']
		},
		{
			name: 'Technical',
			skills: ['Web Development', 'Database Management', 'Digital Tools', 'Software Evaluation']
		},
		{
			name: 'Communication',
			skills: ['English (Professional)', 'Bangla (Native)', 'Report Writing', 'Client Relations']
		}
	],
	certifications: [
		{
			title: "Master's in Information Technology",
			issuer: 'Shahjalal University of Science and Technology (SUST)',
			year: '2026 — Present'
		},
		{
			title: 'BSc in Computer Science & Engineering',
			issuer: 'Leading University, Sylhet',
			year: '2021 — 2025'
		},
		{
			title: 'British Council UK Agent & Counsellor Certificate',
			issuer: 'M.S. Explorers (Code: 79561)',
			year: '2025'
		},
		{
			title: 'Certified Ethical Hacker (CEH)',
			issuer: 'Team Matrix — Elite Hackers',
			year: '2023'
		},
		{
			title: 'Business Intelligence Analyst Certificate',
			issuer: 'Akaademy (Batch 2401)',
			year: '2024'
		}
	],
	cta: {
		heading: "Not sure where to start? That's what I'm for.",
		message:
			"Whether it's education, operations, or digital strategy — I'll help you figure it out."
	}
};
