<template>
	<view class="background">
		<view class="tab">
			<zb-tab :activeStyle="{
			    fontWeight: 'bold',
			    transform: 'scale(1.1)'
			    }" :data="tablist" v-model="active" height="44">
			</zb-tab>
		</view>

		<view v-if="isLoading" style="font-size: 100px;">
			加载中...
		</view>
		<view v-else>
			<!-- 城市选择器 -->
			<view class="navbar-diy">
				<navigator url="/pages/city-index/city-index" open-type="navigate">
					<view class="left">
						<view class="text">
							{{cityName}}
						</view>
						<uni-icons class="icon" type="down" size="20"></uni-icons>
					</view>
				</navigator>
				<view class="right">
					<view class="f-button"></view>
				</view>
			</view>

			<!-- 门店列表 -->
			<view :key="active" class="tab-content">
				<!-- 待开业门店 -->
				<ShopList v-if="active === 0" :list="filterShopList" />
				<!-- 全部门店 -->
				<ShopList v-else="active === 1" :list="shopList" />
			</view>
		</view>
	</view>

</template>

<script setup lang="ts">
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		// getcomboMealMenuAPI,
		postShopListAPI,
		postShopInfoAPI
	} from '@/api/shop';
	import {
		ref
	} from 'vue';
	import ShopList from './component/ShopList.vue';
	
	//控制骨架屏/加载gif
	const isLoading = ref(true)

	// --------------------------------------------------------------------------------
	// 处理接口返回数据，确保符合ShopItem类型及符合v-for遍历结构--------------------
	// 对于门店列表
	const processShopListData = (data) => {
		return data.map((item) => ({
			id: item.id,
			name: item.name,
			address: item.address,
			is_open: item.is_open,
			closed_label: item.closed_label
		}));
	};
	// 对于门店详情
	const processShopInfoData = (data) => {
		return [{
			id: data.id,
			name: data.name,
			address: data.address
		}];
	};
	// 门店列表---------------------------------------------------------------------

	//选择城市


	const setCity = (selectedCityId : any) => {
		if (selectedCityId) {
			postShopListParam.value.city_code = selectedCityId
			console.log(postShopListParam.value.city_code)
		} else {
			console.log('未手动选择城市id')
		}
		postShopListRes()
	}

	const postShopListParam = ref({
		country_code: '156',
		//默认-深圳
		city_code: '156440300'
		// userLocation: "120.29850006103516,30.418750762939453"
	})

	const shopList = ref([])
	const cityName = ref('')
	const filterShopList = ref([])

	const postShopListRes = async () => {
		const res = await postShopListAPI(postShopListParam.value)
		shopList.value = processShopListData(res.data.list)
		cityName.value = res.data.list[0].city
		filterShopList.value = shopList.value.filter(item => item.is_open === false);
		
		console.log(shopList.value);
		console.log(filterShopList);
		
		//请求到数据后销毁骨架屏
		isLoading.value = false
	}

	// 门店详情---------------------------------------------------------------------
	const postShopInfoParam = {
		//杭州EFC欧美广场店
		"location": "120.29850006103516,30.418750762939453",
		"id": 1022,
		"type": 1,
		"is_to_oversea_app": false
	}

	const shopInfo = ref([])
	const postShopInfoRes = async () => {
		const res = await postShopInfoAPI(postShopInfoParam)
		shopInfo.value = processShopInfoData(res.data);
	}

	const tablist = [
		{
			name: '待开业门店',
			value: 0,
		},
		{
			name: '全部门店',
			value: 1,
		}]
	const active = ref(0)
	// ----------------------------------------------------------
	onLoad((option) => {
		console.log('explore-shop onLoad');
		console.log('Selected city ID:', option.selectedCityId);
		
		const selectedCityId = option.selectedCityId
		setCity(selectedCityId)
		// getcomboMealMenuAPI()
		// postShopListRes() 已放入setCity()
		// postShopInfoRes()
		
	});
</script>

<style scoped lang="scss">
	.background {
		background-color: #eeeff8;
	}

	.navbar-diy {
		height: 52px;
		background-color: #fff;
		border-bottom: 2px solid #a5a5a5;
		display: flex;
		align-items: center;

		.left {
			display: flex;
			align-items: center;
			margin-left: 16px;
			height: 52px;

			.text {
				font-size: 17px;
				margin-right: 6px;
				//不换行
				white-space: nowrap;
			}
		}
	}
</style>