<template>
  <section
    class="bg-green-300 dark:bg-gray-800 p-10 rounded-xl flex flex-col gap-8 w-full max-w-3xl"
  >
    <h1 class="text-xl text-black dark:text-white font-bold text-center">
      PRIMEVUE EXAMPLE (no FormKit)
    </h1>
    <div>Input: <InputText placeholder="PrimeVue" /></div>
    <div>
      Editor:
      <Editor v-model="editorValue" editorStyle="height: 320px" />
    </div>
    <div>Textarea:<Textarea v-model="textareaValue" rows="5" cols="30" /></div>
    <div>
      Select:
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Select a City"
        class="w-full md:w-56"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const textareaValue = ref("");
const editorValue = ref("");

const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
</script>
