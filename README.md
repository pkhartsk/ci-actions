# GitHub workflows for SCLOrg

This repo contains GitHub workflows for re-use in this organisation.

Eg. to check the README version table and run container tests,
use a similar workflow:

```yaml
on:
  issue_comment:
    types:
      - created
jobs:
  check-readme:
    uses: "sclorg/ci-actions/.github/workflows/check-readme.yml@main"
  container-tests:
    needs: check-readme
    uses: "sclorg/ci-actions/.github/workflows/container-tests.yml@main"
    with:
      enabled-tests: '["container","container-pytest","openshift-4","openshift-pytest"]'
      versions: '[<versions here>]'
      openshift-versions: '[<versions here>]'
    secrets: inherit
```
