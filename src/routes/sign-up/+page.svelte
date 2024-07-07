<script lang="ts">
    import AuthInput from "../../components/AuthInput.svelte";
    import AuthTitle from "../../components/AuthTitle.svelte";
    import Button from "../../components/Button.svelte";
    import { z } from "zod";
    import axios from "axios";
    import type { TApiResp } from "../../types/ApiTypes";
    import Modal from "../../components/Modal.svelte";

    interface ISignUp {
        full_name: string,
        username: string,
        password: string,
    }

    let hasFocused = {
        full_name: false,
        username: false,
        password: false,
    }

    let signUpData:ISignUp = {
        full_name: "",
        username: "",
        password: ""
    }

    const signUpSchema = z.object({
        full_name: z.string().min(2, { message: "The full name is invalid!" }),
        username: z.string().min(2, { message: "The username is invalid!" }),
        password: z.string().min(8, { message: "Password must be at least 8 characters" })
    });

    let errors:ISignUp = {
        full_name: "",
        username: "",
        password: ""
    };
    let isFormValid = false;

    $: {
        try {
            errors = { full_name: "", username: "", password: "" };
            signUpSchema.parse(signUpData);
            isFormValid = true;
        } catch (err) {
            isFormValid = false;
            if (err instanceof z.ZodError) {
                err.errors.forEach((error) => {
                    errors[error.path[0] as keyof ISignUp] = error.message;
                });
            }
        }
    }

    let isLoading = false;
    let errorSignUp = "";
    let isModalToLoginShow = false;
    const handleSignup = async () => {
        if (isFormValid) {
            isLoading = true;
            const ax = await axios.post("/api/sign-up", signUpData);
            const res:TApiResp = ax?.data;
            isLoading = false;
            if (res.meta.status) {
                isModalToLoginShow = true;
            } else {
                errorSignUp = res.meta.message;
            }
        }
    }
</script>
<div class="page flex justify-center items-center h-screen">
    {#if isModalToLoginShow}
        <Modal title="Success!" message="Yeay! You've successfully registered! Now, please login!" btnText="login" btnLink="/login" />
    {/if}

    <div class="w-fit wrapper flex flex-col items-center justify-center gap-7">
        <AuthTitle title="Register" />

        <div>
            <AuthInput label="full name" bind:value={signUpData.full_name} hasFocused={hasFocused.full_name} bind:error={errors.full_name} />
    
            <AuthInput label="username" bind:value={signUpData.username} hasFocused={hasFocused.username} bind:error={errors.username} />

            <AuthInput label="password" bind:value={signUpData.password} type="password" hasFocused={hasFocused.password} bind:error={errors.password} />
        </div>

        <Button text="Sign Up" on:click={handleSignup} disabled={!isFormValid} isLoading={isLoading} />

        <div class="text-sm text-red-600 max-w-96">{errorSignUp}</div>

        <div class="text-sm text-my-text_gray mt-8 self-start">Already have an account? <a class="text-my-purple font-medium hover:text-my-blue transition duration-300 ease-in-out" href="/login">Login!</a></div>
    </div>
</div>