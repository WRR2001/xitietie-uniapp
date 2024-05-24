<template>
  <view v-for="item in shopList" :key="item.id" style="margin-top: 15px;">
    <view style="color: red;">id:{{ item.id }}</view>
    <view style="font-size: large;">{{ item.name }}</view>
    <view style="color: gray;">{{ item.address }}</view>
  </view>
</template>

<script lang="ts" setup>

import { onLoad } from '@dcloudio/uni-app';
import { getcomboMealMenuAPI, postShopListAPI, postShopInfoAPI } from '@/api/shop';
import { ref } from 'vue';

interface ShopItem {
  id: number;
  name: string;
  address: string;
}

onLoad(() => {
  console.log('sub onLoad');
  // getcomboMealMenuAPI()
  postShopListRes()
  postShopInfoRes()
});

// 门店列表-----------------------------
const postShopListParam = {
  country_code: '156',
  city_code: '156810000'
  // loadShopIds: [],
  // topShopId: 3291,
  // strategy: 0,
  // userLocation: "120.29850006103516,30.418750762939453"
}

const shopList = ref<ShopItem[]>([])
const postShopListRes = async () => {
  const res: any = await postShopListAPI(postShopListParam)
  shopList.value = processShopListData(res.data.list)
  console.log(shopList.value)
}

// 门店详情-----------------------------
const postShopInfoParam: any = {
  //杭州EFC欧美广场店
  "location": "120.29850006103516,30.418750762939453",
  "id": 1022,
  "type": 1,
  "is_to_oversea_app": false
}

// 处理接口返回数据，确保符合ShopItem类型及符合v-for遍历结构
// 对于门店列表
const processShopListData = (data: any[]): ShopItem[] => {
  return data.map(item => ({
    id: item.id,
    name: item.name,
    address: item.address
  }));
};
// 对于门店详情
const processShopInfoData = (data: any): ShopItem[] => {
  return [{
    id: data.id,
    name: data.name,
    address: data.address,
  }];
};

const shopInfo = ref<ShopItem[]>([])
const postShopInfoRes = async () => {
  const res: any = await postShopInfoAPI(postShopInfoParam)
  shopInfo.value = processShopInfoData(res.data)
}
</script>

<style scoped></style>