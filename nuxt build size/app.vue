<template lang="pug">
p.d-flex helloвап
test
span span text23
elButton button text
<button type="button" class="btn btn-primary">bootstrap button</button>
</template>

<script lang="ts">
	import "~/assets/index.scss";
	//import {defineComponent} from "#imports";
	//import {elButton} from "element-plus";

	export default defineComponent({
		name: "app",
		components: {
			//elButton,
		},
		setup() {
			useHead({
				title: "My App12",
			});
		},
	});
</script>

<style lang="scss" scoped>
	p {
		color: red;
	}
</style>
