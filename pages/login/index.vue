<script setup lang="ts"></script>

<template>
  <div class="h-screen p-80">
    <div class="flex justify-center items-center">
      <common-card class="border border-sky-500">
        <div class="title flex items-center flex-col mb-5">
          <div>Kart Box</div>
          <div>Sign in to KartBox</div>
          <div>Use your KartBox Accounrt to continue</div>
        </div>
        <div class="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Email"
            class="p-2 border border-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            class="p-2 border border-gray-300"
          />
          <button
            type="submit"
            class="p-2 bg-googleBlue text-white font-bold rounded"
          >
            Sign In
          </button>
        </div>
      </common-card>
    </div>
  </div>
</template>

<style scoped></style>
