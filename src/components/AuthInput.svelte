<script lang="ts">
    export let label:string;
    export let value:string;
    export let type:string = "text";
    export let hasFocused:boolean = false;
    export let error:string;
</script>

<div class="field mt-5">
    <label class="block text-base capitalize font-medium mb-1" for={label}>{label}</label>
    {#if type==="text"}
        <input type="text" id={label} class="border-1.5 border-my-line_gray rounded-xl box-border w-96 py-2 px-4 mb-1 focus:outline-1 focus:outline-my-line_d_gray focus:border-my-line_d_gray" bind:value={value} on:blur={() => hasFocused=true}>
    {:else if type==="password"}
        <input type="password" id={label} class="border-1.5 border-my-line_gray rounded-xl box-border w-96 py-2 px-4 mb-1 focus:outline-1 focus:outline-my-line_d_gray focus:border-my-line_d_gray" bind:value={value} on:blur={() => hasFocused=true}>
    {/if}

    {#if hasFocused && error}
        <div class="text-red-600 text-sm">{error}</div>
    {/if}
</div>

<style>
    .field:first-child {
        margin-top: 0;
    }
</style>