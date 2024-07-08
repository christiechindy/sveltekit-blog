<script lang="ts">
    export let date:string;
    export let title:string;
    export let description:string;
    export let imgSrc:string;
    export let link:string;
</script>

<a class="post max-h-48 box-border flex max-w-3xl gap-12 items-center mt-10 pb-10 border-b border-my-line_gray" href={link}>
    <div class="texts flex flex-col gap-3">
        <div class="attr text-sm font-light">{date}</div>
        <div class="title font-semibold text-4xl">{title}</div>
        <div class="desc leading-7">{description}</div>
    </div>
    <img src={imgSrc} alt="book" class="h-44 min-w-52 rounded-lg object-cover">
</a>