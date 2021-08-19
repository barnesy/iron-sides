import Directory from '~/layouts/Directory.vue'
import Leaf from '~/layouts/Leaf.vue'
import Table from '~/components/Table.vue'
import Split from '~/components/Split.vue'
import Card from '~/components/Card.vue'
import CardGroup from '~/components/CardGroup.vue'
import GridItem from '~/components/GridItem.vue'
import GridRow from '~/components/GridRow.vue'
import PageHeader from '~/components/PageHeader.vue'
import PageSection from '~/components/PageSection.vue'
import Video from '~/components/Video.vue'
import Button from '~/components/UI/Button.vue'
import Breadcrumb from '~/components/UI/Breadcrumb.vue'
import Notification from '~/components/UI/Notification.vue'
import Navigation from '~/components/UI/Navigation.vue'

import '~/assets/global.scss'

export default function (Vue, { router, head, isClient }) {

  head.link.push({
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Merriweather'},
      {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Open%20Sans'
    })

  Vue.component('Directory', Directory)
  Vue.component('Leaf', Leaf)
  Vue.component('Table', Table)
  Vue.component('Split', Split)
  Vue.component('Card', Card)
  Vue.component('CardGroup', CardGroup)
  Vue.component('GridItem', GridItem)
  Vue.component('GridRow', GridRow)
  Vue.component('PageHeader', PageHeader)
  Vue.component('PageSection', PageSection)
  Vue.component('Video', Video)
  Vue.component('Button', Button)
  Vue.component('Breadcrumb', Breadcrumb)
  Vue.component('Notification', Notification)
  Vue.component('Navigation', Navigation)
}
