<script lang="ts">
    export let title:string;
    export let message:string;
    export let btnText:string;
    export let btnLink:string;
</script>

<div class="bg-modal bg-black bg-opacity-60 w-full h-full absolute flex justify-center items-center">
    <div class="bg-box bg-white w-96 px-8 py-7 rounded-2xl h-fit flex flex-col justify-center items-center gap-4">
        <div class="title font-semibold text-my-purple text-lg">{title}</div>
        <div class="message text-center leading-7 font-medium">
            {message}
        </div>
        <a href={btnLink} class="bg-my-purple rounded-lg text-white px-4 py-2 w-full text-center hover:bg-my-dark_green transition duration-500 ease-in-out capitalize">{btnText}</a>
    </div>
</div>