<script lang="ts">
    import axios from "axios";
    import BlogInput from "../../components/BlogInput.svelte";
    import Header from "../../components/Header.svelte";
    import type { TApiResp } from "../../types/ApiTypes";
    import { goto } from "$app/navigation";
    
    import type {PageData} from "./$types";
    export let data:PageData;

    let title = data.blog.title;
    let description = data.blog.description;
    let coverImage:File|null = data.blog.picture;

    let isLoading = false;
    const handleUpdateBlog = async() => {
        isLoading = true;

        const ax = await axios.put(`/api/blog/${data.id}`, {title, description}, {
            headers: {
                Authorization: `Bearer ${data.accessToken}`
            }
        });
        const res:TApiResp = ax?.data;
        isLoading = false;
        if (res.meta.status) {
            goto("/home");
        }
    }
</script>

<div class="page">
    <Header />

    <form class="mt-6 mb-14 flex flex-col items-center w-full" on:submit|preventDefault={handleUpdateBlog}>

        <BlogInput label="title" bind:value={title} />

        <BlogInput label="description" bind:value={description} type="textarea" />

        <button class="w-[60%] py-3 rounded-xl bg-my-dark_green text-white disabled:bg-green-200 disabled:cursor-not-allowed disabled:text-my-dark_green" disabled={isLoading} type="submit">Publish</button>
    </form>
</div>

<style>
    input[type="file"]::-webkit-file-upload-button {
        background-color: #7800F1;
        border: none;
        color: white;
        padding: 8px 16px;
        margin-right: 16px;
    }
</style>