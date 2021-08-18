<template>
  <Directory>

    <PageHeader align="left" bgcolor="#B3EEFF">

      <template>Another Directory</template>
      <template #support>And supporting copy goes in the support slot.</template>
      <template #call-to-action>
          <Button url="https://www.callrail.com/">Call To Action</Button>
      </template>

    </PageHeader>

    <PageSection align="left">

      <template #header>This H2 adds some context to this grouping.</template>

      <template #support>And can have some shorter supporting copy, couple lines. And can have some shorter supporting copy, couple lines. And can have some shorter supporting copy, couple lines. </template>

    </PageSection>

    <Split>
      <template #image>
        <img src="http://www.placekitten.com/360/200?image=16" />
      </template>

      <h2>This H2 adds some context to this grouping.</h2>
      <p>And can have some shorter supporting copy, couple lines.</p>
    </Split>

    <Split class="flip">
      <template #image>
        <img src="http://www.placekitten.com/360/200?image=16" />
      </template>

      <h2>This H2 adds some context to this grouping.</h2>
      <p>And can have some shorter supporting copy, couple lines.</p>
    </Split>

    <CardGroup>

      <Card/>
      <Card/>
      <Card/>

    </CardGroup>

  </Directory>
</template>
