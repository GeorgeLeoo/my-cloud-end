const query = Jex.Query('Banks')

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
// query.set("url","xm.com")
// query.set("users","5efcad905005e536622287c8")
// query.save().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
// query.skip(1)
// query.limit(10)
// query.order('name', 'desc')
// const q1 = query.equalTo('status', '<', 10)
// const q2 = query.equalTo('status', '>', 2)
// query.or(q1, q2)
// query.and(q1, q2)
// select: ['username', 'email'], unselect: ['password']
// query.reference({ 'Users': { select: ['username', 'email'], unselect: ['password', 'email'] } })
query.reference('Users')
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

// const users = Jex.Query('Users')
// users.set('username', 'xm')
// users.set('password', '123')
// users.set('email', '123@qq.com')
// users.set('phone', '123456')
// users.save().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
