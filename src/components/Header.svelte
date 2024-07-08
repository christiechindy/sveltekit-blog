<script>
  import { goto } from "$app/navigation";
    import AccountIcon from "../icons/AccountIcon.svelte";
    import PencilIcon from "../icons/PencilIcon.svelte";

    const handleLogout = () => {
        goto("/login");
    }
</script>

<div class="header w-full border-b-1.5 border-my-line_gray px-12 py-6 flex justify-between">
    <div class="logo font-logo text-my-purple text-4xl">Blogc</div>
    <div class="flex gap-12">
        <a href="/write" class="flex items-center gap-4">
            <span class="text-my-text_gray">Write</span>
            <PencilIcon link="/write" />
        </a>
        <div class="flex items-center gap-4">
            <button class="text-my-text_gray" on:click={handleLogout}>Logout</button>
            <AccountIcon />
        </div>
    </div>
</div>