<template>
  <div class="sidebar">
    <div class="header">
      <span>Sidebar!</span>
    </div>
    <div class="content">
      <div>
        <button @click="handleClick">I was here</button>
      </div>
      <div class="note">
        <label>Note</label>
        <input :value="value" @input="handleChange" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    value: "",
  }),
  created() {
    window.eventBus.on("reset", this.resetValue);
  },
  beforeDestroy() {
    window.eventBus.off("reset", this.resetValue);
  },
  methods: {
    resetValue(event) {
      console.log(event);
      this.value = "";
    },
    handleChange(event) {
      this.value = event.target.value;
      window.eventBus.emit("value", this.value);
    },
    handleClick() {
      window.eventBus.emit("count");
    },
  },
};
</script>
