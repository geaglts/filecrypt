const keyGeneratorUrl = import.meta.env.VITE_KEY_GENERATOR_API

export const endpoints = {
  keyGenerator: {
    getRandomKey: (size = 18) => {
      return `${keyGeneratorUrl}/api/v1/key-generator/random-key?size=${size}`
    },
  },
  fileshare: {
    createFile: () => {
      return `${keyGeneratorUrl}/api/v2/fileshare/generate-link`
    },
  },
}
