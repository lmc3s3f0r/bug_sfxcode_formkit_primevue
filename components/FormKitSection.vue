<template>
  <section
    class="bg-amber-200 dark:bg-gray-800 p-10 rounded-xl flex flex-col gap-8 max-w-3xl w-full"
  >
    <h1 class="text-xl text-black dark:text-white font-bold text-center">
      FORMKIT EXAMPLE (with html inputs)
    </h1>
    <div>
      <div class="font-bold">FormKit component</div>
      <FormKit type="text" />
    </div>
    <div>
      <div class="font-bold">FormKitSchema component</div>
      <FormKitSchema :schema="formKitNormalSchema" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { FormKitSchema } from "@formkit/vue";

const formKitNormalSchema = [
  {
    $formkit: "text",
    name: "email",
    label: "Email",
    help: "This will be used for your account.",
    validation: "required|email",
  },
];
</script>
