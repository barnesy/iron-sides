<template>
  <Leaf>
    <template #header>
      <h1>Index Leaf</h1>
    </template>

    <Card>
      Jim says...a
      <template v-slot:second-slot>
       <h1>and kewl</h1>
      </template>
    </Card>

    <template #related>
      THIS IS RELATED
    </template>
  </Leaf>
</template>
