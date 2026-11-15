# Elshaddai Oromo Evangelical Church Website

This repository contains the static website for Elshaddai Oromo Evangelical Church.

## Website
https://www.elshaddaioromoevangelicalchurch.org/

## Stack
- HTML
- CSS
- JavaScript

## Deployment
Pushes to `main` deploy this site to the Cloudflare Pages project
`oromoevangelicallutheranchurch-website`. In GitHub, configure these under
**Settings > Secrets and variables > Actions > Repository secrets**:

- `CLOUDFLARE_API_TOKEN`: a Cloudflare API token with **Cloudflare Pages: Edit**
  permission for the account containing the project.
- `CLOUDFLARE_ACCOUNT_ID`: the Cloudflare account ID containing the project.

The project must already exist in that account. The workflow cannot deploy if
either secret is missing or unavailable.
