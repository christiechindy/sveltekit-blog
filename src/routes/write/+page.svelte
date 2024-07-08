<script lang="ts">
    import axios from "axios";
    import BlogInput from "../../components/BlogInput.svelte";
    import Header from "../../components/Header.svelte";
    import type { TApiResp } from "../../types/ApiTypes";
    import { goto } from "$app/navigation";

    let title = "";
    let description = "";
    let coverImage:File|null = null;

    import type {PageData} from "./$types";
    export let data:PageData;

    const handleImgChange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            coverImage = input.files[0];
        }
    }

    let isLoading = false;
    const handlePostBlog = async() => {
        isLoading = true;
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("coverImage", coverImage as any);

        const ax = await axios.post("/api/blog", formData, {
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

    <form class="mt-6 mb-14 flex flex-col items-center w-full" on:submit|preventDefault={handlePostBlog}>
        <div class="field w-[60%] mb-6">
            <label for="img" class="block capitalize mb-2">Cover Image</label>
            <input id="img" type="file" accept="image/*" alt="cover" class="w-full border-1.5 border-my-line_gray rounded-xl box-border mb-1 focus:outline-1 hover:cursor-pointer" on:change={handleImgChange} name="coverImage">
        </div>

        <BlogInput label="title" bind:value={title} />

        <BlogInput label="description" bind:value={description} type="textarea" />

        <button class="w-[60%] py-3 rounded-xl bg-my-dark_green text-white" type="submit">Publish</button>
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