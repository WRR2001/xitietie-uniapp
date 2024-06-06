<template>
	<view v-if="list.length">
		<view v-for="item in list" :key="item.id" class="item">
			<view class="info-box">
<<<<<<< HEAD
				<view class="info" @click="shopCardClick(item)">
=======
				<view class="info">
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
					<!-- <view style="color: red;">id:{{ item.id }}</view> -->
					<view class="name">
						<view class="text">
							{{ item.name }}
						</view>
						<uni-icons type="right" size="15" />
					</view>
					<view class="label" v-if="item.is_open==false">
						<view class="text">{{item.closed_label}}</view>
					</view>
					<view class="address">
						<uni-icons type="location" size="17" />
						<view class="text">{{ item.address }}</view>
					</view>
				</view>
				<view class="button">
					添加订阅
				</view>
			</view>
		</view>
	</view>
	<view v-else>
		<view class="empty">
			<img class="image" src="./no_data.png" />
			<view class="text">
				当前城市暂无待开业门店<br>
				看看其他城市吧~
			</view>
		</view>
	</view>

</template>

<script setup lang="ts">
	const props = defineProps({
		list: {
			type: Array,
			required: true
		}
	});
<<<<<<< HEAD

	const shopCardClick = (item) => {
		uni.navigateTo({
			url: `/pages/shop-info/shop-info?shopId=${item.id}`
		});
	}
=======
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
</script>

<style lang="scss">
	.item {
		margin-top: 13px;
		background-color: white;
		height: 85px;
		display: flex;
		align-items: center;
<<<<<<< HEAD
		padding: 5px 0;
=======
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7

		.info-box {
			// background-color: greenyellow;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 100%;

<<<<<<< HEAD
=======

>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
			.info {
				display: flex;
				justify-content: space-evenly;
				flex-direction: column;
				// background-color: skyblue;
				width: 270px;
				height: 100%;
				padding-left: 20px;
				padding-right: 10px;
				position: relative;
				/* 为伪元素定位 */

				.name {
					display: flex;
					font-size: 17px;
				}

				.label {
					display: flex;

<<<<<<< HEAD
=======

>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
					.text {
						color: #f89b0f;
						font-size: 13px;
						// background-color: #eeeff8;
						padding: 2px;
					}
				}

				.address {
					display: flex;

					.text {
						font-size: 14px;
						color: gray;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: 14px;
						color: gray;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}

				/* 使用伪元素实现右边框 */
				&::after {
					content: '';
					position: absolute;
					top: 50%;
					right: 0;
					transform: translateY(-50%);
					width: 2px;
					/* 边框宽度 */
					height: 65%;
					/* 边框高度，可以根据需要调整 */
					background-color: #ebebeb;
					/* 边框颜色 */
				}
			}

			.button {
				padding-right: 13px;
				white-space: nowrap;
			}
		}
	}

	.empty {
		display: flex;
		flex-direction: column;
		align-items: center;
<<<<<<< HEAD

		.text {
=======
		.text{
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
			display: flex;
			flex-direction: column;
			align-items: center;
			color: gray;
		}
<<<<<<< HEAD

		.image {
			height: 250px;
			width: 250px;
		}

=======
		.image{
			height: 321px;
			width: 321px;
		}
		
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
	}
</style>