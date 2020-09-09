<template>
  <div
    :class="[
      light ? 'bg-whiteColor' : 'bg-darkBlueColor',
      light ? 'text-darkBlueColor' : 'text-whiteColor',
      'shadow-md',
      'tablets:px-20',
      'desktops:px-0',
    ]"
  >
    <div
      class="container flex items-baseline justify-between mx-auto px-5 py-10"
    >
      <router-link
        to="/"
        tag="h5"
        class="phones:text-4xl text-2xl font-extrabold"
      >
        Where in the world?
      </router-link>

      <button
        @click="switchMode"
        type="button"
        :class="[
          light ? 'hover:bg-whiteColor' : 'hover:bg-darkBlueColor',
          'text-xl',
          'phones:text-2xl',
          'font-semibold',
          'inline-flex',
          'items-center',
          'focus:outline-none',
          'focus:border-darkBlueColor',
        ]"
      >
        <svg
          v-if="light"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 mr-3"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-j</title>
          <path
            d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z"
            style="fill:#fff;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
          />
        </svg>

        <svg
          v-else
          class="h-6 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-q</title>
          <line
            x1="256"
            y1="48"
            x2="256"
            y2="96"
            style="fill:none;stroke:#FCD440;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
          />
          <line
            x1="256"
            y1="416"
            x2="256"
            y2="464"
            style="fill:none;stroke:#FCD440;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
          />
          <line
            x1="403.08"
            y1="108.92"
            x2="369.14"
            y2="142.86"
            style="fill:none;stroke:#FCD440;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
          />
          <line
            x1="142.86"
            y1="369.14"
            x2="108.92"
            y2="403.08"
            style="fill:none;stroke:#FCD440;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
          />
          <line
            x1="464"
            y1="256"
            x2="416"
            y2="256"
            style="fill:none;stroke:#FCD440;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
          />
          <line
            x1="96"
            y1="256"
            x2="48"
            y2="256"
            style="fill:none;stroke:#FCD440;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
          />
          <line
            x1="403.08"
            y1="403.08"
            x2="369.14"
            y2="369.14"
            style="fill:none;stroke:#FCD440;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
          />
          <line
            x1="142.86"
            y1="142.86"
            x2="108.92"
            y2="108.92"
            style="fill:none;stroke:#FCD440;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
          />
          <circle
            cx="256"
            cy="256"
            r="80"
            style="fill:none;stroke:#FCD440;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
          />
        </svg>
        <span>{{ modeText }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSectionComponent",
  data() {
    return {
      light: true,
      modeText: "Dark Mode",
    };
  },
  methods: {
    switchMode() {
      if (this.light) {
        this.modeText = "Light Mode";
        this.light = false;
      } else {
        this.light = true;
        this.modeText = "Dark Mode";
      }
      this.$emit("currentMode", this.light);
    },
  },
};
</script>

<style lang="scss" scoped></style>
