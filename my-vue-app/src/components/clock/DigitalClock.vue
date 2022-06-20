<template>
<div class="flex clock">
  {{ currentTime.toLocaleTimeString() }}
  <a-divider type="vertical" style="height:24px;border-color:black"></a-divider>
  {{ currentTime.toLocaleDateString() }}
</div>
</template>
<script type="module">
import { useCurrentTime } from "./useCurrentTime";
export default {
  name: "CurrentTimeExample",
  setup() {
    const { currentTime } = useCurrentTime();
    console.log(currentTime.value);

    return { currentTime };
  },
};
</script>

<style scoped>
.clock{
  font-size: 18px;
  color: #fff;
  text-align: center;
  padding: auto;
  margin: auto;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #0093E9;
background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

  /* box-shadow: 0px 2px 10px 5px #07f3c4; */
}
</style>
