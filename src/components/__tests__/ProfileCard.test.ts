import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ProfileCard from '../ProfileCard.vue'

describe('ProfileCard.vue', () => {
  it('matches snapshot', () => {
    const wrapper = mount(ProfileCard, {
      props: {
        title: 'Kristian Torres',
      },
      slots: {
        default: 'A software engineer that strives to do his best! :)',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
