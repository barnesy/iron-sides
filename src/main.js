// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Card from '~/components/Card.vue'
import Group from '~/components/Group.vue'
import PageHeader from '~/components/PageHeader.vue'
import PageSection from '~/components/PageSection.vue'
import PageSubsection from '~/components/PageSubsection.vue'
import Camera from '~/components/Camera.vue'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Card', Card)
  Vue.component('Group', Group)
  Vue.component('PageHeader', PageHeader)
  Vue.component('PageSection', PageSection)
  Vue.component('PageSubsection', PageSubsection)
  Vue.component('Camera', Camera)

}
