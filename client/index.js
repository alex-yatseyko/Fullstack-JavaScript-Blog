// Native JS view template
const card = post => {
	return `
	<div class="card blue-grey darken-1 z-depth-4">
		<div class="card-content white-text">
			<span class="card-title">${post.title}</span>
			<p>${post.text}</p>
			<small>${post.date}</small>
		</div>
		<div class="card-action">
			<button class="btn btn-small red">
			    <i class="material-icons">delete</i>
			</button>
		</div>
	</div>
	`
}

// Request to the Back-End
class PostApi {
	static fetch() {
		
	}
}