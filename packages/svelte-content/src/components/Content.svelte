<script>
  import { onMount, onDestroy } from "svelte";

  const DEFAULT_VALUE = "Place for your note...";
  let value = DEFAULT_VALUE;

  onMount(() => {
    window.eventBus.on("value", handleValue);
  });

  onDestroy(() => {
    window.eventBus.off("value", handleValue);
  });

  const handleClick = () => {
    window.eventBus.emit("reset");
    value = DEFAULT_VALUE;
  };

  const handleValue = ({ detail }) => {
    value = detail;
  };
</script>

<main>
  <div class="content">
    <div class="header">Content!</div>
    <div class="main">
      <div>
        <div class="title">Check It Out!</div>
        <div class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>
      </div>
      <div class="placeholder">
        <div>{value}</div>
        <button on:click={handleClick}>Reset</button>
      </div>
    </div>
  </div>
</main>
