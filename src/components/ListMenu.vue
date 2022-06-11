<template>
  <li class="list-group-item">{{ title }}</li>
  <li class="list-group-item" v-for="(item, i) in items" :key="i">
  <router-link :to="item.link">{{ item.title }}</router-link> </li>
  <br>
</template>

<script setup>
const props = defineProps({
    title: String,
    items: String
});
</script>
