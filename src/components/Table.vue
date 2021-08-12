<template>
  <table>

    <thead>
      <tr>
        <slot name="head"/>
      </tr>
    </thead>

    <tbody>
      <slot />
    </tbody>

    <tfoot>
      <tr>
        <slot name="foot"/>
      </tr>
    </tfoot>

    </slot>

  </table>
</template>
