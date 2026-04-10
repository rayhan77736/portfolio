export interface TimelineEntry {
	role: string;
	company: string;
	period: string;
	description: string;
	highlights?: string[];
}

export interface SkillCategory {
	name: string;
	skills: string[];
}

export interface Certification {
	title: string;
	issuer: string;
	year?: string;
	link?: string;
}

export interface PortfolioPageData {
	slug: string;
	title: string;
	tagline: string;
	subtitle?: string;
	about?: string;
	sections: { id: string; label: string }[];
	experience: TimelineEntry[];
	skills: SkillCategory[];
	certifications: Certification[];
	cta: {
		heading: string;
		message: string;
	};
}
