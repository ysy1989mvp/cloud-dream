<template>
	<view>
		<view class="head">
			<span class="headcolm">单号</span>
			<span class="headcolm">金额</span>
			<span class="headcolm">时间</span>
			<span class="headcolm">来源</span>
		</view>
		<scroll-view class="table">
			<view class="tablecolm" v-for="data of table" :key="data">
				<span class="cell">{{data.id}}</span>
				<span class="cell">{{data.accounts}}</span>
				<span class="cell">{{data.time}}</span>
				<span class="cell source">{{data.source}}</span>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				table:[
					{
						id:'10023530',
						accounts:'21',
						time:'2019-12-01',
						source:'新增下级'
					},
					{
						id:'25142325',
						accounts:'200',
						time:'2019-11-04',
						source:'推广会员'
					},
					{
						id:'60021111',
						accounts:'113',
						time:'2019-10-02',
						source:'团队奖'
					},
					{
						id:'40000005',
						accounts:'2.45',
						time:'2019-10-02',
						source:'代理返点'
					},
					{
						id:'45616183',
						accounts:'2',
						time:'2019-08-14',
						source:'推广会员'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.head{
		width: 100%;
		height: 100upx;
		background-color: #FFFFFF;
	}
	.headcolm{
		width: 25%;
		line-height: 100upx;
		text-align: center;
		float: left;
	}
	.tablecolm{
		width: 100%;
		height: 120upx;
		background-color: #FFFFFF;
		margin-top: 10upx;
	}
	.cell{
		line-height: 120upx;
		text-align: center;
		width: 25%;
		float: left;
		font-size: 14px;
		color: #666666;
	}
	.source{
		color: #FB7551;
	}
</style>
