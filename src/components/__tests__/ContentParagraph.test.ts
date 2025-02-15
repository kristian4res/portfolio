import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ContentParagraph from '../ContentParagraph.vue'

describe('ContentParagraph.vue', () => {
  it('renders correctly and matches snapshot', () => {
    const wrapper = mount(ContentParagraph, {
      slots: {
        default: 'Hello, world! This is a test.',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
