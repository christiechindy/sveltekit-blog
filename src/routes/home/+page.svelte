<script lang="ts">
    import APost from "../../components/APost.svelte";
    import Header from "../../components/Header.svelte";
    export let data: { blogs: Array<any> };
</script>

<div class="page">
    <Header />

    <div class="content ml-12 mt-11">
        <div class="posts">
            {#each data.blogs as blog}
                <APost date={blog.createdAt} description={blog.description} title={blog.title} imgSrc={blog.picture} link={`/read?id=${blog._id}`} />
            {/each}
        </div>
    </div>
</div>