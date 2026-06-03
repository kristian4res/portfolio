<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import PageSection from '@/components/PageSection.vue'
import ContentParagraph from '@/components/ContentParagraph.vue'
import { Button, Carousel } from 'primevue'

const carouselItems = [
  {
    id: 1,
    title: 'Tickethund 🐶',
    coverImage:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    coverImageAlt: 'Event tickets',
    content:
      'Scalable ticket marketplace built on microservices architecture. A course and project I worked on in my spare time, which introduced me to key system design concepts and industry-standard patterns.',
    buttonLink: 'https://github.com/kristian4res/tickethund-project',
  },
  {
    id: 2,
    title: 'Solstice ☀️',
    coverImage:
      'https://images.unsplash.com/photo-1590671754682-f4decfae9659?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    coverImageAlt: 'Travel booking platform interface',
    content:
      'A mock travel booking platform that I built in university using with React, React-Router, TailwindCSS and Firebase. It&#39;s not perfect, but it is designed with user experience and (some) accessibility in mind using Design Sprint methodology.',
    buttonLink: 'https://github.com/kristian4res/ucwd-solstice',
  },
  {
    id: 3,
    title: 'A big milestone to cap of 2024',
    coverImage:
      'https://images.unsplash.com/photo-1629721671030-a83edbb11211?q=80&w=3376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    coverImageAlt: 'Bullseye darts on a dart board',
    content:
      'I passed the GCP Associate Cloud Engineer certification exam at the end of 2024, which was another big milestone next to graduating university.',
    buttonLink:
      'https://www.linkedin.com/posts/kristian4res_associate-cloud-engineer-certification-was-activity-7280002842029961216-DqgX?utm_source=share&utm_medium=member_desktop',
  },
  {
    id: 4,
    title: 'How to pass the GCP Associate Cloud Engineer certification exam in a month',
    coverImage:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    coverImageAlt: 'A table with a laptop, notebook, and a cup of coffee',
    content:
      'In December 2024, I studied and passed the GCP Associate Cloud Engineer certification exam. This is a step-by-step guide on how I did it.',
    buttonLink:
      'https://a-developers-journal.hashnode.dev/how-to-pass-the-gcp-associate-cloud-engineer-certification-exam-in-a-month',
  },
  {
    id: 5,
    title: 'Climbing Movement Analysis 🧗',
    coverImage:
      'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=1244&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    coverImageAlt: 'Rock climbing',
    content:
      "React Native mobile app using TensorFlow's pose detection models to analyze climbing movements.",
    buttonLink: 'https://github.com/kristian4res/climbing-movement-analysis-app',
  },
  {
    id: 6,
    title: 'Regalia 👑',
    coverImage:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    coverImageAlt: 'Clothing store',
    content:
      'Mock e-commerce clothing application using React, Redux, Firebase, and Stripe API for payments.',
    buttonLink: 'https://github.com/kristian4res/regalia',
  },
  {
    id: 7,
    title: 'Parcel Delivery Module 📦',
    coverImage:
      'https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    coverImageAlt: 'Shipping and delivery',
    content:
      'Microservices module for managing parcel delivery for a mock large enterprise. Solely architected and developed this as part of a university group project.',
    buttonLink: 'https://github.com/kristian4res/parcel-delivery-module',
  },
  {
    id: 8,
    title: 'Noteworthy 📕',
    coverImage:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    coverImageAlt: 'Kanban board productivity',
    content:
      'Kanban board for project and task management based on the principles of Deep Work (by Cal Newport) and the Eisenhower Matrix. One of my very first open projects that introduced me to the fundamentals of programming.',
    buttonLink: 'https://github.com/kristian4res/noteworthy-io',
  },
]
</script>

<template>
  <div class="w-full overflow-x-hidden">
    <PageSection heading="Featured">
      <ContentParagraph>Some projects I've worked on throughout my journey</ContentParagraph>
      <Carousel
        :value="carouselItems"
        :numVisible="1"
        :numScroll="1"
        :circular="true"
        :showNavigators="true"
        :showIndicators="true"
        class="w-full"
        container-class="w-full"
      >
        <template #item="slotProps">
          <div class="w-full min-w-0 px-2 sm:px-4">
            <PostCard
              :key="slotProps.data.id"
              class="w-full"
              :coverImage="slotProps.data.coverImage"
              :coverImageAlt="slotProps.data.coverImageAlt"
              :postTitle="slotProps.data.title"
              :buttonLink="slotProps.data.buttonLink"
            >
              {{ slotProps.data.content }}
            </PostCard>
          </div>
        </template>
      </Carousel>
    </PageSection>
    <PageSection heading="Contact">
      <ContentParagraph>
        If you'd like to get in touch with me, feel free to reach out to me via my LinkedIn or my
        blog. I'm always open to new challenges and opportunities!
      </ContentParagraph>
      <div class="flex flex-col gap-4 mt-4">
        <div class="flex flex-col sm:flex-row justify-evenly gap-2 sm:gap-4">
          <Button
            as="a"
            label="LinkedIn"
            href="https://www.linkedin.com/in/kristian4res/"
            target="_blank"
            rel="noopener"
            icon="pi pi-linkedin"
            class="w-full sm:w-auto"
          />
          <Button
            as="a"
            label="GitHub"
            href="https://www.github.com/kristian4res/"
            target="_blank"
            rel="noopener"
            icon="pi pi-github"
            class="w-full sm:w-auto"
          />
          <Button
            as="a"
            label="Blog"
            href="https://a-developers-journal.hashnode.dev/?source=top_nav_blog_home"
            target="_blank"
            rel="noopener"
            icon="pi pi-book"
            class="w-full sm:w-auto"
          />
        </div>
      </div>
    </PageSection>
  </div>
</template>
