<template>
	<view class="flex-box">
		<view class="tab">
			<zb-tab :activeStyle="{
			    fontWeight: 'bold',
			    transform: 'scale(1.1)'
			    }" :data="tablist" v-model="active" height="44">
			</zb-tab>
		</view>

		<view class="index">
			<uni-indexed-list :options="transformedData" @click="bindClick" :show-select="false" />
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		postCityIndexAPI
	} from '@/api/city';

	const tablist = [{
			name: '国内',
			value: 0,
		},
		{
			name: '海外',
			value: 1,
		}
	]
	const active = ref(0)



	const cityIndex = ref([])
	const transformedData = ref([]);

	const transformData = (chinaAreas) => {
		const groupedData = {};

		// 遍历原始数据，按首字母分组
		chinaAreas.forEach(item => {
			const letter = item.initial_alphabet;
			const cityName = item.city;

			if (!groupedData[letter]) {
				groupedData[letter] = [];
			}
			groupedData[letter].push(cityName);
		});

		// 转换为目标格式
		const result = Object.keys(groupedData).map(letter => ({
			letter,
			data: groupedData[letter]
		}));

		return result;
	};


	const postCityIndexRes = async () => {
		const res = await postCityIndexAPI({
			keyword: ""
		});
		const chinaAreas = res.data.china_areas;
		transformedData.value = transformData(chinaAreas);
		console.log(transformedData)
	};

	onLoad(() => {
		console.log('city-index onLoad');
		postCityIndexRes()
	});


	const list = [{
			'letter': 'A',
			'data': [
				'阿克苏机场',
				'阿拉山口机场',
				'阿勒泰机场',
				'阿里昆莎机场',
				'安庆天柱山机场',
				'澳门国际机场'
			]
		},
		{
			'letter': 'B',
			'data': [
				'保山机场',
				'包头机场',
				'北海福成机场',
				'北京南苑机场',
				'北京首都国际机场'
			]
		},
		{
			'letter': 'C',
			'data': [
				'保山机场',
				'包头机场',
				'北海福成机场',
				'北京南苑机场',
				'北京首都国际机场'
			]
		},
	]
</script>

<style lang="scss">
	.flex-box {
		display: flex;
		flex-direction: column;
		/* 使用列方向布局 */
		height: 100vh;
		/* 让整个视图占满窗口高度 */
	}

	.tab {
		flex: 0 0 auto;
		/* 固定高度，不允许扩展 */
	}

	.index {
		flex: 1 1 auto;
		/* 让索引组件填充剩余空间 */
		position: relative;
		/* 设置父容器相对定位 */
		margin-top: 10px;
		/* 通过 margin-top 调整位置，确保不覆盖顶部内容 */
		overflow-y: auto;
		/* 允许垂直滚动 */
	}
</style>