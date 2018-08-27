import test from 'ava'
import md from 'md-core'
import { coseLineCode } from 'md-plugins-vig'
import highlight from '../src'


test.before(t => {
  t.context.parse = md()
    .use(coseLineCode())
    .use(highlight())
    .parse
})


test('javascript annotation', t => {
  t.snapshot(t.context.parse('```javascript\n/** i am code */\n```').toHTML())
})

test('include escape', t => {
  t.snapshot(t.context.parse('```html\n<p>123<i>456</i></p>\n```').toHTML())
})

test.todo('write your test here...')
