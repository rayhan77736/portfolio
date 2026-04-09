import type { PortfolioPageData } from '$lib/types';

export const data: PortfolioPageData = {
	slug: 'business-intelligence',
	title: 'Business Intelligence',
	tagline: 'Making sense of data',
	subtitle:
		"Certified BI Analyst with hands-on experience in SQL, data tools, and operational reporting. Pursuing a Master's in Information Technology at SUST.",
	sections: [
		{ id: 'experience', label: 'Experience' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'certifications', label: 'Education & Certs' },
		{ id: 'contact-cta', label: 'Contact' }
	],
	experience: [
		{
			role: 'Assisted Web Developer',
			company: 'Datumotion Ltd UK',
			period: 'Jan 2026 — Present',
			description:
				'Working with data-driven web applications, handling PostgreSQL databases and building interfaces that surface business data effectively.',
			highlights: [
				'Querying and managing PostgreSQL databases for production apps',
				'Building data-facing features in web applications',
				'Working with real-world datasets in a professional environment'
			]
		},
		{
			role: 'Data Analyst',
			company: 'Cero House',
			period: 'Jun 2022 — Oct 2022',
			description:
				'Remote data analyst role focused on processing, analyzing, and reporting on business data to support decision-making.',
			highlights: [
				'Analyzed datasets and produced business reports',
				'Developed data processing workflows',
				'Delivered actionable insights from raw data'
			]
		},
		{
			role: 'Student Counsellor',
			company: "Zakir's Education Service",
			period: 'Jun 2025 — Jan 2026',
			description:
				'Managed student data, tracked enrollment metrics, and produced reports to guide counseling operations and improve recruitment outcomes.',
			highlights: [
				'Tracked student enrollment data and counseling metrics',
				'Produced operational reports for management decision-making',
				'Organized data across multiple student pipelines'
			]
		},
		{
			role: 'Compliance Executive',
			company: 'M.S. Explorers',
			period: 'Aug 2023 — Feb 2025',
			description:
				'Managed operational compliance processes, requiring data tracking, reporting, and attention to regulatory detail across the organization.',
			highlights: [
				'Tracked and reported compliance metrics across operations',
				'Developed systematic approaches to data organization',
				'Ensured operational processes met regulatory standards'
			]
		}
	],
	skills: [
		{
			name: 'Data & Databases',
			skills: ['PostgreSQL', 'SQL', 'Data Analysis', 'Data Modeling']
		},
		{
			name: 'Tools',
			skills: ['Microsoft Office', 'Microsoft Project', 'Canva', 'Google Sheets']
		},
		{
			name: 'Analysis',
			skills: ['Operational Reporting', 'Compliance Tracking', 'Process Documentation']
		},
		{
			name: 'Currently Learning',
			skills: ['Power BI', 'Python for Data', 'Tableau', 'Statistical Analysis']
		}
	],
	certifications: [
		{
			title: 'Business Intelligence Analyst Certificate',
			issuer: 'Akaademy (Batch 2401)',
			year: '2024'
		},
		{
			title: 'British Council UK Agent & Counsellor Certificate',
			issuer: 'M.S. Explorers (Code: 79561)',
			year: '2025'
		},
		{
			title: 'BSc in Computer Science & Engineering',
			issuer: 'Leading University, Sylhet',
			year: '2021 — 2025'
		},
		{
			title: "Master's in Information Technology",
			issuer: 'Shahjalal University of Science and Technology (SUST)',
			year: '2026 — Present'
		}
	],
	cta: {
		heading: "Drowning in spreadsheets? I can help.",
		message:
			"If your data is messy and your reports take too long, let's fix that together."
	}
};
