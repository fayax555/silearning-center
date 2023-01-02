export default function Admin() {
  if (typeof window === 'undefined') return null

  const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL
  if (process.env.NODE_ENV === 'development' && directusUrl)
    return (window.location.href = directusUrl + '/admin/login')

  window.location.href = '/cms/admin/login'
}
