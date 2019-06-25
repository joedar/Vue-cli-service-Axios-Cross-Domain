<template>
	<div class="apps">
		<div><span>{{ hello }}</span></div>
		<div><button @click="buttonClick">豆瓣电影分类排行榜 - 剧情片</button></div>
		<div>{{ content }}</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			hello : 'hello Vue, I am Joedar !'
			,content : ''
		}
	}
	,methods : {
		buttonClick () {
			this.axios.get('/chart/top_list_count?type=11&interval_id=100%3A90')
			.then(res => {
				console.log(res);
				// 剧情片总数
				let total = res.data.total;
				// 我没看过的
				let unwatched_count = res.data.unwatched_count;
				// 可在线播放
				let playable_count = res.data.playable_count;

				this.content = `
					好于100%-90%的剧情片 (${total}), 我没看过的(${unwatched_count}), 可在线播放(${playable_count})
				`;
			})
			.catch(err => {
				console.log(err);
			})
		}
	}
}
</script>