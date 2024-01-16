export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Scrumer",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "プロジェクト",
			href: "/projects",
		},
		{
			label: "チケット",
			href: "/tickets",
		},
		{
			label: "ガントチャート",
			href: "/chart/gant",
		},
		{
			label: "フォーラム",
			href: "/forum",
		},
		{
			label: "Wiki",
			href: "/",
		},
		{
			label: "ログイン",
			href: "/login",
		},
		{
			label: "新規登録",
			href: "/signup",
		},
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "プロジェクト",
			href: "/projects",
		},
		{
			label: "チケット",
			href: "/tickets",
		},
		{
			label: "ガントチャート",
			href: "/chart/gant",
		},
		{
			label: "フォーラム",
			href: "/forum",
		},
		{
			label: "Wiki",
			href: "/",
		},
		{
			label: "お問い合わせ・不具合報告",
			href: "/help-feedback",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    	sponsor: "https://patreon.com/jrgarciadev"
	},
};
