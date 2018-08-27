# md-plugins-highlight

[![version](https://img.shields.io/npm/v/md-plugins-highlight.svg?style=flat-square)](https://www.npmjs.com/package/md-plugins-highlight)
[![downloads](https://img.shields.io/npm/dm/md-plugins-highlight.svg?style=flat-square)](https://www.npmjs.com/package/md-plugins-highlight)
[![dependencies](https://img.shields.io/david/Val-istar-Guo/md-plugins-highlight.svg?style=flat-square)](https://www.npmjs.com/package/md-plugins-highlight)


# Install

```bash
npm install md-plugins-highlight
```
## Usage

```javascript
// md.js
import md from 'md-core'
import { vigMdPlugins } from 'md-plugins-vig'
import highlight from 'md-plugins-highlight'

export default md()
  .use(vigMdPlugins())
  .use(highlight())
```

and then

```javascript
import md from './md.js'

md.parse('```html\n<p>123</p>\n```').toHTML()
```


## See More

[md-core](https://github.com/Val-istar-Guo/md-core)

[md-plugins-vig](https://github.com/Val-istar-Guo/md-plugins-vig)
