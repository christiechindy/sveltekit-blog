<script>
    import AuthInput from "../../components/AuthInput.svelte";
    import AuthTitle from "../../components/AuthTitle.svelte";
    import Button from "../../components/Button.svelte";
</script>

<div class="page flex justify-center align-middle h-screen">
    <div class="w-fit wrapper flex flex-col align-middle justify-center">
        <AuthTitle title="Login" />

        <AuthInput label="username" />
        <AuthInput label="password" />

        <Button text="login" />
    </div>
</div>
