<template>
  <section
    class="bg-amber-200 dark:bg-gray-800 p-10 rounded-xl flex flex-col gap-8 max-w-3xl w-full"
  >
    <h1 class="text-xl text-black dark:text-white font-bold text-center">
      FORMKIT EXAMPLE (with html inputs)
    </h1>
    <FormKit type="text" />
    <FormKitSchema :schema="formKitNormalSchema" />
  </section>
</template>

<script setup lang="ts">
import { FormKitSchema } from "@formkit/vue";

const formKitNormalSchema = [
  {
    $el: "h1",
    children: "Register",
    attrs: {
      class: "text-2xl font-bold mb-4",
    },
  },
  {
    $formkit: "text",
    name: "email",
    label: "Email",
    help: "This will be used for your account.",
    validation: "required|email",
  },
  {
    $cmp: "FormKit",
    props: {
      name: "eu_citizen",
      type: "checkbox",
      id: "eu",
      label: "Are you a european citizen?",
    },
  },
  {
    $formkit: "select",
    if: "$get(eu).value", // 👀 Oooo, conditionals!
    name: "cookie_notice",
    label: "Cookie notice frequency",
    options: {
      refresh: "Every page load",
      hourly: "Ever hour",
      daily: "Every day",
    },
    help: "How often should we display a cookie notice?",
  },
];
</script>
