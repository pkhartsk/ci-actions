# Check README

This action checks if a container repo's main `README.md`
file has a version table and fails if it is formatted incorrectly.

In order to generate a table, install `python-natsort`
(or the `natsort` package from PyPI), then insert the following two
comments into the `README`:

```md
<!--
Table start
-->
<!--
Table end
-->
```

in **this exact** format, and finally run `make version-table` to generate it.