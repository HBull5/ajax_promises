## Callbacks: are a function definition that is passed as a parameter into a function, the expectation is to later call that function based on what you defined the parameter as, cb is the most common convention.

```js
function add(num1, num2, cb) {
	const sum = num1 + num2;
	cb(sum);
}

function addOne(num) {
	console.log(num + 1);
}

add(2, 2, (data) => {
	console.log(data);
});

add(2, 2, addOne);
```

## Promise: Are a better way to handle callbacks. If we want the async behavior from a function call (most common) we can do this by return new Promise((resolve, reject) => { // promise body }). Inside of our promise body if we call resolve() we call our .then(cb) callback, if we reject we call the .catch(cb) callback. We can ONLY have one happen, i.e. we cannot have a promise both resolve and reject. Anything we pass into our resolve() or reject() will be available in the callback function of the .then() or .catch() respectively.

```js
function myPromise() {
	return new Promise((resolve, reject) => {
		resolve('Help you understand promises!');
	});
}

myPromise().then((promise) => {
	console.log(promise);
});

function myPromise2(errBool) {
	return new Promise((resolve, reject) => {
		if (errBool) {
			reject('ERROR! Promise broken.');
		} else {
			resolve('Promise kept');
		}
	});
}

myPromise2(false)
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});
```

## Promise.all():
