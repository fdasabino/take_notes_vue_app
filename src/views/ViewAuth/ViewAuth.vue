<script setup lang="ts">
import ButtonComponent from "@/components/Layout/Button/ButtonComponent.vue";
import { openToast } from "@/directives/openToast";
import { useStoreAuth } from "@/stores/storeAuth";
import { LockClosedIcon, UserPlusIcon } from "@heroicons/vue/24/outline";
import { reactive, ref } from "vue";
import "./ViewAuth.scss";

const activeTab = ref(0);
const storeAuth = useStoreAuth();

const setActiveTab = (tab: number) => {
    activeTab.value = tab;
};

// Credentials
const credentials = reactive({
    email: "",
    password: "",
});

const handleSubmit = () => {
    if (!credentials.email || !credentials.password) {
        openToast("Please fill in all fields", "error");
        return;
    }

    if (activeTab.value === 0) {
        storeAuth.signInUser(credentials);

        // Reset form
        credentials.email = "";
        credentials.password = "";
    }
    if (activeTab.value === 1) {
        storeAuth.signUp(credentials);

        // Reset form
        credentials.email = "";
        credentials.password = "";
    }
};
</script>

<template>
    <div class="auth">
        <div class="auth__header">
            <div class="auth__header__tab">
                <span
                    @click="setActiveTab(0)"
                    :class="{ active: activeTab === 0 }"
                    >Sign In</span
                >
            </div>
            <div class="auth__header__tab">
                <span
                    @click="setActiveTab(1)"
                    :class="{ active: activeTab === 1 }"
                    >Sign Up</span
                >
            </div>
        </div>
        <div
            v-if="activeTab === 0"
            class="auth__tab"
            ref="activeTab = 0">
            <div class="auth__tab__content">
                <h1>Sign In</h1>
                <form @submit.prevent="handleSubmit">
                    <div class="form_input">
                        <input
                            v-model="credentials.email"
                            type="text"
                            placeholder="Email" />
                    </div>
                    <div class="form_input">
                        <input
                            v-model="credentials.password"
                            type="password"
                            placeholder="Password" />
                    </div>
                    <ButtonComponent
                        variant="success"
                        type="submit">
                        <LockClosedIcon />
                        Sign In
                    </ButtonComponent>
                </form>
            </div>
        </div>

        <div
            v-else-if="activeTab === 1"
            class="auth__tab"
            ref="activeTab = 1">
            <div class="auth__tab__content">
                <h1>Sign Up</h1>
                <form @submit.prevent="handleSubmit">
                    <div class="form_input">
                        <input
                            v-model="credentials.email"
                            type="text"
                            placeholder="Email" />
                    </div>
                    <div class="form_input">
                        <input
                            v-model="credentials.password"
                            type="password"
                            placeholder="Password" />
                    </div>
                    <ButtonComponent
                        variant="primary"
                        type="submit">
                        <UserPlusIcon />
                        Sign Up
                    </ButtonComponent>
                </form>
            </div>
        </div>
    </div>
</template>
