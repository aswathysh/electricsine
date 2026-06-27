# SSL Certificate Common Name Mismatch Fix

## Issue
Your API server at `electricsign.in` has an SSL certificate with an invalid or mismatched Common Name (CN).

**Error**: `net::ERR_CERT_COMMON_NAME_INVALID`

## Root Cause
The SSL certificate on your Apache server either:
1. Is issued for a different domain (not `electricsign.in`)
2. Is self-signed without proper domain matching
3. Has a wildcard cert that doesn't cover the `.in` TLD properly
4. Is expired or from a revoked CA

## Solutions

### Development Workaround (Temporary)
The `.env.local` file already has `NODE_TLS_REJECT_UNAUTHORIZED=0` which disables strict SSL validation for development.

```bash
# This is already set in .env.local for local development
NODE_TLS_REJECT_UNAUTHORIZED=0
```

**⚠️ WARNING**: This only works locally. It won't work on Vercel production.

### Production Fix (Recommended)
You must fix the SSL certificate on your Apache server:

#### Option 1: Use Let's Encrypt (Free)
```bash
# On your Apache server
sudo apt-get install certbot python3-certbot-apache
sudo certbot certonly --apache -d electricsign.in
# Point Apache to the new certificate in your vhost config
```

#### Option 2: Update Existing Certificate
Ensure your current certificate:
- Common Name (CN) matches exactly: `electricsign.in`
- Subject Alternative Name (SAN) includes: `electricsign.in`
- Is not expired
- Is from a trusted Certificate Authority

#### Option 3: Use a Subdomain Wildcard
If you have `*.electricsign.in`, update your API to use the matching subdomain.

### Verification
Check your certificate:
```bash
# On your Apache server
openssl s_client -connect electricsign.in:443 -showcerts
# Look for "Subject: CN=" - it should match electricsign.in
```

## Environment Variables
The app now uses environment variables for API URLs:

- **Development** (`.env.local`): `NODE_TLS_REJECT_UNAUTHORIZED=0` + `NEXT_PUBLIC_API_URL`
- **Production** (`.env.production`): Strict SSL validation enabled

## Files Updated
- `src/app/courses/page.js` - Uses `NEXT_PUBLIC_API_URL`
- `src/services/Api.js` - Uses `NEXT_PUBLIC_API_URL` in axios config
- `.env.local` - Development SSL bypass
- `.env.production` - Production configuration

## Testing
After fixing the certificate, test with:
```bash
curl -I https://electricsign.in/public/api/subjects
# Should return HTTP 200 (or expected response), not a certificate error
```

## For Vercel Deployment
Vercel runs in Node.js which enforces strict SSL validation. Once you fix the Apache certificate:
1. Remove `NODE_TLS_REJECT_UNAUTHORIZED=0` from production
2. Deploy to Vercel - it will work with the valid certificate
