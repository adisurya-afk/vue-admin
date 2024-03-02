import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Admin Gusdek'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
