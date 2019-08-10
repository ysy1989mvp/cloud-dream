<template>
	<view class="container">
		<view class="content">
			<view class="part1">
				<view class="part_11">
					<image class="img" src="../../../static/image/yangsongyan/logo.png"></image>
				</view>
			</view>
			<view class="part2">
				<view class="part_21">
					<view class="label">
						<text>电&nbsp;&nbsp;话:</text>
					</view>
					<view class="part_212">
						<input type="number" placeholder="请输入手机号码" maxlength="11" data-key="mobile" v-model="mobile" />
					</view>
				</view>
				<view class="part_22">
					<view class="label">
						<text>密&nbsp;&nbsp;码:</text>
					</view>
					<view class="part_212">
						<input type="password" placeholder="请输入密码" v-model="password" />
					</view>
				</view>
				<view class="part_23">
					<text @click="resetPwd">修改密码</text>
					<text class="txt_zzts" @click="noHaveUserName">注&nbsp;&nbsp;册</text>
				</view>
			</view>
			<view class="part3">
				<view class="login_btn" @click="logining">
					<text>登&nbsp;&nbsp;&nbsp;&nbsp;录</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				password: ''
			}
		},
		methods: {
			logining() {
<<<<<<< HEAD
				if (this.mobile.trim() == '' || !(/^1[3456789]\d{9}$/.test(this.mobile))) {
					this.util.showWindow("电话号码格式错误");
					return;
				} else if (this.password.trim() == '') {
					this.util.showWindow("密码输入错误");
					return;
				}
=======
				// if (this.mobile.trim() == '' || !(/^1[3456789]\d{9}$/.test(this.mobile))) {
				// 	util.showWindow("电话号码格式错误");
				// 	return;
				// } else if (this.password.trim() == '') {
				// 	util.showWindow("密码输入错误");
				// 	return;
				// }
>>>>>>> 263f9d5cd1ec9c4910d8c9d74d6ee327c80d0990
				let params = {
					"mobile": this.mobile,
					"password": this.password
				};
				let url = "/api/user/login";

				this.util.request(url, "GET", params, (res) => {
					console.log("登录返回:"+JSON.stringify(res));
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.util.token = res.data.data.userinfo.token;
							/**********************************/
							this.util.request('/api/common/uploadconfig?token='+this.util.token, "GET", params, (res1) => {
								console.log("配置返回:"+JSON.stringify(res1));
								if (res1.statusCode == 200) {
									if (res1.data.code == 1) {
											this.util.uploaddata = res1.data.data;
											console.log("获取到的上传文件参数配置:"+JSON.stringify(this.util.uploaddata));
									}else{
										this.util.showWindow("配置获取错误");
										return;
									}
								} else {
									this.util.showWindow("配置请求错误");
								}
							});
							/**********************************/
							uni.switchTab({
								url: "../../home/index/index"
							})
						}else{
							this.util.showWindow("账号或密码错误");
							return;
						}
					} else {
						this.util.showWindow("登录请求错误");
					}
				});
				uni.switchTab({
					url: "../../home/index/index"
				})
			},
			noHaveUserName() {
				uni.navigateTo({
					url: "../regist/regist"
				})
			},
			resetPwd() {
				uni.navigateTo({
					url: "../modify-password/modify-password"
				})
			}
		},
	}
</script>

<style>
	.container {
		background-color: #FFFFFF;
	}

	.label {
		font-size: 30upx;
		line-height: 88upx;
		margin-right: 20upx;
	}

	.uni-page-head {
		background-color: #1BCC8D;
	}

	.img {
		width: 60%;
		height: 65%;
	}

	.part1 {
		width: 100%;
		height: 300upx;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.part2 {
		width: 100%;
		height: 320upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 100upx;


	}

	.part3 {
		width: 100%;
		height: 200upx;
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
		margin-top: 20upx;
	}

	.part_11 {
		width: 110upx;
		height: 110upx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #E5E5E5;
		border-radius: 20upx;
	}

	.part_21 {
		width: 80%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

	}

	.part_22 {
		width: 80%;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 10upx;
		justify-content: center;
	}

	.part_23 {
		width: 80%;
		display: flex;
		flex-direction: row-reverse;
		font-size: 24upx;
		margin-right: 30upx;
	}

	.part_23>text {
		background-color: #14c790;
		border-radius: 10upx;
		margin-right: 20upx;
		color: white;
		font-size: 25upx;
		padding-left: 10upx;
		padding-right: 10upx;
	}

	.part_212 input {
		width: 435upx;
		height: 60upx;
		/* 
		border: 1px solid #FFFFFF;
		background-color: #FFFFFF; */
	}

	.txt_zzts {
		color: #14C790;
	}

	.login_btn {
		width: 350upx;
		height: 88upx;
		background-color: #14c790;
		border-radius: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
