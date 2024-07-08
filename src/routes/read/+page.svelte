<script lang="ts">
    import axios from "axios";
    import Header from "../../components/Header.svelte";
    import Modal from "../../components/Modal.svelte";
    import DeleteIcon from "../../icons/DeleteIcon.svelte";
    import PencilIcon from "../../icons/PencilIcon.svelte";
    import { goto } from "$app/navigation";
  import type { TApiResp } from "../../types/ApiTypes";
    
    export let data;

    const handleDelete = async() => {
        const ax = await axios.delete(`/api/blog/${data.id}`);
        const res:TApiResp = ax?.data;
        if (res.meta.status) {
            goto("/home");
        }
    }
</script>
<div class="page">
    <Header />

    <div class="img h-72 w-full">
        <img class="object-cover h-full w-full" src={data.blog.picture} alt="book">
    </div>
    <div class="content ml-[10%] mt-6 flex flex-col gap-6 mb-16">
        <div class="flex gap-5 items-start">
            <div class="title font-semibold text-7xl leading-tight">{data.blog.title}</div>
            <div class="icons flex gap-4 items-center">
                <PencilIcon />
                <DeleteIcon on:click={handleDelete} />
            </div>
        </div>
        <div class="description leading-7">{data.blog.description}</div>
    </div>
</div>

<style>
    .content {
        max-width: 670px;
    }
</style>