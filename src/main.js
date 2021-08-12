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
import Test from '~/components/Test.vue'


export default function (Vue, { router, head, isClient }) {

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
  Vue.component('Test', Test)
}
