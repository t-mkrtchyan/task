<template>
  <div>
    <!-- page-wrapper Start-->
    <div class="page-wrapper" id="canvas-bookmark">
      <!-- Page Header Start-->
      <div class="page-main-header" :class="{ open:toggle_sidebar_var }">
        <div class="main-header-right row">
          <div class="mobile-sidebar">
            <div class="media-body text-right switch-sm">
              <label class="switch" v-on:click="toggle_sidebar"><feather type="align-justify"></feather></label>
            </div>
          </div>
          <div class="main-header-left">
            <div class="logo-wrapper mt-1 ml-3" style="font-size: 20px">
              <router-link :to="{ name: 'default'}" >L O G O</router-link>
            </div>
          </div>
          <div class="nav-right col">
            <ul class="nav-menus" :class="{ open: mobile_toggle }"></ul>
          </div>
          <div class="main-header-right-icons">
            <i class="fa fa-adjust"></i>
<!--              <b-dropdown text="" menu-class="dropdown-content" variant="primary" >-->
<!--                <b-dropdown-item>Action</b-dropdown-item>-->
<!--                <b-dropdown-item>Another Action</b-dropdown-item>-->
<!--                <b-dropdown-item>Something Else Here</b-dropdown-item>-->
<!--              </b-dropdown>-->
          </div>
        </div>
      </div>
  <!-- Page Header Ends -->
    </div>
  </div>
</template>
<script>
var body = document.getElementsByTagName("body")[0];
import { mapState } from "vuex";

export default {
  name: 'Search',
  data() {
    return {
      terms: '',
      searchResult: false,
      searchResultEmpty: false,
      toggle_sidebar_var:false,
      clicked:false,
      mobile_toggle:false,
      mobile_search: false,
    }
  },
  computed: {
    ...mapState({
      menuItems: state => state.menu.searchData
    })
  },
  methods: {
    searchTerm: function() {
      this.$store.dispatch('menu/searchTerm', this.terms)
    },
    addFix() {
      body.classList.add("offcanvas")
      this.searchResult = true;
    },
    removeFix() {
      body.classList.remove("offcanvas")
      this.searchResult = false;
      this.terms = ''
    },
    toggle_sidebar(){
      this.toggle_sidebar_var = !this.toggle_sidebar_var,
      this.clicked = !this.toggle_sidebar_var,
      this.$emit('clicked',this.clicked)
    },
    toggle_fullscreen() {
      if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    }
  },
  watch: {
    menuItems: function () {    
      this.terms ? this.addFix() : this.removeFix();
      if(!this.menuItems.length)
        this.searchResultEmpty = true;
      else
        this.searchResultEmpty = false;
    }
  }
}
</script>
<style lang="scss">
  .main-header-left {
    a {
      color: #fff;
    }
  }
  .main-header-right-icons {
    i {
      color: #fff;
      font-size: 25px;
    }
  }
</style>
