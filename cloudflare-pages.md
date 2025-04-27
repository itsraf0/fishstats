# Cloudflare Pages Deployment Guide

This guide provides instructions for deploying the FishStats website to Cloudflare Pages.

## Prerequisites

1. A [Cloudflare account](https://dash.cloudflare.com/sign-up)
2. A GitHub repository containing your FishStats website code
3. Admin access to the GitHub repository

## Connecting to Cloudflare Pages

1. Log in to your Cloudflare dashboard
2. In the sidebar, select "Pages"
3. Click "Create a project"
4. Select "Connect to Git"
5. Connect your GitHub account if not already connected
6. Select the repository containing your FishStats website
7. Click "Begin setup"

## Configure Build Settings

Set the following build configuration:

- **Project name**: `fishstats` (or your preferred name)
- **Production branch**: `main` (or your preferred branch)
- **Build command**: `npm run build`
- **Build output directory**: `_site`
- **Node.js version**: `16` (or later)

You can leave all other settings as default.

## Environment Variables (Optional)

No environment variables are required for the basic FishStats setup.

## Advanced Settings (Optional)

### Build Cache

Enable build cache for faster builds.

### Preview Branches

You can set up preview deployments for pull requests and development branches.

## Deployment

Click "Save and Deploy" to start the deployment process.

Your website will be deployed to a URL like: `https://fishstats.pages.dev`

## Custom Domain (Optional)

To use a custom domain:

1. Go to your Cloudflare Pages project
2. Click "Custom domains"
3. Click "Set up a custom domain"
4. Enter your domain (e.g., `fishstats.com`)
5. Follow the instructions to verify domain ownership and configure DNS

## Continuous Deployment

After setup, Cloudflare Pages will automatically deploy when you push changes to your GitHub repository.

## Triggering Manual Deployments

To manually trigger a deployment:

1. Go to your Cloudflare Pages project
2. Click "Deployments"
3. Click "Create new deployment"
4. Select the branch to deploy
5. Click "Deploy"

## Deployment Logs

You can view the deployment logs by clicking on any deployment in the "Deployments" tab. 