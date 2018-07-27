import "whatwg-fetch"  
import promise from "es6-promise"  
  
/**
 * Created by mwuyz on 2016/10/28.
 */
import "whatwg-fetch"

//nginx proxy https://m.jspfanli.com/api/
const host_addr='http://localhost/'

/* 
 *获取列表 
 */  
export let getList = async (type, risk,pageId,search) => {  
  let response = await fetch(host_addr+'invest/get_activity_list', {  
    method: 'POST',  
    body:{"type":type,"risk":risk,"pageId":pageId,"search":search},
    mode: 'cors',  
  }).catch((error) => {  
    console.log(error)  
  })  
  return await response.json().catch((error) => {  
    console.log(error)  
  })  
} 