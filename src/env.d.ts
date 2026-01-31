// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />

interface ImportMetaEnv {
  /** Mailgun API key (starts with 'key-...') */
  readonly MAILGUN_API_KEY: string;
  /** Mailgun domain (e.g., 'mg.yourdomain.com') */
  readonly MAILGUN_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
