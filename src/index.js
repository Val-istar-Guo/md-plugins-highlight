import { middleware, combine } from 'md-core/utils'
import { version } from '../package.json'
import hljs from 'highlight.js'
import parseHtml from './parseHtml';


const parseNodes = (h, nodes) => nodes.map(item => {
  // tag
  if (typeof item === 'object') {
    if (item.type === 'node') return h(item.tagName, item.properties, parseNodes(h, item.children))
    // not render annotation
    else return ''
  }
  // string
  return item;
})

const astNode = (node, code, language) => ({
  ...node('highlight-code'),
  code,
  language,
  parse(h) {
    const { code, language } = this

    const nodes = parseHtml(code);

    return h('pre', {}, [
      h('code', { class: language }, parseNodes(h, nodes))
    ])
  }
})

export default middleware({
  version,
  name: 'code-hightlight',
  input: 'code',
  parse({ value, language }, node, option) {
    const { automatic = true } = option
    console.log(value, language)

    let code = null
    if (language && hljs.getLanguage(language)) {
      code = hljs.highlight(language, value)
    } else if (automatic) {
      console.log('automatic')
      code = hljs.highlightAuto(value)
    } else {
      return
    }

    return astNode(node, code.value, language || code.language)
  },
})
