const query = Jex.Query('Bank')
  
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
// query
// 	.get()
// 	.then((res) => {
// 		console.log(res)
// 	})
// 	.catch((err) => {
// 		console.log(err)
//   })

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

const user = Jex.User()
user.current().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
