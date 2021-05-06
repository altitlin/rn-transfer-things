import { loadAsync } from 'expo-font'

const loadFonts = async () => {
  await loadAsync({
    'roboto-regular': require('../../assets/fonts/Roboto-Regular.ttf'),
  })
}

export const loadApplication = async () => {
  await loadFonts()
}
