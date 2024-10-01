export const endpoints = {
  keyGenerator: {
    getRandomKey: (size = 18) => {
      return `${
        import.meta.env.VITE_KEY_GENERATOR_API
      }/api/v1/key-generator/random-key?size=${size}`
    },
  },
}
