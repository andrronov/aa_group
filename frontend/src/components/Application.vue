<script setup>
import MainButton from './MainButton.vue';

const sendForm = async () => {
    const res = await fetch("http://localhost:3000/" + 'api/application', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        name: 'Test',
        phone: '+7 999 999 99 99'
      })
  })
  console.log(res.ok);
}
</script>

<template>
  <section class="relative w-full bg-white h-[736px] flex flex-col items-center justify-center" id="application">
    <img src="/images/application.png" alt="application" class="absolute max-h-[736px] object-cover snap-center top-0 left-0 w-full h-full" />
    <form 
        class="flex flex-col items-center w-full py-10 px-8 max-w-[352px] bg-[#000000]/20 text-white z-100" 
        action="/submit-form" 
        method="POST"
    >
        <h3 class="text-xl font-bold sm:text-2xl text-center mb-8">
            Оставьте заявку прямо сейчас и получите скидку 10%
        </h3>
        <div class="flex flex-col w-full mb-6">
            <label for="name" class="text-sm font-semibold mb-1.5">Имя</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Имя" 
                class="p-2 rounded outline-none bg-white text-black" 
                required 
                aria-label="Введите ваше имя"
            />
        </div>
        <div class="flex flex-col w-full mb-[46px]">
            <label for="phone" class="text-sm font-semibold mb-1.5">Телефон</label>
            <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="+7" 
                class="p-2 rounded bg-white outline-none text-black" 
                required 
                aria-label="Введите ваш телефон"
                pattern="^\+?[0-9\s\-]+$"
            />
        </div>
        <MainButton @click.prevent="sendForm()" class="w-1/2" aria-label="Отправить заявку">
            Отправить
        </MainButton>
    </form>
  </section>
</template>