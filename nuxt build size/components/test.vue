<template lang="pug">
p test components
span span test component text
</template>

<script lang="ts">
	import {defineComponent} from "vue";

	export default defineComponent({
		name: "test1",
		setup() {
			useHead({
				title: "My App",
			});
		},
	});
</script>

<style lang="scss" scoped></style>
