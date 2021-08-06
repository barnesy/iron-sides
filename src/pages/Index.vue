<template>
  <Directory>
    <template #header>
      <h1>Index Directory</h1>
    </template>

    <Card>
      Jim says...a
      <template v-slot:second-slot>
       <h1>and kewl</h1>
      </template>
    </Card>

    <Split class="flip">
      <template #header>
        <h2>This is a title</h2>
      </template>

      <template #image>
        left stuff
      </template>

      right stuff

    </Split>

    <template #related>
      THIS IS RELATED
    </template>
  </Directory>
</template>
