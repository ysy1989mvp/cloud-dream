import theApi from "@/common/api.js"
const data = {
	"data": {
		"code": 1,
		"msg": "",
		"time": "1565361257",
		"data": {
			"uploadurl": "https://upload-z2.qiniup.com",
			"cdnurl": "http://cdn.douke.51dreaming.com",
			"savekey": "/uploads/{year}{mon}{day}/{filemd5}{.suffix}",
			"maxsize": "10M",
			"mimetype": "jpg,png,bmp,jpeg,gif,zip,rar,xls,xlsx",
			"multiple": false,
			"bucket": "douke",
			"multipart": {
				"token": "sJw9Qcazsr_MfxUSyeQyj6WTJ83owE6tjjz1KODF:6vnGOFux7igQYWH190R0jbqhikA=:eyJzYXZlS2V5IjoidXBsb2Fkc1wvJCh5ZWFyKSQobW9uKSQoZGF5KVwvJChldGFnKSQoZXh0KSIsInNjb3BlIjoiZG91a2UiLCJkZWFkbGluZSI6MTU2NTM2MTg1N30=",
				"admin": 0,
				"user": 0
			}
		}
	},
	"statusCode": 200,
	"header": {
		"Transfer-Encoding": "chunked",
		"Server": "nginx",
		"Connection": "keep-alive",
		"Pragma": "no-cache",
		"X-Android-Received-Millis": "1565361256839",
		"Date": "Fri, 09 Aug 2019 14:34:17 GMT",
		"X-Android-Selected-Protocol": "http/1.1",
		"Cache-Control": "no-store, no-cache, must-revalidate",
		"X-Android-Response-Source": "NETWORK 200",
		"Expires": "Thu, 19 Nov 1981 08:52:00 GMT",
		"X-Android-Sent-Millis": "1565361256338",
		"Content-Type": "application/json; charset=utf-8",
		"X-Powered-By": "PHP/7.1.5"
	},
	"errMsg": "request:ok"
}
const token = null;
// "data": {
//     "uploadurl": "https://upload-z2.qiniup.com",
//     "cdnurl": "http://cdn.douke.51dreaming.com",
//     "savekey": "/uploads/{year}{mon}{day}/{filemd5}{.suffix}",
//     "maxsize": "10M",
//     "mimetype": "jpg,png,bmp,jpeg,gif,zip,rar,xls,xlsx",
//     "multiple": false,
//     "bucket": "douke",
//     "multipart": {
//       "token": "sJw9Qcazsr_MfxUSyeQyj6WTJ83owE6tjjz1KODF:CAmFMpepABq2cP2cr1ZGRztiRsM=:eyJzYXZlS2V5IjoidXBsb2Fkc1wvJCh5ZWFyKSQobW9uKSQoZGF5KVwvJChldGFnKSQoZXh0KSIsInNjb3BlIjoiZG91a2UiLCJkZWFkbGluZSI6MTU2NTM1OTY1Nn0=",
//       "admin": 0,
//       "user": 0
//     }
const uploaddata = null;
/**
 * 封装请求方法
 * url:请求地址
 * params：请求参数
 * method: 请求方式
 * success: 请求成功的回调
 */
function request(url, method, params, success) {
	if (this.token != null) {
		params["token"] = this.token;
	}
	console.log("提交地址:" + theApi.testurl + url);
	console.log("提交参数:" + params);
	uni.request({
		url: theApi.testurl + url,
		method: method,
		// header: {'content-type': 'application/json'},
		header: {
			'content-type': 'application/x-www-form-urlencoded',
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

// "data": {
//     "uploadurl": "https://upload-z2.qiniup.com",
//     "cdnurl": "http://cdn.douke.51dreaming.com",
//     "savekey": "/uploads/{year}{mon}{day}/{filemd5}{.suffix}",
//     "maxsize": "10M",
//     "mimetype": "jpg,png,bmp,jpeg,gif,zip,rar,xls,xlsx",
//     "multiple": false,
//     "bucket": "douke",
//     "multipart": {
//       "token": "sJw9Qcazsr_MfxUSyeQyj6WTJ83owE6tjjz1KODF:CAmFMpepABq2cP2cr1ZGRztiRsM=:eyJzYXZlS2V5IjoidXBsb2Fkc1wvJCh5ZWFyKSQobW9uKSQoZGF5KVwvJChldGFnKSQoZXh0KSIsInNjb3BlIjoiZG91a2UiLCJkZWFkbGluZSI6MTU2NTM1OTY1Nn0=",
//       "admin": 0,
//       "user": 0
//     }
// uploaddata
function requestImg(method, params, file, success) {
	params["token"] = this.uploaddata.multipart.token;
	// params["bucket"] = this.uploaddata.bucket;
	console.log("文件路径filePath："+file);
	console.log("上传的formData："+JSON.stringify(params));
	uni.uploadFile({
		url: this.uploaddata.uploadurl, // 后端api接口
		filePath: file, // uni.chooseImage函数调用后获取的本地文件路劲
		name: 'file', //后端通过'file'获取上传的文件对象
		fileType:'image',
		formData: params,
		header: {
			"Content-Type": "multipart/form-data"
		},
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

function requestType(url, method, params, contentType, success) {
	if (token != null) {
		params["token"] = this.token;
	}
	console.log("提交地址:" + theApi.testurl + url);
	console.log("提交参数:" + params);
	uni.request({
		url: theApi.testurl + url,
		method: method,
		// header: {'content-type': 'application/json'},
		header: {
			'content-type': contentType,
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

export default {
	request,
	isSuccess,
	showWindow,
	previewImage,
	token,
	requestImg,
	requestType,
	uploaddata
}
