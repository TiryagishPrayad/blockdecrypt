import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'q4yl0dzi',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk2BNHTLvXeid7cxCxLIE7bphMTJVlRpZdQUzNK8Z50350MT6ZniyiAbu1SDZosI8O8n7HN2ToKN4sYUcUMm6h7Ah5zojv2reiyzEoZcDscSShliRBb9JWI8zyYc2n51uANtFtKXLV9wikZG9ZQZD1jZpB9QCLp43apobFEKNIkZ9sgdMJz5',
  useCdn: false,
})
