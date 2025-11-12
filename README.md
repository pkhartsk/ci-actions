# GitHub actions for sclorg

This repo contains GitHub actions for re-use in this organisation.

Eg. to check the README version table and run container tests,
use a similar workflow:

```yaml
on:
  issue_comment:
    types:
      - created
jobs:
  check-readme:
    uses: "sclorg/ci-actions/check-readme@main"
  container-tests:
    needs: check-readme
    uses: "sclorg/ci-actions/container-tests@main"
    with:
      enabled-tests: '["container","container-pytest","openshift-4","openshift-pytest"]'
      versions: '[<versions here>]'
      openshift-versions: '[<versions here>]'
    secrets: inherit
```
