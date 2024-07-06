<script lang="ts">
    import AuthInput from "../../components/AuthInput.svelte";
    import AuthTitle from "../../components/AuthTitle.svelte";
    import Button from "../../components/Button.svelte";
    import { z } from "zod";
    import axios from "axios";
    import type { TApiResp } from "../../types/ApiTypes";
    import { goto } from "$app/navigation";

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

    const handleSignup = async () => {
        if (isFormValid) {
            const ax = await axios.post("/api/sign-up", signUpData);
            const res:TApiResp = ax?.data;
            if (res.meta.status) {
                goto("/login");
            }
        }
    }
</script>
<div class="page flex justify-center align-middle h-screen">
    <div class="w-fit wrapper flex flex-col align-middle justify-center gap-7">
        <AuthTitle title="Register" />

        <div>
            <AuthInput label="full name" bind:value={signUpData.full_name} hasFocused={hasFocused.full_name} bind:error={errors.full_name} />
    
            <AuthInput label="username" bind:value={signUpData.username} hasFocused={hasFocused.username} bind:error={errors.username} />

            <AuthInput label="password" bind:value={signUpData.password} type="password" hasFocused={hasFocused.password} bind:error={errors.password} />
        </div>

        <Button text="Sign Up" on:click={handleSignup} disabled={!isFormValid} />

        <div class="text-sm text-my-text_gray mt-8">Already have an account? <a class="text-my-purple font-medium hover:text-my-blue transition duration-300 ease-in-out" href="/login">Login!</a></div>
    </div>
</div>