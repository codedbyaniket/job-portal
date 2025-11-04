// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://6a94127a54a72799476cf60ed9d296e7@o4510305579499520.ingest.us.sentry.io/4510305584545792",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations:[Sentry.mongoIntegration()]
});