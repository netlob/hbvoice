<template>
  <div class="min-h-full pt-16 pb-12 flex flex-col">
    <main
      class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div class="flex-shrink-0 flex justify-center">
        <router-link to="/" class="inline-flex">
          <span class="sr-only">Saaf</span>
          <img
            class="h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=orange&shade=500"
            alt=""
          />
        </router-link>
      </div>
      <div class="py-16">
        <div class="text-center">
          <p class="text-sm font-semibold text-orange-500 uppercase tracking-wide">404 error</p>
          <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Pagina niet gevonden
          </h1>
          <p class="mt-2 text-base text-gray-500">
            Helaas konden we de pagina die je probeerd te bezoeken niet vinden.
          </p>
          <div class="mt-6">
            <router-link to="/" class="text-base font-medium text-orange-500 hover:text-orange-600"
              >Ga naar de homepagina<span aria-hidden="true"> &rarr;</span>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
