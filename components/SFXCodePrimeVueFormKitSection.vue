<template>
  <section
    class="w-full bg-red-300 dark:bg-gray-800 p-10 rounded-xl flex flex-col gap-8 max-w-3xl"
  >
    <h1 class="text-xl text-black dark:text-white font-bold text-center">
      SFXCODE FORMKIT+PRIMEVUE EXAMPLE (with PrimeVue inputs)
    </h1>
    <div class="myFormkit">
      <FormKit
        id="form"
        v-model="data"
        type="form"
        :submit-attrs="{
          inputClass: 'p-button p-component',
        }"
        @submit="submitHandler"
      >
        <FormKitSchema :schema="schema" :data="data" />
      </FormKit>
    </div>
    <h4>Data</h4>
    <pre>{{ data }}</pre>
  </section>
</template>

<script setup lang="ts">
const options = [
  { label: "Every page load", value: "refresh" },
  { label: "Ever hour", value: "hourly" },
  { label: "Every day", value: "daily" },
];

const schema = reactive([
  {
    $el: "h2",
    children: ["Register ", "$email"],
  },
  {
    $formkit: "primeInputText",
    name: "email",
    label: "Email",
    help: "This will be used for your account.",
    validation: "required|email",
  },
  {
    $formkit: "primeTextarea",
    name: "myText",
    label: "Text",
    validation: "",
    rows: "3",
  },
  //   {
  //     $formkit: "primeEditor",
  //     name: "myEditor",
  //     label: "Editor",
  //     style: "height: 160px;",
  //   },
  {
    $formkit: "primeSelect",
    if: "$get(eu).value", // 👀 Oooo, conditionals!
    name: "cookie_notice",
    label: "Cookie notice frequency",
    optionLabel: "label",
    optionValue: "value",
    options,
    help: "How often should we display a cookie notice?",
  },
]);

const data = ref({ email: "tom@sfxcode.com" });

async function submitHandler() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
</script>
