import upperFirst from 'lodash.upperfirst'
import { PinionContext, renderTemplate, toFile } from '@featherscloud/pinion'

interface Context extends PinionContext {
  name: string
}

export function licenseTemplate() {
  return `Creative Commons (CC) ${new Date().getFullYear()}`
}

// A template for a markdown Doc file
const author = ({ name }: Context) => {
  return `# Hello ${upperFirst(name)}

This is a doc generated by Me

${licenseTemplate()}
`
}

export const generate = (init: Context) => {
  return Promise.resolve(init)
    .then((context) => {
      return {
        ...context,
        name: 'Fer'
      }
    })
    // Render the readme template
    .then(renderTemplate(author, toFile('docs/author.md')))
}