<template>
	<view>
		<view v-if="shopInfo.length > 0">
			<view class="name">
				{{ shopInfo[0].name }}
			</view>
			<view class="info">
				<view class="address">
					地址：{{ shopInfo[0].address }}
				</view>
				<view class="contact_phone" v-if="shopInfo[0].contact_phone!='-'">
					电话：{{ shopInfo[0].contact_phone }}
				</view>
				<view class="time">
					门店营业时间：{{ shopInfo[0].all_business_time_list[0].openAt }}~{{ shopInfo[0].all_business_time_list[0].closeAt }}
				</view>
				<view class="24h">
					是否24小时营业：{{shopInfo[0].all_business_time_list[0].isAllDay?'是':'否'}}
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import { postShopInfoAPI } from '../../api/shop';
	import { ref } from 'vue';

	const postShopInfoParam = ref({
		// 杭州EFC欧美广场店
		"id": 1022,
		// "location": "120.29850006103516,30.418750762939453",
		// "type": 1,
		// "is_to_oversea_app": false
	})

	// 处理接口返回数据
	const processShopInfoData = (data) => {
		return [{
			id: data.id,
			name: data.name,
			address: data.address,
			contact_phone: data.contact_phone,
			all_business_time_list: data.all_business_time_list
		}];
	};

	const shopInfo = ref([])
	const postShopInfoRes = async () => {
		const res = await postShopInfoAPI(postShopInfoParam.value)
		shopInfo.value = processShopInfoData(res.data);
		console.log(shopInfo.value)
	}

	// ----------------------------------------------------------------------------
	onLoad((option) => {
		console.log('当前城市ID:' + option.shopId)
		postShopInfoParam.value.id = option.shopId
		console.log('参数id:' + postShopInfoParam.value.id)
		postShopInfoRes()
	})
</script>

<style>
	.name {
		font-size: 25px;
		margin-bottom: 30px;
	}
</style>