# Distgen check

In repos that use `distgen`, this action verifies that everything is
generated from source correctly and that all changes in the commit
are the same in every version.

In order to re-generate all files, change whatever you need in the
`src` and `specs` directories, install the `distgen` package from
PyPI, and run `make clean-versions` and `make generate-all`.