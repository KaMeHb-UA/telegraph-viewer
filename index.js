import main from './pages/main.js'

const pages = {
	main,
};

registerAction('getPage', async name => {
	if(name in pages) return await pages[name]();
	return pages.notFound()
})
