<template>
  <Directory>
    <template #header>
      <h1>Index Directory</h1>
    </template>

    <GridRow>
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
    </GridRow>

    <Card>
      <template #image><img src = "http://www.placekitten.com/360/200?image=16" /></template>
      <template #category>Category</template>
      <template #card-title>Card Title</template>
      <template>To be the first to enter the cosmos, to engage, single-handed, in an unprecedented duel with nature—could one dream of anything more?</template>
      <template #card-link><a href = "#">Exploration at its greatest.</a></template>
    </Card>


    <CardGroup>
      <Card>
        <template #image><img src = "http://www.placekitten.com/360/200?image=4" /></template>
        <template #category>Category</template>
        <template #card-title>Card Title</template>
        <template>To be the first to enter the cosmos, to engage, single-handed, in an unprecedented duel with nature—could one dream of anything more?</template>
        <template #card-link><a href = "#">Exploration at its greatest.</a></template>
      </Card>

      <Card>
        <template #image></template>
        <template #category></template>
        <template #card-title></template>
        <template></template>
        <template #card-link></template>
      </Card>

      <Card>
        <template #image><img src = "http://www.placekitten.com/360/200?image=2" /></template>
        <template #category>Category</template>
        <template #card-title>Card Title</template>
        <template>To be the first to enter the cosmos, to engage, single-handed, in an unprecedented duel with nature—could one dream of anything more?</template>
        <template #card-link><a href = "#">Exploration at its greatest.</a></template>
      </Card>
    </CardGroup>


    <Split class="flip">
      <template #header>
        <h2>This is a title</h2>
      </template>

      <template #image>
        Image
      </template>

      right stuff

    </Split>

    <Table>
      <template #head>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </template>

      <td>A</td>
      <td>B</td>
      <td>C</td>
    </Table>

  </Directory>
</template>
