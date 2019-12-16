<template>
    <button click="onClick" class="class">
        <b-spinner v-if="isProcessing==true" style="height:20px;width:20px" label="loading..."></b-spinner>
        <slot>Button</slot>
    </button>
</template>
<script>
export default {
  name: 'custom-button',
  props: {
    onClick: {
      type: Function,
      required: true
    },
    isProcessing: {
      type: Boolean,
      required: false
    }
  }
}
</script>
