import * as path from "path";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module", "@formkit/nuxt"],

  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: false,
  },

  primevue: {
    autoImport: false,
    options: { unstyled: true },
    importPT: {
      from: path.resolve(__dirname, "./assets/primevueThemes/bm/"),
    },
    components: {
      include: ["InputText", "Select", "Editor", "Textarea", "Panel"],
    },
  },

  compatibilityDate: "2024-09-18",
});
