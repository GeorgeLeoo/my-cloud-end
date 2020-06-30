const query = Jex.Query('Bank')

// query.select('name', 'url', '_id')
// query.unSelect('name', 'url', '_id')
// query.increment('5efabb067c56c32d6622a295', { status: -2 })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// query.set("_id","5efaeeb6f6b0784b21fa0942")
// // query.set("url","dasdasd")
// query.save({url: 'ttttt'}).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
// query.skip(1)
// query.limit(10)
// query.order('name', 'desc')
const q1 = query.equalTo('status', '<', 10)
const q2 = query.equalTo('status', '>', 2)
query.or(q1, q2)
query.and(q1, q2)
query
	.get()
	.then((res) => {
		console.log(res)
	})
	.catch((err) => {
		console.log(err)
  })

// query.remove('5efaeeb6f6b0784b21fa0942')
// 	.then((res) => {
//   		console.log(res)
//   	})
//   	.catch((err) => {
//   		console.log(err)
//     })

// query.count({ name: "Bmob" }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// const user = Jex.User()
// user.current().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

