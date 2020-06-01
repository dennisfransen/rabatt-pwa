<template>
  <div>
    <TitleWithButton link="/">
      <template v-slot:title>Trending</template>
      <template v-slot:btn-text>See all</template>
    </TitleWithButton>
    <TrendingSlider />
  </div>
</template>

<script>
import TitleWithButton from "@/components/utils/TitleWithButton";
import TrendingSlider from "@/components/utils/TrendingSlider";

export default {
  name: "Trending",
  data: () => ({
    selected: null,
  }),
  components: {
    TitleWithButton,
    TrendingSlider,
  },
};
</script>

<style>
.no-decoration {
  text-decoration: none;
  color: black;
}
</style>
