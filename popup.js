function moveToVimeoAdvanced() {
	// url matches https://vimeo.com/manage/videos/
	const url = new URL(window.location.href)

	// ref
	const match = url.href.match(/https:\/\/vimeo.com\/manage\/videos\/(\d+)$/)

	console.log(match);
	if(!match) return

	const id = match[1]
	const newUrl = `https://vimeo.com/manage/${id}/advanced`
	window.location.href = newUrl

	// const isVimeo = url.hostname === 'vimeo.com' && url.pathname.includes('/manage/videos/')

	// if(!isVimeo) return;
	
	// // add path to url
	// const path = url.pathname.split('/').filter(Boolean)
	// path.push('advanced')
	// url.pathname = path.join('/')
}

moveToVimeoAdvanced()
