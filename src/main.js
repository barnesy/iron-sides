import Directory from '~/layouts/Directory.vue'
import Leaf from '~/layouts/Leaf.vue'
import Split from '~/components/Split.vue'
import Card from '~/components/Card.vue'

export default function (Vue, { router, head, isClient }) {

  Vue.component('Directory', Directory)
  Vue.component('Leaf', Leaf)
  Vue.component('Split', Split)
  Vue.component('Card', Card)
}
