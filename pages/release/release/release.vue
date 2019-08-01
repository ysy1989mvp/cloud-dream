<template>
	<view class="container">
		<view class="content">
			
			
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				tabs: ["全部", "进行中", "已完成"],
				current: 0,
				sliderOffset: 0,
				sliderLeft: 0,
			}
		},
		methods: {
			tabClick: function(e) {
				this.sliderOffset = e.currentTarget.offsetLeft;
				this.current = e.currentTarget.dataset.index;
			},
		}
	}
</script>

<style>

</style>
