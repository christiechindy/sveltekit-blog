<script lang="ts">
    import AuthInput from "../../components/AuthInput.svelte";
    import AuthTitle from "../../components/AuthTitle.svelte";
    import Button from "../../components/Button.svelte";
    import { z } from "zod";
    import axios from "axios";
    import type { TApiResp } from "../../types/ApiTypes";
    import { goto } from '$app/navigation';

    interface ILogin {
        username: string,
        password: string,
    }

    let hasFocused = {
        username: false,
        password: false
    }

    let loginData:ILogin = {
        username: "",
        password: ""
    }

    const loginSchema = z.object({
        username: z.string().min(2, { message: "The username is invalid!" }),
        password: z.string().min(8, { message: "Password must be at least 8 characters" })
    })

    let errors:ILogin = {
        username: "",
        password: ""
    }
    let isFormValid = false;

    $: {
        try {
            errors = {username: "", password: ""};
            loginSchema.parse(loginData);
            isFormValid = true;
        } catch (err) {
            isFormValid = false;
            if (err instanceof z.ZodError) {
                err.errors.forEach((error) => {
                    errors[error.path[0] as keyof ILogin] = error.message;
                });
            }
        }
    }

    let isLoading = false;
    let errorLogin = "";
    const handleLogin = async () => {
        if (isFormValid) {
            isLoading = true;
            const ax = await axios.post("/api/login", loginData);
            const res:TApiResp = ax?.data;
            isLoading = false;
            if (res.meta.status) {
                goto("/home");
            } else {
                errorLogin = res.meta.message;
            }
        }
    }
</script>

<div class="page flex justify-center items-center h-screen">
    <form class="w-fit wrapper flex flex-col items-center justify-center gap-7" on:submit|preventDefault={handleLogin}>
        <AuthTitle title="Login" />

        <div>
            <AuthInput label="username" bind:value={loginData.username} hasFocused={hasFocused.username} bind:error={errors.username}  />
            <AuthInput label="password" bind:value={loginData.password} hasFocused={hasFocused.password} bind:error={errors.password} type="password" />
        </div>

        <Button type="submit" text="login" disabled={!isFormValid} isLoading={isLoading} />

        <div class="text-sm text-red-600 max-w-96">{errorLogin}</div>

        <div class="text-sm text-my-text_gray mt-8 self-start">Don't have an account? <a class="text-my-purple font-medium hover:text-my-blue transition duration-300 ease-in-out" href="/sign-up">Register!</a></div>
    </form>
</div>
