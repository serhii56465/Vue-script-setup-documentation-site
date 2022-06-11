<script setup>
  import TheHeader from './components/TheHeader.vue'
  import TheSidebar from './components/TheSidebar.vue'
</script>

<template>
  <TheHeader/>
  <div class="row">
      <div class="col-3 px-1 bg-white position-fixed" id="sticky-sidebar">
          <div class="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
              <TheSidebar/>
          </div>
      </div>
      <div class="col-9 offset-3 mt-3" id="main">
      <router-view></router-view>
      </div>
  </div>
</template>
