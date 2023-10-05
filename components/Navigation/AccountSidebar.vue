<template>
  <div class="sidebar sidebar-account">
    <div class="sidebar-body">
      <ul>
        <li v-for="(item, index) in appendLangPrefix" :key="index">
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
          <n-link
            v-else
            class="list-group-item"
            :to="`/${$store.state.i18n.locale}${item.to}`"
            :event="item.disabled ? '' : 'click'"
          >
            <div class="icon-item">
              <img :src="item.icon" alt />
            </div>
            <span>{{ $t(item.title) }}</span>
          </n-link>
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
          title: "aa",
          to: "/account/account-center",
          icon: "/images/sidebar-account/icon-account.png",
          iconActive: "/images/sidebar-account/icon-account-active.png",
        },
        {
          title: "bbb",
          to: "/account/anti-phishing-code",
          icon: "/images/sidebar-account/icon-phishing-code.png",
          iconActive: "/images/sidebar-account/icon-phishing-code-active.png",
        },
        {
          title: "ccc",
          to: "/account/referral-program",
          icon: "/images/sidebar-account/icon-invitation-code.png",
          iconActive: "/images/sidebar-account/icon-invitation-code-active.png",
        },
        {
          title: "dđd",
          to: "/account/notifications",
          icon: "/images/sidebar-account/icon-notification.png",
          iconActive: "/images/sidebar-account/icon-notification-active.png",
        },
        {
          title: "account.sidebar.ieo",
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
