<template>
	<div class="dashboard-component">
		<div class="row">
			<pictureCloudCard v-for="content in pictures" :key="content.id" :file="content.file" />
			<CloudCard
				v-for="content in documents"
				:key="content.id"
				:name="content.name"
				:file="content.file"
			/>
			<CloudCard
				v-for="content in videos"
				:key="content.id"
				:name="content.name"
				:file="content.file"
			/>
			<CloudCard
				v-for="content in musics"
				:key="content.id"
				:name="content.name"
				:file="content.file"
			/>
		</div>
	</div>
</template>

<script>
import pictureCloudCard from '@/components/elements/Card/pictureCloudCard.vue';
import CloudCard from '@/components/elements/Card/CloudCard.vue';
export default {
	components: {
		pictureCloudCard,
		CloudCard,
	},
	data() {
		return {
			pictures: [
				{ file: 'vectors/modalPictures.svg' },
				{ file: 'vectors/modalPictures.svg' },
				{ file: 'vectors/modalPictures.svg' },
				{ file: 'vectors/modalPictures.svg' },
				{ file: 'vectors/modalPictures.svg' },
				{ file: 'vectors/modalPictures.svg' },
				{ file: 'vectors/modalPictures.svg' },
				{ file: 'vectors/modalPictures.svg' },
				{ file: 'vectors/modalPictures.svg' },
			],
			documents: [
				{ file: 'vectors/documentContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/documentContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/documentContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/documentContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/documentContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/documentContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/documentContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/documentContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/documentContent.svg', name: 'نام فایل ' },
			],
			videos: [
				{ file: 'vectors/videoContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/videoContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/videoContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/videoContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/videoContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/videoContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/videoContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/videoContent.svg', name: 'نام فایل ' },
				{ file: 'vectors/videoContent.svg', name: 'نام فایل ' },
			],
			musics: [
				{ file: 'vectors/musicConetnt.svg', name: 'نام فایل ' },
				{ file: 'vectors/musicConetnt.svg', name: 'نام فایل ' },
				{ file: 'vectors/musicConetnt.svg', name: 'نام فایل ' },
				{ file: 'vectors/musicConetnt.svg', name: 'نام فایل ' },
				{ file: 'vectors/musicConetnt.svg', name: 'نام فایل ' },
				{ file: 'vectors/musicConetnt.svg', name: 'نام فایل ' },
				{ file: 'vectors/musicConetnt.svg', name: 'نام فایل ' },
				{ file: 'vectors/musicConetnt.svg', name: 'نام فایل ' },
				{ file: 'vectors/musicConetnt.svg', name: 'نام فایل ' },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
</style>
