import AccessoriesImage from "@/images/accessories.jpg";

import ApparelImage from "@/images/gg_fruit_punch_box6pk.png";

export const config = {
	categories: [
		{ name: "6-Packs", slug: "6-Packs", image: ApparelImage },
		{ name: "12-Packs", slug: "12-Packs", image: AccessoriesImage },
	],

	social: {
		x: "https://x.com/yourstore",
		facebook: "https://facebook.com/yourstore",
	},

	contact: {
		email: "support@yourstore.com",
		phone: "+1 (555) 111-4567",
		address: "123 Store Street, City, Country",
	},
};

export type StoreConfig = typeof config;
export default config;
