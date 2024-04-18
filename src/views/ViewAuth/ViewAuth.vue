<script setup lang="ts">
import ButtonComponent from "@/components/Layout/Button/ButtonComponent.vue";
import { ref } from "vue";
import "./ViewAuth.scss";

const activeTab = ref(0);

const setActiveTab = (tab: number) => {
    console.log(tab);
    activeTab.value = tab;
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
                <form>
                    <div class="form_input">
                        <input
                            type="text"
                            placeholder="Email" />
                    </div>
                    <div class="form_input">
                        <input
                            type="password"
                            placeholder="Password" />
                    </div>
                    <ButtonComponent
                        variant="primary"
                        type="submit"
                        >Sign In</ButtonComponent
                    >
                </form>
            </div>
        </div>

        <div
            v-else-if="activeTab === 1"
            class="auth__tab"
            ref="activeTab = 1">
            <div class="auth__tab__content">
                <h1>Sign Up</h1>
                <form>
                    <div class="form_input">
                        <input
                            type="text"
                            placeholder="Email" />
                    </div>
                    <div class="form_input">
                        <input
                            type="password"
                            placeholder="Password" />
                    </div>
                    <ButtonComponent
                        variant="primary"
                        type="submit"
                        >Sign Up</ButtonComponent
                    >
                </form>
            </div>
        </div>
    </div>
</template>
