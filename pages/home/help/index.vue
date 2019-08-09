<template>
	<view class="content">
		<view class="part" style="text-align: center;">
			<uni-tag class="tag" v-for="tag of tags" :key="tag" :text="tag" type="default" :circle="true"></uni-tag>
		</view>
		<view style="margin-top: 5%;">
			<uni-list-item class="item" v-for="item of list" :key="item" :title="item" show-arrow="false"></uni-list-item>
		</view>
	</view>
</template>

<script>
	import uniTag from "@/components/uni-tag/uni-tag.vue"
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'

	export default {
		components: {
			uniTag,uniListItem
		},
		data() {
			return {
				tags:[
					'操作问题',
					'提现问题',
					'应用教程',
					'其他文件'
				],
				list:[
					'1、如何开通VIP',
					'2、开通VIP有什么好处',
					'3、抖音点赞方法',
					'4、如何获取更多金币',
					'5、如何开通VIP',
					'6、如何开通VIP'
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.content {
		background-color: #FFFFFF;
		height: 100vh;
	}
	.item {
		height: 200px;
	}
	.uni-list-cell {
		height: 50px;
	}
	.tag{
		font-size: 32upx;
		padding:2upx 20upx;
		margin: 20upx 10upx;
		background-color: #d5d5d5;
		color:#000000;
		border-radius: 20upx;
		margin-bottom: 0upx;
	}
</style>
