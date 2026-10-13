# Pixel Perfect

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://pixel-perfect-clone-27157.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c77468c7-37af-4423-833d-97b91d5cac7f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy to Vercel

Import this repository into Vercel and keep the project root at the repository root.
The project uses Nitro's Vercel preset and produces Vercel's deployment output during
`npm run build`; leave Vercel's output directory unset. The `vercel.json` file selects
the TanStack Start framework preset when automatic detection is unavailable.

### Contact form email

The contact form sends messages through Resend from a TanStack Start server function.
Configure these environment variables in Vercel (and in a local, untracked `.env` file
for local testing):

- `RESEND_API_KEY`: a Resend API key. Keep it server-side; do not prefix it with `VITE_`.
- `RESEND_FROM_EMAIL`: a sender address on a domain verified in Resend, for example
  `Portfolio <contact@your-verified-domain.example>`.

The recipient is `asmamasrafi.2004@gmail.com`. Set the variables for the Production
environment in Vercel, then redeploy. Until configured, the form reports that sending
is unavailable and the direct email link remains available.

To check the production build locally, run:

```sh
npm run build
```
