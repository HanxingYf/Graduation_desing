<template>
  <div class="energy">
    能源热电
    <Select @on-change="countryChange">
      <Option
        v-for="ic in a"
        :value="ic.country_id"
        :label="ic.country_name"
        :key="`${ic.country_name} + ${ic.country_id}`"
        label-in-value:true
        >{{ ic.country_name }}</Option
      >
    </Select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: [
        {
          country_id: 86,
          country_name: "中国",
          lang_list: ["cn", "en"],
          welcome_text: null,
          recommend_text: null,
        },
        {
          country_id: 852,
          country_name: "中国香港",
          lang_list: ["cn", "en", "local"],
          welcome_text: "歡迎來到 fence_name",
          recommend_text: "為您推薦合適的上車點",
        },
        {
          country_id: 52,
          country_name: "Mexico",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Bienvenido(a) a fence_name",
          recommend_text:
            "Te sugeriremos puntos de encuentro para que elijas el mejor.",
        },
        {
          country_id: 55,
          country_name: "Brazil",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Bem-vindo(a) a fence_name",
          recommend_text: "Indicaremos as melhores opções de local de embarque",
        },
        {
          country_id: 54,
          country_name: "Argentina",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Bienvenido(a) a fence_name",
          recommend_text:
            "Te sugeriremos puntos de encuentro para que elijas el mejor.",
        },
        {
          country_id: 61,
          country_name: "Australia",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Welcome to fence_name",
          recommend_text:
            "We’ll recommend the best pickup points for you to select",
        },
        {
          country_id: 81,
          country_name: "Japan",
          lang_list: ["cn", "en", "local"],
          welcome_text: "fence_nameへようこそ",
          recommend_text: "最適な乗車地点をご案内します",
        },
        {
          country_id: 57,
          country_name: "Colombia",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Bienvenido(a) a fence_name",
          recommend_text:
            "Te sugeriremos puntos de encuentro para que elijas el mejor.",
        },
        {
          country_id: 56,
          country_name: "Chile",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Bienvenido(a) a fence_name",
          recommend_text:
            "Te sugeriremos puntos de encuentro para que elijas el mejor.",
        },
        {
          country_id: 51,
          country_name: "Peru",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Bienvenido(a) a fence_name",
          recommend_text:
            "Te sugeriremos puntos de encuentro para que elijas el mejor.",
        },
        {
          country_id: 506,
          country_name: "Costa Rica",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Bienvenido(a) a fence_name",
          recommend_text:
            "Te sugeriremos puntos de encuentro para que elijas el mejor.",
        },
        {
          country_id: 507,
          country_name: "Panama",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Bienvenido(a) a fence_name",
          recommend_text:
            "Te sugeriremos puntos de encuentro para que elijas el mejor.",
        },
        {
          country_id: 7,
          country_name: "Russia",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Добро пожаловать в fence_name",
          recommend_text: "Выберите лучшее место подачи из наших рекомендаций",
        },
        {
          country_id: 64,
          country_name: "New Zealand",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Welcome to fence_name",
          recommend_text:
            "We’ll recommend the best pickup points for you to select",
        },
        {
          country_id: 809,
          country_name: "Dominica",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Bienvenido(a) a fence_name",
          recommend_text:
            "Te sugeriremos puntos de encuentro para que elijas el mejor.",
        },
        {
          country_id: 20,
          country_name: "Egypt",
          lang_list: ["cn", "en", "local"],
          welcome_text: "fence_name اهلا بك في",
          recommend_text: "سنوصي بأفضل نقاط الالتقاء لتحدد من بينها",
        },
        {
          country_id: 44,
          country_name: "United Kingdom",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Welcome to fence_name",
          recommend_text:
            "We’ll recommend the best pickup points for you to select",
        },
        {
          country_id: 27,
          country_name: "South Africa",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Welcome to fence_name",
          recommend_text:
            "We’ll recommend the best pickup points for you to select",
        },
        {
          country_id: 593,
          country_name: "Ecuador",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Bienvenido(a) a fence_name",
          recommend_text:
            "Te sugeriremos puntos de encuentro para que elijas el mejor.",
        },
        {
          country_id: 398,
          country_name: "Kazakhstan",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Добро пожаловать в fence_name",
          recommend_text: "Выберите лучшее место подачи из наших рекомендаций",
        },
        {
          country_id: 380,
          country_name: "Ukraine",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Вітаємо в fence_name",
          recommend_text:
            "Ми порекомендуємо найкращі місця посадки на ваш вибір",
        },
        {
          country_id: 256,
          country_name: "Uganda",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Welcome to fence_name",
          recommend_text:
            "We’ll recommend the best pickup points for you to select",
        },
        {
          country_id: 234,
          country_name: "Nigeria",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Welcome to fence_name",
          recommend_text:
            "We’ll recommend the best pickup points for you to select",
        },
        {
          country_id: 255,
          country_name: "Tanzania",
          lang_list: ["cn", "en", "local"],
          welcome_text: "Welcome to fence_name",
          recommend_text:
            "We’ll recommend the best pickup points for you to select",
        },
      ],
    };
  },
  methods: {
    countryChange(item) {
      console.log(item, 'iiiii')
    },
  },
};
</script>

<style></style>
