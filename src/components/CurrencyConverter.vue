<template>
  <div>
    <transition name="fade-toast">
      <div v-if="showToast" class="fixed top-4 right-4 z-50">
        <div
          class="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
          role="alert"
          tabindex="-1"
          aria-labelledby="hs-toast-normal-example-label"
        >
          <div class="flex p-4">
            <div class="shrink-0">
              <svg
                class="shrink-0 size-4 text-blue-500 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                ></path>
              </svg>
            </div>
            <div class="ms-3">
              <p
                id="hs-toast-normal-example-label"
                class="text-sm text-gray-700 dark:text-neutral-400"
              >
                Hang tight! The graph is loading and may take a few seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade-toast">
      <div
        v-if="waitToLoad"
        class="fixed right-4 z-50"
        :class="[showToast ? 'top-[91px]' : 'top-4']"
      >
        <div
          class="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
          role="alert"
          tabindex="-1"
          aria-labelledby="hs-toast-normal-example-label"
        >
          <div class="flex p-4">
            <div class="shrink-0">
              <svg
                class="shrink-0 size-4 text-red-500 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                ></path>
              </svg>
            </div>
            <div class="ms-3">
              <p
                id="hs-toast-normal-example-label"
                class="text-sm text-gray-700 dark:text-neutral-400"
              >
                Hang tight! The Graph is still loading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <div class="flex items-center justify-center min-h-screen">
      <div class="flex flex-col w-[70%]">
        <div class="flex items-center mb-4 w-full">
          <div class="flex flex-col">
            <div class="flex items-center">
              <img
                src="/currency.png"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
              />
              <div
                class="text-[2.5rem] font-bold ml-3"
                :class="{ 'text-white': !mode }"
              >
                CurrencyConverter
              </div>
            </div>
            <div class="text-gray-400">
              Stay ahead with real-time exchange rates and make confident
              currency <br />conversions whenever and wherever you need them.
            </div>
          </div>
          <div
            class="inline-flex items-center px-4 py-1 border border-gray-300 rounded-full text-sm font-medium ml-auto"
            :class="[!mode ? 'text-white' : 'text-gray-700']"
          >
            <span class="relative flex size-2 mr-2">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex size-2 rounded-full bg-[#9DE331]"
              ></span>
            </span>
            API USAGE
          </div>
        </div>
        <div
          class="rounded-xl py-[100px] px-5 border"
          :class="[
            !mode
              ? 'bg-gray-950/50 border-gray-500'
              : 'bg-gray-50 border-gray-300',
          ]"
        >
          <div class="grid grid-cols-2 gap-8">
            <div
              class="rounded-xl shadow-lg p-4"
              :class="[
                !mode ? 'bg-gray-950/50 border  border-gray-500' : 'bg-white',
              ]"
            >
              <div class="w-full h-[300px]">
                <div
                  v-if="isLoading"
                  class="flex items-center justify-center h-full"
                >
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#9DE331]"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>

                <div v-else class="w-full h-[300px]">
                  <Line
                    v-if="chartData"
                    :data="chartData"
                    :options="chartOptions"
                  />
                </div>
              </div>
            </div>
            <div
              class="rounded-xl shadow-lg p-4"
              :class="[
                !mode ? 'bg-gray-950/50 border  border-gray-500' : 'bg-white',
              ]"
            >
              <div class="text-gray-400 mb-3">
                1 {{ baseCurrency.code }} =
                {{ parseFloat(Object.values(exchange)[0]).toFixed(3) }}
                {{ baseExchangeCurrency.code }}
              </div>
              <div class="w-full relative">
                <div
                  @click="toggleDropdown"
                  ref="dropdown"
                  class="p-3 custom-curve"
                  :class="[
                    !mode ? 'bg-gray-950/50 dark-mode-curve' : 'bg-gray-50',
                  ]"
                >
                  <div
                    class="custom-curve2 p-3 h-full bg-white flex items-center"
                    :class="{ 'dark-mode-curve': !mode }"
                  >
                    <div
                      class="flex items-center cursor-pointer w-[65%] z-[50]"
                    >
                      <img
                        class="flag"
                        :src="`https://flagcdn.com/h60/${baseCurrency.imageCode}.png`"
                        width="16"
                        height="16"
                        loading="lazy"
                        decoding="async"
                        :class="['currency-box', { 'move-down': isSwitching }]"
                      />
                      <div
                        class="mx-3 text-l font-semibold"
                        :class="[
                          'currency-box',
                          { 'move-down': isSwitching, 'text-white': !mode },
                        ]"
                      >
                        {{ baseCurrency.code }} - {{ baseCurrency.name }}
                      </div>
                      <font-awesome-icon
                        :icon="['fas', isOpen ? 'xmark' : 'chevron-down']"
                        :class="[!mode ? 'text-white' : 'text-gray-400']"
                        class="cursor-pointer ml-auto z-[50]"
                      />
                    </div>
                    <div
                      class="w-[35%] z-[50] border-l border-gray-200 ml-5 pl-5 flex items-center"
                      :class="['currency-box', { 'move-down': isSwitching }]"
                    >
                      <span class="mr-2 text-[#9DE331]">{{
                        getSymbolCurrency(baseCurrency.code)
                      }}</span>
                      <input
                        @click.stop
                        type="number"
                        min="0"
                        placeholder="0.00"
                        v-model="baseCurrency.amount"
                        :class="{ 'dark-mode-curve number-form': !mode }"
                        @input="onInput1"
                      />
                    </div>
                  </div>
                </div>
                <div
                  v-if="isOpen"
                  class="origin-top-right absolute left-0 -mt-4 w-[65%] rounded-md shadow-lg bg-white ring-opacity-5 z-[9999]"
                  :class="
                    { 'dark-mode-curve': !mode },
                    [!mode ? 'ring-1 ring-gray-500' : 'ring-1 ring-black']
                  "
                >
                  <div class="p-2 border-b border-gray-200">
                    <input
                      @click.stop
                      type="text"
                      v-model="searchQuery"
                      placeholder="Search E.g. USD"
                      class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none"
                      :class="[
                        !mode
                          ? 'border-gray-500 placeholder-gray-400 focus:border-none ring-gray-500 focus:ring text-white'
                          : 'focus:ring focus:border-none',
                      ]"
                    />
                  </div>
                  <div class="py-1 max-h-48 overflow-y-auto">
                    <a
                      href="#"
                      v-for="country in filteredCountries"
                      @click="onChangeCurrency(country, 'base')"
                      class="block px-4 py-2 text-sm"
                      :class="[
                        !mode
                          ? 'hover:bg-gray-500 text-white'
                          : 'text-gray-700 hover:bg-gray-100',
                      ]"
                    >
                      <div class="flex items-center">
                        <img
                          class="flag-sm mr-3"
                          :src="`https://flagcdn.com/h60/${getImage(
                            country.code
                          )}.png`"
                          width="12"
                          height="12"
                          loading="lazy"
                          decoding="async"
                        />
                        {{ country.name }}
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-center">
                <div
                  @click="onSwitch"
                  class="rounded-full w-[50px] h-[50px] bg-[#9DE331] cursor-pointer z-[50] -mt-[18px] flex items-center justify-center"
                >
                  <i class="fa-solid fa-arrows-up-down"></i>
                </div>
              </div>
              <div class="w-full relative">
                <div
                  @click="toggleDropdown2"
                  ref="dropdown2"
                  class="p-3 custom-curve-bottom"
                  :class="[
                    !mode ? 'bg-gray-950/50 dark-mode-curve' : 'bg-gray-50',
                  ]"
                >
                  <div
                    class="custom-curve2-bottom bg-white p-3 h-full flex items-center"
                    :class="{ 'dark-mode-curve': !mode }"
                  >
                    <div
                      class="flex items-center cursor-pointer w-[65%] z-[50]"
                    >
                      <img
                        class="flag"
                        :src="`https://flagcdn.com/h60/${baseExchangeCurrency.imageCode}.png`"
                        width="16"
                        height="16"
                        loading="lazy"
                        decoding="async"
                        :class="['currency-box', { 'move-up': isSwitching }]"
                      />
                      <div
                        class="mx-3 text-l font-semibold"
                        :class="[
                          'currency-box',
                          { 'move-up': isSwitching, 'text-white': !mode },
                        ]"
                      >
                        {{ baseExchangeCurrency.code }} -
                        {{ baseExchangeCurrency.name }}
                      </div>
                      <font-awesome-icon
                        :icon="['fas', isOpen2 ? 'xmark' : 'chevron-down']"
                        :class="[!mode ? 'text-white' : 'text-gray-400']"
                        class="cursor-pointer ml-auto z-[50]"
                      />
                    </div>
                    <div
                      class="w-[35%] z-[50] border-l border-gray-200 ml-5 pl-5 flex items-center"
                      :class="['currency-box', { 'move-up': isSwitching }]"
                    >
                      <span class="mr-2 text-[#9DE331]">{{
                        getSymbolCurrency(baseExchangeCurrency.code)
                      }}</span>
                      <input
                        @click.stop
                        type="number"
                        min="0"
                        placeholder="0.00"
                        v-model="baseExchangeCurrency.amount"
                        :class="{ 'dark-mode-curve number-form': !mode }"
                        @input="onInput2"
                      />
                    </div>
                  </div>
                </div>
                <div
                  v-if="isOpen2"
                  class="origin-top-right absolute left-0 -mt-4 w-[65%] rounded-md shadow-lg bg-white ring-opacity-5 z-[9999]"
                  :class="
                    { 'dark-mode-curve': !mode },
                    [!mode ? 'ring-1 ring-gray-500' : 'ring-1 ring-black']
                  "
                >
                  <div class="p-2 border-b border-gray-200">
                    <input
                      @click.stop
                      type="text"
                      v-model="searchQuery"
                      placeholder="Search E.g. USD"
                      class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none"
                      :class="[
                        !mode
                          ? 'border-gray-500 placeholder-gray-400 focus:border-none ring-gray-500 focus:ring text-white'
                          : 'focus:ring focus:border-none',
                      ]"
                    />
                  </div>
                  <div class="py-1 max-h-48 overflow-y-auto">
                    <a
                      href="#"
                      v-for="country in filteredCountries"
                      @click="onChangeCurrency(country, 'exchange')"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      :class="[
                        !mode
                          ? 'hover:bg-gray-500 text-white'
                          : 'text-gray-700 hover:bg-gray-100',
                      ]"
                    >
                      <div class="flex items-center">
                        <img
                          class="flag-sm mr-3"
                          :src="`https://flagcdn.com/h60/${getImage(
                            country.code
                          )}.png`"
                          width="12"
                          height="12"
                          loading="lazy"
                          decoding="async"
                        />
                        {{ country.name }}
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <!-- <button class="flex mt-4 cursor-pointer items-center justify-center w-full px-6 py-3 rounded-xl bg-[#9DE331] text-black font-semibold shadow-md">
            <spa class="mr-2">Convert</spa>
            <i class="fa-solid fa-arrows-rotate"></i>
          </button> -->
            </div>
          </div>
        </div>
        <div class="flex mt-4">
          <div class="flex flex-col">
            <div class="flex items-center mb-2">
              <p class="text-gray-400">Built by</p>
              <a class="mx-1" href="https://google.com" target="_blank"
                ><span class="underline text-gray-400">Christian Uyeh </span
                ><i
                  class="fa-solid fa-arrow-up-right-from-square ml-1 text-gray-400"
                ></i
              ></a>
            </div>
            <div class="flex flex-col">
              <p class="text-gray-400">Powered by :</p>
              <a href="https://freecurrencyapi.com" target="_blank"
                ><span class="underline text-gray-400">Freecurrencyapi </span
                ><i
                  class="fa-solid fa-arrow-up-right-from-square ml-1 text-gray-400"
                ></i
              ></a>
              <a href="https://flagpedia.net" target="_blank"
                ><span class="underline text-gray-400">Flagpedia </span
                ><i
                  class="fa-solid fa-arrow-up-right-from-square ml-1 text-gray-400"
                ></i
              ></a>
            </div>
          </div>
          <div class="ml-auto">
            <div class="flex items-center">
              <p class="text-gray-400">Theme: {{ mode ? "Light" : "Dark" }}</p>
              <!-- <div class="w-2 h-[40px] w-[40px] border border-gray-300 rounded-full ml-2 flex items-center justify-center"></div> -->

              <div>
                <div class="pretty p-switch bigger-switch ml-3 relative">
                  <input v-model="mode" type="checkbox" id="themeSwitch" />
                  <div class="state">
                    <label
                      class="flex items-center justify-between w-full h-full"
                    >
                      <!-- The sun and moon icons inside the switch -->
                      <i
                        class="fa-regular fa-sun fa-2xs mr-2 text-[#9DE331]"
                      ></i>
                      <i class="fa-regular fa-moon fa-2xs text-[#bdc3c7]"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Line } from "vue-chartjs";
import "pretty-checkbox";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { nextTick } from "vue";

// Register Chart.js modules
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);
export default {
  props: {},
  components: {
    Line,
  },
  data() {
    return {
      showToast: true,
      apiKey: "fca_live_1nmW2JU7NmYnoJVvkXGs9Kc8j96BecwDuzDZH3Gf",
      countries: [],
      isOpen: false,
      isOpen2: false,
      searchQuery: "",

      baseCurrency: {
        code: "USD",
        name: "US Dollar",
        imageCode: "us",
        amount: 0,
      },
      baseExchangeCurrency: {
        code: "MYR",
        name: " Malaysian Ringgit",
        imageCode: "my",
        amount: 0,
      },
      exchange: {},
      chartData: null,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: new Date().getFullYear(),
            },
          },
          y: {
            title: {
              display: true,
              text: "Exchange Rate",
            },
            beginAtZero: false,
          },
        },
      },
      isLoading: true,
      isSwitching: false,
      isFirstLoad: false,
      waitToLoad: false,
      waitToLoad2: false,
      mode: true,
    };
  },
  computed: {
    filteredCountries() {
      const query = this.searchQuery.toLowerCase();
      return this.countries.filter((country) =>
        country.name.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    async getAllCurrency() {
      try {
        const response = await axios.get(
          `https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_1nmW2JU7NmYnoJVvkXGs9Kc8j96BecwDuzDZH3Gf`
        );
        const countriesArray = Object.entries(response.data.data).map(
          ([key, value]) => ({
            key,
            ...value,
          })
        );
        this.countries = countriesArray;
      } catch (err) {
        console.log(err);
      }
    },
    async exchangeCurrency() {
      this.isFirstLoad = false;
      try {
        const response = await axios.get(
          `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_1nmW2JU7NmYnoJVvkXGs9Kc8j96BecwDuzDZH3Gf&currencies=${this.baseExchangeCurrency.code}&base_currency=${this.baseCurrency.code}`
        );
        this.exchange = response.data.data;
        this.isFirstLoad = true;
        setTimeout(() => {
          this.fetchLast30DaysRates();
        }, 3000);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchLast30DaysRates() {
      this.isLoading = true;
      this.showToast = true;
      this.waitToLoad2 = true;

      const today = new Date();
      today.setDate(today.getDate() - 1);
      const apiKey = "fca_live_1nmW2JU7NmYnoJVvkXGs9Kc8j96BecwDuzDZH3Gf";
      const baseUrl = "https://api.freecurrencyapi.com/v1/historical";
      const targetCurrency = this.baseExchangeCurrency.code;
      const results = [];

      for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(today.getDate() - i);
        const formattedDate = date.toISOString().split("T")[0];
        const url = `${baseUrl}?apikey=${apiKey}&date=${formattedDate}&base_currency=${this.baseCurrency.code}&currencies=${targetCurrency}`;

        let success = false;
        let attempts = 0;

        while (!success && attempts < 3) {
          try {
            const res = await axios.get(url);
            const rateData = res.data.data;
            const rate = rateData[formattedDate]?.[targetCurrency];

            if (rate !== undefined && rate !== null) {
              results.push({
                date: formattedDate,
                rate: rate,
              });
            }

            success = true;
          } catch (error) {
            attempts++;
            console.error(
              `Error fetching ${formattedDate} (attempt ${attempts}):`,
              error.message
            );

            // Wait longer before retrying
            await new Promise((resolve) => setTimeout(resolve, 2000));
          }
        }

        // Wait 1 second between each API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // After fetching all, prepare chart
      const sortedResults = results.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      this.chartData = {
        labels: sortedResults.map((item) => {
          const date = new Date(item.date);
          return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });
        }),
        datasets: [
          {
            label: `${this.baseCurrency.code} to ${targetCurrency}`,
            data: sortedResults.map((item) => item.rate),
            borderColor: "#9DE331",
            backgroundColor: "#ecf9d7",
            fill: false,
            tension: 0.3,
            pointRadius: 2,
          },
        ],
      };

      this.isLoading = false;
      this.showToast = false;
      this.waitToLoad = false;
      this.waitToLoad2 = false;
    },

    onChangeCurrency(country, check) {
      if (!this.waitToLoad && !this.waitToLoad2) {
        this.waitToLoad2 = true;
        if (check == "base") {
          this.baseCurrency.code = country.code;
          this.baseCurrency.name = country.name;
          this.baseCurrency.imageCode = this.getImage(country.code);
        } else {
          this.baseExchangeCurrency.code = country.code;
          this.baseExchangeCurrency.name = country.name;
          this.baseExchangeCurrency.imageCode = this.getImage(country.code);
        }
        setTimeout(() => {
          this.isLoading = true;
          this.exchangeCurrency();
          this.onInput1();
          this.onInput2();
        }, 3000);
      } else {
        this.waitToLoad = true;
        setTimeout(() => {
          this.waitToLoad = false;
        }, 2000);
      }
    },
    getImage(image) {
      let code = "";
      switch (image) {
        case "EUR":
          code = "eu";
          break;
        case "USD":
          code = "us";
          break;
        case "JPY":
          code = "jp";
          break;
        case "BGN":
          code = "bg";
          break;
        case "CZK":
          code = "cz";
          break;
        case "DKK":
          code = "dk";
          break;
        case "GBP":
          code = "gb";
          break;
        case "HUF":
          code = "hu";
          break;
        case "PLN":
          code = "pl";
          break;
        case "RON":
          code = "ro";
          break;
        case "SEK":
          code = "se";
          break;
        case "CHF":
          code = "ch";
          break;
        case "ISK":
          code = "is";
          break;
        case "NOK":
          code = "no";
          break;
        case "HRK":
          code = "hr";
          break;
        case "RUB":
          code = "ru";
          break;
        case "TRY":
          code = "tr";
          break;
        case "AUD":
          code = "au";
          break;
        case "BRL":
          code = "br";
          break;
        case "CAD":
          code = "ca";
          break;
        case "CNY":
          code = "cn";
          break;
        case "HKD":
          code = "hk";
          break;
        case "IDR":
          code = "id";
          break;
        case "ILS":
          code = "il";
          break;
        case "INR":
          code = "in";
          break;
        case "KRW":
          code = "kr";
          break;
        case "MXN":
          code = "mx";
          break;
        case "MYR":
          code = "my";
          break;
        case "NZD":
          code = "nz";
          break;
        case "PHP":
          code = "ph";
          break;
        case "SGD":
          code = "sg";
          break;
        case "THB":
          code = "th";
          break;
        case "ZAR":
          code = "za";
          break;
        default:
          code = image;
      }
      return code;
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      this.searchQuery = "";
    },
    toggleDropdown2() {
      this.isOpen2 = !this.isOpen2;
      this.searchQuery = "";
    },
    handleClickOutside(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.isOpen = false;
      }
      if (!this.$refs.dropdown2.contains(event.target)) {
        this.isOpen2 = false;
      }
    },
    onSwitch() {
      if (!this.showToast) {
        this.isSwitching = true;
        const cloneBaseCurrency = Object.assign({}, this.baseCurrency);
        const cloneBaseExchangeCurrency = Object.assign(
          {},
          this.baseExchangeCurrency
        );
        this.baseCurrency = cloneBaseExchangeCurrency;
        this.baseExchangeCurrency = cloneBaseCurrency;
        this.fetchLast30DaysRates();

        this.isSwitching = false;
        this.waitToLoad = false;
      } else {
        this.waitToLoad = true;
        setTimeout(() => {
          this.waitToLoad = false;
        }, 2000);
      }
    },

    getSymbolCurrency(code) {
      const country = this.countries.find((c) => c.code === code);
      return country ? country.symbol : "";
    },

    getCurrencyFirstLoad() {
      setTimeout(() => {
        this.baseCurrency.amount = 1;
        this.baseExchangeCurrency.amount = Object.values(
          this.exchange
        )[0]?.toFixed(2);
      }, 300);
    },
    onInput1() {
      // Clear any previous timeout
      clearTimeout(this.baseExchangeCurrency.amount);

      // Set a new timeout
      this.typingTimeout = setTimeout(() => {
        const exchange = Object.values(this.exchange)[0] || 0;
        const amount = this.baseCurrency.amount * exchange;
        this.baseExchangeCurrency.amount = amount.toFixed(2);
      }, 1000); // 1000ms = 1 second after last typing
    },

    onInput2() {
      // Clear any previous timeout
      clearTimeout(this.baseCurrency.amount);

      // Set a new timeout
      this.typingTimeout = setTimeout(() => {
        const exchange = Object.values(this.exchange)[0] || 0;
        const amount = this.baseExchangeCurrency.amount / exchange;
        this.baseCurrency.amount = amount.toFixed(2);
      }, 1000); // 1000ms = 1 second after last typing
    },
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  mounted() {
    this.getAllCurrency();
    this.exchangeCurrency();
    this.getCurrencyFirstLoad();
    //  this.fetchLast30DaysRates();
    document.addEventListener("click", this.handleClickOutside);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      this.mode = false;
      document.documentElement.classList.add("dark-mode-curve");
    } else {
      this.mode = true;
      document.documentElement.classList.remove("dark-mode-curve");
    }
  },
  watch: {
    mode(newVal) {
      if (!newVal) {
        document.body.classList.add("bg-gray-950");
        document.documentElement.classList.add("dark-mode-curve");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark-mode-curve");
        localStorage.setItem("theme", "light");
        document.body.classList.remove("bg-gray-950");
      }
    },
  },
};
</script>
