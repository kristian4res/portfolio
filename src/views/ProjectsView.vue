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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ContentParagraph>
        <Button as="a" disabled label="Coming soon" href="#" rel="noopener" icon="pi pi-github" />
      </div>
    </Panel>
    <Panel header="Kapsule" toggleable>
      <div class="flex flex-col w-full gap-4">
        <ContentParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ContentParagraph>
        <Button as="a" disabled label="Coming soon" href="#" rel="noopener" icon="pi pi-github" />
      </div>
    </Panel>
  </div>
</template>
