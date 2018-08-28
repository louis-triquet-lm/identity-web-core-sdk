import * as v from 'validation.ts'


export const apiClientConfig = v.object({
  clientId: v.string,
  domain: v.string,
  sso: v.boolean,
  language: v.optional(v.string)
})

export type ApiClientConfig = typeof apiClientConfig.T