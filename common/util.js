import theApi from "@/common/api.js"

const token = null;
/**
 * 封装请求方法
 * url:请求地址
 * params：请求参数
 * method: 请求方式
 * success: 请求成功的回调
 */
function request(url,method,params,success) {
	if(token!=null){
		params["token"]=token;
	}
	console.log("提交地址:"+theApi.testurl+url);
	console.log("提交参数:"+params);
	uni.request({
		url: theApi.testurl+url,
		method: method,
		// header: {'content-type': 'application/json'},
		header: {'content-type': 'application/x-www-form-urlencoded',
				// 'Access-Control-Allow-Headers':'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
				// 'Access-Control-Allow-Origin':theApi.testurl
				},
		data: params,
		success: success,
		fail: (error) => {
			if (error.errMsg == "request:fail timeout") { //网络请求超时
				showWindow("网络不稳定，请检查网络设置");
			} else if (error.errMsg == "request:fail 请求超时。") {
				showWindow("网络不稳定，请检查网络设置");
			} else if (error.errMsg == "request:fail ") {
				showWindow("请求失败");
			} else {
				showWindow("加载失败");
			}
		},
		complete: () => {}
	});
};

function isSuccess(data) {
	if (data.result) {
		if (data.result.status == "failed") {
			loadClose()
			showWindow(data.result.data.message);
			return false
		} else {
			//status可能是“none” 或者“success”
			return true
		}
	} else {
		loadClose()
		showWindow("加载失败");
		return false
	}
};



function showWindow(txt) {
	uni.showToast({
		title: txt,
		icon: "none",
		duration: 2000
	})
}


/**
 * 预览图片
 * imageList：图片集合
 * index：当前图片index
 */
function previewImage(imageList, index) {
	uni.previewImage({
		current: imageList[index],
		urls: imageList
	});
}

export default{
	request,
	isSuccess,
	showWindow,
	previewImage,
	token
}
