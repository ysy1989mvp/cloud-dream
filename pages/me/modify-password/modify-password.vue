<template>
	<view class="container">
		<view class="content">
			<view class="part1">
				<view class="b  smpt">
					<text>手机号码：</text>
					<input class="b1  kkt" type="number" 
					placeholder="请输入手机号">
				</view>
				<view class="c  smpt">
					<text>短信验证：</text>
					<input class="c1" type="text" 
					placeholder="请输入验证码">
					<view class="anniu button_ysy" @click="smsSend">
						<text class="c2 kkt">{{send}}</text>
					</view>
				</view>
				<view class="e  smpt">
					<text>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</text>
					<input class="e1  kkt" type="password" 
					placeholder="请输入密码" >
				</view>
				<view class="f smpt">
					<text>确认密码：</text>
					<input class="f1  kkt" type="password" 
					placeholder="请再次输入密码">
				</view>
			</view>
			<view class="part2">
				<view class="login button_ysy">
					<text class="dd1" @click="confirm">确认重置</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				send:"发 送"
			}
		},
		methods: {
			smsSend(){
				let params = {
					"mobile":this.mobile,
					"event":"register"
				};
				let url="/api/sms/send";
				this.util.request(url,"POST",params,(res) => {
					if(res.statusCode==200){
						if(res.data.code==1){
							this.util.showWindow("验证码发送成功");
							this.send = 60;
							setInterval(()=>{
								if(this.send>0){
									this.send--;
								}
							},1000);
						}else{
							this.util.showWindow(res.data.msg);
						}
					}else{
						this.util.showWindow("请求失败");
					}
				});
			},
			confirm(){
				uni.navigateTo({
					url:"../reset-pwd-result/reset-pwd-result"
				})
			}
		}
	}
</script>

<style>
	*{
		/* border: 1upx solid blue; */
	}
	.content{
		font-size:32upx;
		background-color:#FFFFFF ;
		padding-top: 50upx;
	}
	input{
		width: 400upx;
		height: 58upx;
	}
	.part1{
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-direction: column;
		padding-top: 20upx;
	}
	.smpt{
		width: 75%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 35upx;
	}
	.c1{
		/* color:#0000FF; */
		font-size:28upx ;
		font-weight: 146upx;
		line-height: 44upx;
		width: 240upx;
		margin-left:-24upx;
	}
	.part2{
		width: 100%;
		height: 179upx;
	}
	.f{
		border-bottom: 1px solid #BFBFBF;
		padding-bottom: 100upx;
	}
	.anniu{
		width: 130upx;
		height: 50upx;
		border-radius:50upx ;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color:#14C790 ;
		color: #FFFFFF;
		font-size: 25upx;
	}
	.part2{
		width: 100%;
		height: 280upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.login{
		width: 450upx;
		height: 88upx;
		background-color:#14c790;
		border-radius: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dd1{
		color:#ffffff;
		font-size:36upx ;
		font-weight: 105upx;
		line-height: 34upx;
	}
</style>
