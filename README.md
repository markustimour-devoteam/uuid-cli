## uuid-cli

A small client for generating and validating uuids.

### Dependencies
* NPM v8.18.0
* NodeJS v18.8.9
* uuid ^9.0.0
* clipboardy ^3.0.0
* minimist ^1.2.7

From the local repository,\
run `npm install && npm link`

Now should now be able to run `uuid` from your command line.

```
> uuid gen
Generated "0e6f526c-72b2-49b7-8a16-84bb956846f5"
Copied to clipboard.
```

### Options
`--nohyp` - to ignore hyphens (-). \
Combine `--nohyp` with `-l {n}` for a desired length.

Example `uuid gen --nohyp -l 24` for a desired character length of 24. 
```
Generated "2cdeab1a8f194693930112f8"
Copied to clipboard.
```
*Above is no uuid* but can help for generating a string with a desired length.

---

### Common npm commands
List global installed libs\
`npm ls -g --depth=0`

To remove this package from global installs\
`npm unlink uuid-cli`