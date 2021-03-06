import isEmpty from 'lodash/isEmpty'
import kebabCase from 'lodash/kebabCase'

import { getAuthorForUsername } from './utils'

export const formatAuthor = username => {
  const author = getAuthorForUsername(username)
  author.hasGithub = !isEmpty(author.github)
  author.hasTwitter = !isEmpty(author.twitter)
  author.hasAvatar = !isEmpty(author.avatar)
  author.hasWebsite = !isEmpty(author.website)

  author.twitterUrl = `https://twitter.com/${author.twitter}`
  author.githubUrl = `https://github.com/${author.github}`

  author.url = `/authors/${kebabCase(username)}`

  return author
}
