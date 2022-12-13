export default function Admin() {
  if (typeof window !== 'undefined') window.location.href = '/cms/admin/login'

  return null
}
