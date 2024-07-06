<script lang="ts">
  import { createEventDispatcher } from "svelte";

    export let text:string;
    
    const dispatch = createEventDispatcher();
    const dispatchFunc = () => {
        dispatch("click", {
            text: "Helo"
        })
    }
</script>

<button on:click={dispatchFunc} class="text-center capitalize w-full bg-my-purple rounded-xl py-2 text-white hover:bg-my-dark_green transition duration-500 ease-in-out">{text}</button>