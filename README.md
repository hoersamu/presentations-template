# Turborepo starter

This is a template project for a [Turborepo](https://turborepo.com) powered Monorepo containing multiple sites served by GitHub Pages under the same domain.

## Getting started

1. Clone this repository
2. Run `pnpm install` to install dependencies

## Landingpage (Optional)

You can find the Landingpage project powered by [Vitepress](https://vitepress.vuejs.org) in the `projects/example-presentation` folder.

This page is **optional** and gets hoisted to the root of the GitHub Pages deployment. Be careful not to overwrite your other projects.

## Example presentation

You can find an example presentation powered by [Slidev](https://sli.dev/) in the `projects/example-presentation` folder.

All projects are deployed to their own subfolder. (Except `projects/index`)

When creating new presentations just copy the existing one and change the name in the package.json.

## Deployment

This repository is configured to deploy to GitHub Pages using [GitHub Actions](.github/workflows/deploy-presentation.yml).

You need to enable this kind of deployment in the repository settings.

## Shared packages

You can put your shared packages in the `packages` folder and use them in your projects.
