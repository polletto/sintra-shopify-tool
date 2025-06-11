import { ref, watchEffect } from 'vue'

const isDark = ref(localStorage.getItem('theme') === 'dark')

watchEffect(() => {
    const root = document.documentElement
    if (isDark.value) {
        root.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        root.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
})

export function useDarkMode() {
    return {
        isDark,
        toggle: () => (isDark.value = !isDark.value),
    }
}