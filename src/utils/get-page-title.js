import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Dashboard Admin Sidoraya'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
