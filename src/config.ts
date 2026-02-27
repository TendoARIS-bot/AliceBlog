import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "爱丽丝博客",
	subtitle: "记录游戏心得与生活点滴",
	lang: "zh_CN",
	themeColor: {
		hue: 250,
		fixed: false,
	},
	banner: {
		enable: true,
		src: "/images/background.png",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		{
			name: "日记",
			url: "/categories/日记/",
		},
		{
			name: "攻略",
			url: "/categories/攻略/",
		},
		LinkPreset.Archive,
		LinkPreset.About,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/images/avatar/avatar.jpg",
	name: "爱丽丝",
	bio: "游戏爱好者，博客作者",
	links: [],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const footerConfig: {
	text: string;
	icp?: string;
	icpLink?: string;
} = {
	text: `© 2026 爱丽丝博客`,
	icp: "桂 ICP 备 2025074611 号 -1",
	icpLink: "https://beian.miit.gov.cn",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "dark-plus",
};
