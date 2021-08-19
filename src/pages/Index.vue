<template>
  <Directory>
    <Notification />

    <PageHeader align="left" bgcolor="#B3EEFF">

      <template>Headline goes in unnamed slot</template>
      <template #support>And supporting copy goes in the support slot.</template>
      <template #call-to-action>
          <Button url="https://www.callrail.com/">Call To Action</Button>
      </template>

    </PageHeader>

    <PageSection align="center">

      <template>This H2 adds some context to this grouping.</template>
      <template #support>And can have some shorter supporting copy, couple lines. </template>

      <template #1>
        <Video videoID="WUvTyaaNkzM" />
      </template>

    </PageSection>

    <GridRow>
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
    </GridRow>

    <Card>
      <template #image>
        <img src="http://www.placekitten.com/360/200?image=16" />
      </template>

      <template #category>Category</template>
      <template #card-title>Card Title</template>

      <template #card-link><a href="#">Exploration at its greatest.</a></template>

      To be the first to enter the cosmos, to engage, single-handed, in an unprecedented duel with nature—could one dream of anything more?
    </Card>


    <CardGroup>
      <Card>

        <template #image>
          <img src="http://www.placekitten.com/360/200?image=4" />
        </template>

        <template #category>Category</template>
        <template #card-title>Card Title</template>

        <template #card-link>
          <a href="#">Exploration at its greatest.</a>
        </template>

        To be the first to enter the cosmos, to engage, single-handed, in an unprecedented duel with nature—could one dream of anything more?
      </Card>

      <Card>
        <template #image></template>
        <template #category></template>
        <template #card-title></template>
        <template #card-link></template>
      </Card>

      <Card>
        <template #image>
          <img src="http://www.placekitten.com/360/200?image=2" />
        </template>

        <template #category>Category</template>
        <template #card-title>Card Title</template>

        <template #card-link>
          <a href="#">Exploration at its greatest.</a>
        </template>

        To be the first to enter the cosmos, to engage, single-handed, in an unprecedented duel with nature—could one dream of anything more?
      </Card>
    </CardGroup>

    <Video videoID="WUvTyaaNkzM" />

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

  <style lang="scss">
    @font-face {
      font-family: BerninaSans-Light;
      src: url('../assets/fonts/BerninaSans/BerninaSans-Light.otf');
      font-weight: normal;
    }
  </style>
