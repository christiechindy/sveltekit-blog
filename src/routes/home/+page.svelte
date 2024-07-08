<script lang="ts">
    import APost from "../../components/APost.svelte";
    import Header from "../../components/Header.svelte";
    export let data: { blogs: Array<any> };
</script>

<div class="page">
    <Header />

    <div class="content ml-12 mt-11">
        <div class="posts">
            {#if data.blogs.length === 0}
                <div class="italic text-my-text_gray">No posts yet</div>
            {/if}
            {#each data.blogs as blog}
                <APost date={blog.createdAt} description={blog.description.substring(0,187)+"..."} title={blog.title} imgSrc={blog.picture} link={`/read?id=${blog._id}`} />
            {/each}
        </div>
    </div>
</div>