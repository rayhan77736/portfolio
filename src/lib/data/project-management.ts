import type { PortfolioPageData } from '$lib/types';

export const data: PortfolioPageData = {
	slug: 'project-management',
	title: 'Project Management',
	tagline: 'Getting things done, properly',
	subtitle:
		'Organized project coordinator with experience managing teams, timelines, and compliance across education and operations. Proven ability to keep things on track.',
	about:
		"I ended up in project management the way most people do — by being the one who actually remembered the deadlines. Between counseling students at Zakir's, managing compliance at M.S. Explorers, and now juggling remote work with a UK team alongside my Master's, I've gotten good at keeping things moving without dropping balls. I'm not a PMP-certified PM (yet), but I get things done.",
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
				'Managed student counseling operations full-time, coordinating between students, institutions, and internal teams to ensure smooth enrollment processes.',
			highlights: [
				'Coordinated student recruiting and counseling workflows',
				'Managed communications between multiple stakeholders',
				'Ensured operational compliance and process documentation'
			]
		},
		{
			role: 'Compliance Executive',
			company: 'M.S. Explorers',
			period: 'Aug 2023 — Feb 2025',
			description:
				'Led compliance operations for over a year and a half, managing regulatory requirements, documentation, and cross-team coordination.',
			highlights: [
				'Maintained compliance standards across organizational operations',
				'Coordinated between departments to meet regulatory deadlines',
				'Created and maintained documentation systems'
			]
		},
		{
			role: 'Assisted Web Developer',
			company: 'Datumotion Ltd UK',
			period: 'Jan 2026 — Present',
			description:
				'Contributing to a distributed remote team, managing own workload and coordinating with UK-based colleagues across time zones.',
			highlights: [
				'Self-managing workload in a fully remote environment',
				'Coordinating deliverables with a distributed team',
				"Balancing work responsibilities with ongoing Master's studies"
			]
		},
		{
			role: 'Data Analyst',
			company: 'Cero House',
			period: 'Jun 2022 — Oct 2022',
			description:
				'Managed data analysis tasks remotely, delivering reports on schedule and coordinating with the team on project deliverables.',
			highlights: [
				'Delivered data reports within project timelines',
				'Managed tasks independently in a remote setting',
				'Coordinated with team members on shared deliverables'
			]
		}
	],
	skills: [
		{
			name: 'Management',
			skills: ['Project Management', 'Team Coordination', 'Stakeholder Communication', 'Scheduling']
		},
		{
			name: 'Tools',
			skills: ['Microsoft Project', 'Microsoft Office', 'Google Workspace', 'Notion']
		},
		{
			name: 'Operations',
			skills: ['Operational Compliance', 'Process Documentation', 'Student Recruiting', 'Quality Assurance']
		},
		{
			name: 'Soft Skills',
			skills: ['Communication', 'Problem Solving', 'Time Management', 'Adaptability']
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
		}
	],
	cta: {
		heading: "Need someone who actually follows through?",
		message:
			"I keep things organized, on time, and moving forward. Simple as that."
	}
};
