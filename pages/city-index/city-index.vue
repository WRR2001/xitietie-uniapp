<template>
	<view v-if="isLoading" style="font-size: 100px;">
		加载中...
	</view>
	<view class="flex-box" v-else>
		<view class="tab">
			<zb-tab :activeStyle="{
				    fontWeight: 'bold',
				    transform: 'scale(1.1)'
				    }" :data="tablist" v-model="active" height="44">
			</zb-tab>
		</view>

		<!-- 国内 -->
		<view v-if="active === 0" class="index">
			<!-- 此索引组件只能在外面套一层view容器 -->
			<uni-indexed-list :options="transformedData" @click="bindClick" :show-select="false" />
		</view>
		<!-- 海外 -->
		<view v-else-if="active === 1">
			海外门店
		</view>

	</view>
</template>

<script setup>
	import {
		ref,
		defineEmits
	} from 'vue';
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		postCityIndexAPI
	} from '@/api/city';

	//控制骨架屏/加载gif
	const isLoading = ref(true)

	const tablist = [{
			name: '国内（含港澳台）',
			value: 0,
		},
		{
			name: '海外',
			value: 1,
		}
	]
	const active = ref(0)
	//------------------------------------------------------------
	const cityIndex = ref([])
	const transformedData = ref([]);

	const transformData = (data) => {
		const groupedData = {};
		// 遍历原始数据，按首字母分组
		data.forEach(item => {
			const letter = item.initial_alphabet;
			const cityName = item.city;
			const cityId = item.city_code

			if (!groupedData[letter]) {
				groupedData[letter] = [];
			}
			groupedData[letter].push({
				name: cityName,
				id: cityId
			});
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
		console.log('Transformed Data:', transformedData.value);

		//请求到数据后销毁骨架屏
		isLoading.value = false
	};

	const bindClick = (e) => {
		// console.log(JSON.stringify(e))
		const cityId = e.item.id;
		uni.navigateTo({
			url: `/pages/explore-shop/explore-shop?selectedCityId=${cityId}`
		});
	}

	onLoad(() => {
		console.log('city-index onLoad');
		postCityIndexRes()
	});
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