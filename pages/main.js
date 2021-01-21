import { getArgs } from '@mfelements/service'
import nodes2html from '../helpers/nodes2html.js'
import html2md from '../helpers/html2md.js'

const argv = await getArgs();

let nodes = [],
	title = 'Empty post';

if(argv.post){
	const { ok, result } = await fetch(`https://api.telegra.ph/getPage/${encodeURIComponent(argv.post)}?return_content=true`).then(v => v.json());
	if(ok){
		nodes = result.content;
		title = result.title
	}
}

nodes.unshift({ tag: 'h1', children: [ title ] });

export default () => ({
	type: 'page',
	children: [
		html2md(nodes2html(nodes))
	]
})
