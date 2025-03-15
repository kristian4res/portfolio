<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import PageSection from '@/components/PageSection.vue'
import ContentParagraph from '@/components/ContentParagraph.vue'
import { Button } from 'primevue'
</script>

<template>
  <PageSection heading="About">
    <ContentParagraph>
      Hi there! My name is <b>Kristian, a software engineer</b> currently based in the United
      Kingdom. I'm currently working full time as a <b>DevSecOps engineer</b> within a
      cross-functional team for the <b>Office for National Statistics (ONS)</b>, the recognised
      national statistical institue of the UK.<br /><br />As an <b>inquisitive person</b>, I often
      spend my free time learning about new tech through personal projects and online courses to
      further hone my skills and knowledge. Aside from tech, I'm an avid fan of martial arts,
      running and games.
    </ContentParagraph>
  </PageSection>
  <PageSection heading="Featured">
    <ContentParagraph> Recent highlights of my journey as a software engineer. </ContentParagraph>
    <div class="flex gap-4 p-2 my-2 overflow-x-auto">
      <PostCard
        class="w-full lg:w-3/4"
        coverImageAlt="Bullseye darts on a dart board"
        coverImage="https://images.unsplash.com/photo-1629721671030-a83edbb11211?q=80&w=3376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        postTitle="A big milestone to cap of 2024"
        buttonLink="https://www.linkedin.com/posts/kristian4res_associate-cloud-engineer-certification-was-activity-7280002842029961216-DqgX?utm_source=share&utm_medium=member_desktop"
      >
        I passed the GCP Associate Cloud Engineer certification exam at the end of 2024, which was
        another big milestone next to graduating university.
      </PostCard>
      <PostCard
        class="w-full lg:w-3/4"
        coverImageAlt="A table with a laptop, notebook, and a cup of coffee"
        coverImage="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        postTitle="How to pass the GCP Associate Cloud Engineer certification exam in a month"
        buttonLink="https://a-developers-journal.hashnode.dev/how-to-pass-the-gcp-associate-cloud-engineer-certification-exam-in-a-month"
      >
        In December 2024, I studied and passed the GCP Associate Cloud Engineer certification exam.
        This is a step-by-step guide on how I did it.
      </PostCard>
    </div>
  </PageSection>
  <PageSection heading="Contact">
    <ContentParagraph>
      If you'd like to get in touch with me, feel free to reach out to me via my LinkedIn or my
      blog. I'm always open to new challenges and opportunities!
    </ContentParagraph>
    <div class="flex flex-col gap-4 mt-4">
      <div class="flex justify-evenly gap-4 xl:justify-start">
        <Button
          as="a"
          label="LinkedIn"
          href="https://www.linkedin.com/in/kristian4res/"
          target="_blank"
          rel="noopener"
          icon="pi pi-linkedin"
        />
        <Button
          as="a"
          label="GitHub"
          href="https://www.github.com/kristian4res/"
          target="_blank"
          rel="noopener"
          icon="pi pi-github"
        />
        <Button
          as="a"
          label="Blog"
          href="https://a-developers-journal.hashnode.dev/?source=top_nav_blog_home"
          target="_blank"
          rel="noopener"
          icon="pi pi-book"
        />
      </div>
    </div>
  </PageSection>
</template>
