<script lang="ts">
  import { createEventDispatcher } from "svelte";

    export let text:string;
    export let disabled: boolean;
    
    const dispatch = createEventDispatcher();
    const dispatchFunc = () => {
        dispatch("click", {
            text: "Helo"
        })
    }
</script>

<button on:click={dispatchFunc} class="text-center capitalize w-full bg-my-purple rounded-xl py-2 text-white hover:bg-my-dark_green transition duration-500 ease-in-out disabled:bg-my-purple_disabled disabled:cursor-not-allowed" disabled={disabled}>{text}</button>