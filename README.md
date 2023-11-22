##  eleventy-hiccup


An 11ty template.

- [Housekeeping]
- [Quickstart]
- [Debugging Reload]

## Housekeeping

Be sure to have the following tools installed

- [Node]
- [Yarn]

## Quickstart

- Clone repo
- Move into root
- Install JS dependencies
  ```command
  yarn install
  ```
  > Wait for everything to install before running the next step
- Start the project
  ```command
  yarn run dev
  ```

Visit http://localhost:8080/test/index.html

## Debugging Reload

To test this work against a development version of nbb:

- clone nbb
- Run nbb in dev
- symlink the `lib` dir into this project
  ```command
  ln -s ~/path/to/nbb/lib ~/path/to/eleventy-hiccup/lib
  ```
- uncomment the `import` line to `nbb_api.js` in `eleventy.js`

When you make changes to `nbb` you can run `yarn dev` in `eleventy-hiccup` and
see the results of those changes.  Ultimately, the goal is that changes to
`src.extra.components` are live updated on http://localhost:8080/test/index.html

[Housekeeping]: #housekeeping
[Quickstart]: #quickstart
[Debugging Reload]: #debugging-reload
