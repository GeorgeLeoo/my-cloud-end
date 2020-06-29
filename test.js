const Bmob = function () {}

Bmob.Query = function (tableName) {
  this.tableName = tableName
  this.map = {}
	return {
    get: (objectId) => {
			return new Promise((resolve, reject) => {
        const body = {
          objectId
        }
        request({
          url: `/get/${this.tableName}`,
          method: 'post',
          data: body
        }).then((res) => {
          resolve('get success')
        }).catch(err => {
          reject('err')
        })
      })
    },
    set: (key, value) => {
      this.map[key] = value
    },
    save: () => {
      return new Promise((resolve, reject) => {
        const body = this.map
        request({
          url: `/post/${this.tableName}`,
          method: 'post',
          data: body
        }).then((res) => {
          resolve('set success')
        }).catch(err => {
          reject('err')
        }) 
      })
    }
  }
}

const query = Bmob.Query('tableName')

query
	.get('objectId')
	.then((res) => {
		console.log(res)
	})
	.catch((err) => {
		console.log(err)
  })
  
query.set("name","Bmob")
query.set("cover","后端云")
query.save().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})


Router.post('/tableName', async function (req, res) {
  let body = req.body
  if (body.method === 'get') {
  
  }
  if (body.method === 'post') {}
  if (body.method === 'put') {}
  if (body.method === 'delete') {}
})