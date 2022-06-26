import config from "../config.json";

export default class Request {
  static domain = config.sapi;
  static domainf = config.sapif;

  /**
   * 
   * @param {string} path 
   * @param {object} headers // key-value pairs
   * @param {Function} cb // if error
   */
  static async get (path, headers, cb)
  {
    try {
      let local_path = path.startsWith("~>") ? this.domain + path.substring(2, path.length) : this.domainf + path
      const res = await fetch(local_path, {
        method: "GET",
        headers: headers || {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.getToken()}`
        }
      })
      const content_type = res.headers.get("Content-Type");
      if(content_type.search("application/json") !== -1) {
        await cb(null, await res.json(), res.status, "json");
      }else{
        await cb(null, res, res.status, "non-json")
      }
    } catch (e) {
      await cb(e, null, 0);
    }
  }

  /**
   * 
   * @param {string} path 
   * @param {object} headers // key-value pairs
   * @param {Function} cb // if error
   */
   static async post (path, headers, data, cb)
   {
     try {
       let local_path = path.startsWith("~>") ? this.domain + path.substring(2, path.length) : this.domainf + path
       const res = await fetch(local_path, {
         method: "POST",
         headers: headers || {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${this.getToken()}`
         },
         body: JSON.stringify(data)
       })
       const content_type = res.headers.get("Content-Type");
       if(content_type.search("application/json") !== -1) {
         await cb(null, await res.json(), res.status);
       }else{
         await cb(null, res, res.status)
       }
     } catch (e) {
       await cb(e, null, 0);
     }
   }

   /**
   * 
   * @param {string} path 
   * @param {object} headers // key-value pairs
   * @param {Function} cb // if error
   */
    static async delete (path, headers, data, cb)
    {
      try {
        let local_path = path.startsWith("~>") ? this.domain + path.substring(2, path.length) : this.domainf + path
        const res = await fetch(local_path, {
          method: "DELETE",
          headers: headers || {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.getToken()}`
          },
          body: JSON.stringify(data)
        })
        const content_type = res.headers.get("Content-Type");
        if(content_type.search("application/json") !== -1) {
          await cb(null, await res.json(), res.status);
        }else{
          await cb(null, res, res.status)
        }
      } catch (e) {
        await cb(e, null, 0);
      }
    }

    static getToken ()
    {
      return localStorage.getItem("wordpress-token") || ""
    }



}