<script lang="ts">
    export let label:string;
</script>

<div class="field mb-5">
    <label class="block text-base capitalize font-medium mb-1" for={label}>{label}</label>
    <input type="text" id={label} class="border-1.5 border-my-line_gray rounded-xl box-border w-96 py-2 px-4 focus:outline-1 focus:outline-my-line_d_gray focus:border-my-line_d_gray">
</div>