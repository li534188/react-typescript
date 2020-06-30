class Ajax {
    get(url:string) {
      return new Promise<any>((resolve, reject) => {
        fetch(url)
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err))
      })
    }
    // post方式
    post(url:string, data:object) {
      return new Promise<any>((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err))
  
      })
    }
  
  
    //put 修改
    put(url:string, data:object) {
      return new Promise<any>((resolve, reject) => {
        fetch(url, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err))
  
      })
    }
  
    //delete
    delete(url:string, data:object) {
      return new Promise<any>((resolve, reject) => {
        fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => resolve('数据删除成功!'))
          .catch(err => reject(err))
      })
    }
  }
  export default new Ajax();//ES6导出