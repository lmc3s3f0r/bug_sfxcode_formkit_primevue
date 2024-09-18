<script setup>
import PrimeVueSection from "~/components/PrimeVueSection.vue";
import SFXCodePrimeVueFormKitSection from "~/components/SFXCodePrimeVueFormKitSection.vue";
import FormKitSection from "~/components/FormKitSection.vue";
</script>

<template>
  <div class="flex flex-col gap-10 bg-blue-900 p-4">
    <div class="flex items-start gap-10 justify-center p-10">
      <SFXCodePrimeVueFormKitSection />

      <FormKitSection />

      <PrimeVueSection />
    </div>
  </div>
</template>

<style>
@import url("~/assets/css/theme.css");
</style>
