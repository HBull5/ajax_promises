const posts = [
	{ title: 'Post #1', msg: 'This is message number 1.' },
	{ title: 'Post #2', msg: 'This is message number 2.' },
	{ title: 'Post #3', msg: 'This is message number 3.' }
];
// const ul = document.querySelector('ul');

/**
 * CALLBACKS
 */
// function createPost({ title, msg }, cb) {
// 	posts.push({ title, msg });
// 	cb();
// }

// function getPosts() {
// 	ul.innerHTML = '';
// 	for (const post of posts) {
// 		ul.innerHTML += `<li>${post.title}</li>`;
// 	}
// }

// getPosts();

// createPost({ title: 'Post #4', msg: 'This is message number 4.' }, getPosts);

/**
 * Promises RESOLVE
 *
 * resolve => .then()
 * reject => .catch()
 */
// function createPost({ title, msg }) {
// 	// posts.push({ title, msg });
// 	return new Promise((resolve, reject) => {
// 		posts.push({ title, msg });
// 		resolve();
// 	});
// }

// function getPosts() {
// 	ul.innerHTML = '';
// 	for (const post of posts) {
// 		ul.innerHTML += `<li>${post.title}</li>`;
// 	}
// }

// getPosts();

// createPost({ title: 'lion king', msg: 'mufasa nooooo' }).then(() => {
// 	getPosts();
// });

/**
 * Promises REJECT
 */
// function createPost({ title, msg }) {
// 	return new Promise((resolve, reject) => {
// 		if (title === '' || typeof title !== 'string') {
// 			reject('Error incorrect title');
// 		} else {
// 			posts.push({ title, msg });
// 			resolve();
// 		}
// 	});
// }

// function getPosts() {
// 	ul.innerHTML = '';
// 	for (const post of posts) {
// 		ul.innerHTML += `<li>${post.title}</li>`;
// 	}
// }

// function displayError(err) {
// 	ul.innerHTML = err;
// }

// getPosts();

// createPost({ title: 'lion king', msg: 'mufasa nooooo' })
// 	.then(() => {
// 		getPosts();
// 	})
// 	.catch((errMsg) => {
// 		displayError(errMsg);
// 	});

// createPost({ title: '', msg: 'mufasa nooooo' })
// 	.then(() => {
// 		getPosts();
// 	})
// 	.catch((errMsg) => {
// 		displayError(errMsg);
// 	});

// function promise(err) {
// 	return new Promise((resolve, reject) => {
// 		if (err) {
// 			reject('Error!');
// 		} else {
// 			resolve('Success');
// 		}
// 	});
// }

// promise(true)
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// promise(false)
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

/**
 * Promises in variables
 */
// const promise1 = new Promise((resolve, reject) => {
// 	resolve('success for promise #1');
// });

// const promise2 = new Promise((resolve, reject) => {
// 	resolve('There was an error w/ your request');
// });

// const promise3 = new Promise((resolve, reject) => {
// 	resolve('good job you did that.');
// });

// const promise4 = new Promise((resolve, reject) => {
// 	resolve('something new to look @@@@@@ erorr');
// });

// promise2
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

/**
 * Promise.all()
 */
// Promise.all([promise1, promise2, promise3, promise4])
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

/**
 * Async/Await
 */
// Making our promise
// function promise(err) {
// 	return new Promise((resolve, reject) => {
// 		if (err) {
// 			reject('Error!');
// 		} else {
// 			resolve('Success');
// 		}
// 	});
// }

// consume our promise w/ async and await
// async function consumePromise() {
// 	const response = await promise(true);
// 	console.log(response);
// }

// consumePromise().catch((err) => console.log(err));

/**
 * AJAX
 * Asynchronous Javascript And XML
 * XML === JSON
 */
const ul = document.querySelector('ul');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.icndb.com/jokes/random?limitTo=[nerdy]', true);

xhr.onload = function () {
	console.log(this.responseText);
	const joke = JSON.parse(this.responseText).value.joke;
	console.log(joke);
	ul.innerHTML = `<li>${joke}</li>`;
};

xhr.send();
