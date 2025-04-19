<script setup>
import { ref } from 'vue';
import MainButton from './MainButton.vue';

const name = ref('');
const phone = ref('');
const isSuccess = ref(false);

const sendForm = async () => {
    if(name.value.length < 1 && phone.value.length < 5){return;}

    const res = await fetch('/api/application', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        name: name.value,
        phone: phone.value
      })
  })
   if(res.ok){
	isSuccess.value = true;
	setTimeout(() => {isSuccess.value = false}, 5000)	
}
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
		v-model="name"
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
		v-model="phone"
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
	<p v-if="isSuccess" class="text-green-500 font-medium text-xl">Успешно!</p>
    </form>
  </section>
</template>
