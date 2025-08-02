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
    <Panel header="Solstice ☀️" toggleable>
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
    <Panel header="Climbing Movement Analysis App 🧗" toggleable>
      <div class="flex flex-col w-full gap-4">
        <ContentParagraph>
          A React Native mobile application utilising Tensorflow's pose detection models to detect
          and analyse climber movement.
        </ContentParagraph>
        <Button
          as="a"
          disabled
          label="View code"
          href="https://github.com/kristian4res/climbing-movement-analysis-app"
          rel="noopener"
          icon="pi pi-github"
        />
      </div>
    </Panel>
    <Panel header="Tickethund 🐶" toggleable>
      <div class="flex flex-col w-full gap-4">
        <ContentParagraph>
          A modern, scalable ticket marketplace based on a microservices architecture. It introduced
          me to key system design concepts and industry-standard software patterns that are utilised
          in microservices.
        </ContentParagraph>
        <Button
          as="a"
          disabled
          label="View code"
          href="https://github.com/kristian4res/tickethund-project"
          rel="noopener"
          icon="pi pi-github"
        />
      </div>
    </Panel>
    <Panel header="Regalia 👑" toggleable>
      <div class="flex flex-col w-full gap-4">
        <ContentParagraph>
          This is a mock clothing e-commerce application, it is being developed using React (and
          Scss) for the user interface, Redux for state management, Firebase for the backend
          infrastructure and the Stripe API for handling mock payments.
        </ContentParagraph>
        <Button
          as="a"
          disabled
          label="View code"
          href="https://github.com/kristian4res/regalia"
          rel="noopener"
          icon="pi pi-github"
        />
      </div>
    </Panel>
    <Panel header="Parcel Delivery Module 📦" toggleable>
      <div class="flex flex-col w-full gap-4">
        <ContentParagraph>
          Created as part of a university module on large enterprise systems, I developed a
          microservices module, parcel-delivery-module, that handles and manages the delivery of
          parcels for a fictional shoe company.
        </ContentParagraph>
        <Button
          as="a"
          label="View code"
          href="https://github.com/kristian4res/parcel-delivery-module"
          target="_blank"
          rel="noopener"
          icon="pi pi-github"
        />
      </div>
    </Panel>
    <Panel header="Noteworthy 📕" toggleable>
      <div class="flex flex-col w-full gap-4">
        <ContentParagraph>
          One of the very first web development projects that I worked on, Noteworthy is a Kanban
          board application for managing your projects and tasks. The application implements a few
          project management principles, like Deep Work board by Cal Newport and the popular
          Eisenhower Matrix.
        </ContentParagraph>
        <Button
          as="a"
          label="View code"
          href="https://github.com/kristian4res/noteworthy-io"
          target="_blank"
          rel="noopener"
          icon="pi pi-github"
        />
      </div>
    </Panel>
    <Panel header="Kore 📷" toggleable>
      <div class="flex flex-col w-full gap-4">
        <ContentParagraph>
          Kore is a digital visual diary. It is currently in development...🚧
        </ContentParagraph>
        <Button as="a" disabled label="Coming soon" href="#" rel="noopener" icon="pi pi-github" />
      </div>
    </Panel>
    <Panel header="Kapsule 🧢" toggleable>
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
