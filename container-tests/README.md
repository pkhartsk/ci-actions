# Container tests

This action runs container tests and pytests, openshift tests and pytests,
and FIPS tests if available.

## Inputs

| Input                | Explanation                                             | Required | Value                                                                                    | Example                                                                         |
|----------------------|---------------------------------------------------------|----------|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| `enabled-tests`      | Tests to run on the defined versions                    | yes      | list of double-quoted strings inside of single quotes                                    | `'["container","container-pytest","openshift-4"]'` to disable Openshift pytests |
| `versions`           | Versions of the container to run container (py)tests on | yes      | list of double-quoted strings inside of single quotes                                    | `'["2.4", "2.4-micro"]'` for httpd                                              |
| `openshift-versions` | Versions of the container run Openshift (py)tests on    | no       | list of double-quoted strings inside of single quotes, no input disables Openshift tests | `'["2.4"]'` for httpd                                                           |

Available tests are:

`"container", "container-pytest", "openshift-4", "openshift-pytest", "container-fips"`
