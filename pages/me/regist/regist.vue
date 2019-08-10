<template>
	<view class="container">
		<view class="content">
			<view class="part1">
				<view class="a smpt">
					<text>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</text>
					<input class="a1  kkt" id="nickName" type="text" placeholder="请输入昵称" v-model="nickname">
				</view>
				<view class="b  smpt">
					<text>手机号码：</text>
					<input class="b1  kkt" type="number" placeholder="请输入手机号" v-model="mobile">
				</view>
				<view class="c smpt">
					<text>短信验证：</text>
					<input class="c1" type="number" placeholder="请输入验证码" v-model="vcode">
					<view class="anniu">
						<text class="c2 kkt">发&nbsp;&nbsp;送</text>
					</view>
				</view>
				<view class="d  smpt">
					<text>身份证号：</text>
					<input class="d1  kkt" type="idcard" placeholder="请输入身份证号码" v-model="idcard">
				</view>
				<view class="e  smpt">
					<text>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</text>
					<input class="e1  kkt" type="password" placeholder="请输入密码" v-model="password">
				</view>
				<view class="f smpt">
					<text>确认密码：</text>
					<input class="f1  kkt" type="password" placeholder="请再次输入密码" v-model="confirmPwd">
				</view>
			</view>
			<view class="part2">
				<view class="login" @click="regist">
					<text class="dd1">立即注册</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickname: '',
				mobile: '',
				vcode: '',
				idcard: '',
				password: '',
				confirmPwd: ''
			}
		},
		methods: {
			regist() {
				if (this.nickname.trim() == '') {
					this.util.showWindow("昵称输入错误");
					return;
				} else if (this.mobile.trim()==''||!(/^1[3456789]\d{9}$/.test(this.mobile))){
					this.util.showWindow("电话号码输入错误");
					return;
				} else if (this.vcode.trim() == '') {
					this.util.showWindow("验证码输入错误");
					return;
				} else if (this.idcard.trim()==''||(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(this.idcard))==false) {
					this.util.showWindow("身份证号码错误");
					return;

				} else if (this.password.trim() == '') {
					this.util.showWindow("密码输入错误");
					return;
				}else if (this.confirmPwd.trim() == ''||this.password!=this.confirmPwd) {
					this.util.showWindow("确认密码输入错误");
					return;
				}
				let params = {
					"nickname":this.nickname,
					"mobile":this.mobile,
					"vcode":this.vcode,
					"idcard":this.idcard,
					"password":this.password
				};
				let url="/api/user/register";
				this.util.request(url,"POST",params,(res) => {
					if(res.statusCode==200){
						if(res.data.code==1){
							this.util.token = res.data.data.userinfo.token;
							uni.switchTab({
								url:"../../home/index/index"
							})
						}else{
							this.util.showWindow("注册失败");
						}
					}else{
						this.util.showWindow("注册请求失败");
					}
				});
				
				
			}
		}
	}
</script>

<style>
	* {
		/* border: 1upx solid blue; */
	}

	.content {
		font-size: 32upx;
		background-color: #FFFFFF;
		padding-top: 50upx;
	}

	input {
		width: 400upx;
		height: 58upx;
		/* background-color: ; */
		/* display: flex;
		justify-content:flex-end;
		align-items:stretch; */
	}

	.part1 {
		width: 95%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-direction: column;
		padding-top: 20upx;
	}

	.smpt {
		width: 80%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 35upx;
	}

	.c1 {
		/* color:#ffffff; */
		font-size: 28upx;
		font-weight: 146upx;
		line-height: 44upx;
		width: 240upx;
		margin-left: -14upx;
	}

	.part2 {
		width: 100%;
		height: 179upx;
	}

	.f {
		border-bottom: 1px solid #BFBFBF;
		padding-bottom: 100upx;
	}

	.smpt>text {
		/* font-weight: bold; */
	}

	.anniu {
		width: 130upx;
		height: 50upx;
		border-radius: 50upx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #14C790;
		color: #FFFFFF;
		font-size: 25upx;
	}

	.part2 {
		width: 100%;
		height: 280upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.login {
		width: 450upx;
		height: 88upx;
		background-color: #14c790;
		border-radius: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.dd1 {
		color: #ffffff;
		font-size: 36upx;
		font-weight: 105upx;
		line-height: 34upx;
	}
</style>
