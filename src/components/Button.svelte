<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import {Circle} from "svelte-loading-spinners";

    export let text:string;
    export let disabled:boolean;
    export let isLoading:boolean;
    
    const dispatch = createEventDispatcher();
    const dispatchFunc = () => {
        dispatch("click", {
            text: "Helo"
        })
    }
</script>

<button on:click={dispatchFunc} class="text-center capitalize w-full bg-my-purple rounded-xl py-2 text-white hover:bg-my-dark_green transition duration-500 ease-in-out disabled:bg-my-purple_disabled disabled:cursor-not-allowed flex justify-center" disabled={disabled}>
    {#if isLoading}
        <Circle size="24" unit="px" color="#7800F1" />
    {:else}
        {text}
    {/if}
</button>