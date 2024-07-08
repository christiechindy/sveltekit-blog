<script lang="ts">
    export let label:string;
    export let value:string;
    export let type:string = "text";
</script>

<div class="field w-[60%] mb-6">
    <label class="block capitalize mb-2" for={label}>{label}</label>

    {#if type==="text"}
        <input class="w-full border-1.5 border-my-line_gray rounded-xl box-border py-2 px-4 mb-1 focus:outline-1 focus:outline-my-line_d_gray focus:border-my-line_d_gray" type="text" id={label} bind:value={value}>
    {:else if type==="textarea"}
        <textarea class="w-full border-1.5 border-my-line_gray rounded-xl box-border py-2 px-4 mb-1 focus:outline-1 focus:outline-my-line_d_gray focus:border-my-line_d_gray" rows="12" id={"ar"+label}></textarea>
    {/if}
</div>