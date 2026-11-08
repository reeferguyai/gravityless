# Google Drive, Docs, and Keep integration setup

This guide records the integration plan; it does **not** connect this repository to a Google account. No Google account authorization, OAuth credentials, Cloud project, or API client was available to configure when this file was written.

## What must happen before an account can be connected

1. Create or select a Google Cloud project owned by you or your organization.
2. Enable the Google Drive API and Google Docs API. Enable the Google Keep API only if it is available for your Workspace account and use case.
3. Configure the OAuth consent screen, authorized domains, privacy policy, and test/publishing status.
4. Create an OAuth client for the application type and register exact redirect URIs.
5. Implement an OAuth flow that you control, then sign in and grant consent as the account owner. Do not send OAuth tokens, client secrets, passwords, or recovery codes in chat or commit them to Git.
6. Confirm any Google Workspace administrator approval, restricted-scope verification, and user-type restrictions that apply to the selected APIs and scopes.

Google API availability and approval requirements can vary by account type, deployment status, and requested scopes. Verify current requirements in the official Google developer console and documentation before relying on Keep API access.

## Least-privilege scope planning

Request only the scopes required by the actual feature, and explain them clearly in the consent UI. Possible starting points (not a recommendation to request all of these) include:

- Drive file picker or app-created files: `https://www.googleapis.com/auth/drive.file`.
- Read-only Drive access, only if the feature truly needs it: `https://www.googleapis.com/auth/drive.readonly`.
- Google Docs read/write, only if the feature edits documents: `https://www.googleapis.com/auth/documents`.
- Google Keep access: use the exact Keep scopes shown by current official documentation for the chosen operation and account; verify Workspace eligibility and admin requirements first.

Avoid broad Drive scopes such as full-drive access unless a reviewed requirement demands them. A broad scope may entail additional verification. Do not claim that a user is connected until OAuth consent succeeds and the API call is tested.

## Recommended architecture

- Keep OAuth token exchange, refresh tokens, and API calls on a server-side backend. Never embed a client secret or long-lived refresh token in a Vite/browser bundle.
- Use Authorization Code flow with PKCE where supported and validate `state`, redirect URI, issuer, and token audience.
- Encrypt refresh tokens at rest, restrict access, rotate credentials, and provide disconnect/revocation and data deletion flows.
- Store the minimum token and account metadata needed. Do not persist document or note contents unless a feature requires it and the user has been told.
- Separate Drive, Docs, and Keep adapters behind a narrow server API. Apply per-user authorization checks on every request.
- Log operation metadata without logging access tokens, note text, document contents, or unnecessary personal data.
- Add tests for consent denial, token expiration, revoked access, missing scopes, API errors, and account disconnection.

## Suggested user-facing integration sequence

1. User chooses **Connect Google** and sees the exact services and permissions requested.
2. User is redirected to Google's OAuth consent screen.
3. The backend validates the callback and securely stores the resulting authorization, if persistent access is actually needed.
4. The UI shows connected services and explicit actions such as selecting a Drive file, creating a Docs document, or accessing Keep notes where eligible.
5. User can disconnect and request deletion of stored authorization data at any time.

## Current state in this repository

This is documentation only. There is no OAuth callback, backend, Google client library, API enablement, credentials, or connection. The integration cannot be completed until you configure the Google Cloud project and authorize the app. Once the repository has an application stack and you have chosen the specific read/write actions, implementation can be added without placing secrets in source control.

## Official starting points

- [Google Drive API](https://developers.google.com/drive)
- [Google Docs API](https://developers.google.com/docs)
- [Google Keep API](https://developers.google.com/keep)
- [Google Workspace API enablement](https://developers.google.com/workspace/guides/enable-apis)
- [OAuth 2.0 for web server applications](https://developers.google.com/identity/protocols/oauth2/web-server)
