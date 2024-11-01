export interface Timezone {
	zoneName: string;
	gmtOffset: number;
	gmtOffsetName: string;
	abbreviation: string;
	tzName: string;
}

export interface Translation {
	kr: string;
	"pt-BR": string;
	pt: string;
	nl: string;
	hr: string;
	fa: string;
	de: string;
	es: string;
	fr: string;
	ja: string;
	it: string;
	cn: string;
	tr: string;
}

export interface Country {
	id: number;
	name: string;
	iso3: string;
	iso2: string;
	numeric_code: string;
	phone_code: string;
	capital: string;
	currency: string;
	currency_name: string;
	currency_symbol: string;
	tld: string;
	native: string;
	region: string;
	subregion: string;
	timezones: Timezone[];
	translations: Translation;
	latitude: string;
	longitude: string;
	emoji: string;
	emojiU: string;
}
