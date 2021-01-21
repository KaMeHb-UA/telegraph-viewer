function htmle(str){
	let buf = [];
	for(var i = str.length - 1; i >= 0; i--) buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
	return buf.join('')
}

function nodeToHtml(node){
	if(typeof node === 'string') return htmle(node);
	let html = `<${node.tag} `;
	if(node.attrs) for(const name in node.attrs) html += `${name}="${htmle(node.attrs[name])}" `;
	html += '>';
	if(node.children) for(let i = 0; i < node.children.length; i++){
		const child = node.children[i];
		html += nodeToHtml(child);
	}
	return html + `</${node.tag}>`
}

export default function nodesToHtml(nodes){
	return nodes.map(nodeToHtml).join('\n')
}
