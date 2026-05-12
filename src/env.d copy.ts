/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
  readonly PUBLIC_GA_ID?: string;
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_FACEBOOK_PIXEL_ID?: string;
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
  readonly PUBLIC_BING_SITE_VERIFICATION?: string;
  readonly PUBLIC_FACEBOOK_DOMAIN_VERIFICATION?: string;
  readonly PUBLIC_INDEXNOW_KEY?: string;
  readonly PUBLIC_GOOGLE_MAPS_URL?: string;
  readonly PUBLIC_GOOGLE_BUSINESS_URL?: string;
  readonly PUBLIC_BUSINESS_EMAIL?: string;
  readonly PUBLIC_BUSINESS_PHONE?: string;
  readonly PUBLIC_BUSINESS_PRICE_RANGE?: string;
  readonly PUBLIC_BUSINESS_SERVES?: string;
  readonly PUBLIC_BUSINESS_OPENING_HOURS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
