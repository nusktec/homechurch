<template>
    <d-container fluid class="main-content-container px-4 pb-4">
        <!-- Error -->
        <div class="error">
            <div class="error__content p-4">
                <img width="200" src="@/assets/images/404-image-error.png" alt="404 Image"/>
                <h3>Something went wrong !</h3>
                <p>Maybe on our end or link is broken. Please try again later.</p>
                <router-link to="/">
                <d-button size="sm" pill>&larr; Go Back</d-button>
                </router-link>
            </div>
        </div>
    </d-container>
</template>
