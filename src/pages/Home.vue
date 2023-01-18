<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { MenuIcon, XIcon, SpeakerphoneIcon } from '@heroicons/vue/outline';
import AudioPlayer from '../components/base/Player.vue';
import { CheckIcon, MinusIcon } from '@heroicons/vue/solid';
import VueWriter from 'vue-writer';
import { defineComponent, onMounted, ref, h } from 'vue';

const tiers = [
  {
    name: 'Voice response',
    href: 'mailto:hans@hbvoice.nl',
    price: 50,
    description: 'Quis suspendisse ut fermentum neque vivamus non tellus.'
  },
  {
    name: 'Radio commercial',
    href: 'mailto:hans@hbvoice.nl',
    price: 150,
    description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.'
  },
  {
    name: 'Video productie',
    href: 'mailto:hans@hbvoice.nl',
    price: 150,
    description: 'Bedrijfsfilms etc.'
  },
  {
    name: 'TV commercial',
    href: 'mailto:hans@hbvoice.nl',
    price: 250,
    description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.'
  }
];

const sections = [
  {
    name: 'Eigenschappen',
    features: [
      {
        name: 'Commercieel gebruik',
        tiers: {
          'Voice response': true,
          'Radio commercial': true,
          'Video productie': true,
          'TV commercial': true
        }
      },
      {
        name: 'Gratis retakes (zonder tekstwijziging)',
        tiers: {
          'Voice response': '1x',
          'Radio commercial': '1x',
          'Video productie': '1x',
          'TV commercial': '2x'
        }
      },
      {
        name: 'Buy out',
        tiers: {
          'Voice response': false,
          'Radio commercial': '1 jaar',
          'Video productie': '1 jaar',
          'TV commercial': '1 jaar'
        }
      }
    ]
  }
];

const scrollToDemos = () => {
  document.getElementById('demos').scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <div class="pb-[64px]">
    <div class="bg-white fixed bottom-0 left-0 right-0 z-20 shadow-2xl dark:bg-slate-800">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-white dark:bg-slate-900">
              <SpeakerphoneIcon class="h-6 w-6 text-orange-500" aria-hidden="true" />
            </span>
            <p class="ml-3 font-medium text-orange-500 dark:text-white truncate">
              <span class="md:hidden">30% kennismakingskorting op de eerste opdracht</span>
              <span class="hidden md:inline">
                Maak tot 1 juni 2023 gebruik van 30% kennismakingskorting op de eerste opdracht
              </span>
            </p>
          </div>
          <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="mailto:hans@hbvoice.nl"
              class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600"
            >
              Neem contact op
            </a>
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3 hidden">
            <button
              type="button"
              class="-mr-1 flex p-2 rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span class="sr-only">Verberg</span>
              <XIcon class="h-6 w-6 text-orange-500" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <header class="relative overflow-hidden bg-white dark:bg-slate-800">
      <div class="max-w-7xl mx-auto">
        <div
          class="relative z-10 pb-8 bg-white dark:bg-slate-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-slate-800 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav class="relative flex items-center sm:h-10 justify-start" aria-label="Global">
              <div class="flex items-center flex-grow flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span class="sr-only">HB Voice</span>
                    <img
                      class="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg"
                    />
                  </a>
                </div>
              </div>
              <h1 href="#" class="text-orange-500 text-2xl ml-3 select-none font-bold">HB Voice</h1>
            </nav>
          </div>

          <main
            class="mt-10 lg:py-20 lg:mb-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h1
                class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
              >
                <span class="block">Uw professionele</span>
                {{ ' ' }}
                <VueWriter
                  :array="['voice-over', 'stemacteur']"
                  :typeSpeed="100"
                  :eraseSpeed="50"
                  :delay="2000"
                  class="block text-orange-500"
                />
              </h1>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 dark:text-gray-300"
              >
                Bedrijfsvideo, commercial, documentaire of animatie: u vraagt, ik spreek.
              </p>
              <div class="mt-5 sm:mt-8 flex sm:justify-center lg:justify-start">
                <div class="w-full lg:w-auto">
                  <a
                    href="mailto:hans@hbvoice.nl"
                    class="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-xl text-white bg-orange-500 hover:bg-orange-600 md:py-3 md:text-lg md:px-10"
                  >
                    Contact
                  </a>
                </div>
                <div class="mt-0 ml-3 lg:pr-10">
                  <a
                    @click="scrollToDemos"
                    class="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-xl text-orange-700 bg-orange-100 hover:bg-orange-200 md:py-3 md:text-lg md:px-10 cursor-pointer dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:text-white"
                  >
                    Demo's
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <!-- <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://media.discordapp.net/attachments/600450283423662082/1064956777503920218/C383FF19-41BB-40BD-A7BB-3E42E0C979B4_1_201_a_3.webp"
          alt=""
        /> -->
        <!-- <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full object-bottom"
          src="https://media.discordapp.net/attachments/600450283423662082/1064944199985790986/photo-1590602847861-f357a9332bbc_2.webp"
          alt=""
        /> -->
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full shadow-lg hidden lg:block"
          src="../assets/images/cut.webp"
          alt=""
        />
      </div>
    </header>

    <br class="hidden lg:block" />
    <br class="hidden lg:block" />
    <br />

    <section class="max-w-7xl mx-auto px-6 py-7 lg:px-8 select-none" id="demos">
      <h1 class="text-5xl mb-5 text-center font-bold text-gray-900 dark:text-white">Demo's</h1>

      <div class="md:grid grid-cols-12 gap-4">
        <div class="bg-white dark:bg-slate-800 col-span-6 py-4 rounded-xl mb-4 md:mb-0">
          <AudioPlayer
            class="overflow-hidden"
            url="../../assets/demo/Voice-Demo-2022-Commercials-Narratief.mp3"
            playerId="demo1"
          />
          <h2 class="text-3xl mt-1 ml-5 text-left font-bold text-gray-600 dark:text-white">
            Commercials 2022
          </h2>
        </div>
        <div class="bg-white dark:bg-slate-800 col-span-6 py-4 rounded-xl">
          <AudioPlayer
            class="overflow-hidden"
            url="../../assets/demo/Voice-Demo-2021-Commercials-Narratief.mp3"
            playerId="demo2"
          />
          <h2 class="text-3xl mt-1 ml-5 text-left font-bold text-gray-600 dark:text-white">
            Commercials 2021
          </h2>
        </div>
      </div>
    </section>

    <br />
    <br />
    <br />
    <br />

    <!-- About Hans Section -->
    <section class="relative" aria-labelledby="join-heading">
      <div class="hidden absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:block" aria-hidden="true" />
      <div class="max-w-7xl mx-auto bg-orange-500 lg:bg-transparent lg:px-8">
        <div class="lg:grid lg:grid-cols-12">
          <div
            class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-3 lg:py-16 lg:bg-transparent -top-10 lg:top-0"
          >
            <div class="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden" aria-hidden="true" />
            <div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <!-- src="https://media.discordapp.net/attachments/600450283423662082/1064954386851315823/913943F2-2254-4FC8-87C6-0A1651031ED9_1_201_a.jpeg" -->
                <img
                  class="object-cover object-center rounded-3xl shadow-2xl"
                  src="../assets/images/gray.webp"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            class="relative bg-orange-500 lg:col-start-2 lg:row-start-1 lg:col-span-11 lg:rounded-3xl lg:grid lg:grid-cols-11 lg:items-center"
          >
            <div
              class="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
              aria-hidden="true"
            >
              <svg
                class="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-orange-300"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
              <svg
                class="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-orange-300"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
            </div>
            <div
              class="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6 -top-10 lg:top-0"
            >
              <h2 class="text-3xl font-extrabold text-white" id="join-heading">
                Ontmoet de stem van Hans
              </h2>
              <p class="text-lg text-white">
                Als consultant, trainer, spreker, zanger en acteur is mijn stem al meer dan 30 jaar
                mijn belangrijkste instrument. <br /><br />
                Met mijn rustige, warme bariton lever ik vertrouwen en verbeelding, maar ook
                over-the-top hard-sell behoort tot mijn repertoire. <br /><br />Luister de demo’s en
                fragmenten en oordeel zelf.
              </p>
              <a
                class="block w-full px-6 py-2 text-center bg-white border border-transparent rounded-xl shadow-md text-base font-medium text-orange-600 hover:bg-blue-gray-50 sm:inline-block sm:w-auto cursor-pointer"
                @click="scrollToDemos"
                >Luister demo's</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <br />
    <br />
    <br />
    <br />
    <br />

    <!-- Pricing -->
    <!-- <div class="max-w-7xl mx-auto py-16 sm:py-24 sm:px-6 lg:px-8"> -->
    <h1 class="text-5xl mb-5 text-center font-bold text-gray-900 dark:text-white">Tarieven 2023</h1>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-10 bg-white dark:bg-slate-800 rounded-2xl">
      <!-- xs to lg -->
      <div class="max-w-2xl mx-auto space-y-16 lg:hidden">
        <section v-for="(tier, tierIdx) in tiers" :key="tier.name">
          <div class="px-4 mb-8">
            <h2 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              {{ tier.name }}
            </h2>
            <p class="mt-4">
              <span class="text-4xl font-extrabold text-gray-900 dark:text-white"
                >€{{ tier.price }}</span
              >
              {{ ' ' }}
              <span class="text-base font-medium text-gray-500 dark:text-gray-100">ex btw</span>
            </p>
            <p class="mt-4 text-sm text-gray-500 dark:text-gray-100">{{ tier.description }}</p>
            <!-- <a
              :href="tier.href"
              class="mt-6 block border border-gray-800 rounded-md bg-gray-800 w-full py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
              >Koop {{ tier.name.toLowerCase() }}</a
            > -->
          </div>

          <table v-for="section in sections" :key="section.name" class="w-full">
            <caption
              class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left dark:bg-slate-700 dark:border-slate-900 dark:text-white"
            >
              {{
                section.name
              }}
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-slate-900">
              <tr
                v-for="feature in section.features"
                :key="feature.name"
                class="border-t border-gray-200 dark:border-slate-900"
              >
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left dark:text-gray-100"
                  scope="row"
                >
                  {{ feature.name }}
                </th>
                <td class="py-5 pr-4">
                  <span
                    v-if="typeof feature.tiers[tier.name] === 'string'"
                    class="block text-sm text-gray-700 text-right dark:text-white"
                    >{{ feature.tiers[tier.name] }}</span
                  >
                  <template v-else>
                    <CheckIcon
                      v-if="feature.tiers[tier.name] === true"
                      class="ml-auto h-5 w-5 text-green-500"
                      aria-hidden="true"
                    />
                    <MinusIcon v-else class="ml-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span class="sr-only">{{
                      feature.tiers[tier.name] === true ? 'Yes' : 'No'
                    }}</span>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- <div
            :class="[
              tierIdx < tiers.length - 1 ? 'py-5 border-b' : 'pt-5',
              'border-t border-gray-200 px-4'
            ]"
          >
            <a
              :href="tier.href"
              class="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
              >Koop {{ tier.name.toLowerCase() }}</a
            >
          </div> -->
        </section>
      </div>

      <!-- lg+ -->
      <div class="hidden lg:block">
        <table class="w-full h-px table-fixed">
          <caption class="sr-only">
            Tarvieven 2023
          </caption>
          <thead>
            <tr>
              <th class="pb-4 px-6 text-sm font-medium text-gray-900 text-left" scope="col">
                <!-- <span class="sr-only">Tarieven per</span>
                <span>Tarieven</span> -->
              </th>
              <th
                v-for="tier in tiers"
                :key="tier.name"
                class="w-1/5 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 dark:text-white text-left"
                scope="col"
              >
                {{ tier.name }}
              </th>
            </tr>
          </thead>
          <tbody
            class="border-t border-gray-200 divide-y divide-gray-200 dark:border-slate-900 dark:divide-slate-900"
          >
            <tr>
              <th
                class="py-8 px-6 text-sm font-medium text-gray-900 dark:text-white text-left align-top"
                scope="row"
              >
                Prijs vanaf
              </th>
              <td v-for="tier in tiers" :key="tier.name" class="h-full py-8 px-6 align-top">
                <div class="relative h-full table">
                  <p>
                    <span class="text-4xl font-extrabold text-gray-900 dark:text-white"
                      >€{{ tier.price }}</span
                    >
                    {{ ' ' }}
                    <span class="text-base font-medium text-gray-500 dark:text-gray-100"
                      >ex btw</span
                    >
                  </p>
                  <p class="mt-4 text-sm text-gray-500 dark:text-gray-100">
                    {{ tier.description }}
                  </p>
                  <!-- <p class="mt-4 mb-16 text-sm text-gray-500">{{ tier.description }}</p>
                  <a
                    :href="tier.href"
                    class="absolute bottom-0 flex-grow block w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                    >Koop {{ tier.name.toLowerCase() }}</a
                  > -->
                </div>
              </td>
            </tr>
            <template v-for="section in sections" :key="section.name">
              <!-- <tr>
                <th
                  class="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left"
                  colspan="4"
                  scope="colgroup"
                >
                  {{ section.name }}
                </th>
              </tr> -->
              <tr v-for="feature in section.features" :key="feature.name">
                <th
                  class="py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-100 text-left"
                  scope="row"
                >
                  {{ feature.name }}
                </th>
                <td v-for="tier in tiers" :key="tier.name" class="py-5 px-6">
                  <span
                    v-if="typeof feature.tiers[tier.name] === 'string'"
                    class="block text-sm text-gray-700 dark:text-white"
                    >{{ feature.tiers[tier.name] }}</span
                  >
                  <template v-else>
                    <CheckIcon
                      v-if="feature.tiers[tier.name] === true"
                      class="h-5 w-5 text-green-500"
                      aria-hidden="true"
                    />
                    <MinusIcon
                      v-else
                      class="h-5 w-5 text-gray-400 dark:text-gray-100"
                      aria-hidden="true"
                    />
                    <span class="sr-only"
                      >{{ feature.tiers[tier.name] === true ? 'Included' : 'Not included' }} in
                      {{ tier.name }}</span
                    >
                  </template>
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr class="border-t border-gray-200 dark:border-slate-900">
              <th class="sr-only" scope="row">Choose your plan</th>
              <td v-for="tier in tiers" :key="tier.name" class="pt-5 px-6">
                <a
                  :href="tier.href"
                  class="block w-full bg-orange-500 border border-orange-500 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-orange-600"
                  >Meer info</a
                >
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <br />
    <br />
    <br />
    <br />

    <div
      class="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
    >
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        <span class="block">Gratis kennismakingsdemo?</span>
        <span class="block text-orange-500">Neem vrijblijvend contact op</span>
      </h2>

      <div class="w-full lg:w-auto">
        <a
          href="mailto:hans@hbvoice.nl"
          class="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-xl text-white bg-orange-500 hover:bg-orange-600 md:py-3 md:text-lg md:px-10"
        >
          Contact
        </a>
      </div>
    </div>

    <br />
    <br />
    <br />
    <br />

    <footer class="bg-white dark:bg-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-5 lg:px-8">
        <div class="flex justify-center md:justify-between flex-wrap-reverse">
          <div class="mt-12 md:mt-5">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">contact</h3>
              <ul role="list" class="mt-4 space-y-1">
                <li class="text-base text-gray-500 dark:text-gray-100">Hans Bolten</li>
                <li>
                  <a
                    href="mailto:hans@hbvoice.nl"
                    class="text-base text-orange-500 hover:text-orange-600"
                  >
                    hans@hbvoice.nl
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+31683831006"
                    class="text-base text-orange-500 hover:text-orange-600"
                  >
                    06 8383 1006
                  </a>
                </li>
                <li class="text-base text-gray-500 dark:text-gray-100">KVK: xxxxxxxx</li>
                <li class="text-base text-gray-500 dark:text-gray-100">IBAN: NL57ASNB0778032868</li>
              </ul>
            </div>
          </div>

          <img
            class="w-[20rem] h-auto object-contain"
            src="../assets/images/StemacterenCertified.png"
            alt="Stemacteren.nl Certified"
          />
        </div>
        <div class="mt-12 border-t border-gray-200 pt-8">
          <p class="text-base text-gray-400 text-center">
            &copy; 2021-2023 Hans Bolten. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
::-moz-selection {
  color: #fff;
  background: #e87b35;
}

::selection {
  color: #fff;
  background: #e87b35;
}
</style>
