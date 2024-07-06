<script>
    import AuthInput from "../../components/AuthInput.svelte";
    import AuthTitle from "../../components/AuthTitle.svelte";
    import Button from "../../components/Button.svelte";

    const handleSignup = () => {

    }
</script>
<div class="page flex justify-center align-middle h-screen">
    <div class="w-fit wrapper flex flex-col align-middle justify-center">
        <AuthTitle title="Register" />

        <AuthInput label="full name" />
        <AuthInput label="username" />
        <AuthInput label="password" />

        <Button text="Sign Up" on:click={handleSignup} />

        <div class="text-sm text-my-text_gray mt-8">Already have an account? <a class="text-my-purple font-medium hover:text-my-blue transition duration-300 ease-in-out" href="/login">Login!</a></div>
    </div>
</div>