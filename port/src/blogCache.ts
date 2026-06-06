import { API_URL } from './api'

// Holds the in-flight (or finished) fetch of all blog posts.
// We start this as soon as the app loads so the backend is already awake
// and the data is ready by the time someone opens the Blog page.
let blogsPromise: Promise<any[]> | null = null

// Start the fetch if it hasn't started yet, otherwise reuse the existing one.
export function prefetchBlogs(): Promise<any[]> {
    if (!blogsPromise) {
        blogsPromise = fetch(`${API_URL}/api/Blog`)
            .then(res => (res.ok ? res.json() : []))
            .catch(() => [])
    }
    return blogsPromise
}

// Forget the cached posts so the next visit fetches fresh data.
// Call this after creating, editing, or deleting a post.
export function refreshBlogs() {
    blogsPromise = null
}
