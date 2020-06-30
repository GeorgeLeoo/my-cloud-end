const Jex = function () {}
const request = axios.create({
  baseURL: 'http://localhost:5900/jex/',
  timeout: 12000
})
Jex.User = function() {
  this.isUseCapture = false
  return {
    useCapture: (flg) => {
      this.isUseCapture = flg
    },
    login: (username, password, capture) => {
      return new Promise((resolve, reject) => {
        if (!username) {
          reject('用户名不能为空')
          return
        }
        if (!password) {
          reject('密码不能为空')
          return
        }
        const body = {
          username: username.trim(),
          password: password.trim()
        }
        if (this.isUseCapture) {
          if (!capture) {
            reject('验证码不能为空')
            return
          }
          body.capture = capture
        }
        request({
          url: `/user/sign-in`,
          method: 'post',
          data: body
        }).then((res) => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    register: ({ username, password, capture, email, phone }) => {
      return new Promise((resolve, reject) => {
        if (!username) {
          reject('用户名不能为空')
          return
        }
        if (!password) {
          reject('密码不能为空')
          return
        }
        const body = {
          username: username.trim(),
          password: password.trim()
        }
        email && (body.email = email)
        phone && (body.phone = phone)

        if (this.isUseCapture) {
          if (!capture) {
            reject('验证码不能为空')
            return
          }
          body.capture = capture
        }
        request({
          url: `/user/sign-up`,
          method: 'post',
          data: body
        }).then((res) => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    logout: () => {
      return new Promise((resolve, reject) => {
        request({
          url: `/user/logout`,
          method: 'post'
        }).then((res) => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    current: () => {
      return new Promise((resolve, reject) => {
        request({
          url: `/user/current`,
          method: 'post'
        }).then((res) => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
  }
}
Jex.Query = function (tableName) {
  this.tableName = tableName
  this.map = {}
  this.order = {}
  
	return {
    skip: (skipNumber) => {
      this.skipNumber = skipNumber
    },
    limit: (limitNumber) => {
      this.limitNumber = limitNumber
    },
    set: (key, value) => {
      this.map[key] = value
    },
    // 排序
    order: (key, type) => {
      if (['desc', 'asc'].includes(type)) {
        this.order[key] = type
      } else {
        throw new Error('type类型不正确')
      }
    },
    // 获取数量
    count: (condition = {}) => {
      return new Promise((resolve, reject) => {
        request({
          url: `/get/count/${this.tableName}`,
          method: 'post',
          data: condition
        }).then((res) => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 等于
    equalTo: () => {},
    // 或查询
    or: () => {},
    // 查询指定列
    select: () => {},
    // 查询
    get: (query) => {
			return new Promise((resolve, reject) => {
        let body = {}
        if (typeof query === 'string') {
          body.query = query
        }
        if (typeof query === 'object') {
          body = {
            query
          }
        }
        
        body.page = {
          skipNumber: this.skipNumber,
          limitNumber: this.limitNumber
        }
        if (Object.keys(this.order).length > 0) {
          body.order = this.order
        }
        request({
          url: `/get/${this.tableName}`,
          method: 'post',
          data: body
        }).then((res) => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 保存或更新
    save: (data = {}, query = {}) => {
      return new Promise((resolve, reject) => {
        if (this.map._id && Object.keys(query).length > 0) {
          reject('setId和query只能使用一个方法')
          return
        }
        if (this.map._id) {
          query = { _id: this.map._id }
        }
        const body = Object.assign({}, this.map, data)
        const keys = Object.keys(body)
        if (keys.length === 0) {
          reject('参数不能为空')
          return
        }
        request({
          url: `/post/${this.tableName}`,
          method: 'post',
          data: {
            data,
            query
          }
        }).then((res) => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        }) 
      })
    },
    // 删除
    remove: (data) => {
      return new Promise((resolve, reject) => {
        let body = {}
        if (typeof data === 'string') {
          body._id = data
        }
        if (typeof data === 'object') {
          body = data
        }
        if (Object.keys(body).length === 0) {
          reject('请传入参数')
          return
        }
        request({
          url: `/delete/${this.tableName}`,
          method: 'post',
          data: body
        }).then((res) => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

Jex.File = function() {
  return {
    save: () => {}
  }
}
