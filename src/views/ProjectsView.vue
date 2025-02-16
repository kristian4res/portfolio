<script setup lang="ts">
import { Panel, Button } from 'primevue'
import ContentParagraph from '@/components/ContentParagraph.vue'
import PageSection from '@/components/PageSection.vue'
</script>

<template>
  <PageSection heading="Projects">
    <ContentParagraph>
      Here are some of the projects that I've worked on in the past. Feel free to check them out and
      let me know what you think!
    </ContentParagraph>
  </PageSection>
  <div class="grid gap-4">
    <Panel header="Solstice" toggleable>
      <div class="flex flex-col w-full gap-4">
        <ContentParagraph>
          Solstice is a mock online travel booking platform, built using React (via CRA),
          React-Router, TailwindCSS and Firebase. Solstice was built as part of a course module,
          User Centred Web Development, which covered the importance of user experience and
          accessibility when designing a product. The development of this application followed the
          principles of Design Sprints, a methodology used to quickly validate ideas and solve
          challenges.
        </ContentParagraph>
        <Button
          as="a"
          label="View code"
          href="https://github.com/kristian4res/ucwd-solstice"
          target="_blank"
          rel="noopener"
          icon="pi pi-github"
        />
      </div>
    </Panel>
    <Panel header="Parcel Delivery Module" toggleable>
      <div class="flex flex-col w-full gap-4">
        <ContentParagraph>
          Created as part of a university module on large enterprise systems, I developed a
          microservices module that handles and manages the delivery of parcels for a fictional shoe
          company.
        </ContentParagraph>
        <Button
          as="a"
          label="View code"
          href="https://github.com/kristian4res/ucwd-solstice"
          target="_blank"
          rel="noopener"
          icon="pi pi-github"
        />
      </div>
    </Panel>
    <Panel header="Kore" toggleable>
      <div class="flex flex-col w-full gap-4">
        <ContentParagraph>
          Kore is a digital visual diary. It is currently in development...🚧
        </ContentParagraph>
        <Button as="a" disabled label="Coming soon" href="#" rel="noopener" icon="pi pi-github" />
      </div>
    </Panel>
    <Panel header="Kapsule" toggleable>
      <div class="flex flex-col w-full gap-4">
        <ContentParagraph>
          Kapsule is a physical manifestation of the "capsule wardrope" but as an application that
          is easy to use and access. It is currently in development...🚧
        </ContentParagraph>
        <Button as="a" disabled label="Coming soon" href="#" rel="noopener" icon="pi pi-github" />
      </div>
    </Panel>
  </div>
</template>
