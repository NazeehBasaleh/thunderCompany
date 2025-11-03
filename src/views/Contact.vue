<template>
  <section id="contact" class="hero p-5 pt-10 pb-20">
    <main class="container text-center text-white mb-10">
        <h1 class="text-white border-none section-titel">{{ t('contact.hero_title')}}</h1>
        <ul class="justify-items-center text-[14px] md:text-base lg:text-xl grid grid-cols-2 md:grid-cols-4">
          <li class="" v-for="(feature, index) in features" :key="index">
            <div class="flex gap-1">
              <img src="/src/assets/icon/CheckCircle.png" alt="" class="w-6 h-6 object-cover">
              <p>{{feature}}</p>
            </div>
          </li>
        </ul>
    </main>
    <div class="container grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-5">
      <div class="bg-[#E8EDFB] rounded-lg p-5 sm:col-span-1">
        <h2 class="titel-card">{{ t('contact.info.title')}}</h2>
        <h3 class="titel-in-card">{{ t('contact.info.address_title')}}</h3>
        <p class="text-in-card">{{ t('contact.info.main_branch')}}</p>
        <p class="text-in-card">{{ t('contact.info.aden_branch')}}</p>
        <p class="pb-4 text-in-card">{{ t('contact.info.hadramout_branch')}}</p>
        <h3 class="pb-2 titel-in-card">{{ t('contact.info.quick_contact_title')}}</h3>
        <p class="text-in-card">{{ t('contact.info.email')}}</p>
        <p class="pb-4 text-in-card">{{ t('contact.info.phone')}}</p>
        <h3 class="pb-2 titel-in-card">{{ t('contact.info.hours_title')}}</h3>
        <p class="text-in-card">{{ t('contact.info.hours_days')}}</p>
        <p class="pb-4 text-in-card">{{ t('contact.info.hours_time')}}</p>
        <h3 class="w-md- titel-in-card">{{ t('contact.info.inquiry_slogan')}}</h3>
      </div>
      <div class=" bg-[#E8EDFB] rounded-lg p-5 sm:col-span-2">
        <h2 class="titel-card">{{ t('contact.quote.title')}}</h2>
        <p class="text-in-card">{{ t('contact.quote.description')}}</p>
        <form action="#" class="mt-5 grid grid-cols-1 gap-1">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" :placeholder="t('contact.quote.fields.name')" class="p-2 bg-white rounded-lg border border-gray-50 w-full">
            <input type="email" :placeholder="t('contact.quote.fields.email')" class="p-2 bg-white rounded-lg border border-gray-50 w-full">
            <input type="text" :placeholder="t('contact.quote.fields.phone')" class="p-2 bg-white rounded-lg border border-gray-50 w-full">
            <input type="text" :placeholder="t('contact.quote.fields.subject')" class="p-2 bg-white rounded-lg border border-gray-50 w-full">
          </div>
          <textarea :placeholder="t('contact.quote.fields.message')" class="w-full bg-white p-2 rounded-lg border border-gray-50 mt-4 h-32"></textarea>
          <button type="submit" class="mt-4 bg-[#123DA5] text-white py-2 px-4 rounded-lg hover:bg-[#0B1D41] transition duration-300">{{t('contact.quote.submit_btn')}}</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
export default {
  name: 'Contact',
  setup() {
     const { t, tm } = useI18n()
      
    const features = computed(() => {
      const raw = typeof tm === 'function' ? tm('contact.features') : null
      if (Array.isArray(raw)) return raw
    })
    return {
      features,
      t
    }
  }
}
</script>

<style scoped>
.hero {
  background:linear-gradient(#0B1D41 0%, #0B1D4100 100%),url('/src/assets/img/contact.png'); 
  background-size: cover;
  background-position: center;
}

.titel-card{
  @apply pb-5 font-bold text-lg text-[#0B1D41];
}

.titel-in-card{
  @apply pb-2 font-semibold text-base text-[#123DA5];
}

.text-in-card{
  @apply text-[#404D64] text-[14px] md:text-base font-normal;
}

</style>