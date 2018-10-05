## `hyper-dont-catch-my-keys`

For some reason, some keys are caught by Hyper. This means that in AZERTY keyboards for example,
the `#`, `{`, `[`, `|`, and `\` keys are caught and not written to the terminal.

This plugin will force the terminal to recognize the characters given in `config.uncaughtKeys`.

For an AZERTY keyboard, a typical `.hyper.js` config would look like:
```js
export default {
  config: {
    // ...
    uncaughtKeys: '#{[|\\^'
  }
}
```
