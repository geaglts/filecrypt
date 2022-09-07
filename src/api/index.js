export const endpoints = {
  keyGenerator: {
    getRandomKey: (size = 18) => {
      return `https://key-generator.up.railway.app/api/v1/key-generator/random-key?size=${size}`
    },
  },
}
