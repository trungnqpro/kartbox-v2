<template>
  <div class="sidebar sidebar-account">
    <div class="sidebar-body">
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <a
            v-if="item.type == 'a'"
            class="list-group-item a"
            :href="item.href"
            :event="item.disabled ? '' : 'click'"
          >
            <div class="icon-item">
              <img :src="item.icon" alt />
            </div>
            <span>{{ $t(item.title) }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
      {
          title: "Profile Setting",
          href: "/ibo",
          type: "a",
          icon: "/images/sidebar-account/icon-ico.png",
          iconActive: "/images/sidebar-account/icon-ico-active.png",
        },
        {
          title: "Wallet Address",
          href: "/ibo",
          type: "a",
          icon: "/images/sidebar-account/icon-ico.png",
          iconActive: "/images/sidebar-account/icon-ico-active.png",
        },
        {
          title: "Social Accounts",
          href: "/ibo",
          type: "a",
          icon: "/images/sidebar-account/icon-ico.png",
          iconActive: "/images/sidebar-account/icon-ico-active.png",
        },
        {
          title: "Access Token",
          href: "/ibo",
          type: "a",
          icon: "/images/sidebar-account/icon-ico.png",
          iconActive: "/images/sidebar-account/icon-ico-active.png",
        },
        {
          title: "Connected Apps",
          href: "/ibo",
          type: "a",
          icon: "/images/sidebar-account/icon-ico.png",
          iconActive: "/images/sidebar-account/icon-ico-active.png",
        },
      ],
    };
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code == this.$i18n.locale);
    },

    appendLangPrefix() {
      return this.menu.map((item) => {
        return {
          title: item.title,
          to: `${item.to}`,
          icon: item.icon,
          iconActive: item.iconActive,
          disabled: item.disabled,
          ...item,
        };
      });
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "../../assets/scss/page/account/_sidebar.scss";
</style>
