import type { PortfolioPageData } from '$lib/types';

export const data: PortfolioPageData = {
	slug: 'web-development',
	title: 'Web Development',
	tagline: 'Building for the modern web',
	subtitle:
		'Full-stack developer working with SvelteKit, PostgreSQL, and modern tooling. Currently building production applications at Datumotion Ltd UK.',
	about:
		"I'm Rayhan — a CS grad from Sylhet who got into coding by tinkering with random projects during university. What started as curiosity turned into a career. I now work remotely for a UK-based company building web apps with SvelteKit and PostgreSQL, while doing my Master's in IT at SUST. I like clean code, simple designs, and figuring out how things work under the hood.",
	sections: [
		{ id: 'experience', label: 'Experience' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'certifications', label: 'Education' },
		{ id: 'contact-cta', label: 'Contact' }
	],
	experience: [
		{
			role: 'Assisted Web Developer',
			company: 'Datumotion Ltd UK',
			period: 'Jan 2026 — Present',
			description:
				'Remote role building and maintaining web applications. Working across the stack with Svelte, PostgreSQL, and modern development workflows.',
			highlights: [
				'Developing production web applications using SvelteKit',
				'Working with PostgreSQL databases and backend services',
				'Collaborating with a distributed UK-based team remotely'
			]
		},
		{
			role: 'Data Analyst',
			company: 'Cero House',
			period: 'Jun 2022 — Oct 2022',
			description:
				'Remote data analyst role working with datasets and building data-driven solutions during university.',
			highlights: [
				'Analyzed and processed data for business reporting',
				'Worked remotely with a distributed team',
				'Gained early professional experience in a tech environment'
			]
		},
		{
			role: 'Student Counsellor',
			company: "Zakir's Education Service",
			period: 'Jun 2025 — Jan 2026',
			description:
				'Full-time role managing student counseling operations, coordinating between students, institutions, and internal teams.',
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
				'Managed operational compliance processes, handling data tracking, reporting, and regulatory requirements across the organization.',
			highlights: [
				'Tracked and reported compliance metrics across operations',
				'Developed systematic approaches to data organization',
				'Ensured operational processes met regulatory standards'
			]
		},
		{
			role: 'Freelance & University Projects',
			company: 'Self-directed',
			period: '2021 — 2025',
			description:
				'Built various web projects during university, exploring frontend frameworks, responsive design, and full-stack development.',
			highlights: [
				'Developed responsive websites and web applications',
				'Explored multiple frameworks including Svelte and modern CSS',
				'Built tools and automations to solve real problems'
			]
		}
	],
	skills: [
		{
			name: 'Frontend',
			skills: ['SvelteKit', 'Svelte', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design']
		},
		{
			name: 'Backend & Data',
			skills: ['PostgreSQL', 'SQL', 'REST APIs', 'Node.js']
		},
		{
			name: 'Tools & Workflow',
			skills: ['Git', 'VS Code', 'Canva', 'AutoCAD', 'Vibe Coding']
		},
		{
			name: 'Currently Learning',
			skills: ['TypeScript', 'Cloud Deployment', 'API Design', 'Testing']
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
			title: 'Certified Ethical Hacker (CEH)',
			issuer: 'Team Matrix — Elite Hackers',
			year: '2023'
		},
		{
			title: 'Python 101 For Hackers',
			issuer: 'TCM Security',
			year: '2023'
		}
	],
	cta: {
		heading: "Got a project? Let's talk.",
		message:
			"I'm always up for building something new. Tell me what you're working on."
	}
};
