Serverless contact endpoint environment variables

To deploy the included serverless endpoint (`/api/contact`) you must set these environment variables in your host (Vercel/Netlify/Render/etc):

- MAILGUN_DOMAIN: your Mailgun sending domain (e.g., mg.example.com)
- MAILGUN_API_KEY: your Mailgun private API key
- DESTINATION_EMAIL: the email address to receive submissions (e.g., you@yourdomain.com)

Optional:
- MAILGUN_FROM: if set, will be used as a fallback destination when DESTINATION_EMAIL isn't present.

Notes:
- Verify your Mailgun sending domain and set up SPF/DKIM for better deliverability.
- On Vercel: go to Project -> Settings -> Environment Variables and add above values for Production (and Development if needed).
- On Netlify: Site settings -> Build & deploy -> Environment -> Add variables.

If you prefer Gmail SMTP instead of Mailgun, let me know and I can swap the implementation to use Nodemailer and Gmail App Password / OAuth2.
